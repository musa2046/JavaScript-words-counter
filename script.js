let sentence = prompt("Write a sentence");
console.log(sentence);
let sentenceArray = sentence.split(" ");
console.log(sentenceArray);
let numberOfWords = sentenceArray.length;
console.log(`The number of words in the sentence you entered are: ${numberOfWords}`);