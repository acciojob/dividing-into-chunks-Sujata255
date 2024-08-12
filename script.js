const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];   // This will store the resulting subarrays
  let currentChunk = [];   // This will store the current chunk of numbers
  let currentSum = 0;  // This keeps track of the sum of the current chunk

  // Iterate over each number in the array
  for (let num of arr) {
    // If adding the current number exceeds the maxSum, finalize the current chunk
    if (currentSum + num > n) {
      result.push(currentChunk);   // Add the current chunk to the result
      currentChunk = []; // Start a new chunk
      currentSum = 0;    // Reset the sum
    }

    // Add the number to the current chunk
    currentChunk.push(num);
    currentSum += num;
  }

  // Add the last chunk to the result if it's not empty
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

// Prompt the user to enter a maximum sum
const n = parseInt(prompt("Enter n: "));  // Convert the input to a number

// Display the result as a JSON string
alert(JSON.stringify(divide(arr, n)));