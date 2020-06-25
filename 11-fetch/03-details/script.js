/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	// your code here

	document.getElementById("run").addEventListener("click", () => {

		let input = Number(document.getElementById("hero-id").value);

		fetch("http://localhost:3000/heroes")

		.then(function(infosFromHeroes) {
			
			return infosFromHeroes.json();
		})

		.then(function(infosFromHeroes) {

			infosFromHeroes.forEach(function(item) {
				let template = document.getElementById("tpl-hero").content;
				let newPlace = document.getElementById("target");
				let templateClone = template.cloneNode(true);

				if (input == item.id) {
				
					templateClone.querySelector(".name").innerHTML = item.name;
					templateClone.querySelector(".alter-ego").innerHTML = item.alterEgo;
					templateClone.querySelector(".powers").innerHTML = item.abilities.join(", ");
				
					newPlace.appendChild(templateClone);
				}
			})
		})
	})
})();
