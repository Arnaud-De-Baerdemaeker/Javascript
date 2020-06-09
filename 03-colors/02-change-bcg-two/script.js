/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
        
    // 1 - cliquer sur "run"
    document.getElementById("run").addEventListener("click", function() {
        // 2 - récupérer dans la variable value, la valeur de l'id "color"
        var value = document.getElementById("color").value;

        // 3 - changer la couleur de fond avec la valeur de value
        document.body.style.backgroundColor = value;
    });
})();
