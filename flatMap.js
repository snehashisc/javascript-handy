//Understanding Array.prototype.flatMap()
//   myArray.map().flat(1) - equivalent

let movies = [
  'Dog Soldiers',
  ['In Bruges', 'From Paris with Love', 'Layer Cake'],
  'The Big Lebowski',
  '',
  '    ',
  'Memento, The Platform,Fight Club, ',
  'Hotel Rwanda, Moon, Under the Skin',
  'Lady Bird',
  ['Platoon', 'Wall-E'],
];
let arr = movies.flatMap((entry) => {
  if (Array.isArray(entry)) {
    return entry;
  } else if (typeof entry === 'string' && entry.trim() === '') {
    return []; //remove the empty strings
  } else {
    //other strings
    return entry
      .split(',')
      .map((txt) => txt.trim())
      .filter((txt) => txt != '');
  }
});
console.log(arr);
