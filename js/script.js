document.addEventListener(
  "DOMContentLoaded",
  () => {
    document.addEventListener("keypress", getKeyCode, false);

    function getKeyCode(event) {
      console.log(`Key pressed = ${event.code} Keycode = ${event.keyCode}`);
    }
  },
  false
);
