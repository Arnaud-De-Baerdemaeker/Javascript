/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    class Person {
        constructor() {
            this.firstname;
            this.lastname;
        }

        get name() {
            return this.firstname + this.lastname;
        }

        set name(name) {
            [this.firstname, this.lastname] = name.split(" ");
            return;
            
        }
    }

    document.getElementById("run").addEventListener("click", () => {

        let me = new Person("Arnaud De Baerdemaeker");
        console.log(me.name);
    });
})();
