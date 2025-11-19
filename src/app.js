function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku-text", {
    strings: "Generating a haiku for you...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let haikuFormElement = document.querySelector("#haiku-form");
haikuFormElement.addEventListener("submit", generateHaiku);
