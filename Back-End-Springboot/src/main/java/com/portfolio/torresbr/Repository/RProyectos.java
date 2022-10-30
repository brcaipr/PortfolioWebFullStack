
package com.portfolio.torresbr.Repository;

import com.portfolio.torresbr.Entity.Proyectos;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RProyectos extends JpaRepository<Proyectos,Integer> {
    Optional<Proyectos> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
    
}
