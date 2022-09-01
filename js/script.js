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

      buttonPressed.classList.toggle("currently-playing");
      audio.play();
      audio.currentTime = 0;
    }
  },
  false
);
