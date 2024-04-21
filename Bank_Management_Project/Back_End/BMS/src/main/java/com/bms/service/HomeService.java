package com.bms.service;

import com.bms.model.Bank;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bms.model.Account;
import com.bms.model.RBI;
import com.bms.model.Transaction;
import com.bms.repository.HomeRepository;
import com.bms.repository.BankRepository;
import com.bms.repository.TranRepository;

@Service
public class HomeService implements RBI {

	@Autowired
	HomeRepository hr;
	@Autowired
	TranRepository tr;
	@Autowired
	BankRepository br;

	public Bank createBank(Bank a) {
		return br.save(a);
	}

	public Iterable<Account> retrieveAccountList() {
		return hr.findAll();
	}

	public Iterable<Bank> retrieveBankList() {
		return br.findAll();
	}

	public Bank retrieveBank(int bifsc) {
		return br.getBank(bifsc);
	}

	public boolean deleteBank(int bifsc) {
		return br.deleteBank(bifsc);
	}

	public Bank updateBank(Bank a) {
		return br.save(a);
	}

	@Override
	public Account createAccount(Account a) {
		return hr.save(a);
	}

	@Override
	public Account retrieveAccount(int accNo) {
		return hr.getAccount(accNo);
	}

	@Override
	public boolean deleteAccount(int accNo) {
		return hr.deleteAccount(accNo);
	}

	@Override
	public Account updateAccount(Account a) {
		return hr.save(a);
	}

	@Override
	public Transaction transaction(Transaction tran) {

        Random rand = new Random();
		Account a = hr.getAccount(tran.getFaccNo());
		a.setBalance(a.getBalance() - tran.getAmount());
		Account b = hr.getAccount(tran.getTaccNo());
		b.setBalance(b.getBalance() + tran.getAmount());
		tran.setFaccNo(rand.nextInt(90000) + 10000);
		tr.save(tran);
		a.getTran().add(tran);
		hr.save(a);
		hr.save(b);
		return tran;
	}

	@Override
	public void creaditAmount(int accNo, double amount) {
		Account acc = hr.getAccount(accNo);
		acc.setBalance(acc.getBalance() + amount);
		hr.save(acc);
	}

	@Override
	public void debitAmount(int accNo, double amount) {
		Account acc = hr.getAccount(accNo);
		if (acc.getBalance() - amount >= 1000) {
			acc.setBalance(acc.getBalance() + amount);
			hr.save(acc);
		}
	}

}
