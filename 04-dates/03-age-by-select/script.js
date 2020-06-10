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
        var date = parseInt(document.getElementById("dob-day").value);

        // 3 - Récupérer et stocker le mois de naissance sélectionné
        var month = parseInt(document.getElementById("dob-month").value);

        // 4 - Récupérer et stocker l'année de naissance sélectionnée
        var year = parseInt(document.getElementById("dob-year").value);

        // 5 - Montrer les valeurs récupérées
        alert("Your birthdate is : " + date + " / " + month + " / " + year);

        // 6 - Récupérer la date du PC
        var today = new Date();
        var birthdate = new Date(year, month - 1, date);

        var age = today.getFullYear() - birthdate.getFullYear();

        var m = today.getMonth() - birthdate.getMonth();
        
        debugger
        
        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
            
        alert("You are " + age + " years old"); 
    });

})();
