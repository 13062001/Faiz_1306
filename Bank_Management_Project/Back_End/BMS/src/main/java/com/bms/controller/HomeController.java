package com.bms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.bms.model.Account;
import com.bms.model.Bank;
import com.bms.model.Transaction;
import com.bms.service.HomeService;
@RestController
@CrossOrigin("http://localhost:4200/")
public class HomeController{
	@Autowired
	HomeService hs;
	@PostMapping("/createAccount/{bifsc}")
	public Account createAccount(@RequestBody Account a,@PathVariable("bifsc") int bifsc) {
		Bank b= hs.retrieveBank(bifsc);
		b.getAl().add(hs.createAccount(a));
		hs.createBank(b);
		int size= b.getAl().size();
		return b.getAl().get(size - 1);
	}
	@GetMapping("/getAccount/{id}")
	public Account retrieveAccount(@PathVariable("id") int accNo) {
		return hs.retrieveAccount(accNo);
	}
	@GetMapping("/getAccount")
	public Iterable<Account> retrieveAccountList() {
		return hs.retrieveAccountList();
	}
	@GetMapping("/getBank")
	public Iterable<Bank> retrieveBankList() {
		return hs.retrieveBankList();
	}
	@GetMapping("/getTran/{accNo}")
	public Iterable<Transaction> retrieveTranList(@PathVariable("accNo") int accNo) {
		return hs.retrieveAccount(accNo).getTran();
	}
	@DeleteMapping("/deleteAccount/{id}")
	public boolean deleteAccount(@PathVariable("id") int accNo) {
		return hs.deleteAccount(accNo);
	}
	@PutMapping("/updateAccount")
	public Account updateAccount(@RequestBody Account a) {
		return hs.updateAccount(a);
	}
	@PostMapping("/transaction")
	public Transaction transaction(@RequestBody Transaction tran) {
		System.out.println("Transaction");
		System.out.println(tran.getFaccNo());
		System.out.println(tran.getTaccNo());
		return hs.transaction(tran);
	}
	@GetMapping("credit/{acc}/{amt}")
	public double creaditAmount(@PathVariable("acc") int accNo,@PathVariable("amt") double amount) {
		hs.creaditAmount(accNo, amount);
		System.out.println("Credit");
		return hs.retrieveAccount(accNo).getBalance();
	}
	@GetMapping("/debit/{acc}/{amt}")
	public double debitAmount(@PathVariable("acc") int accNo,@PathVariable("amt") double amount) {
		hs.debitAmount(accNo, amount);
		return hs.retrieveAccount(accNo).getBalance();
	}
	@PostMapping("/createBank")
	public Bank createBank(@RequestBody Bank a) {
		return hs.createBank(a);
	}
	@GetMapping("/retrieveBank/{bifsc}")
	public Bank retrieveBank(@PathVariable("bifsc") int bifsc) {
		Bank b =hs.retrieveBank(bifsc);
		return b;
	}
	@DeleteMapping("/deleteBank/{bifsc}")
	public boolean deleteBank(@PathVariable("bifsc") int bifsc) {
		return hs.deleteBank(bifsc);
	}
	@PutMapping("/updateBank")
	public Bank updateBank(@RequestBody Bank a) {
		return hs.updateBank(a);
	}

	
}
