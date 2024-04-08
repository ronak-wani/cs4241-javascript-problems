// create a for loop that creates 20 blocks,
// all on a single row, with a random color for each
// make sure the values for each color channel are different
// (i.e. no gray/black/white blocks)

function generateRandomColor() {
    var r = Math.floor(Math.random() * 256); // Red channel
    var g = Math.floor(Math.random() * 256); // Green channel
    var b = Math.floor(Math.random() * 256); // Blue channel

    while (r < 100 && g < 100 && b < 100) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

for (var i = 0; i < 20; i++) {
    var block = document.createElement('div');
    block.style.width = '50px';
    block.style.height = '50px';
    block.style.backgroundColor = generateRandomColor();
    block.style.float = 'left';
    block.style.margin = '5px';
    document.body.appendChild(block);
}


/**
 * Mike: Set innerHTML of
 * Sai Teja: Used hsl library to generate random colours. In a loop created a div and just changed background color of the div
 * Rest everyone did pretty much same
 */