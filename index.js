function isPalindrome(word) {
  // Convert the word to lowercase
  const lowercaseWord = word.toLowerCase();

  // Get the length of the word
  const length = lowercaseWord.length;

  // Iterate over the first half of the word
  for (let i = 0; i < length / 2; i++) {
    // Compare the character at index i with the character at the corresponding index from the end
    if (lowercaseWord[i] !== lowercaseWord[length - 1 - i]) {
      return false; // Characters don't match, not a palindrome
    }
  }

  return true; // All characters match, it's a palindrome
}

/*
  Pseudocode:
  - Convert the word to lowercase.
  - Get the length of the word.
  - Iterate over the first half of the word (until length / 2):
    - Compare the character at index i with the character at the corresponding index from the end (length - 1 - i).
    - If the characters don't match, return false (not a palindrome).
  - If all characters match, return true (palindrome).
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
