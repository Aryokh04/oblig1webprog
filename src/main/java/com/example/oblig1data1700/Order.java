package com.example.oblig1data1700;

// Creating a POJO for saving in server

public class Order {
    private Long orderID;
    private String chosenMovie;
    private String amount;
    private String firstName;
    private String lastName;
    private String phoneNr;
    private String email;

    public Order(Long orderID, String chosenMovie, String amount, String firstName, String lastName, String phoneNr, String email) {
        this.orderID = orderID;
        this.chosenMovie = chosenMovie;
        this.amount = amount;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNr = phoneNr;
        this.email = email;
    }

    public Order(){}

    public Long getOrderID() {
        return orderID;
    }

    public void setOrderID(Long orderID) {
        this.orderID = orderID;
    }

    public String getChosenMovie() {
        return chosenMovie;
    }

    public void setChosenMovie(String chosenMovie) {
        this.chosenMovie = chosenMovie;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNr() {
        return phoneNr;
    }

    public void setPhoneNr(String phoneNr) {
        this.phoneNr = phoneNr;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}





