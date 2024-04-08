// make a button that, when clicked, creates a new
// button, and then deletes the original button.
// every button that is created should have this same behavior.
// put random text inside of each button so you can be sure
// that each button is different.

function generateRandomText() {
    return Math.random().toString(36).substring(2, 10);
}

function createNewButton() {
    var newButton = document.createElement('button');

    var buttonText = generateRandomText();

    newButton.textContent = buttonText;

    newButton.addEventListener('click', function() {
        createNewButton(); // Create a new button when clicked
        this.parentNode.removeChild(this); // Delete the original button
    });

    document.body.appendChild(newButton);
}

createNewButton();


/**
 * Everyone pretty much had the same solution
 */