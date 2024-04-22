// Function for buying tickets that creates js object and clears input after each order
function confirmOrder() {
    let order = {
        chosenMovie: $("#selectmovie").val(),
        amount: $("#amount").val(),
        firstName: $("#firstname").val(),
        lastName: $("#lastname").val(),
        phoneNr: $("#phonenr").val(),
        email: $("#email").val()
    };
    $.post("/saveInfo", order, function() {
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

// Function that gets the data from server.
function getOrders() {
    $.get("/getInfo", function(data) {
        newFormat(data);
        console.log(data);
    });
}

// Presents the orders in a table structure.
function newFormat(orders) {
    let out = "<table class='table table-striped table-bordered'><tr>" +
        "    <th><strong>Movie</strong></th>\n" +
        "    <th><strong>Amount</strong></th>\n" +
        "    <th><strong>First name</strong></th>\n" +
        "    <th><strong>Last name</strong></th>\n" +
        "    <th><strong>PhoneNr</strong></th>\n" +
        "    <th><strong>Email</strong></th>\n" +
        "    <th><strong>Delete</strong></th>\n" +
        "    <th><strong>Edit</strong></th>\n" +
        "</tr><br>";

    // Adding a for-loop to get the array elements as a row.
     for (let o of orders) {
        out += "<tr>";
        out += "<td>" + o.chosenMovie + "</td><td>" + o.amount + "</td><td>" + o.firstName + "</td><td>" +
            o.lastName + "</td><td>" + o.phoneNr + "</td><td>" + o.email + "</td><td><button class= 'btn btn-danger' " +
            "onclick='deleteOrderIndividually(" + o.orderID + ")'> Delete Order </button></td>" + "<td> <button class='btn btn-primary' " +
            "onclick='changeOrderIndividually(" + o.orderID + ")'>Change Order info</button></td>";
        out += "</tr>";
     }
    out += "</table>";
    $("#output").html(out);
}

// Function that deletes the tickets with post that clears array and setting output div to empty string.
function deleteTheTickets() {
    $.post("/deleteInfo")
    $("#output").html("");
}

function deleteOrderIndividually(orderID) {
    $.ajax({url: "/deleteEachOrder?orderID="+orderID, method: "DELETE"}).done(function() {getOrders()});
}

/*
 function changeOrderIndividually(orderID) {
    $("#theOrderID").html() = orderID;
    $.get("/getTheOrderDB?orderID="+orderID, function(data){
        $("#selectmovieEdit").val() = data.chosenMovie;
        $("#amountEdit").val() = data.amount;
        $("#firstnameEdit").val() = data.firstName;
        $("#lastnameEdit").val() = data.lastName;
        $("#phonenrEdit").val() = data.phoneNr;
        $("#emailEdit").val() = data.email;
    })
}

function changeOrderIndividuallyDB() {
    let order = {
        orderID: $("#theOrderID").html(),
        chosenMovie: $("#firstnameEdit").val(),
        amount: $("#amountEdit").val(),
        firstName: $("#firstnameEdit").val(),
        lastName: $("#lastnameEdit").val(),
        phoneNr: $("#phonenrEdit").val(),
        email: $("#emailEdit").val()
    };
    console.log($("#theOrderID").val());
    $.post("/editedOrder", order, function(data){})

}
 */