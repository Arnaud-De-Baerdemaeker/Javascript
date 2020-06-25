/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	// your code here

	document.getElementById("run").addEventListener("click", () => {

		// Récupérer les infos du serveur local dans la variable
		fetch("http://localhost:3000/heroes")

		.then(function(infosFromHeroes) {
			
			return infosFromHeroes.json();
		})
		
		.then(function(infosFromHeroes) {
			
			let template = document.getElementById("tpl-hero").content;

			let newPlace = document.getElementById("target");

			infosFromHeroes.forEach(function(item) {
				
				let templateClone = template.cloneNode(true);
				
				templateClone.querySelector(".name").innerHTML = item.name;
				templateClone.querySelector(".alter-ego").innerHTML = item.alterEgo;
				templateClone.querySelector(".powers").innerHTML = item.abilities.join(", ");
				
				newPlace.appendChild(templateClone);
			})
		})

		// .catch(function(error) {
		// 	console.error(error);
		// })
	});
})();
