package com.portfolio.torresbr.Repository;

import com.portfolio.torresbr.Entity.Educacion;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IEducacionRepository extends JpaRepository<Educacion,Long> {
    
}
