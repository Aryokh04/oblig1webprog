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

    public void saveOrder(Order inOrder) {
        String sql = "INSERT INTO Orders (ChosenMovie, Amount, FirstName, LastName, PhoneNr, Email) VALUES(?,?,?,?,?,?)";
        db.update(sql, inOrder.getChosenMovie(), inOrder.getAmount(), inOrder.getFirstName(), inOrder.getLastName(), inOrder.getPhoneNr(), inOrder.getEmail());
    }
    public List<Order> getAllOrders() {
        String sql = "SELECT * FROM Orders";
        List<Order> allOrders = db.query(sql, new BeanPropertyRowMapper<>(Order.class));
        return allOrders;
    }

    public void deleteAllOrders() {
        String sql = "DELETE FROM Orders";
        db.update(sql);
    }

    public void deleteOrderIndividually(Long orderID) {
        String sql = "DELETE FROM Orders WHERE OrderID = ?";
        db.update(sql, orderID);
    }

    public Order getOrderDB(Long orderID) {
        String sql = "SELECT * FROM Orders WHERE OrderID = ?";
        Order anOrder = db.queryForObject(sql, new BeanPropertyRowMapper<>(Order.class), orderID);
        return anOrder;
    }

    public void updateOrderIndividually(Order inOrder) {
        String sql = "UPDATE Orders SET ChosenMovie = ?, Amount = ?, FirstName = ?, LastName = ?, PhoneNr = ?, Email = ?"
                + "WHERE OrderID = ?";
        db.update(sql, inOrder.getChosenMovie(), inOrder.getAmount(), inOrder.getFirstName(), inOrder.getLastName(), inOrder.getPhoneNr(), inOrder.getEmail(), inOrder.getOrderID());
    }
}
