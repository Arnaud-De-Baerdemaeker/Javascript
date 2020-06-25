/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Cliquer sur le bouton
    document.getElementById("run").addEventListener("click", function() {
        
        // Variable tableau détenant toutes les valeurs
        var fruits = [
            "apple",
            "pear",
            "raspberry",
            "tomatos",
            "kiwi",
            "banana",
            "orange",
            "mandarin",
            "durian",
            "peache",
            "grap",
            "cherry",
        ];

        // Boucle for pour afficher le contenu du tableau un à un dans la console
        for (i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }
    });

})();
