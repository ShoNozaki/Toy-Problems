//6 KYU

// Write a function that returns the greatest common factor of an array of positive integers. 
// Your return value should be a number, you will only receive positive integers.



//Sort
// Take smallest number and try to divide all other numbers by that number
//then subtract and try again

const isFactor = (arr, factor) => {
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] % factor !== 0) {
	// 		return false;
	// 	}
	// }
	// return true;

	return arr.every(value => value % factor === 0);
};

const greatestCommonFactor = (input) => {
	let lowToHigh = input.sort();touch 
	let smallest = lowToHigh[0];
	while (smallest > 0) {
		if (isFactor(lowToHigh, smallest)) {
			return smallest;
		} else {
			smallest -= 1;
		}
	}
};


console.log(greatestCommonFactor([46, 14, 20, 88])); // --> 2

console.log(greatestCommonFactor([468, 156, 806, 312, 442])); // --> 26