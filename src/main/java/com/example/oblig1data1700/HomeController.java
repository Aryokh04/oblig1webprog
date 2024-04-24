package com.example.oblig1data1700;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class HomeController {
    @Autowired
    private OrderRepository rep;

    // Using POST mapping to save an order in DB
    @PostMapping("/saveInfo")
    public void saveOrders(Order inOrder) {
        rep.saveOrder(inOrder);
    }

    // Using GET mapping to return list of orders that are confirmed
    @GetMapping("/getInfo")
    public List<Order> getOrders() {
        return rep.getAllOrders();
    }

    // Function that deletes all the orders in DB
    @PostMapping("/deleteInfo")
    public void deleteOrders() {
        rep.deleteAllOrders();
    }

    // DELETE mapping to delete individual order in DB based on orderID as parameter
    @DeleteMapping("/deleteEachOrder")
    public void deleteOrderIndividually(@RequestParam Long orderID) {
        rep.deleteOrderIndividually(orderID);
    }

    // GET mapping to get an individual order from DB
   @GetMapping("/getAnOrderDB")
    public Order getOrderIndividuallyDB(@RequestParam Long orderID) {
        return rep.getOrderDB(orderID);
    }

    // updates order in DB based using inOrder parameter
    @PutMapping("/changeOrderIndividually")
    public void updateOrderIndividuallyDB(Order inOrder) {
        rep.updateOrderIndividually(inOrder);
    }
}

