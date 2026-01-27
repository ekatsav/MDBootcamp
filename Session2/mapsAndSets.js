

const movies = new Map();

movies.set("My Neighbor Totoro", {yearOfRelease: "1988", director: "Hayao MIyazaki"});
movies.set("Pom Poko", {yearOfRelease: "1994", director: "Isao Takahata"});
movies.set("Spirited Away", {yearOfRelease: "2001", director: "Hayao Miyazaki"});
movies.set("When Marnie Was There", {yearOfRelease: "2014", director: "Hiromasa Yonebayashi"});


console.table(movies);

let hasSpiritedAway = movies.has("Spirited Away");
console.log(hasSpiritedAway);

let spiritedAwayInfo = movies.get("Spirited Away");
console.log(spiritedAwayInfo);