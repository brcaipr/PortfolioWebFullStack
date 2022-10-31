package com.portfolio.torresbr.Controller;

import com.portfolio.torresbr.Entity.ExpLaboral;
import com.portfolio.torresbr.Interface.IExpLaboralService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://frontendfinalbr.web.app")
public class ExpLaboralController {
    @Autowired IExpLaboralService iexplaboralService;
    
    @GetMapping("/explaboral/lista")
    public List<ExpLaboral> getExpLaboral(){
        return iexplaboralService.getExpLaboral();
    }
    
    @PostMapping("/explaboral/crear")
    public String createExpLaboral(@RequestBody ExpLaboral explaboral){
        iexplaboralService.saveExpLaboral(explaboral);
        return "La experiencia laboral fue creada con exito";
    
    }
    
    @DeleteMapping("/explaboral/borrar/{id}")
    public String deleteExpLaboral(@PathVariable Long id){
        iexplaboralService.deleteExpLaboral(id);
        return "La experiencia laboral fue borrada con exito";
    }
    
    @PutMapping("/explaboral/editar/{id}")
    public ExpLaboral editExpLaboral(@PathVariable Long id,
                                     @RequestParam("nombre") String NewNombre,
                                     @RequestParam("anio_inicio") String NewAnio_inicio,
                                     @RequestParam("anio_fin") String NewAnio_fin,
                                     @RequestParam("detalle") String NewDetalle,
                                     @RequestParam("img") String NewImg){
        ExpLaboral explaboral=iexplaboralService.findExpLaboral(id);
        
        explaboral.setNombre(NewNombre);
        explaboral.setAnio_inicio(NewAnio_inicio);
        explaboral.setAnio_fin(NewAnio_fin);
        explaboral.setDetalle(NewDetalle);
        explaboral.setImg(NewImg);
        
        iexplaboralService.saveExpLaboral(explaboral);
        return explaboral;
        
    }
                                     
    
}
