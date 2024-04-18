package com.example.oblig1data1700;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Defining each attribute for the Order object in java.
// Using lombok dependency for creating a constructor, empty constructor and get/set.
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Order {
    private String chosenMovie;
    private String amount;
    private String firstName;
    private String lastName;
    private String phoneNr;
    private String email;

}


