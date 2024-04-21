package com.bms.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bms.model.Transaction;

@Repository
public interface TranRepository extends CrudRepository<Transaction, Integer>{

}
