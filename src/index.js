function showAnswer(response) {
  alert(response.data.answer);
}

let prompt = "What is the name of the first femail president in the USA";
let context = "Make sure to provide a very short and clear answer";
let apiKey = "df32e8cdob8b09f2660834841061ata2";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
