
package com.portfolio.torresbr.Repository;

import com.portfolio.torresbr.Entity.AcercaDe;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RAcercaDe extends JpaRepository<AcercaDe, Integer>{
    public Optional<AcercaDe> findByNombre(String nombre);
    public boolean existsByNombre(String nombre); 
    
}
