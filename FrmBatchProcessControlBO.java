package com.sic.tasa.dataobject;

import java.io.Serializable;  
/*************************************************************************
 * 
 * HCL CONFIDENTIAL
 * _________________________________________________________________________________
 * 
 * HCL is a trademark of HCL Company.
 *
 * Copyright � 2017 HCL. All rights reserved.
 * 
 * NOTICE: All information contained herein is, and remains the property of HCL
 * and its suppliers, if any. The intellectual and technical concepts contained
 * herein are proprietary to HCL and its suppliers and may be covered by U.S.
 * and Foreign Patents, patents in process, and are protected by trade secret or
 * copyright law. Dissemination of this information or reproduction of this
 * material is strictly forbidden unless prior written permission is obtained
 * from HCL.
 *
 *************************************************************************/
// Author : Generated by ATMA �
// Revision History : 

public class FrmBatchProcessControlBO implements Serializable{


    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String txtApp; 
    private String txtDate; 
    private String cmdQuery; 
    private String cmdRefresh; 
    private String cmdClose;
    private String processDate;
    private String asOfDate;
    private String completedStep;
    private String completedFlag;
    private String glPostingCode;
    private String executedFrom;
	public String getTxtApp() {
		return txtApp;
	}
	public void setTxtApp(String txtApp) {
		this.txtApp = txtApp;
	}
	public String getTxtDate() {
		return txtDate;
	}
	public void setTxtDate(String txtDate) {
		this.txtDate = txtDate;
	}
	public String getCmdQuery() {
		return cmdQuery;
	}
	public void setCmdQuery(String cmdQuery) {
		this.cmdQuery = cmdQuery;
	}
	public String getCmdRefresh() {
		return cmdRefresh;
	}
	public void setCmdRefresh(String cmdRefresh) {
		this.cmdRefresh = cmdRefresh;
	}
	public String getCmdClose() {
		return cmdClose;
	}
	public void setCmdClose(String cmdClose) {
		this.cmdClose = cmdClose;
	}
	public String getProcessDate() {
		return processDate;
	}
	public void setProcessDate(String processDate) {
		this.processDate = processDate;
	}
	public String getAsOfDate() {
		return asOfDate;
	}
	public void setAsOfDate(String asOfDate) {
		this.asOfDate = asOfDate;
	}
	public String getCompletedStep() {
		return completedStep;
	}
	public void setCompletedStep(String completedStep) {
		this.completedStep = completedStep;
	}
	public String getCompletedFlag() {
		return completedFlag;
	}
	public void setCompletedFlag(String completedFlag) {
		this.completedFlag = completedFlag;
	}
	public String getGlPostingCode() {
		return glPostingCode;
	}
	public void setGlPostingCode(String glPostingCode) {
		this.glPostingCode = glPostingCode;
	}
	public String getExecutedFrom() {
		return executedFrom;
	}
	public void setExecutedFrom(String executedFrom) {
		this.executedFrom = executedFrom;
	}
	@Override
	public String toString() {
		return "FrmBatchProcessControlBO [txtApp=" + txtApp + ", txtDate=" + txtDate + ", cmdQuery=" + cmdQuery
				+ ", cmdRefresh=" + cmdRefresh + ", cmdClose=" + cmdClose + ", processDate=" + processDate
				+ ", asOfDate=" + asOfDate + ", completedStep=" + completedStep + ", completedFlag=" + completedFlag
				+ ", glPostingCode=" + glPostingCode + ", executedFrom=" + executedFrom + "]";
	}
    

     
    
}