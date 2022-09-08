document.addEventListener(
  "DOMContentLoaded",
  () => {
    document.addEventListener("keypress", playAudio, false);

    function playAudio(event) {
      let buttonPressed =
        document.querySelector(`div[data-code="${event.keyCode}"]`) ||
        document.querySelector(`div[data-keycode="${event.keyCode}"]`);

      let audio =
        document.querySelector(`audio[data-code="${event.keyCode}"]`) ||
        document.querySelector(`audio[data-keycode="${event.keyCode}"]`);

      buttonPressed.classList.add("currently-playing");
      audio.play();
      audio.currentTime = 0;

      buttonPressed.addEventListener("transitionend", removeClass, false);

      function removeClass() {
        buttonPressed.classList.remove("currently-playing");
      }
    }
  },
  false
);
