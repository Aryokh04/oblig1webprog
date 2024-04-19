package com.example.oblig1data1700;

// Defining each attribute for the Order object in java.
// Using lombok dependency for creating a constructor, empty constructor and get/set.

public class Order {
    private String chosenMovie;
    private String amount;
    private String firstName;
    private String lastName;
    private String phoneNr;
    private String email;

    public Order(String chosenMovie, String amount, String firstName, String lastName, String phoneNr, String email) {
        this.chosenMovie = chosenMovie;
        this.amount = amount;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNr = phoneNr;
        this.email = email;
    }

    public Order(){}

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





