//points should equal 0
//game to start if space bar is pressed, space also pauses game
//ENTER resets game
//a note C4 is played as a reference when the space bar is pressed and wait one second after c note is played
//randomize all notes C4-C5 in an array, starting with one, and 2 secs before the next
//if when a C4 or C5 play, and the purple button is clicked, then increase score by 1
    //if C4 or C5 play and the red button is clicked, the decrease score by 1

//if when all other notes are playing and red button is clicked, the increase score by 1
    //if all other notes are playing and purple button is clicked, the decrease score by 1

//if -10 is reached, switch happy face, to sad face, and reset the game back to smiley face and a score of 0
//if 10 is reached, stay at happy face, give congrats, and reset the game back to 0

//come back to actual code,
/*$(document).ready(function(){
  $("#purple-circle").click(function() {
    $("#C4").play("/C4.wav");
  });
});
*/

//simulate notes as text below

$(document).ready(function(){
  var notes = ["C4", "C5", "D4", "E4", "F4", "G4", "A4", "B4"];

  $("#purple-circle").click(function(){
    alert("Note C4 is playing, this is your reference!");

    const randomNote = function () {
      for (i=0; i<notes.length; i++) {
        alert(notescr);
      }
    };
  });






});
