/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	// your code here

	const image = document.getElementsByTagName("img")[0]
	let srcData = image.getAttribute("src");
	let dataHover = image.getAttribute("data-hover");

	image.addEventListener("mouseover", () => {
		
		image.setAttribute("src", dataHover);
	});
	
	image.addEventListener("mouseout", () => {
		
		image.setAttribute("src", srcData);
	});
})();