const data = [
  {
    name: "john doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "jen Smith",
    age: 25,
    gender: "female",
    lookingfor: "man",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/woman/83.jpg",
  },
  {
    name: "William Johnson",
    age: 42,
    gender: "male",
    lookingfor: "female",
    location: "Chicago  MA",
    image: "https://randomuser.me/api/portraits/man/32.jpg",
  },
];

const profiles = profileIterator(data);

document.getElementById("next").addEventListener("click", nextProfile);

document.getElementById("prev").addEventListener("click", prevProfile);

function prevProfile() {
  const currentProfile = profiles.back().value;
  showProfile(currentProfile);
}

function nextProfile() {
  const currentProfile = profiles.next().value;
  showProfile(currentProfile);
}

function showProfile(currentProfile) {
  document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
       
    </ul>
`;

  document.getElementById(
    "imageDisplay"
  ).innerHTML = `<img src=${currentProfile.image} />`;
}

// profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex >= profiles.length) {
        nextIndex = 0;
      }

      return { value: profiles[nextIndex++], done: false };
    },
    back: function () {
      if (nextIndex < 0) {
        nextIndex = profiles.length - 1;
      }

      return { value: profiles[nextIndex--], done: false };
    },
  };
}
