let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
speech.voice = window.speechSynthesis.getVoices()[0];
speech.rate = speech.volume = speech.pitch = 1;

document.querySelector("#speaker").addEventListener("click", () => {
  speech.text = document.querySelector(".about span").textContent   ;
  window.speechSynthesis.speak(speech);
});