package com.bms.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bms.model.Bank;

@Repository
public interface BankRepository extends CrudRepository<Bank, Integer>{
	@Query("from Bank where bifsc=:bifsc")
	public Bank getBank(@Param("bifsc")int bifsc);
	
	@Query("delete from Bank where bifsc=:bifsc")
	public boolean deleteBank(@Param("bifsc")int bifsc);

}
