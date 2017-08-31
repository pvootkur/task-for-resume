package com.sic.tasa.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sic.tasa.dataobject.FrmGLAccountBO;
import com.sic.tasa.exceptions.TASABusinessException;
import com.sic.tasa.repositories.IFrmGLAccountRepository;
import com.sic.tasa.service.IFrmGLAccountService;
import com.sic.tasa.util.AtmaLogger;

@Service
public class FrmGLAccountServiceImpl implements IFrmGLAccountService {

	private static final AtmaLogger LOGGER = AtmaLogger.create(FrmGLAccountServiceImpl.class);

	@Autowired
	private IFrmGLAccountRepository frmglaccountRepository;

	public void setFrmGLAccountRepository(IFrmGLAccountRepository frmglaccountRepository) {
		this.frmglaccountRepository = frmglaccountRepository;
	}

	@Override
	public List<FrmGLAccountBO> cmdinsertclick(List<FrmGLAccountBO> frmglaccountBOReq) throws TASABusinessException {
		LOGGER.debug("Entering into the method: cmdinsertclick()" + "argument : " + frmglaccountBOReq);
		List<FrmGLAccountBO> frmglaccountBOResp = null;
		try {
			frmglaccountBOResp = new ArrayList<FrmGLAccountBO>();
			
			frmglaccountBOResp = frmglaccountRepository.cmdinsertClick1(frmglaccountBOReq);

			// If user is already inserting a record then do nothing
			/*
			 * if(sInsert == true && DataGrid.Columns(2).Text != "" &&
			 * DataGrid.Columns(3).Text != ""){ dataGrid.Row=0; } } else{ if(sInsert ==
			 * true){ } } // User is inserting a record sInsert=true;
			 * dataGrid.AllowAddNew=true; adodc(.getRecordset().getMovelast());
			 * adodc(.getRecordset().getAddnew()); datagrid(.getSetfocus());
			 */
		} catch (Exception ex) {
			LOGGER.error("Error occurred in method: cmdinsertclick()" + "and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: cmdinsertclick()" + "return : " + frmglaccountBOResp);
		return frmglaccountBOResp;
	}
	
	@Override
	public List<FrmGLAccountBO> cmdsaveclick(List<FrmGLAccountBO> frmglaccountBOReq) throws TASABusinessException {
		LOGGER.debug("Entering into the method: cmdsaveclick()" + "argument : " + frmglaccountBOReq);
		List<FrmGLAccountBO> frmglaccountBOResp = null;
		try {
			frmglaccountBOResp = new ArrayList<FrmGLAccountBO>();
			for(int i=0;i<frmglaccountBOReq.size();i++) {
				frmglaccountBOResp.add(frmglaccountBOReq.get(i));
			}
		} catch (Exception ex) {
			LOGGER.error("Error occurred in method: cmdsaveclick()" + "and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: cmdsaveclick()" + "return : " + frmglaccountBOResp);
		return frmglaccountBOResp;
	}

	@Override
	public List<FrmGLAccountBO> cmdqueryclick(FrmGLAccountBO frmglaccountBOReq) throws TASABusinessException {
		LOGGER.debug("Entering into the method: cmdqueryclick()" + "argument : " + frmglaccountBOReq);
		List<FrmGLAccountBO> frmglaccountBOResp = null;
		try {
			frmglaccountBOResp = new ArrayList<FrmGLAccountBO>();
			String strSQL;
			String sDate;
			String sApp;
			Boolean queryField;
			queryField = false;
			// build select statement for query
			frmglaccountBOResp = frmglaccountRepository.cmdqueryClick1(frmglaccountBOReq);
			/*
			 * strSQL=strSQL +
			 * " GL_ACCNT_PRDCT_ID,GL_ACCNT_PRJCT_ID,CLRNG_ACCNT_FL CLRING_CNTRL,";
			 * strSQL=strSQL +
			 * " LAST_UPDT_USER_ID LAST_UPDATED_BY,LAST_UPDT_DT LAST_UPDATE,GL_ACCNT_SEQ SEQUENCE_NO"
			 * ; strSQL=strSQL + " From GL_ACCNT Where"; if(txtA.Text != ""){
			 * queryField=true; strSQL=strSQL + " GL_ACCNT_CO_ID Like '" + txtA.Text + "%'";
			 * } if(txtB.Text != ""){ if(QueryField == true){ strSQL=strSQL +
			 * " && GL_ACCNT_NBR_ID Like '%" + txtB.Text + "%'"; } } else{ strSQL=strSQL +
			 * " GL_ACCNT_NBR_ID Like '%" + txtB.Text + "%'"; queryField=true; } }
			 * if(txtC.Text != ""){ if(QueryField == true){ strSQL=strSQL +
			 * " && GL_ACCNT_CNTR_ID Like '%" + txtC.Text + "%'"; } } else{ strSQL=strSQL +
			 * " GL_ACCNT_CNTR_ID Like '%" + txtC.Text + "%'"; queryField=true; }
			 * }if(txtD.Text!="")
			 * 
			 * { if (QueryField == true) { strSQL = strSQL + " && GL_ACCNT_PRDCT_ID Like '%"
			 * + txtD.Text + "%'"; } }else { strSQL = strSQL + " GL_ACCNT_PRDCT_ID Like '%"
			 * + txtD.Text + "%'"; }}strSQL=
			 * strSQL+" ORDER BY GL_ACCNT_NBR_ID ASC, GL_ACCNT_CNTR_ID DESC, GL_ACCNT_PRDCT_ID"
			 * ;adodc.ConnectionString=cn;adodc.RecordSource=strSQL;adodc(.getRefresh());if(
			 * Adodc.Recordset.EOF==true){fMainForm.sbStatusBar.
			 * SimpleText="No records found";adodc(.getRecordset().getClose());txta(.
			 * getSetfocus());}}else{fMainForm.sbStatusBar.SimpleText="";}MsgBox(Err.
			 * Description);
			 */
		} catch (Exception ex) {
			LOGGER.error("Error occurred in method: cmdqueryclick()" + "and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: cmdqueryclick()" + "return : " + frmglaccountBOResp);
		return frmglaccountBOResp;
	}

	@Override
	public List<FrmGLAccountBO> formload() throws TASABusinessException {
		LOGGER.debug("Entering into the method: formload()" + "argument : ");
		List<FrmGLAccountBO> frmglaccountBOResp = null;
		try {
			frmglaccountBOResp = new ArrayList<FrmGLAccountBO>();
			frmglaccountBOResp = frmglaccountRepository.formLoad1();
			/*
			 * String strSQL; sInsert=false; me.WindowState=vbMaximized; cmdQuery=false;
			 * dataGrid.AllowAddNew=false; if(UserRole == "RPP_USER"){
			 * dataGrid.AllowUpdate=true; } } else{ dataGrid.AllowUpdate=false; }
			 * frmglaccountBOResp = frmglaccountRepository.formLoad1(frmglaccountBOReq);
			 * strSQL=strSQL +
			 * " GL_ACCNT_PRDCT_ID,GL_ACCNT_PRJCT_ID,CLRNG_ACCNT_FL CLRING_CNTRL,";
			 * strSQL=strSQL +
			 * " LAST_UPDT_USER_ID LAST_UPDATED_BY,LAST_UPDT_DT LAST_UPDATE,GL_ACCNT_SEQ SEQUENCE_NO"
			 * ; strSQL=strSQL + " From GL_ACCNT"; strSQL=strSQL +
			 * " ORDER BY GL_ACCNT_NBR_ID ASC, GL_ACCNT_CNTR_ID DESC, GL_ACCNT_PRDCT_ID";
			 * adodc.ConnectionString=cn; adodc.RecordSource=strSQL; adodc(.getRefresh());
			 * formatdatagrid(frmglaccountBOReq); // On Error Resume Next
			 * MsgBox(Err.Description);
			 */
		} catch (Exception ex) {
			LOGGER.error("Error occurred in method: formload()" + "and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: formload()" + "return : " + frmglaccountBOResp);
		return frmglaccountBOResp;
	}
}
