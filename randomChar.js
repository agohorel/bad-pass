var words = ['foxtrot', 'fwolharben', 'fixate'];
var randomChars = ['!', '@', '#', '$', '%', '&', '*', '+', '=', '/', '<', '>', '~', '*', '-', '_', '^', '.', '?', '(', ')', '[', ']', '{', '}'];
var p = document.getElementById('display');
var selectedRandomChar, index = 0, i = 0; 

String.prototype.replaceAt = function(index, char) {
	var a = this.split("");
	a[index] = char;
	return a.join("");
};

setInterval(function(){
	selectedRandomChar = randomChars[Math.floor(Math.random() * randomChars.length)];
	p.innerText = words[i].replaceAt(index, selectedRandomChar);
	index++;
	if (index >= words[i].length) {
		index = 0;
		i++;
	}
	if (i >= words.length) {
		i = 0;
	}
}, 100);