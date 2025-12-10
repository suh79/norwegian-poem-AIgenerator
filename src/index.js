function showPoem(response) {
  alert(response.data.answer);
  
}

let prompt = "Make short rhymes and poems about Norway.";
let context = "Make short, funny and amusing poems or rhymes about the Norwegian culture and people.";
let apiKey = "df32e8cdob8b09f2660834841061ata2";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showPoem);
