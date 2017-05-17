package ttu.tteh.purchase;

import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * Created by Ly Tempel on 09.04.2017.
 */
@Service
public class PurchaseService {
    private PurchaseRepository purchaseRepository;

  public PurchaseService(PurchaseRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }
    Purchase findPurchaseById(long id){
      return purchaseRepository.findOne(id);
    }

    List<Purchase> getAllPurchases() {
        return purchaseRepository.findAll();
    }

    Purchase getPurchaseById(long userId) {
        return purchaseRepository.findOne(userId);
    }

  public void save(Purchase purchase) {
    purchaseRepository.save(purchase);
  }

  public void setPaid(Purchase p) {
    p.setPaid_on(new Date());
    purchaseRepository.save(p);
  }

  public void setResponse(Purchase purchase, String response) {
    purchase.setPurchasedItem(response);
    purchaseRepository.save(purchase);
  }
}
