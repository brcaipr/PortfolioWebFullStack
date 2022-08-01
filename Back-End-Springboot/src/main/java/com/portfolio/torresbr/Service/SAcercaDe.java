
package com.portfolio.torresbr.Service;

import com.portfolio.torresbr.Entity.AcercaDe;
import com.portfolio.torresbr.Repository.RAcercaDe;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SAcercaDe {
    @Autowired
    RAcercaDe rAcercaDe;
    public List<AcercaDe> list(){
         return rAcercaDe.findAll();
     }
     
     public Optional<AcercaDe> getOne(int id){
         return rAcercaDe.findById(id);
     }
     
     public Optional<AcercaDe> getByNombre(String nombre){
         return rAcercaDe.findByNombre(nombre);
     }
     
     public void save(AcercaDe acerca){
         rAcercaDe.save(acerca);
     }
     
     public void delete(int id){
         rAcercaDe.deleteById(id);
     }
     
     public boolean existsById(int id){
         return rAcercaDe.existsById(id);
     }
     
     public boolean existsByNombreE(String nombre){
         return rAcercaDe.existsByNombre(nombre);
     }
}
