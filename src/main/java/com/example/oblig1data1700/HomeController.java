package com.example.oblig1data1700;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

// RestController with post and get mapping using an array that includes all orders.
@RestController
public class HomeController {
    @Autowired
    private OrderRepository rep;
    @PostMapping("/saveInfo")
    public void saveOrders(Order inOrder) {
        rep.saveOrder(inOrder);
    }

    @GetMapping("/getInfo")
    public List<Order> getOrders() {
        return rep.getAllOrders();
    }

    @PostMapping("/deleteInfo")
    public void deleteOrders() {
        rep.deleteAllOrders();
    }

    @DeleteMapping("/deleteEachOrder")
    public void deleteOrderIndividually(@RequestParam Long orderID) {
        rep.deleteOrderIndividually(orderID);
    }

    /*
   @GetMapping("getTheOrderDB")
    public void getOrderIndividuallyDB(@RequestParam Long orderID) {
        rep.changeOrderIndividually(orderID);
    }

    @PostMapping("/editedOrder")
    public void editedOrderDB(Order inOrder) {
        rep.changeOrderIndividually(inOrder);
    }
    @PostMapping("/changeAnOrder")
    public void changeOrderIndividually(Order inOrder){
        rep.changeOrderIndividually(inOrder);
    }
    */
}

