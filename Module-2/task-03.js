"use strict";

const findLongestWord = function(string) {

    let arrStr = string.split(' ');
    let longestWord = arrStr[0];
    
    for (let i = 1; i < arrStr.length; i++) {
      if (arrStr[i].length > longestWord.length) {
        longestWord = arrStr[i];
      }
    }
    return longestWord;
  };
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  
  console.log(findLongestWord('Google do a roll'));
  
  console.log(findLongestWord('May the force be with you'));