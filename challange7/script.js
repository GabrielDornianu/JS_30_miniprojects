const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

var isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 18);

var allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 18);

var foundId = comments.find(comment => comment.id == 823423);

var foundIndex = comments.findIndex(comment => comment.id == 823423);

// console.log({isAdult});

// console.log({allAdults});

// console.log({foundId});

console.log({foundIndex});

console.log(comments);

// comments.splice(foundIndex, 1);

var newComments = [
  ...comments.slice(0, foundIndex),
  ...comments.slice(foundIndex + 1)
];

console.table(newComments);