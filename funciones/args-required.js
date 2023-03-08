"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'Martinez');
    };
    var name = fullName('tony', 'stark');
    console.log({ name: name });
})();
