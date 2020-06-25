/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	// your code here

	document.getElementById("run").addEventListener("click", () => {

		let name = document.getElementById("hero-name").value;
		let alterEgo = document.getElementById("hero-alter-ego").value;
		let powers = document.getElementById("hero-powers").value;

		fetch("http://localhost:3000/heroes")

		.then(function(infosFromHeroes) {
			
			return infosFromHeroes.json();
		})

		.then(function(infosFromHeroes) {

			newHero = {
				id: 6,
				name: name,
				alterEgo: alterEgo,
				abilities: powers.split(",")
			};

			infosFromHeroes.push(newHero);

			console.log(infosFromHeroes);
		})
	})
})();
