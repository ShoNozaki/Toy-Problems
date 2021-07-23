//5 KYU

// Your task is to take arrays of numbers and compress them into ranges.

// The numbers in the array are mostly consecutive. If you convert them as ranges, it will save a lot of space. You should write a function that will convert an array of numbers into a string. A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.

// For example,
// The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
// The number 6 would just be "6"
// The numbers 3,4,5,6,9 would be "3_6,9"

// Using the above system, you should write two functions:
// toRange - convert an array of numbers to a range string
// toArray - convert a range string back to an array

//remove duplicates

//toRange([3,4,5,6,9]) //=> "3_6,9"
//toArray("5_9") // => [5,6,7,8,9]

//sort
//loop
//have switch for end
//add start to output
//if consecutive add "_"
//add end number and ,



const toRange = (input : number[]):string => {
	let output = ""
	const sorted = input.sort((a,b) => a - b)
	let hasStarted = false
	for(let i = 0; i <= sorted.length; i++){
		// console.log(output)
		let current = sorted[i];
		let last = sorted[i - 1];
		let isConsecutive = current - last === 1;
		let isDifferent = current !== last;
		let inRange = output[output.length - 1] === "_";
		//handle end
		if(i === sorted.length){
			if(inRange){
				output += last
			}
			break;
		}
		//check if start of range
		if(!hasStarted){
			output += current;
			hasStarted = true;
		} else {
			//check if in mid range
			if(inRange){
				//check if different
				if(isDifferent){
					//check if not consecutive
					if(!isConsecutive){
						output += `${last},${current}`
					}
				}
			}else {
				//check if different number
				if(isDifferent){
					// check if consecutive
					if(isConsecutive){
						output += "_"
					} else {
						output += "," + current
					}
				} 
			}
		}
	}

	return output

}

console.log(toRange([1,2,2,3,4,4,5,9,9,10])) // => "1_5,9"
// console.log(toRange([6])) // => "6"
