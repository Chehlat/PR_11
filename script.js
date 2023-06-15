
var movies = [];
movies.push("Movie 1");
movies.push("Movie 2");
movies.push("Movie 3");


var games = [];
games.push("Game 1");
games.push("Game 2");
games.push("Game 3");


var combinedArray = movies.concat(games);


var reviews = ["true", "false", "false", "true", "false", "true", "true", "true"];
var YesOrNo = reviews.slice(0, combinedArray.length);

console.log("Combined Array:", combinedArray);
console.log("YesOrNo Array:", YesOrNo);
