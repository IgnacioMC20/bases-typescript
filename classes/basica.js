"use strict";
(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.getAvgAge = function () {
            return this.avgAge;
        };
        Avenger.prototype.bio = function () {
            return "".concat(this.name, " (").concat(this.team, ")!!!");
        };
        // private name: string;
        // private team: string;
        // public realName?: string;
        Avenger.avgAge = 35;
        return Avenger;
    }());
    // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log( antman )
    // console.log( Avenger.getAvgAge() )
})();
