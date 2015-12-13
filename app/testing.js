var inputData;

var funButton = document.getElementById("funButton");

funButton.addEventListener("click", function() {
	inputData = document.getElementById("stuff").value;
	console.log(inputData);
	checkWordCount(inputData);
	duplicateCheck(inputData);
	verifyAlphaNumeric(inputData);
});