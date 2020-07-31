// init github
const github = new GitHub();
const ui = new UI();

const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e) => {
  // get input text
  const usertText = e.target.value;
  if (usertText != "") {
    // make http call
    github.getUser(usertText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
        console.log("show alert");
        ui.showAlert("User not found", "alert alert-danager");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
  }
});
