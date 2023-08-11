// 1. Function to check if a number is even or odd
function isEvenOrOdd(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
  }
  
  // 2. Function to calculate the area of a rectangle
  function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // 3. Function to reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 4. Function to check if a word is a palindrome
  function isPalindrome(word) {
    const reversed = reverseString(word);
    return word.toLowerCase() === reversed.toLowerCase();
  }
  
  // 5. Function to generate a random number between a given range
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 6. Function to convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  // 7. Function to find the maximum number in an array
  function findMaxNumber(numbers) {
    return Math.max(...numbers);
  }
  
  // 8. Function to remove duplicate elements from an array
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // 9. Function to calculate the factorial of a number
  function calculateFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }
  
  // 10. Function to check if a string contains a specific