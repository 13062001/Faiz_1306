package com.bms.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
@Entity
public class Bank{
	private String bname;
	@Id
	private long bifsc;
	private long bcontact;
	private String bemail;
	private String baddress;
	@OneToMany
	private List<Account> al = new ArrayList<>();
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public long getBifsc() {
		return bifsc;
	}
	public void setBifsc(long bifsc) {
		this.bifsc = bifsc;
	}
	public long getBcontact() {
		return bcontact;
	}
	public void setBcontact(long bcontact) {
		this.bcontact = bcontact;
	}
	public String getBemail() {
		return bemail;
	}
	public void setBemail(String bemail) {
		this.bemail = bemail;
	}
	public String getBaddress() {
		return baddress;
	}
	public void setBaddress(String baddress) {
		this.baddress = baddress;
	}
	public List<Account> getAl() {
		return al;
	}
	public void setAl(List<Account> al) {
		this.al = al;
	}
}
