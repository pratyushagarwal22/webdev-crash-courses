const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPost() {
    setTimeout(() => { 
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000); // Since it took longer than getPost() it is not visible in the page.
}


// getPost(); // We need to make getPost() the callback function so add it in the createpost call after the object is passed
createPost({ title: 'Post Three', body: 'This is post three'}, getPost); // Example of how callback works and how to use it









































