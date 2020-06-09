/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    
    // 1 - Stocker la date de l'ordinateur dans la variable date
    var date = new Date();

    // 2 - Mise en place d'une condition : récupérer seulement les heures de la date
    if (date.getHours() < 18) {
        // 3 - Si l'heure est inférieure à 18
        document.getElementById("target").innerHTML = "Hello";
    }

    else {
        // 4 - Si l'heure est supérieure à 18
        document.getElementById("target").innerHTML = "Good evening";
    }

})();
