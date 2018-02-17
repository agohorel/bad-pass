var word = 'iamtryingtoreplacethis';
var randomChar = ['!', '@', '#', '$', '%', '&', '*', '+', '=', '/', '<', '>'];
var p = document.getElementById('display');
var selectedRandomChar, index = 0; 

String.prototype.replaceAt = function(index, char) {
	var a = this.split("");
	a[index] = char;
	return a.join("");
};

setInterval(function(){
	selectedRandomChar = randomChar[Math.floor(Math.random() * randomChar.length)];
	p.innerText = word.replaceAt(index, selectedRandomChar);
	index++;
	if (index >= word.length) {
		index = 0;
	}
}, 100);