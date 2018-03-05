var players = ['Matei', 'Gabi', 'Ianu'];
var team2 = players;
team2[2] = 'Emi';
console.table(players);
// Will log emi at the end.
// Arrays are passed as references
// To create an identical new array you can do as following:

team3 = [].concat(...players);
console.log('team3');
console.table(team3);

// OR

team4 = players.slice();
console.log('team4');
console.table(team4);

// OR

team5 = [...players];
console.log('team5');
console.table(team5);

// OR

team6 = Array.from(players);
console.log('team6');
console.table(team6);

// Same goes for objects
// To create the duplicate of an object use Object.assign()...
// The first parameter says to create an empty object, the second is the object that you copy, and the third is the rules you want to overwrite
// The third parameter is optional

var person = {
	age: 22,
	height: 178
}

var ioan = Object.assign({}, person);
console.log('Ioan: ');
console.table(ioan);
