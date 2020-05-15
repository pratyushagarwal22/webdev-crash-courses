const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Get the Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host(root domain)
console.log(myUrl.host);

// Host name
console.log(myUrl.hostname); // doesn't include the portnumber

// Path name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add parameters dynamically
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);


// Loop through Params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));



















