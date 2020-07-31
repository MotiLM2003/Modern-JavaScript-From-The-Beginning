class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  displayBooks() {
    const books = Store.getBooks();
    books.forEach(function (book) {
      const u = new UI();
      u.addBookToList(book);
    });
  }

  addBookToList(book) {
    console.log(book);
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
  }

  showAlert(message, className) {
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
  }

  deleteBook(target) {
    const ui = new UI();
    if (target.classList.contains("delete")) {
      

    
      Store.removeBook(target.previousSibling.textContent);
      target.parentElement.remove();
    }
  }

  deleteFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

class Store {
  static getBooks() {
    let books = [];
    if (localStorage.getItem("books") != null) {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    Store.saveBooks(books);
  }

  static removeBook(isbn) {
    const books = Store.getBooks().filter((x) => x.isbn !== isbn);
    Store.saveBooks(books);
  }

  static saveBooks(lst) {
    localStorage.setItem("books", JSON.stringify(lst));
  }
}

// event listneres
document.addEventListener("DOMContentLoaded", function () {
  const ui = new UI();
  ui.displayBooks();
});
document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);

  const ui = new UI();
  if (title === "" || author === "" || isbn === "") {
    // error alert(
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // add book to list
    ui.addBookToList(book);
    Store.addBook(book);
    ui.deleteFields();
    ui.showAlert("Book added", "success");
  }
});

// delete event lisener
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  const el = e.target;
  ui.deleteBook(e.target);
  ui.showAlert("Book deleted", "success");
});
