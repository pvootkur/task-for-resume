package com.sic.tasa.dataobject;

import java.io.Serializable;  
import java.util.Date;
import java.util.List;
/*************************************************************************
 * 
 * SIC CONFIDENTIAL
 * _________________________________________________________________________________
 * 
 * SIC is a trademark of SIC Company.
 *
 * Copyright � 2017 SIC. All rights reserved.
 * 
 * NOTICE: All information contained herein is, and remains the property of SIC
 * and its suppliers, if any. The intellectual and technical concepts contained
 * herein are proprietary to SIC and its suppliers and may be covered by U.S.
 * and Foreign Patents, patents in process, and are protected by trade secret or
 * copyright law. Dissemination of this information or reproduction of this
 * material is strictly forbidden unless prior written permission is obtained
 * from SIC.
 *
 *************************************************************************/
// Author : Generated by ATMA �
// Revision History : 

public class FrmSEIMaintBO implements Serializable{


	private String cboFunds ;
	
	private String cboMIPSeq;
	
	private String weekend_ind;

	public String getCboFunds() {
		return cboFunds;
	}

	public void setCboFunds(String cboFunds) {
		this.cboFunds = cboFunds;
	}

	public String getCboMIPSeq() {
		return cboMIPSeq;
	}

	public void setCboMIPSeq(String cboMIPSeq) {
		this.cboMIPSeq = cboMIPSeq;
	}

	public String getWeekend_ind() {
		return weekend_ind;
	}

	public void setWeekend_ind(String weekend_ind) {
		this.weekend_ind = weekend_ind;
	}
	
	
		
}