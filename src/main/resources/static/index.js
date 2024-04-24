// Function for buying tickets that creates js object with values from input
function confirmOrder() {
    let order = {
        chosenMovie: $("#selectmovie").val(),
        amount: $("#amount").val(),
        firstName: $("#firstname").val(),
        lastName: $("#lastname").val(),
        phoneNr: $("#phonenr").val(),
        email: $("#email").val()
    };
    // Using jQuery´s post to send the order and run getOrders function
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

// Function that gets the data from server, runs newFormat function and logs the data that is received
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

    // Adding a for-loop to get the array elements as a row. Also adding delete and edit buttons to change individual orders
     for (let o of orders) {
        out += "<tr>";
        out += "<td>" + o.chosenMovie + "</td><td>" + o.amount + "</td><td>" + o.firstName + "</td><td>" +
            o.lastName + "</td><td>" + o.phoneNr + "</td><td>" + o.email + "</td><td><button class= 'btn btn-danger' " +
            "onclick='deleteOrderIndividually(" + o.orderID + ")'> Delete Order </button></td>" + "<td> <button class='btn btn-primary' " +
            "onclick='getOrderIndividuallyDB(" + o.orderID + ")'>Change Order info</button></td>";
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

// function that takes an orderID and then uses jQuery´s ajax function to delete an order individually and runs getOrders
// to update the table in frontend
function deleteOrderIndividually(orderID) {
    $.ajax({
        url: "/deleteEachOrder?orderID=" + orderID,
        type: "DELETE",
        success: function() {getOrders()}
    })
}

// For the edit button to show info in inputs with orderID as parameter
function getOrderIndividuallyDB(orderID) {
    let url = "/getAnOrderDB?orderID=" + orderID;
    $.get(url, function (order) {
        $("#theOrderID").val(order.orderID);
        $("#selectmovieEdit").val(order.chosenMovie);
        $("#amountEdit").val(order.amount);
        $("#firstnameEdit").val(order.firstName);
        $("#lastnameEdit").val(order.lastName);
        $("#phonenrEdit").val(order.phoneNr);
        $("#emailEdit").val(order.email);
    });
}

// function that updates with new input values when editing an order and runs getOrders to update frontend table
function changeOrderIndividually() {
    $.ajax({
        url: "/changeOrderIndividually",
        type: "PUT",
        data: {
            orderID: $("#theOrderID").val(),
            chosenMovie: $("#selectmovieEdit").val(),
            amount: $("#amountEdit").val(),
            firstName: $("#firstnameEdit").val(),
            lastName: $("#lastnameEdit").val(),
            phoneNr: $("#phonenrEdit").val(),
            email: $("#emailEdit").val()
        },
        success: function() {getOrders()}
    })
}