package oslomet.webprog;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.ArrayList;

@RestController
public class HomeController {
    public final List<Order> allOrders = new ArrayList<>();
    @PostMapping("/saveInfo")
    public void saveOrders(Order inOrder) {
        allOrders.add(inOrder);
    }

    @GetMapping("/getInfo")
    public List<Order> getOrders() {
        return allOrders;
    }
}
