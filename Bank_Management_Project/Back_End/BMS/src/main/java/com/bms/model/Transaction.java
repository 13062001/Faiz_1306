package com.bms.model;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Transaction {
	@Id
	private int faccNo;
	private int taccNo;
	private double amount;
	private String dt;
	private String time;
	public int getFaccNo() {
		return faccNo;
	}
	public void setFaccNo(int faccNo) {
		this.faccNo = faccNo;
	}
	public int getTaccNo() {
		return taccNo;
	}
	public void setTaccNo(int taccNo) {
		this.taccNo = taccNo;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getDt() {
		return dt;
	}
	public void setDt(String dt) {
		this.dt = dt;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
}
