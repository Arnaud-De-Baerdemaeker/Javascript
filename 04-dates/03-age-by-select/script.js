/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // 1 - Lancer la fonction en cliquant sur "run"
    document.getElementById("run").addEventListener("click", function() {

        // 2 - Récupérer et stocker le jour de naissance sélectionné
        var day = document.getElementById("dob-day").value;

        // 3 - Récupérer et stocker le mois de naissance sélectionné
        var month = document.getElementById("dob-month").value;

        // 4 - Récupérer et stocker l'année de naissance sélectionnée
        var year = document.getElementById("dob-year").value;

        // 5 - Montrer les valeurs récupérées
        alert("Your birthdate is : " + day + " / " + month + " / " + year);

        // 6 - Calcul de l'âge
        // 6.1 - Récupérer la date du PC
        var date = new Date();

        // 6.2 - Obtenir l'âge en soustrayant l'année du PC par l'année sélectionnée
        var age = date.getFullYear() - year;

        alert("You are " + age + " years old");
    });

})();
