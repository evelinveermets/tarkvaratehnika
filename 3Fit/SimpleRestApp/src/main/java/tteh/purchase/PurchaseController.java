package tteh.purchase;

import ttu.tteh.requests.CreatePurchaseRequest;
import ttu.tteh.trainer.Trainer;
import ttu.tteh.user.User;

/**
 * Created by Ly Tempel on 09.04.2017.
 */
@RestController
public class PurchaseController {

    private PurchaseService purchaseService;

    public PurchaseController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }


    @RequestMapping(value="/purchases", method=RequestMethod.POST, consumes="application/json")
    public Purchase createPurchase(@RequestBody CreatePurchaseRequest request){
        Purchase purchase = new Purchase();
        User owner = request.getOwner();
        Trainer trainer = request.getTrainer();
        purchase.setOwner(owner);
        purchase.setTrainer(trainer);
        purchase.setAnswers(request.getAnswers);
        return purchaseService.save(purchase);
    }
}
