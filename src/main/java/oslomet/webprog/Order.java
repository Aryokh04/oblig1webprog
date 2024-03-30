package oslomet.webprog;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
