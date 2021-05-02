// Big portion of this code is from this terminal implementation:
// https://webdevtrick.com/javascript-terminal-emulator/

document.addEventListener("DOMContentLoaded", function()
{
	document.getElementsByTagName("form")[0].onsubmit = function(evt)
	{
		evt.preventDefault(); // Preventing the form from submitting
		checkWord(); // Do your magic and check the entered word/sentence
		window.scrollTo(0,150);
	}

	// Get the focus to the text input to enter a word right away.
	document.getElementById("terminalInput").focus();

	// Getting the text from the input
	var textInputValue = document.getElementById("terminalInput").value.trim();

	// Getting the text from the results div
	var textResultsValue = document.getElementById("terminalResults").innerHTML;

	// Clear text input
	var clearInput = function()
	{
		document.getElementById("terminalInput").value = "";
	}

	// Scroll to the bottom of the results div
	var scrollToBottomOfResults = function()
	{
		var terminalResultsDiv = document.getElementById("terminalResults");
		terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
	}

	// Scroll to the bottom of the results
	scrollToBottomOfResults();

	// Add text to the results div
	var addTextToResults = function(textToAdd)
	{
		document.getElementById("terminalResults").innerHTML += "<p>" + textToAdd + "</p>";
		scrollToBottomOfResults();
	}

	// Check input and print appropriate output
	var checkWord = function()
	{
		// Get the text from the text input to a variable
		textInputValue = document.getElementById("terminalInput").value.trim();
		if (textInputValue != "") {
			clearInput();
			addTextToResults("<p class='userEnteredText'>[dummy@bash] $ " +
			textInputValue + "</p>");
			addTextToResults(parse(textInputValue));
		}
	};
});
