/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    asking();
    
    function asking() {
        var age, gender, town;
        var confirmation;
        
        do {
            age = prompt("How old are you ?");
            gender = prompt("What is your gender ?");
            town = prompt("Where do you live ?");

            alert("You are " + age + " years old. You are a " + gender + " and you live in " + town);
            
            confirmation = confirm("Is it correct ?");
        }

        while (confirmation == false);
    } 

})();