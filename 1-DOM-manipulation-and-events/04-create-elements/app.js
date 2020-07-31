// create element
const li = document.createElement("li");
const ul = document.querySelector("ul");
li.className = "collection-item";
li.setAttribute("title", "new Item");
console.log(li);

// create text node and append
li.appendChild(document.createTextNode("hello world"));
ul.appendChild(li);

// create new link element
const link = document.createElement("a");
link.setAttribute("href", "#");
link.className = "delete-item secondary-content";

link.innerHTML = "<i class='fa fa-remove'></i>";
li.appendChild(link)

ul.appendChild(li);
