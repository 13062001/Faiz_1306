package com.bms.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bms.model.Account;
@Repository
public interface HomeRepository extends CrudRepository<Account, Integer>{
	@Query("from Account where accNo=:accNo")
	public Account getAccount(@Param("accNo")int accNo);
	
	@Query("delete from Account where accNo=:accNo")
	public boolean deleteAccount(@Param("accNo")int accNo);
}
