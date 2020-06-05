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

    // Not finished yet
    var age;
    age = prompt("How old are you ?");
    
    var gender;
    gender = prompt("What is your gender ?");

    var town;
    town = prompt("Where do you live ?");

    if (askingData() === true) {
        confirm("Est-ce bien correct ?\n\nVotre âge : " + data[0] + "\nVotre sexe : " + data[1] + "\nVotre lieu de résidence : " + data[2]);
        alert("Saved !");
    }

    else {
        askingData();
    }

})();