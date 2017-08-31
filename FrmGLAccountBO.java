package com.sic.tasa.dataobject;

import java.io.Serializable;

public class FrmGLAccountBO implements Serializable{


    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String general; 
    private String ledger; 
    private String account;   
    private String glAccountProductId;    
    private String glAccountProjectId;    
    private String clearingControl;
    private String lastUpdatedBy; 
    private String LastUpdated;
    private String sequenceNo;
    private String cmdQuery;  
    private String cmdInsert;
    private String cmdSave;
    private String txtA;    
    private String txtB;    
    private String txtC;    
    private String txtD;
	public String getGeneral() {
		return general;
	}
	public void setGeneral(String general) {
		this.general = general;
	}
	public String getLedger() {
		return ledger;
	}
	public void setLedger(String ledger) {
		this.ledger = ledger;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getGlAccountProductId() {
		return glAccountProductId;
	}
	public void setGlAccountProductId(String glAccountProductId) {
		this.glAccountProductId = glAccountProductId;
	}
	public String getGlAccountProjectId() {
		return glAccountProjectId;
	}
	public void setGlAccountProjectId(String glAccountProjectId) {
		this.glAccountProjectId = glAccountProjectId;
	}
	public String getClearingControl() {
		return clearingControl;
	}
	public void setClearingControl(String clearingControl) {
		this.clearingControl = clearingControl;
	}
	public String getLastUpdatedBy() {
		return lastUpdatedBy;
	}
	public void setLastUpdatedBy(String lastUpdatedBy) {
		this.lastUpdatedBy = lastUpdatedBy;
	}
	public String getLastUpdated() {
		return LastUpdated;
	}
	public void setLastUpdated(String lastUpdated) {
		LastUpdated = lastUpdated;
	}
	public String getSequenceNo() {
		return sequenceNo;
	}
	public void setSequenceNo(String sequenceNo) {
		this.sequenceNo = sequenceNo;
	}
	public String getCmdQuery() {
		return cmdQuery;
	}
	public void setCmdQuery(String cmdQuery) {
		this.cmdQuery = cmdQuery;
	}
	public String getCmdInsert() {
		return cmdInsert;
	}
	public void setCmdInsert(String cmdInsert) {
		this.cmdInsert = cmdInsert;
	}
	public String getTxtA() {
		return txtA;
	}
	public void setTxtA(String txtA) {
		this.txtA = txtA;
	}
	public String getTxtB() {
		return txtB;
	}
	public void setTxtB(String txtB) {
		this.txtB = txtB;
	}
	public String getTxtC() {
		return txtC;
	}
	public void setTxtC(String txtC) {
		this.txtC = txtC;
	}
	public String getTxtD() {
		return txtD;
	}
	public void setTxtD(String txtD) {
		this.txtD = txtD;
	}
	public String getCmdSave() {
		return cmdSave;
	}
	public void setCmdSave(String cmdSave) {
		this.cmdSave = cmdSave;
	}
	@Override
	public String toString() {
		return "FrmGLAccountBO [general=" + general + ", ledger=" + ledger + ", account=" + account
				+ ", glAccountProductId=" + glAccountProductId + ", glAccountProjectId=" + glAccountProjectId
				+ ", clearingControl=" + clearingControl + ", lastUpdatedBy=" + lastUpdatedBy + ", LastUpdated="
				+ LastUpdated + ", sequenceNo=" + sequenceNo + ", cmdQuery=" + cmdQuery + ", cmdInsert=" + cmdInsert
				+ ", cmdSave=" + cmdSave + ", txtA=" + txtA + ", txtB=" + txtB + ", txtC=" + txtC + ", txtD=" + txtD
				+ "]";
	}
	
    
}
