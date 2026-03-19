function getUser(callback) {
  setTimeout(() => {
    const user = { id: 1, name: "Lesh" };
    console.log("User fetched");
    callback(user);
  }, 1000);
}

function getPosts(user, callback) {
  setTimeout(() => {
    const posts = ["Post 1", "Post 2", "Post 3"];
    console.log(`Posts fetched for ${user.name}`);
    callback(posts);
  }, 1000);
}

// Nested callbacks (aka callback sandwich)
getUser((user) => {
  getPosts(user, (posts) => {
    console.log("All done!");
    console.log(posts);
  });
});