"use strict";
(function () {
    var Apocalipsis = /** @class */ (function () {
        function Apocalipsis(name) {
            this.name = name;
        }
        Apocalipsis.callApocalipsis = function () {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.intance;
        };
        Apocalipsis.prototype.changeName = function (newName) {
            this.name = newName;
        };
        return Apocalipsis;
    }());
    var apocalipsis1 = Apocalipsis.callApocalipsis();
    var apocalipsis2 = Apocalipsis.callApocalipsis();
    var apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único')
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único')
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único')
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
