var words = ['foxtrot007', 
			 '!ellipse666', 
			 '7dot_fixate.', 
			 'r9hollow?',
			 'animeWasAMistake420'];
var randomChars = ['!', '@', '#', '$', '%', '&', '*', '+', '=', '/', '<', '>', '~', '*', '-', '_', '^', '.', '?', '(', ')', '[', ']', '{', '}'];
var p = document.querySelectorAll('.display');
var selectedRandomChar, index = 0, i = 0; 

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
			
	index++;
	if (index >= words[i].length) {
		index = 0;
		i++;
	}

	if (i >= words.length) {
		i = 0;
	}	
}, 100);