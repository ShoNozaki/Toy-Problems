//Leetcode : Medium

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

//make array of rows
//add letter to each row
//flip direction

type Direction = "Down" | "Up"

type Row = string[]

function convert(s: string, numRows: number): string {
  if(numRows === 1){
    return s
  }
  let direction: Direction = "Up"
  let currentRow = 0;
  let rows = [] as Row[]
  rows.fill([], 0, numRows)
  console.log(rows)
  for(let i = 0; i < s.length; i ++){
    rows[currentRow].push(s[i]);
    if(currentRow === 0){
      direction = "Down";
      currentRow += 1;
    } else if(currentRow === numRows - 1){
      direction = "Up";
      currentRow -= 1;
    } else if(direction === "Down"){
      currentRow += 1
    } else if(direction === "Up"){
      currentRow -= 1
    }
  }

  const output = rows.reduce((acc,val )=> {
    return acc.concat(val)
  }).join("")

  return output
};