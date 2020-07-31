document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]');

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number.value}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let jokes = JSON.parse(this.responseText);
      if (jokes.type === "success") {
        let output = "";
        jokes.value.forEach(function (joke) {
          output += `<li>id: ${joke.id}, joke: ${joke.joke}</li>`;
        });
        document.querySelector(".jokes").innerHTML = output;
      c
      }
    
    }

   
  };
  xhr.send();

  e.preventDefault();
}
