document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getApiData);

function getText() {
    fetch("test.txt")
        .then(function (res, err) {
            return res.text();
        }).then(function (data) {
            console.log(data);
        })
}

function getJson() {

    fetch("posts.json")
    .then(function (res, err) {
        return res.json();
    }).then(function (data) {
        console.log(data);
    })
}

function getApiData() {}
