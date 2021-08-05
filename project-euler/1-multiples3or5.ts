// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const getSum = (limit: number) : number => {
	let output = 0;

	for(let i = 1; i < limit; i++){
		if(i % 5 === 0 || i % 3 === 0){
			output += i
		}
	}

	return output
}

console.log(getSum(10)) // -> 23
console.log(getSum(1000))