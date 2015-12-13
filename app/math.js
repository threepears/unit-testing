var module = module || {};

function sum(one, two) {
  return one + two;
}

function difference(one, two) {
  return one - two;
}

function product(one, two) {
  return one * two;
}

function quotient(one, two) {
  return one / two;
}

function squared(one) {
  return one * one;
}

function checkWordCount(text) {
  	var words = text.split(" ");
	console.log(words);
	if (words.length > 100) {
		console.log("This sentence has more than 100 words....FAIL!");
		return false;
	} else {
		console.log("This sentence is 100 words or less.....PASS!");
  		return true;
	}
}

function duplicateCheck(text) {
	var words = text.split(" ");
	console.log(words);
	for (var i = 0; i < words.length; i++) {
		for (var j = i + 1; j < words.length; j++) {
			if (words[i] === words[j]) {
				console.log("This sentence has duplicates!");
				return false;
			} 
		}
	}
	console.log("This sentence passes the test - no duplicates!");
  	return true;
}

function verifyAlphaNumeric(text) {
	for (var i = 0; i < text.length; i++) {
		console.log(i);
		if (text[i] === "$" || text[i] === "%" || text[i] === "^" || text[i] === "&" || text[i] === "*") 
		{
			console.log("Oops! Special characters are present!")
			return false;
		}
	}
	console.log("You're good to go! No special characters!")
  	return true;
}


module.exports = { sum, difference, product, quotient, squared, checkWordCount, duplicateCheck, verifyAlphaNumeric };