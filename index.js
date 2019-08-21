var evens = [0, 2, 4, 6, 8, 10];

for (var i = 0; i < evens.length; i++) {
  console.log(`${evens[i]} is not odd!`);
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}


function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

// log out animals -- pretty cool, right?
console.log(animals);
