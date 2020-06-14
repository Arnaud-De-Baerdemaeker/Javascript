/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Récupérer la valeur de "data-image" dans la variable dataImage
    let dataImage = document.getElementById("source").getAttribute("data-image");

    // Déclaration variable img et y stocker le nouvel élément créé "img"
    let img = document.createElement("img");

    // Déclaration variable src et y stocker le nouvel attribut attribut "src"
    let src = document.createAttribute("src");
    
    // Prendre la variable src qui créée l'attribut "src" et y associer la valeur de "data-image" (url), stockée dans la variable dataImage
    src.value = dataImage;

    // Prendre l'élément créé "img", stocké dans la variable img, et y fixer l'attribut créé "src", stocké dans la variable src
    img.setAttribute("src", dataImage);

    // Trouver l'élément "target" et lui donner comme enfant l'élément créé "img", stocké dans la variable img
    document.getElementById("target").appendChild(img);

    // Supprimer l'élément originel
    let source = document.getElementById("source");
    source.remove();

})();
