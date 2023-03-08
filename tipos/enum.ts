(() => {

    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }
   
    // enum AudioLevel {
    //     min,    -> 1
    //     medium, -> 2
    //     max     -> 3
    // }

  const currentAudio = AudioLevel.medium;

  console.log(currentAudio)
})()