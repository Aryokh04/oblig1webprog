// Defining an empty array.
let orderArray = [];

// Making a function for ordering tickets.
function orderTickets() {
    // The function starts with creating variables and getting the value from the html
    let chosenMovie = $("#selectmovie").val();
    let amountOfTickets = $("#amount").val();
    let theFirstName = $("#firstname").val();
    let theLastName = $("#lastname").val();
    let thePhoneNr = $("#phonenr").val();
    let theEmail = $("#email").val();

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

    // Creating the first row that shows the info the array contains.
    out = "<table><tr>" +
        "    <th><strong>Movie</strong></th>\n" +
        "    <th><strong>Amount</strong></th>\n" +
        "    <th><strong>First name</strong></th>\n" +
        "    <th><strong>Last name</strong></th>\n" +
        "    <th><strong>PhoneNr</strong></th>\n" +
        "    <th><strong>Email</strong></th>\n" +
        "</tr><br>"

    // Adding a for-loop to get the array elements as a row.
    for (let o of orderArray) {
        out += "<tr>";
        out += "<td>" + o.chosenMovie + "</td><td>" + o.amountOfTickets + "</td><td>" + o.theFirstName + "</td><td>" +
            o.theLastName + "</td><td>" + o.thePhoneNr + "</td><td>" + o.theEmail + "</td>"
        out += "</tr>";
    }
    out += "</table>";

    // Setting the output to display at the div section in html.
    $("#output").html(out)

    // Emptying input after adding elements to array
    chosenMovie = $("#selectmovie").val("");
    amountOfTickets = $("#amount").val("");
    theFirstName = $("#firstname").val("");
    theLastName = $("#lastname").val("");
    thePhoneNr = $("#phonenr").val("");
    theEmail = $("#email").val("");
}

// Creating a function to delete the tickets.
function deleteTheTickets() {
    orderArray = [];
    document.getElementById("output").innerHTML = "";
}
