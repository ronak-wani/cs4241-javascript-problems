// Make two objects named Artist
// and Painter. Artist should have
// a function named speak() that
// when called logs "I am an artist"
// to the console. Painter should be
// able to use the Artist's speak function
// (painters are artists, after all) in some
// way, and should also have a function named
// paint() that sets the background color of the
// page to a random color whenever called.

class Artist{
    constructor() {
    }
    speak = function (){
        console.log("I am an artist");
    }
}
class painter extends Artist{
    constructor() {
        super()
    }
    paint = function(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = "rgb(" + r + "," + g + "," + b + ")";
        document.body.style.background = color;
    }

}
const objArt = new Artist();
const objPaint = new painter();
painter.speak();
painter.paint();

/**
 * Sai Teja and Gabriel:
 * My teammates used Object approach rather than the class approach
 * I and Mike used class oops approach
 * Klaudio:
 * Created a main function to solve the problem
 */