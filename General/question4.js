// Question 4
// Write a function that counts the number of vowels in a string.

// The vowels are "a", "e", "i", "o" & "u"

// Examples:
// findVowels('hello') // --> 2
// findVowels('why') // --> 0
// Bonus points: list the vowels and quantity that were found.

function findVowel(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  // Solution 1
  // const letters = [...word.toLowerCase()];
  // console.log(letters);
  // letters.forEach(letter => {
  //   if (vowels.indexOf(letter) >= 0 ) {
  //     count++;
  //   }
  // });

  // Solution 2
  word = word.toLowerCase();
  // console.log("length", word.length);
  for (let i = 0; i < word.length; i++) {
    // console.log("letter", word[i]);
    if (vowels.indexOf(word[i]) >= 0) {
      // console.log('for-count', count);
      count++;
    }
  }

  // Leave in for both
  console.log("Count", count);
}

findVowel("Hello");
findVowel("Matthew");
findVowel("Hoan");
findVowel("Oneala");
findVowel("ALLEN");
