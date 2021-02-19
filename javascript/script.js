/* Mobile Navigation */

// assign navigation and buttons to variables
const nav = document.getElementById("mobile");
const mobileBtn = document.getElementById('menu-open');
const mobileBtnClose = document.getElementById('menu-close');

// show the mobile nav
function openNav() {
    //nav.style.display = "block";
    // stop scrolling
    document.querySelector('body').style.overflowY = "hidden";
    // mobile nav menu sliding down
    nav.style.transform = "translateY(0%)";
}

// hide the mobile nav
function closeNav() {
    //nav.style.display = "none";
    // enable scrolling
    document.querySelector('body').style.overflowY = "unset";
    // mobile nav menu sliding back up
    nav.style.transform = "translateY(-400%)";
}

/* Reservation/Price Estimation of Vehicle Rental */

// assign elements to variables
const vehicleItems = document.getElementById("vehicleItems");
const fuelItems = document.getElementById("fuelItems");
const transmissionItems = document.getElementById("transmissionItems");
const daysItem = document.getElementById("days");

// reset values to default
function resetToDefault() {
    fuelItems.options[0].selected = true;
    transmissionItems.options[0].selected = true;
    daysItem.value = "1";
}

// price calculation in real time
function calculatePrice() {

    //get selected price of chosen vehicle from its option value
    var vehicle = vehicleItems.options[vehicleItems.selectedIndex].value;

    //convert vehicle value string to integer
    vehicle = parseInt(vehicle);

    //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
    switch (vehicle) {
        // if "moto" is chosen
        case 10:
            //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
            fuelItems.hidden = false;
            fuelItems.options[1].hidden = false;
            fuelItems.options[2].hidden = true;
            fuelItems.options[3].hidden = true;
            fuelItems.options[4].hidden = false;
            //show transmission type [1:manual; 2:auto]
            transmissionItems.hidden = true;
            break;

        // if "citadine" is chosen
        case 12:
            //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
            fuelItems.hidden = false;
            fuelItems.options[1].hidden = false;
            fuelItems.options[2].hidden = false;
            fuelItems.options[3].hidden = false;
            fuelItems.options[4].hidden = false;
            //show transmission type [1:manual; 2:auto]
            transmissionItems.hidden = false;
            transmissionItems.options[1].hidden = false;
            transmissionItems.options[2].hidden = true;
            break;

        // if "compact" is chosen
        case 14:
            //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
            fuelItems.hidden = false;
            fuelItems.options[1].hidden = false;
            fuelItems.options[2].hidden = false;
            fuelItems.options[3].hidden = false;
            fuelItems.options[4].hidden = true;
            //show transmission type [1:manual; 2:auto]
            transmissionItems.hidden = false;
            transmissionItems.options[1].hidden = false;
            transmissionItems.options[2].hidden = true;
            break;

        // if "utilitaire" is chosen
        case 16:
            //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
            fuelItems.hidden = false;
            fuelItems.options[1].hidden = true;
            fuelItems.options[2].hidden = false;
            fuelItems.options[3].hidden = true;
            fuelItems.options[4].hidden = true;
            //show transmission type [1:manual; 2:auto]
            transmissionItems.hidden = false;
            transmissionItems.options[1].hidden = false;
            transmissionItems.options[2].hidden = true;
            break;

        // if "berline" is chosen
        case 20:
            //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
            fuelItems.hidden = false;
            fuelItems.options[1].hidden = false;
            fuelItems.options[2].hidden = false;
            fuelItems.options[3].hidden = false;
            fuelItems.options[4].hidden = true;
            //show transmission type [1:manual; 2:auto]
            transmissionItems.hidden = false;
            transmissionItems.options[1].hidden = true;
            transmissionItems.options[2].hidden = false;
            break;

        // if "camion" is chosen
        case 250:
            //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
            fuelItems.hidden = false;
            fuelItems.options[1].hidden = true;
            fuelItems.options[2].hidden = false;
            fuelItems.options[3].hidden = true;
            fuelItems.options[4].hidden = true;
            //show transmission type [1:manual; 2:auto]
            transmissionItems.hidden = false;
            transmissionItems.options[1].hidden = true;
            transmissionItems.options[2].hidden = false;
            break;

        // if "engin de chantier" is chosen
        case 900:
            //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
            fuelItems.hidden = false;
            fuelItems.options[1].hidden = false;
            fuelItems.options[2].hidden = false;
            fuelItems.options[3].hidden = true;
            fuelItems.options[4].hidden = true;
            //show transmission type [1:manual; 2:auto]
            transmissionItems.hidden = false;
            transmissionItems.options[1].hidden = false;
            transmissionItems.options[2].hidden = true;
            break;

        default:
            break;
    }

    //get selected fuel/transmission/days values
    var fuel = fuelItems.options[fuelItems.selectedIndex].value;
    var transmission = transmissionItems.options[transmissionItems.selectedIndex].value;
    var days = daysItem.value;

    //convert fuel and transmission value strings to integers
    fuel = parseInt(fuel);
    transmission = parseInt(transmission);

    //calculate total value  
    var total = (vehicle + ((vehicle * fuel) / 100) + ((vehicle * transmission) / 100)) * days;
    //round the decimals to 2 numbers
    total = total.toFixed(2);

    //assign value to rentPrice = Show the calculated price
    document.getElementById("rentPrice").value = total + " €";

}

/* Contact Form User Input and Overlay */

// get the overlay
var overlay = document.getElementById("contact-overlay");
var overlayEmpty = document.getElementById("contact-overlay-empty");


// display the overlay
function openOverlay() {
    var contactName = document.getElementById("name").value;
    var contactEmail = document.getElementById("email").value;
    var contactSubject = document.getElementById("subject").value;
    var contactMessage = document.getElementById("message").value;
    // checking if the inputs are empty else get them from the form and into the overlay
    if (contactName == "" || contactEmail == "" || contactSubject == "" || contactMessage == "") {
        //alert("Please fill all the required fields.");
        overlayEmpty.style.display = "block";
        // stop scrolling
        document.querySelector('body').style.overflowY = "hidden";
        return false;
    } else {
        document.getElementById("confirm-name").innerHTML = contactName;
        document.getElementById("confirm-email").innerHTML = contactEmail;
        document.getElementById("confirm-subject").innerHTML = contactSubject;
        document.getElementById("confirm-message").innerHTML = contactMessage;
        // display the overlay with the user informations
        overlay.style.display = "block";
        // stop scrolling
        document.querySelector('body').style.overflowY = "hidden";
    }
}
// hide the overlay
function closeOverlay() {
    overlay.style.display = "none";
    overlayEmpty.style.display = "none";
    // enable scrolling
    document.querySelector('body').style.overflowY = "unset";
}