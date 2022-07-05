// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...

  // 60 min max duration for playlist
  maxDuration = 60;

  // sum of all the numbers in the array
  const initial = 0;

  arrDuration = arr.reduce((prev, curr) => prev + curr, initial);
  
  diffDur = arrDuration - maxDuration;


  if (arrDuration <= maxDuration) {

    return result = arr.length;

  } else {

    let largeArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < largeArr.length; i++) {
      if (largeArr.reduce((prev, curr) => prev + curr, initial) > 60) {
        largeArr.pop(arr[i]);
      };
    };
    return largeArr.length;
  };

};
