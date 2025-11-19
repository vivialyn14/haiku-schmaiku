function displayHaiku(response) {
  console.log("Finished writing!");
  new Typewriter("#haiku-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");
  let prompt = `Generate a poem about ${userInstructions.value}`;
  let context =
    "You are a stoic haiku writer with many years of experience. You can write a haiku about literally anything, and you are very humble. You have a particular passion for drawing inspiration from nature, which is reflected in your poems. Always include a title for the haiku at the top inside a <strong> element, and then provide only the haiku in basic HTML (putting each line of the haiku on a new line) as your answer - no other text should form part of your response.";
  let apiKey = "1dd3bcb8741dt0aoe047389dbb6b5df4";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let haikuText = document.querySelector("#haiku-text");
  haikuText.innerHTML = "Writing your haiku...";

  axios.get(apiUrl).then(displayHaiku);
}

let haikuFormElement = document.querySelector("#haiku-form");
haikuFormElement.addEventListener("submit", generateHaiku);
