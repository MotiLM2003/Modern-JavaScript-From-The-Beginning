class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3"> 
                    <img class="img-fluid mb-2" src="${user.avatar_url}" />
                    <a href="${user.html_url} target="_blank" class="btn btn-primary btn-block" >View Profile</a>
                </div>
                <div class="col-md-9> 
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success"> Folowers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.fllowing}</span>
                <br> <br>
                <ul cclass="list-group">
                    <li class="list-group-item">Company: ${user.company}</li> 
                    <li class="list-group-item">websit/blog: ${user.blog}</li> 
                    <li class="list-group-item">Location: ${user.location}</li> 
                    <li class="list-group-item">Member Since: ${user.created_at}</li> 
                </ul>
                </div>
            </div>
        </div>
           <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>

      `;
  }

  showRepos(repos) {
    let output = "";
      output += '<div class="card card-body mb2">'; 
      
      repos.forEach((repo) => {
        console.log(repo);
      output += ` 
            
                <div class='row'>
                    <div class="col-md-6">
                        <a href=""   target="_blank">${repo.name}</a> 
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary">Stars Repos: ${repo.starGazers_count}</span>
                    <span class="badge badge-secondary">Watchers Gists: ${repo.watchers.count}</span>
                    <span class="badge badge-success"> Forks: ${repo.forks_count}</span>
                    </div>
                </div
            </div>
          `;
    });

    output += "</div>";
    document.getElementById("repos").innerHTML = output;
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(message, className) {
    // clear alert
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    console.log(div, search);
    container.insertBefore(div, search);
  }
}
