/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    
    var fullDate = new Date(); // 1 - Récupérer et stocker la date du PC

    var day = associateDay(); // 2 - Associer fonction associateDay() à la variable day

    function associateDay() { // 2.1 - Déclarer la fonction associateDay()
        var local = fullDate.getDay(); // 2.2 - Déclarer variable local et y stocker le numéro du jour de la semaine
        
        switch(local) { // 2.3 - switch pour associer le numéro du jour de la semaine récupéré au nom du jour
            case 0:
                return "Sunday";
                break;
        
            case 1:
                return "Monday";
                break;

            case 2:
                return "Tuesday";
                break;

            case 3:
                return "Wednesday";
                break;

            case 4:
                return "Thursday";
                break;

            case 5:
                return "Friday";
                break;

            case 6:
                return "Saturday";
                break;

            default:
                return false;
        }
    }

    var date = fullDate.getDate(); // 3 - Récupérer et stocker la date

    var month = associateMonth(); // 4 - Déclarer variable month et y associer la fonction associateMonth()
    
    function associateMonth() { // 4.1 - Déclarer fonction associateMonth()
        var local = fullDate.getMonth(); // 4.2 - Déclarer variable local et y associer le numéro du mois
        switch(local) { // 4.3 - switch pour associer le numéro du mois au nom du mois
            case 0:
                return "January";
                break;

            case 1:
                return "February";
                break;

            case 2:
                return "March";
                break;

            case 3:
                return "April";
                break;

            case 4:
                return "May";
                break;

            case 5:
                return "June";
                break;

            case 6:
                return "July";
                break;

            case 7:
                return "August";
                break;

            case 8:
                return "September";
                break;

            case 9:
                return "October";
                break;

            case 10:
                return "November";
                break;

            case 11:
                return "December";
                break;
        }
    }

    var year = fullDate.getFullYear(); // 5 - Récupérer et stocker l'année

    var hour = fullDate.getHours(); // 6 - Récupérer et stocker l'heure

    var minutes = fullDate.getMinutes(); // 7 - Récupérer et stocker les minutes

    document.getElementById("target").innerHTML = (day + " " + date + " " + month + " " + year + ", " + hour + "h" + minutes);

})();
