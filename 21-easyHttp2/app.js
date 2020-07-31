const http = new EasyHTTP();
// create get request
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

/// create post request

const data = { title: " hello", body: "hi" };

http.post("https://jsonplaceholder.typicode.com/users", data)
    .then(res=> console.log(res));
