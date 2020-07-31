const github = new Github();
const ui = new UI();

// search input
const searchUSer = document.getElementById("searchUser");

searchUSer.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    // make http call

    github.getUser(userText).then((user) => {
      ui.clearalert();
      if (user.profile.message == "Not Found") {
        ui.showAlert(" User not found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(user.profile);
        ui.showRepos(user.repos);
      }
    });
  }
});
