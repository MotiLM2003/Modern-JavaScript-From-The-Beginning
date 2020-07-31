import { http } from "./http";
import { ui } from "./ui";
document.addEventListener("DOMContentLoaded", () => {
  getPosts();
});

// listen for add post
document.querySelector(".post-submit").addEventListener("click", () => {
  submitPost();
});

// liste event for delete
document.querySelector("#posts").addEventListener("click", (e) => {
  deletePost(e);
});

const deletePost = (e) => {
  e.preventDefault();
  let el = e.target;

  if (el.parentElement.classList.contains("delete")) {
    // console.log("delete post");
    const id = el.parentElement.dataset.id;
    console.log(el.parentElement.dataset);
    http.delete("http://localhost:3000/posts/" + id).then((date) => {
      el.parentElement.parentElement.parentElement.remove();
      ui.showAlert("Post  Removed", "alert alert-success");
    });
  }
};

const getPosts = () => {
  http
    .get("http://localhost:3000/posts/")
    .then((data) => ui.showPosts(data))
    .catch((err) => {
      console.log("error data: " + err);
    });
};

// submit post
const submitPost = () => {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const data = {
    title,
    body,
  };

  http
    .post("http://localhost:3000/posts", data)
    .then((data) => {
      getPosts();
      ui.showAlert("post add", "alert alert-success");
      ui.clearFields();
    })
    .catch((err) => console.log(err));
};
