
function confirmOrder() {
    let order = {
        chosenMovie: $("#selectmovie").val(),
        amount: $("#amount").val(),
        firstName: $("#firstname").val(),
        lastName: $("#lastname").val(),
        phoneNr: $("#phonenr").val(),
        email: $("#email").val()
    };
    console.log(order);
    $.post("http://localhost:8080/saveInfo", order, function() {
        getOrders();
    });
    // Clear input
    $("#selectmovie").val("");
    $("#amount").val("");
    $("#firstname").val("");
    $("#lastname").val("");
    $("#phonenr").val("");
    $("#email").val("");
}

function getOrders() {
    $.get("http://localhost:8080/getInfo", function(data) {
        NewFormat(data);
        console.log(data);
    });
}

function newFormat(orders) {
    let out = "<table class='table table-striped table-bordered'><tr>" +
        "    <th><strong>Movie</strong></th>\n" +
        "    <th><strong>Amount</strong></th>\n" +
        "    <th><strong>First name</strong></th>\n" +
        "    <th><strong>Last name</strong></th>\n" +
        "    <th><strong>PhoneNr</strong></th>\n" +
        "    <th><strong>Email</strong></th>\n" +
        "</tr><br>";

    // Adding a for-loop to get the array elements as a row.
     for (let o of orders) {
        out += "<tr>";
        out += "<td>" + o.chosenMovie + "</td><td>" + o.amount + "</td><td>" + o.firstName + "</td><td>" +
            o.lastName + "</td><td>" + o.phoneNr + "</td><td>" + o.email + "</td>";
        out += "</tr>";
     }
    out += "</table>";
    $("#output").html(out);
}
