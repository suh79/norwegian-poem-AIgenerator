/*function showPoem(response) {
  document.querySelector("#poem-output").innerHTML = response.data.answer;

let prompt = "Make short rhymes and poems about Norway.";
let context = "Make short, funny and amusing poems or rhymes about the Norwegian culture and people.";
let apiKey = "df32e8cdob8b09f2660834841061ata2";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showPoem)};
*/



function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "De tre bukkene Bruse skulle gå over broen",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
