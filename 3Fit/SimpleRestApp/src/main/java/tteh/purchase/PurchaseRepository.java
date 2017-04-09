package tteh.purchase;

import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ly Tempel on 09.04.2017.
 */
@Repository
public interface PurchaseRepository extends CrudRepository<Purchase, Long>{
    @Override
    public List<Purchase> findAll();
}
