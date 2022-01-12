let key = "z8x69TkCKoiRqY5uEGnzAeG7GTMMsDhs";
let categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

let category = categories[Math.floor(Math.random() * categories.length)];

fetch("https://api.chucknorris.io/jokes/random?category=" + category)
  .then((resp) => {
    return resp.json();
  })
  .then((completeData) => {
    console.log(completeData);
    document.getElementById("pTag").textContent += completeData.value;
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=" +
        key +
        "&limit=1&q=" +
        category
    )
      .then((response) => {
        return response.json();
      })
      .then((anComp) => {
        console.log(anComp);
        const gif = (document.getElementById("img").src =
          anComp.data[0].images.original.url);
      });
  });
