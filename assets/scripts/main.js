
// Input field for textual indicator of sound level
var volumeinput = document.getElementById("volume-number");
volumeinput.addEventListener('change', updateInput);


// big volume slider 
var volumeslider = document.getElementById("volume-slider");
volumeslider.addEventListener('change', updateSlider);


// button to play horn sound
var honkButton = document.getElementById("honk-btn");
honkButton.type = "button";
var hornSound = document.getElementById("horn-sound");


// radio that switches bw horn sounds
var hornSounds = document.getElementsByName("radio-sound");
for (var i = 0; i < hornSounds.length; i++) {
  hornSounds[i].addEventListener('click', changeHornSound);
}

// button should be disabled if volume is 0
if (hornSound.volume == 0.0) {
  honkButton.disabled = true;
}
else {
  honkButton.disabled = false;
}
honkButton.addEventListener('click', honk);


// --------------------------------Functions-------------------------------------------------------------------------------------------------------------------

// update input slider when when the input text is updated
function updateInput(e) {
  
  // update volume
  var audioLevel = document.getElementById("horn-sound");
  audioLevel.volume = e.target.valueAsNumber / 100;
  
  // update slider
  var slider = document.getElementById("volume-slider");
  slider.value = e.target.valueAsNumber;
  
  // update volume icon
  var image = document.getElementById("volume-image");
  if (audioLevel.volume >= .67){
    image.src = "assets\\media\\icons\\volume-level-3.svg";
  }
  if ((audioLevel.volume >= .34) && (audioLevel.volume < .67)) {
    image.src = "assets\\media\\icons\\volume-level-2.svg";
  }
  if ((audioLevel.volume > 0) && (audioLevel.volume < .34)) {
    image.src = "assets\\media\\icons\\volume-level-1.svg";
  }
  if (audioLevel.volume == 0.0) {
    image.src = "assets\\media\\icons\\volume-level-0.svg";
  }
}

// update textual input indicator when when the input slider is updated
function updateSlider(e) {
  
  // update volume
  var audioLevel = document.getElementById("horn-sound");
  audioLevel.volume = e.target.valueAsNumber / 100;
  
  // update textual indicator
  var input = document.getElementById("volume-number");
  input.value = e.target.valueAsNumber;
  
  // update volume icon
  var image = document.getElementById("volume-image");
  if (audioLevel.volume >= .67){
    image.src = "assets\\media\\icons\\volume-level-3.svg";
  }
  if ((audioLevel.volume >= .34) && (audioLevel.volume < .67)) {
    image.src = "assets\\media\\icons\\volume-level-2.svg";
  }
  if ((audioLevel.volume > 0) && (audioLevel.volume < .34)) {
    image.src = "assets\\media\\icons\\volume-level-1.svg";
  }
  if (audioLevel.volume == 0.0) {
    image.src = "assets\\media\\icons\\volume-level-0.svg";
  }
}

// Update horn sound and picture on changing horn sound
function changeHornSound(e) {
  var hornSound = document.getElementById("horn-sound");
  var hornPic = document.getElementById("sound-image");
  
  // air horn
  if (e.target.id == "radio-air-horn") {
    hornSound.src = "assets\\media\\audio\\air-horn.mp3";
    hornPic.src = "assets\\media\\images\\air-horn.svg";
  }

  // car horn
  if (e.target.id == "radio-car-horn") {
    hornSound.src = "assets\\media\\audio\\car-horn.mp3";
    hornPic.src = "assets\\media\\images\\car.svg";
  }

  // party horn
  if (e.target.id == "radio-party-horn") {
    hornSound.src = "assets\\media\\audio\\party-horn.mp3";
    hornPic.src = "assets\\media\\images\\party-horn.svg";
  }
}

// honk da button
function honk(e) {
  var HONKSOUND = document.getElementById("horn-sound");
  HONKSOUND.play();
}