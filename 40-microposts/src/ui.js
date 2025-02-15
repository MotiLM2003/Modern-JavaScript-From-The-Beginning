class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.forState = "add";
  }

  showPosts(posts) {
    console.log(posts);
    let output = "";
    posts.forEach((post) => {
      output += `
        <div  class="card mb-3">
            <div class="card-body">
                <h4 class="card-title">${post.title}</h3>
                <p class="card-text">${post.body}</p>
                <a href="#" class="edit card-link" data-id="${post.id}">
                    <i class="fa fa-pencil"></i>
                </a>
                <a href="#" class="delete card-link"  data-id="${post.id}">
                <i class="fa fa-remove" ></i>
                </a>
            </div>
        </div>`;
    });

    this.post.innerHTML = output;
  }

  showAlert(message, classname) {
    this.clearAlert();

    // create div
    const div = document.createElement("div");
    // add calssess;
    div.className = classname;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".postsContainer");
    // get posts
    const posts = document.querySelector("#posts");
    container.insertBefore(div, posts);

    setTimeout(() => {
      this.clearAlert();
    }, 4000);
  }

  clearAlert() {
    const curremtAlert = document.querySelector(".alert");
    if (curremtAlert) {
      curremtAlert.remove();
    }
  }
  clearFields() {
    this.titleInput = "";
    this.bodyInput = "";
  }
}

export const ui = new UI();
