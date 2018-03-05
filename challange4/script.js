const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];    

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

var before1800 = inventors.filter(function(inventor){
      return inventor.year >= 1500 && inventor.year <= 1599;
});

before1800.forEach(function(inventor){
      console.log(inventor.first);
});

var fullNames = inventors.map(function(index){
      return index.first + ' ' + index.last
});

fullNames.forEach(function(inventor){
      console.log(inventor);
})

var sortedInventors = inventors.sort(function(previous, next){
      return previous.year - next.year;
});

sortedInventors.forEach(function(inventor){
      console.log(inventor.year);
});

var totalAge = inventors.reduce(function(total, inventor){
      return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalAge);

console.log('Sort by age lived');

var sortedByAgeLived = inventors.sort(function(previous, next){
      return (previous.passed - previous.year) - (next.passed - next.year);
});

sortedByAgeLived.forEach(function(inventor){
      console.log(inventor.first + ' ' + inventor.last + ': ' + (inventor.passed - inventor.year));
});

// var boulevards = document.querySelectorAll('.mw-category a');

// Array.from(boulevards).filter(function(anchor){
//       anchorText = anchor.text;
//       console.log(anchor.text);
//       return anchorText.indexOf('de') >= 0;
// });

var alplabetSorted = inventors.sort(function(previous, next){
      var ptext = previous.last.toUpperCase();
      var ntext = next.last.toUpperCase();
      if(ptext > ntext)
      {
            return 1;
      }else if(ptext <= ntext)
      {
            return -1;
      }
});

console.log(alplabetSorted);

var instancesOfT = data.reduce(function(accumulator, item){
      if(!accumulator[item])
      {
            accumulator[item] = 0;
      }
      accumulator[item]++;
      return accumulator;

}, {});

console.log(instancesOfT);