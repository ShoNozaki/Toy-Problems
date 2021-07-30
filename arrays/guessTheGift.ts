// 5 KYU
// Your Task
// You will be given a wishlist (array), containing all possible items. Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} (Ruby version has an analog hash structure, see example below)

// You also get a list of presents (array), you see under the christmas tree, which have the following format each: {size: "small", clatters: "no", weight: "light"}

// Your task is to return the names of all wishlisted presents that you might have gotten.

// Rules
// Possible values for size: "small", "medium", "large"
// Possible values for clatters: "no", "a bit", "yes"
// Possible values for weight: "light", "medium", "heavy"
// Don't add any item more than once to the result
// The order of names in the output doesn't matter
// It's possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.

// Example
// var wishlist = [
//     {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
//     {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
//     {name: "Card Game", size: "small", clatters: "no", weight: "light"}
// ];

// var presents = [
//     {size: "medium", clatters: "a bit", weight: "medium"},
//     {size: "small", clatters: "yes", weight: "light"}
// ];

// guessGifts(wishlist, presents); // -->  ["Toy Car", "Mini Puzzle"]

//PSUEDO
// take each present and compare it to the wishlist
//if it matches mark as potential and remove from wishlist
//return potentials

interface Present {
	size: "small" | "medium" | "large"
	clatters: "no" | "a bit" | "yes"
	weight: "light" | "medium" | "heavy"
}

interface WishListItem extends Present {
	name: string
}

const isMatch = (item1: Present, item2: WishListItem) : boolean =>  {
	//check size
	if(item1.size !== item2.size){
		return false
	}
	//check clatters
	if(item1.clatters !== item2.clatters){
		return false
	}
	//check weight
	if(item1.weight !== item2.weight){
		return false
	}
	return true
}

const guessGifts = (wishlist: WishListItem[], presents: Present[]) : string[] => {
	let potentialGifts = []
	for(let i = 0; i < presents.length; i++){
		let currentPresent = presents[i]
		for(let j = 0; j < wishlist.length; j++){
			let currentListItem = wishlist[j]
			if(isMatch(currentPresent, currentListItem)){
				potentialGifts.push(currentListItem.name)
				wishlist.splice(j,1)
				j -= 1; 
			}
		}
	}

	return potentialGifts
}

var wishlist : WishListItem[] = [
	{name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
	{name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
	{name: "Card Game", size: "small", clatters: "no", weight: "light"}
]

var presents : Present[] = [
	{size: "medium", clatters: "a bit", weight: "medium"},
	{size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(wishlist, presents))