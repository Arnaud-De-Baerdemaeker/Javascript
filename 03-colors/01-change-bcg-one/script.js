/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("red").onclick = function goRed() {
        document.body.style.backgroundColor = "red";
    }

    document.getElementById("green").onclick = function goGreen() {
        document.body.style.backgroundColor = "green";
    }

    document.getElementById("yellow").onclick = function goYellow() {
        document.body.style.backgroundColor = "yellow";
    }

    document.getElementById("blue").onclick = function goBlue() {
        document.body.style.backgroundColor = "blue";
    }

})();
