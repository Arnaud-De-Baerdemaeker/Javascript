/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	// your code here

	const inputField = document.getElementById("pass-one");
	const counter = document.getElementById("counter");

	inputField.addEventListener("input", () => {

		counter.innerText = inputField.value.length + "/10";

		// if (inputField.value.length >= 10) {

		//     this.onkeypress = function () {
		//         return false;
		//     }
		// }
		// else {

		//     this.onkeypress = function () {
		//         return true;
		//     }
		// }
	});
})();