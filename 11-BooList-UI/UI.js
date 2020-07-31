
// ui contructor
 export function UI() {}

// validate

UI.prototype.addBook = function (book) {
  const list = document.getElementById("book-list");
  const row = document.createElement("tr");
  const tdTitle = document.createElement("td");
  const tdAuthor = document.createElement("td");
  const tdISBN = document.createElement("td");
  const tdDelete = document.createElement("td");
  tdDelete.className = "delete";
  tdTitle.textContent = book.title;
  tdAuthor.textContent = book.author;
  tdISBN.textContent = book.isbn;
  tdDelete.textContent = "x";
  row.appendChild(tdTitle);
  row.appendChild(tdAuthor);
  row.appendChild(tdISBN);
  row.appendChild(tdDelete);
  list.appendChild(row);
};

UI.prototype.deleteFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// delete book from ui
UI.prototype.deleteBook = function (target) {
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }
};

UI.prototype.showAlert = function (message, className) {
  // create div
  const div = document.createElement("div");
  // class name
  div.className = `alert ${className}`;
  // add the text to the alret div
  div.appendChild(document.createTextNode(message));

  // get  parent
  const container = document.querySelector(".container");

  // get from
  const form = document.querySelector("#book-form");

  container.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 2000);
};

