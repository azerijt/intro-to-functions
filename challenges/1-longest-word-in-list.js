console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"])) //should be "Northern Ireland"
console.log(longestInList(["the", "quick", "brown", "fox"])) //should be "quick"
console.log(longestInList(["hello", "hi", "greetings", "hey"])) //should be "greetings"

function longestInList(words){
	let longest = words[0]
	
	for (let word = 0; word < words.length; word++) {
		if (words[word].length > longest.length){
			longest = words[word];
			
		}
		
	
	}
	
return longest
}
