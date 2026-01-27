const posts = [
  { id: 11231413, email: "foo@test.com", nickname: "foo", likes: 27 },
  { id: 11231415, email: "bar@test.com", nickname: "bar", likes: 7 },
  { id: 11231416, email: "yoda@test.com", nickname: "yoda", likes: 17 },
];

/* finding all posts that have likes over 10 and returning their nickname and email only:
const result = posts
.filter((p) => p.likes > 10)
.map((item) => {
   return {
     email: item.email,
     nickname: item.nickname,
   };
});


console.table(result);
*/
const result = posts.reduce((acc, post) => {
  if (post.likes > 10) {
    acc.push({
      email: post.email,
      nickname: post.nickname,
    });
  }
  return acc;
}, []);

console.table(result);