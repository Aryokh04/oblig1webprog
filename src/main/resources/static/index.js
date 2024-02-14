// Defining an empty array.
let orderArray = [];

// Making a function
function orderTickets() {
    // The function starts with creating variables and getting the value from the html
    let chosenMovie = document.getElementById("selectmovie").value;
    let amountOfTickets = document.getElementById("amount").value;
    let theFirstName = document.getElementById("firstname").value;
    let theLastName = document.getElementById("lastname").value;
    let thePhoneNr = document.getElementById("phonenr").value;
    let theEmail = document.getElementById("email").value;

    // Creating an object "persons" with the variables.
    let persons = {
        chosenMovie,
        amountOfTickets,
        theFirstName,
        theLastName,
        thePhoneNr,
        theEmail
    };

    // Pushing the object into the empty array.
    orderArray.push(persons);
}
