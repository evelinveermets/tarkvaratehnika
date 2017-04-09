package tteh.purchase;

import java.util.List;

/**
 * Created by Ly Tempel on 09.04.2017.
 */
public class PurchaseService {
    private PurchaseRepository purchaseRepository;

    public PurchaseService(PurchaseRepository userRepository) {
        this.purchaseRepository = userRepository;
    }

    Purchase addPurchase(Purchase purchase) {
        return purchaseRepository.save(purchase);
    }

    List<Purchase> getAllUsers() {
        return purchaseRepository.findAll();
    }

    Purchase getUserById(long userId) {
        return purchaseRepository.findOne(userId);
    }
}
