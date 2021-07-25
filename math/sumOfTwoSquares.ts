//5 KYU

// Complete the function that takes a non-negative integer, and returns a list of non-negative integer pairs whose values - when squared - sum to the given integer.

// For example, given the parameter 25, the function should return the two pairs [0, 5] and [3, 4] because 0^2 + 5^2 = 25 and 3^2 + 4^2 = 25.

// Return the pairs in ascending order, so e.g. [[0, 5], [3, 4]] not [[5, 0], [3, 4]] or [[3, 4], [0, 5]], etc.

// If the given value cannot be expressed as the sum of two squares, return an empty array.

// Note: The upper bound of the parameter value will be 2,147,483,647

// 0  -->  [ [0, 0] ]
// 1  -->  [ [0, 1] ]
// 2  -->  [ [1, 1] ]
// 3  -->  []
// 4  -->  [ [0, 2] ]
// 5  -->  [ [1, 2] ]
// 25  -->  [ [0, 5], [3, 4] ]
// 325  -->  [ [1, 18], [6, 17], [10, 15] ]

//get bounds
//lower bound = 0
//upper bound = sqrt of input
//check for whole

type Solution = [number, number]

const hasDecimal = (input: number): boolean => {
	return input % 1 > 0
}

const getSquares = (input: number) : Solution[] => {
	if(input === 0){
		return [[0,0]]
	}
	let solutions = [] as Solution[];

	let upperBound = Math.sqrt(input);
	let lowerBound = 0;
	
	if(hasDecimal(upperBound)){
		upperBound = Math.floor(upperBound)
	}

	while(lowerBound < upperBound) {
		lowerBound = Math.sqrt(input - upperBound ** 2);
		if(!hasDecimal(lowerBound)){
			solutions.push([lowerBound, upperBound])
		}
		upperBound -= 1
	}

	return solutions
}

console.log(getSquares(325)) //-->  [ [1, 18], [6, 17], [10, 15] ]
