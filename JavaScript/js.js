window.onload = function() {

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var day = 0;
    var month = 0;
    var year = 0;
    var bodyColor = document.getElementById('body');
    var arriveTime = new Date (2012, 7, 6);
    var greeting = document.getElementById('greeting');

    /* Hier worden de datums en de tijd veranderd */
    function getDateAndTime() {
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

    /* Voor het zetten van de tijd in de HMTL */
    function updateTime() {
        document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
    }
    /* Voor het zetten van de datum in de HTML */
    function updateDate() {
        document.getElementById('date').innerHTML = day + ' / ' + month + ' / ' + year;
    }

    /* Veranderen van de body achtergrond t.o.v de tijd */
    function updateBackgroundColors() {

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

    /* Veranderen van het verschil tussen het huidige moment en het landen */
    function updateTimeOnMars() {
        var timeNow = new Date();
        var difference = timeNow.getTime() - arriveTime.getTime();
        difference = difference/1000;
        document.getElementById('minutes').innerHTML = 'Minutes   ' + ((difference/60).toFixed()); 
        document.getElementById('hours').innerHTML = 'Hours   ' + ((difference/60/60).toFixed());
        document.getElementById('days').innerHTML = 'Days   ' + ((difference/60/60/24).toFixed());
        document.getElementById('month').innerHTML = 'Month   ' + ((difference/60/60/24/30).toFixed());
        document.getElementById('years').innerHTML = 'Years   ' + ((difference/60/60/24/365.25).toFixed());
    }

    /* Veranderen van de groet t.o.v de tijd */
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

    getDateAndTime();
    updateTime();
    updateDate();
    updateBackgroundColors();
    updateTimeOnMars();
    changeGreeting();

    setInterval(getDateAndTime, 1000);
    setInterval(updateTime, 1000);
    setInterval(updateDate, 1000);
    setInterval(updateBackgroundColors, 1000);
    setInterval(updateTimeOnMars, 1000);
    setInterval(changeGreeting, 1000);

    /* Bij hover de groet groter groter maken door het toevoegen van een class, wanneer de mouse weg is, wordt dat class ook verwijderd */
    document.getElementById('greeting').onmouseover = function() {
        document.getElementById('greeting').classList.add('hover');
     };
    
     document.getElementById('greeting').onmouseout = function() {
        document.getElementById('greeting').classList.remove('hover');
     };

};