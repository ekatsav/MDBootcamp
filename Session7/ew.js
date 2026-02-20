var unsortedArray = [
  "The Catcher in the Rye",
  "To Kill a Mockingbird",
  "1984",
  "Moby Dick"
];

function getComplexity(title) {
  let total = 0;
  for (let i = 0; i < title.length; i++) {
    total += title.charCodeAt(i);
  }
  return total;
}

function bookByTitleComplexitySort(array) {
  return array.sort((a, b) => {
    return getComplexity(a) - getComplexity(b);
  });
}

console.log(bookByTitleComplexitySort(unsortedArray));