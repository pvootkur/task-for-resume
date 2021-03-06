package com.sic.tasa.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sic.tasa.dataobject.FrmBatchProcessControlBO;
import com.sic.tasa.exceptions.TASABusinessException;
import com.sic.tasa.repositories.IFrmBatchProcessControlRepository;
import com.sic.tasa.service.IFrmBatchProcessControlService;
import com.sic.tasa.util.AtmaLogger;

/*************************************************************************
 * 
 * SIC CONFIDENTIAL
 * _________________________________________________________________________________
 * 
 * SIC is a trademark of SIC Company.
 *
 * Copyright ? 2017 SIC. All rights reserved.
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
// Author : Generated by ATMA ?
// Revision History :

@Service
public class FrmBatchProcessControlServiceImpl implements IFrmBatchProcessControlService {

	private static final AtmaLogger LOGGER = AtmaLogger.create(FrmBatchProcessControlServiceImpl.class);

	@Autowired
	private IFrmBatchProcessControlRepository frmbatchprocesscontrolRepository;

	public void setFrmBatchProcessControlRepository(
			IFrmBatchProcessControlRepository frmbatchprocesscontrolRepository) {
		this.frmbatchprocesscontrolRepository = frmbatchprocesscontrolRepository;
	}

	// in Twips
	// variables for enabling column sort
	// variables for column dragging
	/**
	 * Method cmdqueryclick
	 * 
	 * @param frmbatchprocesscontrolBOReq
	 * @return frmbatchprocesscontrolBOResp
	 * @throws TASABusinessException
	 */
	public List<FrmBatchProcessControlBO> cmdqueryclick(FrmBatchProcessControlBO frmbatchprocesscontrolBOReq)
			throws TASABusinessException {
		LOGGER.debug("Entering into the method: cmdqueryclick()" + "argument : " + frmbatchprocesscontrolBOReq);
		List<FrmBatchProcessControlBO> frmbatchprocesscontrolBOResp = null;
		try {
			frmbatchprocesscontrolBOResp = new ArrayList<FrmBatchProcessControlBO>();
			// ADODB.Recordset rs;
			String strSQL;
			Boolean queryField;
			String iDate;
			queryField = false;
			// iDate=Convert.ToInt64(Date);
			// converts date to a long
			// iDate=CDate(iDate - 30);
			// subtract 30 days and convert back to a date
			// iDate=format()(iDate, "dd-MMM-yy");
			// build Select statement for query
			frmbatchprocesscontrolBOResp = frmbatchprocesscontrolRepository.cmdqueryClick1(frmbatchprocesscontrolBOReq);
			// strSQL=strSQL + " to_char(PROCESS_DT,'mm/dd/yyyy') PROCESS_DATE,";
			// strSQL=strSQL + " to_char(AS_OF_DT_TM,'mm/dd/yyyy')
			// AS_OF_DATE,CMPLTD_STEP_TXT COMPLTD_STEP,RUN_CMPLT_FLG COMPLTD_FLAG,";
			// strSQL=strSQL + " GL_PSTNG_CD,EXECUTED_FROM_TYPE_CD EXECUTED_FROM";
			// strSQL=strSQL + " From RP_BATCH_PROCESS_CONTROL";
			// strSQL=strSQL + " Where (AS_OF_DT_TM Between '" + iDate + "' And";
			// strSQL=strSQL + " '" + format()(Date, "dd-MMM-yy") + "') And";
			/*
			 * if(txtApp.Text != ""){ queryField=true; strSQL=strSQL +
			 * " RP_BATCH_APPLICATION_CD Like '" + VBUtilFunctions.toUpper(txtApp.Text) +
			 * "%'"; } if(txtDate.Text != ""){ if(QueryField == true){ strSQL=strSQL +
			 * " && PROCESS_DT = '" + VBUtilFunctions.toUpper(format()(txtDate.Text,
			 * "dd-MMM-yy")) + "'"; } } else{ strSQL=strSQL + " PROCESS_DT = '" +
			 * VBUtilFunctions.toUpper(format()(txtDate.Text, "dd-MMM-yy")) + "'"; }
			 */
			// }
			/*
			 * strSQL=strSQL + " Order by RP_BATCH_PROCESS_CONTROL_SEQ DESC";
			 * rs.CursorLocation=adUseClient; rs(.getOpenStrsql() ,cn ,adopenforwardonly
			 * ,adlockreadonly); if(rs.EOF == true){
			 * fMainForm.sbStatusBar.SimpleText="No records found"; txtapp(.getSetfocus());
			 * rs(.getClose()); } }else
			 * 
			 * { formatdatagrid(frmbatchprocesscontrolBOReq);
			 * fMainForm.sbStatusBar.SimpleText = ""; }
			 * 
			 * rs(.getClose());
			 */
			// MsgBox(Err.Description);
		} catch (Exception ex) {
			LOGGER.error("Error occurred in method: cmdqueryclick()" + "and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: cmdqueryclick()" + "return : " + frmbatchprocesscontrolBOResp);
		return frmbatchprocesscontrolBOResp;
	}
	/**
	 * Method formload
	 * 
	 * @param frmbatchprocesscontrolBOReq
	 * @return frmbatchprocesscontrolBOResp
	 * @throws TASABusinessException
	 */
	public List<FrmBatchProcessControlBO> formload()
			throws TASABusinessException {
		LOGGER.debug("Entering into the method: formload()" + "argument : ");
		List<FrmBatchProcessControlBO> frmbatchprocesscontrolBOResp = null;
		try {
			frmbatchprocesscontrolBOResp = new ArrayList<FrmBatchProcessControlBO>();
			String strSQL;
			/*
			 * iDate; txtDate.Visible=true; txtApp.Visible=true; cmdQuery.Visible=true;
			 * cmdQuery=false; cmdRefresh.Visible=true; me.WindowState=vbMaximized;
			 * iDate=Convert.ToInt64(Date); // converts date to a long iDate=CDate(iDate -
			 * 90); // Date minus 90 days iDate=format()(iDate, "dd-MMM-yy");
			 */
			// format Date to Oracle format
			frmbatchprocesscontrolBOResp = frmbatchprocesscontrolRepository.formLoad1();
			// strSQL=strSQL + " to_char(PROCESS_DT,'mm/dd/yyyy hh:mm:ss') PROCESS_DATE,";
			// strSQL=strSQL + " to_char(AS_OF_DT_TM,'mm/dd/yyyy')
			// AS_OF_DATE,CMPLTD_STEP_TXT COMPLTD_STEP,RUN_CMPLT_FLG COMPLTD_FLAG,";
			// strSQL=strSQL + " GL_PSTNG_CD,EXECUTED_FROM_TYPE_CD EXECUTED_FROM";
			// strSQL=strSQL + " From RP_BATCH_PROCESS_CONTROL";
			// //strSQL=strSQL + " Where (AS_OF_DT_TM Between '" + iDate + "' && '" +
			// format()(Date + 1, "dd-MMM-yy") + "')";
			// strSQL=strSQL + " Order by RP_BATCH_PROCESS_CONTROL_SEQ DESC";
			/*
			 * datPrimaryRS.Visible=false; datPrimaryRS.ConnectionString=cn;
			 * datPrimaryRS.RecordSource=strSQL; datprimaryrs(.getRefresh());
			 * formatdatagrid(frmbatchprocesscontrolBOReq); MsgBox(Err.Description);
			 * err(.getClear());
			 */
		} catch (Exception ex) {
			LOGGER.error("Error occurred in method: formload()" + "and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: formload()" + "return : " + frmbatchprocesscontrolBOResp);
		return frmbatchprocesscontrolBOResp;
	}
}