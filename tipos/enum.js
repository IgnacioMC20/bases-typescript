"use strict";
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    // enum AudioLevel {
    //     min,    -> 1
    //     medium, -> 2
    //     max     -> 3
    // }
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
})();
