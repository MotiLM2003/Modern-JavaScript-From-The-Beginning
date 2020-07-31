const posts = [
    { title: 'Post 1',  body : 'body 1'},
    { title: 'Post 2',  body : 'body 2'},
    { title: 'Post 3',  body : 'body 3'}

];


// document.addEventListener('DOMContentLoaded', getPosts);


function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        if (typeof callback === 'function') { callback(); }
    },2000 )
}


function getPosts() {
    console.log('in');
setTimeout(() => {
    let output = '';
    posts.forEach(function (post) {
        output += `<li>Post: ${post.title}, body: ${post.body}</li>`
    });
    console.log(output);
    document.body.innerHTML = `<ul>${output}</ul>`;
}, (1000));
}



createPost({ title: 'post 4', body: 'body 4' },getPosts);
 