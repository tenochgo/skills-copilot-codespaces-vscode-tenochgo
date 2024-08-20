
function reverseSentence(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');
    
    // Reverse the array of words
    let reversedWords = words.reverse();
    
    // Join the reversed array back into a string
    let reversedSentence = reversedWords.join(' ');
    
    // Capitalize the first letter of the resulting string
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
    
    return reversedSentence;
}

// Example usage:
let inputSentence = "Hello world this is a test";
let outputSentence = reverseSentence(inputSentence);
console.log(outputSentence); // Output: "Test a is this world hello"



const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];  


// Flatten the nested data array
let flattenedData = data.flat();

// Extract names from the flattened data array
let names = flattenedData.map(item => item.name);

// Print the extracted names
console.log(names); // Output: ["John", "Jane", "Bob"]
