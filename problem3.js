// create a for input field that does the following
// whenever the user enters a letter in it:
// 1. Creates a <h1> element containing the letter and appends it to the page
// 2. deletes the inputted letter from the input field so it is blank


    var inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('id', 'letterInput');
    inputField.setAttribute('placeholder', 'Enter a letter');
    document.body.appendChild(inputField);


    document.getElementById('letterInput').addEventListener('input', function(event) {
        var inputLetter = event.target.value.trim();

        if (inputLetter.length === 1 && inputLetter.match(/[a-z]/i)) {
            var h1Element = document.createElement('h1');
            h1Element.textContent = inputLetter;

            document.body.appendChild(h1Element);

            event.target.value = '';
        }
    });

/**
 * Mike: Used innerHTML and calls change function, creates a header with that value and sets the value to an empty string
 * Gabriel: Created a html element and did pretty much same as Gabriel
 * Everyone had essentially the same solution
 */