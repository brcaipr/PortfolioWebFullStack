package com.portfolio.torresbr.Service;

import com.portfolio.torresbr.Entity.ExpLaboral;
import com.portfolio.torresbr.Interface.IExpLaboralService;
import com.portfolio.torresbr.Repository.IExpLaboralRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpExpLaboralService implements IExpLaboralService{
    @Autowired IExpLaboralRepository iexplaboralrepository;
    @Override
    public List<ExpLaboral> getExpLaboral() {
       List<ExpLaboral> explaboral=iexplaboralrepository.findAll();
       return explaboral;
    }

    @Override
    public void saveExpLaboral(ExpLaboral explaboral) {
        iexplaboralrepository.save(explaboral);
    }

    @Override
    public void deleteExpLaboral(Long id) {
        iexplaboralrepository.deleteById(id);
    }

    @Override
    public ExpLaboral findExpLaboral(Long id) {
        ExpLaboral explaboral=iexplaboralrepository.findById(id).orElse(null);
        return explaboral;
    }
    
}
