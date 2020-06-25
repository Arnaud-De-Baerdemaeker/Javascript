/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Lancer le script en cliquant sur le bouton
    document.getElementById("run").addEventListener("click", function() {

        // Variable tableau contenant 10 nombres entre 1 et 100
        var tab = [];
        
        // Inscription des nombres dans le HTML
        for (index = 0; index < 10; index++) {
            tab[index] = Math.floor(Math.random() * 101);
            document.getElementById("n-" + (index + 1)).innerHTML = tab[index];
        }
        
        /*
        document.getElementById("n-1").innerHTML = tab[0];
        document.getElementById("n-2").innerHTML = tab[1];
        document.getElementById("n-3").innerHTML = tab[2];
        document.getElementById("n-4").innerHTML = tab[3];
        document.getElementById("n-5").innerHTML = tab[4];
        document.getElementById("n-6").innerHTML = tab[5];
        document.getElementById("n-7").innerHTML = tab[6];
        document.getElementById("n-8").innerHTML = tab[7];
        document.getElementById("n-9").innerHTML = tab[8];
        document.getElementById("n-10").innerHTML = tab[9];
        */

        // Renvoi du nombre le plus petit
        var lowest = Math.min(...tab);
        document.getElementById("min").innerHTML = lowest;

        // Renvoi du nombre le plus grand
        var highest = Math.max(...tab);
        document.getElementById("max").innerHTML = highest;

        // Renvoi de la somme de tous les nombres
        var total = tab.reduce(function(a, b) {
            return a + b;
        });
        document.getElementById("sum").innerHTML = total;

        // Renvoi de la moyenne de tous les nombres
        var average = total / tab.length;        
        document.getElementById("average").innerHTML = average;

    });

})();
