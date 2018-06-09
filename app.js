var randomChars = ['!', '@', '#', '$', '%', '&', '*', '+', '=', '/', '<', '>', '~', '*', '-', '_', '^', '.', '?', '(', ')', '[', ']', '{', '}'];
var password = document.querySelectorAll('.password');
var selectedRandomChar, count = 0, index = 0, keyspace, complexityScore;
// approximate GTX 1080 MD5 hashrate
var hashrate = 43750000000;
var cursor = document.getElementById('blink');
var crackTimeDisplay = document.getElementById('crack-time');

String.prototype.replaceAt = function(count, char) {
	var a = this.split("");
	a[count] = char;
	return a.join("");
};

setInterval(function(){
	// pick a random $ymbol
	selectedRandomChar = randomChars[Math.floor(Math.random() * randomChars.length)];
	// loop through password and replace one char at a time with a random symbol
	for (var j = 0; j < password.length; j++){
		password[j].innerText = "> " + words[index].replaceAt(count, selectedRandomChar);
	} 
	// limit the following to only update once per password rather than once per char
	if (count === 0){
		analyzeComplexity(words[index]);
		timeToCrack(complexityScore, hashrate);
		crackTimeDisplay.innerText = crackTime + " seconds";
		console.log("keyspace: " + keyspace + ". complexity: " + complexityScore + ". time to crack: " + crackTime + " seconds");
	}
	// used to determine if we've looped through this code before
	count++;
	
	// hacky wait/reset
	if (count >= words[index].length + 10){
		count = 0;
		index++;
	}
	// reset index if we've looped through the whole word
	if (index >= words.length) {
		index = 0;
	}

}, 75);

// blink the "cursor"
setInterval(function(){
	cursor.classList.toggle("hide-cursor");
}, 300);


function analyzeComplexity(word){
	keyspace = 0;
	console.log(word);

	if (word.match(/[a-z]/g)){
		keyspace += 26;
	}

	if (word.match(/[A-Z]/g)){
		keyspace += 26;
	}

	if (word.match(/\d/g)){
		keyspace += 10;
	}

	if (word.match(/\W/g)){
		keyspace += 32;
	}

	complexityScore = Math.pow(keyspace, word.length);

	return complexityScore;
}

function timeToCrack(keyspace, hashrate){
	return crackTime = keyspace / hashrate;
}