window.onload = function () {

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var day = 0;
    var month = 0;
    var year = 0;
    var arriveTime = new Date (2012, 7, 6); /* De datum van de landing van Curiosity */
    var bodyColor = document.getElementById('body');
    var greeting = document.getElementById('greeting');
    
    function updateNumbers () {
        var clock = new Date();
        hours = clock.getHours();
        minutes = clock.getMinutes();
        seconds = clock.getSeconds();
        day = clock.getDate();
        month = (clock.getMonth()) + 1;
        year = clock.getFullYear();

        if (hours < 10){
            hours = '0' + hours;
        }
        if (minutes < 10){
            minutes = '0' + minutes;
        }
        if (seconds < 10){
            seconds = '0' + seconds;
        }
        
    }

    function updateClock () {
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds; 
    }

    function updateDate() {
    document.getElementById('date').innerHTML = day + ' / ' + month + ' / ' + year;
    }

    /* Het veranderen van de tijd op mars met een berekening tussen het huidige moment en het moment van de landing van Curiosity */
    /* Hier wordt elke seconde ernaar geluisterd */

    function timeOnMars () {
        var timeOnMars = new Date();
        var difference = timeOnMars.getTime() - arriveTime.getTime();
        difference = difference/1000;
        document.getElementById('seconds').innerHTML = 'Seconds   ' + (difference.toFixed()); /* Ik heb hier toFixed gebruikt om geen komma getallen te krijgen, wat onoverzichtelijk is */
        document.getElementById('minutes').innerHTML = 'Minutes    ' + ((difference/60).toFixed());
        document.getElementById('hours').innerHTML = 'Hours    ' + ((difference/60/60).toFixed());
        document.getElementById('days').innerHTML = 'Days    ' + ((difference/60/60/24).toFixed());
        document.getElementById('years').innerHTML = 'Years   ' + ((difference/60/60/24/365.25).toFixed());
    }

    /* Het veranderen van de achtergrondkleur t.o.v de hours*/
    /* Hier wordt elke seconde ernaar geluisterd */

    function changeBackgroundColor() {
        if (hours >= 0 && hours < 6 ) {
            bodyColor.style.backgroundColor = "#3F4362";
        }
        if (hours >= 6 && hours < 12 ) {
            bodyColor.style.backgroundColor = "#E3CE2F";
        }
        if (hours >= 12 && hours < 18 ) {
            bodyColor.style.backgroundColor  = "#D08D1A";
        }
        if (hours >= 18 && hours < 24 ) {
            bodyColor.style.backgroundColor  = "#596D9B";
        }
    }

    /* Het veranderen van de groet t.o.v de hours */
    /* Hier wordt elke seconde ernaar geluisterd */
    function changeGreeting() {
        if (hours >= 0 && hours < 6 ) {
            greeting.innerHTML = 'Sleeping ZzZz...';
        }
        if (hours >= 6 && hours < 12 ) {
            greeting.innerHTML = 'Good Morning!';
        }
        if (hours >= 12 && hours < 18 ) {
            greeting.innerHTML = 'Good Afternoon!';
        }
        if (hours >= 18 && hours < 24 ) {
            greeting.innerHTML = 'Good Evening!';
        }
    }


updateNumbers();
updateDate();
updateClock();
timeOnMars ();
changeBackgroundColor();
changeGreeting();

setInterval(updateNumbers, 1000);
setInterval(updateClock, 1000); 
setInterval(timeOnMars, 1000); 
setInterval(changeBackgroundColor, 1000); 
setInterval(changeGreeting, 1000); 
setInterval(updateDate, 1000);

/* Dit is de hover section voor de groet, de datum en de infromatie */
/* Er wordt een class toegevoegd wanneer de mouse over het object gaat, en wanneer de mouse weg van dat object is, verliest het object dat class*/

 document.getElementById('greeting').onmouseover = function() {
    document.getElementById('greeting').classList.add('hover');
 };

 document.getElementById('greeting').onmouseout = function() {
    document.getElementById('greeting').classList.remove('hover');
 };


 document.getElementById('text').onmouseover = function() {
    document.getElementById('text').classList.add('hover');
 };

 document.getElementById('text').onmouseout = function() {
    document.getElementById('text').classList.remove('hover');
 };
 
};


