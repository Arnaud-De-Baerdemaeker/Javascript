/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	// your code here

	document.getElementById("run").addEventListener("click", () => {

		let heroId = document.getElementById("hero-id").value;

		fetch("http://localhost:3000/heroes")

		.then(function(infosFromHeroes) {
			
			return infosFromHeroes.json();
		})

		.then(function(infosFromHeroes) {

			infosFromHeroes.forEach(function(item) {
				
				if (heroId == item.id) {
				
					delete item;
				}

				console.log(infosFromHeroes);
			})
		})
	})
})();
