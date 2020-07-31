document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // load XHR Object

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.txt", true);
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log(this.status);
    }
  };

  xhr.send();
}
