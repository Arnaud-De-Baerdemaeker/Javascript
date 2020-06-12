/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById("run").addEventListener("click", function() {

        var me = {
            lastname: "De Baerdemaeker",
            firstname: "Arnaud",
            age: 30,
            city: "Liège",
            country: "Belgium"
        };

        console.log("Hello !\nMy name is " + me.firstname + " " + me.lastname + ". I am " + me.age + " years old and I live in " + me.city + ", " + me.country);
        
    });
})();
