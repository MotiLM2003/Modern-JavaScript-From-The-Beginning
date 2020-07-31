async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');


    const data = await response.json();
    return data

}




getUsers().then(res=>  console.log(res));