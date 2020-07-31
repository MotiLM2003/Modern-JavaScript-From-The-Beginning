const http = new easyHTTP();
const url = "https://jsonplaceholder.typicode.com/users";
const data = { id : 2,title: " some title", body: " somebody" };

// const result = http.get('https://jsonplaceholder.typicode.com/users').then(res => res);

// const result = http.post(url, data).then(res => console.log(res));
// const result = http.put(url, data).then((data) => console.log(data));
const result = http.delete(url, data).then((data) => console.log(data));
