var textArea = document.querySelector("textarea");
var btn = document.querySelector("button");
var selectVoice = document.querySelector("#voice");
// var voiceRate = document.querySelector("#rate");
// var voicePitch = document.querySelector("#pitch");
// var voiceVolume = document.querySelector("#volume");
var volumeValue = document.querySelector("#volumeValue");
var pitchValue = document.querySelector("#pitchValue");
var rateValue = document.querySelector("#rateValue");

var speech = window.speechSynthesis;
var msg = new SpeechSynthesisUtterance();

var setVoices = [];

function getVoice() {
  setVoices = speech.getVoices();
  setVoices.forEach((voice) => {
    var voiceOption = document.createElement("option");

    // voiceOption.value = voice.name;
    voiceOption.innerText = `${voice.name} ${voice.lang}`;
    selectVoice.appendChild(voiceOption);
  });
}
function setText(text) {
  msg.text = text;
}
function speakText() {
  msg.pitch = pitch.value;
  msg.rate = rate.value;
  msg.volume = volume.value;
  msg.lang = "en-US";
  speech.speak(msg);
}
function setVoice(e) {
  msg.voice = setVoices.find((voice) => voice.name === e.target.value);
}
speech.addEventListener("voiceschanged", getVoice);
selectVoice.onchange = function () {
  setVoice();
};
function speakVoice() {
  setText(textArea.value);
  speakText();
}
volume.onchange = function () {
  volumeValue.textContent = volume.value;
};
rate.onchange = function () {
  rateValue.textContent = rate.value;
};
pitch.onchange = function () {
  pitchValue.textContent = pitch.value;
};

getVoice();
