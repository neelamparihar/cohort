// What is promise :--  It is just a class that makes callbacks and async function slightly more readable.

var d = new Promise(function (resolve) {
  resolve("Heyy Neelam");
});

function callback() {
  console.log(d);
}

d.then(callback);
