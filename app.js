var randomChars = ['!', '@', '#', '$', '%', '&', '*', '+', '=', '/', '<', '>', '~', '*', '-', '_', '^', '.', '?', '(', ')', '[', ']', '{', '}'];
var p = document.querySelectorAll('.password');
var selectedRandomChar, index = 0, i = 0, keyspace, complexityScore;
// approximate GTX 1080 MD5 hashrate
var hashrate = 43750000000;
var cursor = document.getElementById('blink');
var crackTimeDisplay = document.getElementById('crack-time');

String.prototype.replaceAt = function(index, char) {
	var a = this.split("");
	a[index] = char;
	return a.join("");
};

setInterval(function(){
	selectedRandomChar = randomChars[Math.floor(Math.random() * randomChars.length)];
	
	for (var j = 0; j < p.length; j++){
		p[j].innerText = "> " + words[i].replaceAt(index, selectedRandomChar);
	} 

	if (index === 0){
		analyzeComplexity(words[i]);
		timeToCrack(complexityScore, hashrate);
		console.log("keyspace: " + keyspace + ". complexity: " + complexityScore + ". time to crack: " + crackTime + " seconds");
	}

	crackTimeDisplay.innerText = crackTime + " seconds";
	index++;
	
	// hacky wait/reset
	if (index >= words[i].length){
		index = 0;
		i++;
	}

	if (i >= words.length) {
		i = 0;
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