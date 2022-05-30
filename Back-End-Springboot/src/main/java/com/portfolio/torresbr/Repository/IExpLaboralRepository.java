
package com.portfolio.torresbr.Repository;

import com.portfolio.torresbr.Entity.ExpLaboral;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IExpLaboralRepository extends JpaRepository<ExpLaboral,Long> {
    
}
