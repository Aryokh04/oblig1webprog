package com.example.oblig1data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class OrderRepository {
    @Autowired
    private JdbcTemplate db;

    // Function for SQL statement that adds the order values to the DB
    public void saveOrder(Order inOrder) {
        String sql = "INSERT INTO Orders (ChosenMovie, Amount, FirstName, LastName, PhoneNr, Email) VALUES(?,?,?,?,?,?)";
        db.update(sql, inOrder.getChosenMovie(), inOrder.getAmount(), inOrder.getFirstName(), inOrder.getLastName(), inOrder.getPhoneNr(), inOrder.getEmail());
    }

    // Function for SQL statement that shows all the orders and returns a list of orders
    public List<Order> getAllOrders() {
        String sql = "SELECT * FROM Orders";
        List<Order> allOrders = db.query(sql, new BeanPropertyRowMapper<>(Order.class));
        return allOrders;
    }

    // Function for SQL statement that deletes all the orders in DB
    public void deleteAllOrders() {
        String sql = "DELETE FROM Orders";
        db.update(sql);
    }

    // Function for SQL statement that deletes individual orders in DB by orderID
    public void deleteOrderIndividually(Long orderID) {
        String sql = "DELETE FROM Orders WHERE OrderID = ?";
        db.update(sql, orderID);
    }

    // Function for SQL statement that shows a specific order and returns it
    public Order getOrderDB(Long orderID) {
        String sql = "SELECT * FROM Orders WHERE OrderID = ?";
        Order anOrder = db.queryForObject(sql, new BeanPropertyRowMapper<>(Order.class), orderID);
        return anOrder;
    }

    // Function for SQL statement that updates the DB based on chosen orderID
    public void updateOrderIndividually(Order inOrder) {
        String sql = "UPDATE Orders SET ChosenMovie = ?, Amount = ?, FirstName = ?, LastName = ?, PhoneNr = ?, Email = ?"
                + "WHERE OrderID = ?";
        db.update(sql, inOrder.getChosenMovie(), inOrder.getAmount(), inOrder.getFirstName(), inOrder.getLastName(), inOrder.getPhoneNr(), inOrder.getEmail(), inOrder.getOrderID());
    }
}
