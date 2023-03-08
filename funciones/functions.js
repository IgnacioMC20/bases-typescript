"use strict";
(function () {
    var hero = 'Flash';
    var returnName = function () {
        return hero;
    };
    var activateBatSignal = function () {
        return 'Batise;al activada';
    };
    console.log(typeof activateBatSignal);
    var heroName = returnName();
    console.log(heroName);
})();
