/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // 1 - cliquer sur le bouton "run"
    document.getElementById("run").addEventListener("click", function() {
        
        // 2 - définir la variable color
        var color;

        // 3 - fonction pour générer une couleur aléatoire
        function randomColors() {
            // 4 - définir variable caracters avec valeurs hexadécimales
            var caracters = "0123456789ABCDEF";
            
            // 5 - définir variable color qui accueillera le code hex de la couleur
            var color = "#";

            // 6 - boucle for avec 6 répétitions
            for (var i = 0; i < 6; i++) {
                // 7 - color est le résultat de color + caracters (en n'ayant que des nombres entiers)(nombre aléatoire) multiplié par 16 
                color = color + caracters[Math.floor(Math.random() * 16)];
            }

            return color;
        }

        // 7 - modifie la couleur de fond du document en appelant la fonction randomColors() qui génère une couleur aléatoire à chaque fois
        document.body.style.backgroundColor = randomColors();
    });

})();
