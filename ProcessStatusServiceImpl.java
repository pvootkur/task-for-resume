package com.sic.tasa.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sic.tasa.dataobject.ProcessStatusBO;
import com.sic.tasa.exceptions.TASABusinessException;
import com.sic.tasa.repositories.IProcessStatusRepository;
import com.sic.tasa.service.IProcessStatusService;
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
public class ProcessStatusServiceImpl implements IProcessStatusService {

	private static final AtmaLogger LOGGER = AtmaLogger.create(ProcessStatusServiceImpl.class);

	@Autowired
	private IProcessStatusRepository processStatusRepository;

	public void setProcessStatusRepository(IProcessStatusRepository processStatusRepository) {
		this.processStatusRepository = processStatusRepository;
	}

	// This form uses the Microsoft Flex Grid control
	// variables for enabling column sort
	// variables for column dragging
	// in Twips
	/**
	 * Method cmdqueryclick
	 * @param processStatusBOReq
	 * @return processStatusBOResp
	 * @throws TASABusinessException
	 */
	public List<ProcessStatusBO> cmdqueryclick(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
		LOGGER.debug("Entering into the method: cmdqueryclick()"+"argument : "+processStatusBOReq); 
		List<ProcessStatusBO> processStatusBOResp = null;
		try{
			processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
			/*ADODB.Recordset rs;
			String strSQL;
			String sDate;
			String sApp;
			Boolean queryField;
			iDate;
			iDate=Convert.ToInt64(Date);
			//         converts date to a long
			iDate=CDate(iDate - 30);
			//   Current date minus 30 days
			queryField=false;*/
			//  set query select string
			processStatusBOResp = processStatusRepository.cmdqueryClick1(processStatusBOReq);
			/*strSQL=strSQL + " to_char(A.PROCESS_DATE,'mm/dd/yyyy') PROCESS_DATE,";
			strSQL=strSQL + " A.Application,A.Name, A.RETURN_CODE, A.STEP , A.RETURN_TEXT";
			strSQL=strSQL + " From PROCESS_STATUS A Where";
			if(txtApp.Text != ""){
				queryField=true;
				strSQL=strSQL + " A.Application Like '" + txtApp.Text + "%'";
			}
			if(txtName.Text != ""){
				if(QueryField == true){
					strSQL=strSQL + " && A.Name Like '%" + txtName.Text + "%'";
				}
			} else{
				strSQL=strSQL + " Name Like '%" + txtName.Text + "%'";
				queryField=true;
			}
		}
		if(txtDate.Text != ""){
			if(QueryField == true){
				strSQL=strSQL + " && A.PROCESS_DATE Like '" + VBUtilFunctions.toUpper(format()(txtDate.Text, "dd-MMM-yy")) + "%'";
			}
		} else{
			strSQL=strSQL + " A.PROCESS_DATE Like '" + VBUtilFunctions.toUpper(format()(txtDate.Text, "dd-MMM-yy")) + "%'";
		}
	}}else{
		// if Process Date isnt entered then make it for the last 30 days
		strSQL=strSQL+" && (A.PROCESS_DATE Between '"+format()(iDate,"dd-MMM-yy")+"' And"+" '"+format()(Date,"dd-MMM-YY")+"')";}strSQL=strSQL+" Order By PROCESS_STATUS_NBR DESC, A.PROCESS_DATE DESC";rs.CursorLocation=adUseClient;rs(.getOpenStrsql(),cn,adopenforwardonly,adlockreadonly);if(rs.EOF==true){fMainForm.sbStatusBar.SimpleText="No records found";txtdate(.getSetfocus());rs(.getClose());}}else{formatflexgrid(processstatusBOReq);rs(.getClose());fMainForm.sbStatusBar.SimpleText="";}MsgBox(Err.Description);*/
		}catch(Exception ex){
			LOGGER.error("Error occurred in method: cmdqueryclick()"+"and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}LOGGER.debug("Exiting the method: cmdqueryclick()"+"return : "+processStatusBOResp);return processStatusBOResp;
	}

	/**
	 * Method cmdrefreshclick
	 * @param processStatusBOReq
	 * @return processStatusBOResp
	 * @throws TASABusinessException
	 */
	public List<ProcessStatusBO> cmdrefreshclick(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
		LOGGER.debug("Entering into the method: cmdrefreshclick()"+"argument : "+processStatusBOReq); 
		List<ProcessStatusBO> processStatusBOResp = null;
		try{
			processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
			/*txtApp="";
			txtDate="";
			txtName="";
			fMainForm.sbStatusBar.SimpleText="";*/
		}catch (Exception ex){
			LOGGER.error("Error occurred in method: cmdrefreshclick()"+"and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: cmdrefreshclick()"+"return : "+processStatusBOResp);
		return processStatusBOResp;
	}

	/**
	 * Method flexgriddragdrop
	 * @param processStatusBOReq
	 * @return processStatusBOResp
	 * @throws TASABusinessException
	 */
	public List<ProcessStatusBO> flexgriddragdrop(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
		LOGGER.debug("Entering into the method: flexgriddragdrop()"+"argument : "+processStatusBOReq); 
		List<ProcessStatusBO> processStatusBOResp = null;
		try{
			processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
			//  -------------------------------------------------------------------------------------------
			//   code in grids DragDrop, MouseDown, MouseMove, and MouseUp events enables column dragging
			//  -------------------------------------------------------------------------------------------
			/*if(m_iDragCol == -1){
			}
			//       we werent dragging
			if(FlexGrid.MouseRow != 0){
			}
			if(FlexGrid.FixedCols == 1 && FlexGrid.MouseCol == 0){
			}
			.Redraw=false;
			.ColPosition(miDragCol)=.MouseCol;
			.Redraw=true;*/
		}catch (Exception ex){
			LOGGER.error("Error occurred in method: flexgriddragdrop()"+"and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: flexgriddragdrop()"+"return : "+processStatusBOResp);
		return processStatusBOResp;
	}

	/**
	 * Method flexgridmousedown
	 * 
	 * @param processStatusBOReq
	 * @return processStatusBOResp
	 * @throws TASABusinessException
	 */
	public List<ProcessStatusBO> flexgridmousedown(ProcessStatusBO processStatusBOReq) throws TASABusinessException {
		LOGGER.debug("Entering into the method: flexgridmousedown()" + "argument : " + processStatusBOReq);
		List<ProcessStatusBO> processStatusBOResp = null;
		try {
			processStatusBOResp = new ArrayList<ProcessStatusBO>();
			// -------------------------------------------------------------------------------------------
			// code in grids DragDrop, MouseDown, MouseMove, and MouseUp events enables
			// column dragging
			// -------------------------------------------------------------------------------------------
			/*if (FlexGrid.MouseRow != 0) {
			}
			if (FlexGrid.MouseCol == 0 && FlexGrid.FixedCols == 1) {
			}
			xdn = X;
			ydn = Y;
			miDragCol = -1;
			// clear drag flag
			mbDragOK = true;*/
		} catch (Exception ex) {
			LOGGER.error("Error occurred in method: flexgridmousedown()" + "and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: flexgridmousedown()" + "return : " + processStatusBOResp);
		return processStatusBOResp;
	}

	/**
	 * Method flexgridmousemove
	 * @param processStatusBOReq
	 * @return processStatusBOResp
	 * @throws TASABusinessException
	 */
	public List<ProcessStatusBO> flexgridmousemove(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
		LOGGER.debug("Entering into the method: flexgridmousemove()"+"argument : "+processStatusBOReq); 
		List<ProcessStatusBO> processStatusBOResp = null;
		try{
			processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
			//  -------------------------------------------------------------------------------------------
			//   code in grids DragDrop, MouseDown, MouseMove, and MouseUp events enables column dragging
			//  -------------------------------------------------------------------------------------------
			//   test to see if we should start drag
			/*if(! m_bDragOK){
			}
			if(Button != 1){
			}
			//                           wrong button
			if(m_iDragCol != -1){
			}
			//                      already dragging
			if(Abs(xdn - X) + Abs(ydn - Y) < 50){
			}
			//      didnt move enough yet
			if(FlexGrid.MouseRow != 0){
			}
			//            must drag header
			//   if got to here then start the drag
			miDragCol=FlexGrid.MouseCol;
			flexgrid(.getDragVbbegindrag());*/
		}catch (Exception ex){
			LOGGER.error("Error occurred in method: flexgridmousemove()"+"and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: flexgridmousemove()"+"return : "+processStatusBOResp);
		return processStatusBOResp;
	}

	/**
	 * Method flexgridmouseup
	 * 
	 * @param processStatusBOReq
	 * @return processStatusBOResp
	 * @throws TASABusinessException
	 */
	public List<ProcessStatusBO> flexgridmouseup(ProcessStatusBO processStatusBOReq) throws TASABusinessException {
		LOGGER.debug("Entering into the method: flexgridmouseup()" + "argument : " + processStatusBOReq);
		List<ProcessStatusBO> processStatusBOResp = null;
		try {
			processStatusBOResp = new ArrayList<ProcessStatusBO>();
			// -------------------------------------------------------------------------------------------
			// code in grids DragDrop, MouseDown, MouseMove, and MouseUp events enables
			// column dragging
			// -------------------------------------------------------------------------------------------
			//mbDragOK = false;
		} catch (Exception ex) {
			LOGGER.error("Error occurred in method: flexgridmouseup()" + "and terminated due to " + ex.getMessage());
			throw new TASABusinessException(ex);
		}
		LOGGER.debug("Exiting the method: flexgridmouseup()" + "return : " + processStatusBOResp);
		return processStatusBOResp;
	}

	/**
	 * Method flexgriddblclick
	 * @param processStatusBOReq
	 * @return processStatusBOResp
	 * @throws TASABusinessException
	 */
	public List<ProcessStatusBO> flexgriddblclick(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
		LOGGER.debug("Entering into the method: flexgriddblclick()"+"argument : "+processStatusBOReq); 
		List<ProcessStatusBO> processStatusBOResp = null;
		try{
			processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
			//  -------------------------------------------------------------------------------------------
			//   code in grids DblClick event enables column sorting
			//  -------------------------------------------------------------------------------------------
			Integer i;
			//   sort only when a fixed row is clicked
			/*if(FlexGrid.MouseRow >== FlexGrid.FixedRows){
			}
			i=m_iSortCol;
			//                     save old column
			miSortCol=FlexGrid.Col;
			//      set new column
			//   increment sort type
			if(i != m_iSortCol){
				//   if clicking on a new column, start with ascending sort
				miSortType=1;
			}
		} else{
			//   if clicking on the same column, toggle between ascending and descending sort
			miSortType=m_iSortType + 1;
			if(m_iSortType == 3){
				miSortType=1;
			}
		}
		docolumnsort(processstatusBOReq);*/
		}catch(

			Exception ex)
	{
		LOGGER.error("Error occurred in method: flexgriddblclick()" + "and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}LOGGER.debug("Exiting the method: flexgriddblclick()"+"return : "+processStatusBOResp);return processStatusBOResp;
}

/**
 * Method docolumnsort
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> docolumnsort(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
	LOGGER.debug("Entering into the method: docolumnsort()"+"argument : "+processStatusBOReq); 
	List<ProcessStatusBO> processStatusBOResp = null;
	try{
		processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
		//  -------------------------------------------------------------------------------------------
		//   does Exchange-type sort on column m_iSortCol
		//  -------------------------------------------------------------------------------------------
		/*.Redraw=false;
		.Row=1;
		.RowSel=.Rows - 1;
		.Col=m_iSortCol;
		.Sort=m_iSortType;
		.Redraw=true;*/
	}catch (Exception ex){
		LOGGER.error("Error occurred in method: docolumnsort()"+"and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: docolumnsort()"+"return : "+processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method flexgridrowcolchange
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> flexgridrowcolchange(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
	LOGGER.debug("Entering into the method: flexgridrowcolchange()"+"argument : "+processStatusBOReq); 
	List<ProcessStatusBO> processStatusBOResp = null;
	try{
		processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
		/*if(.Col == 6 Or .Col == 7){
			fMainForm.sbStatusBar.SimpleText=.Text;
		}
		fMainForm.sbStatusBar.SimpleText="";*/
	}catch (Exception ex){
		LOGGER.error("Error occurred in method: flexgridrowcolchange()"+"and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: flexgridrowcolchange()"+"return : "+processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method formactivate
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> formactivate(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
	LOGGER.debug("Entering into the method: formactivate()"+"argument : "+processStatusBOReq); 
	List<ProcessStatusBO> processStatusBOResp = null;
	try{
		processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
		//txtapp(.getSetfocus());
	}catch (Exception ex){
		LOGGER.error("Error occurred in method: formactivate()"+"and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: formactivate()"+"return : "+processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method formload
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> formload() throws TASABusinessException{
	LOGGER.debug("Entering into the method: formload()"+"argument : "); 
	List<ProcessStatusBO> processStatusBOResp = null;
	try{
		processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
		String strSQL;
		Integer i;
		Integer j;
		Integer miMaxCol;
		/*iDate;
		ADODB.Recordset rst;
		me.WindowState=vbMaximized;
		fMainForm.mnuQryProcessStatus.Checked=true;
		//      fMainForm.mnuDataProcess_Status.Checked = True
		cmdQuery=false;
		txtDate.Visible=true;
		txtApp.Visible=true;
		cmdQuery.Visible=true;
		cmdQuery=false;
		cmdRefresh.Visible=true;
		iDate=Convert.ToInt64(Date);
		//         converts date to a long
		iDate=CDate(iDate - 90);*/
		//   subtract 90 days and convert back to date
		//   set string
		processStatusBOResp = processStatusRepository.formLoad1();
		/*strSQL=strSQL + " A.Application,A.Name, A.RETURN_CODE, A.STEP , A.RETURN_TEXT";
		strSQL=strSQL + " From PROCESS_STATUS A";
		strSQL=strSQL + " Where";
		strSQL=strSQL + " (A.PROCESS_DATE Between '" + format()(iDate, "dd-MMM-yy") + "' And";
		strSQL=strSQL + " '" + format()(Date + 1, "dd-MMM-YY") + "')";
		strSQL=strSQL + " Order By A.PROCESS_STATUS_NBR Desc, A.PROCESS_DATE DESC";
		adodc.ConnectionString=cn;
		adodc.RecordSource=strSQL;
		adodc(.getRefresh());
		//  ---------------------------------
		//  Set rst = New ADODB.Recordset
		//  Set rst = cn.Execute(strSQL)
		//   rst.Save "J:\ProcessStatusXML", adPersistXML
		//  ----------------------------------
		formatflexgrid(processstatusBOReq);
		MsgBox(Err.Description & vbCrLf & "Error loading Batch Process form.", "Error");*/
	}catch (Exception ex){
		LOGGER.error("Error occurred in method: formload()"+"and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: formload()"+"return : "+processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method formatflexgrid
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> formatflexgrid(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
	LOGGER.debug("Entering into the method: formatflexgrid()"+"argument : "+processStatusBOReq); 
	List<ProcessStatusBO> processStatusBOResp = null;
	try{
		processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
		/*.Redraw=false;
		//   set grids column widths
		.ColWidth(0)=250;
		.ColWidth(1)=1500;
		.ColWidth(2)=1800;
		.ColAlignment(2)=3;
		.ColWidth(3)=1400;
		.ColAlignment(3)=3;
		.ColWidth(4)=1300;
		.ColAlignment(4)=2;
		.ColWidth(5)=1500;
		.ColAlignment(5)=3;
		.ColWidth(6)=1300;
		.ColWidth(7)=2400;
		//   set grids style
		//  This lets you select all the columns and
		//  make the header bold
		.AllowBigSelection=true;
		.FillStyle=flexFillRepeat;
		//   make header bold
		.Row=0;
		.Col=0;
		.RowSel=.FixedRows - 1;
		.ColSel=.Cols - 1;
		.CellFontBold=true;
		.AllowBigSelection=false;
		.FillStyle=flexFillSingle;
		.Redraw=true;*/
	}catch (Exception ex){
		LOGGER.error("Error occurred in method: formatflexgrid()"+"and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: formatflexgrid()"+"return : "+processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method mshflexgriddblclick
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> mshflexgriddblclick(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
	LOGGER.debug("Entering into the method: mshflexgriddblclick()"+"argument : "+processStatusBOReq); 
	List<ProcessStatusBO> processStatusBOResp = null;
	try{
		processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
		//  -------------------------------------------------------------------------------------------
		//   code in grids DblClick event enables column sorting
		//  -------------------------------------------------------------------------------------------
		Integer i;
		//   sort only when a fixed row is clicked
		/*if(FlexGrid.MouseRow >== FlexGrid.FixedRows){
		}
		i=m_iSortCol;
		//                     save old column
		miSortCol=FlexGrid.Col;
		//      set new column
		//   increment sort type
		if(i != m_iSortCol){
			//   if clicking on a new column, start with ascending sort
			miSortType=1;
		}
	} else{
		//   if clicking on the same column, toggle between ascending and descending sort
		miSortType=m_iSortType + 1;
		if(m_iSortType == 3){
			miSortType=1;
		}
	}
	columnsort(processstatusBOReq);*/
	}catch(Exception ex)
	{
		LOGGER.error("Error occurred in method: mshflexgriddblclick()" + "and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}LOGGER.debug("Exiting the method: mshflexgriddblclick()"+"return : "+processStatusBOResp);return processStatusBOResp;
	}

/**
 * Method columnsort
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> columnsort(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
	LOGGER.debug("Entering into the method: columnsort()"+"argument : "+processStatusBOReq); 
	List<ProcessStatusBO> processStatusBOResp = null;
	try{
		processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
		//  -------------------------------------------------------------------------------------------
		//   does Exchange-type sort on column m_iSortCol
		//  -------------------------------------------------------------------------------------------
		/*.Redraw=false;
		.Row=1;
		.RowSel=.Rows - 1;
		.Col=m_iSortCol;
		.Sort=m_iSortType;
		.Redraw=true;*/
	}catch (Exception ex){
		LOGGER.error("Error occurred in method: columnsort()"+"and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: columnsort()"+"return : "+processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method formresize
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> formresize(ProcessStatusBO processStatusBOReq) throws TASABusinessException{
	LOGGER.debug("Entering into the method: formresize()"+"argument : "+processStatusBOReq); 
	List<ProcessStatusBO> processStatusBOResp = null;
	try{
		processStatusBOResp =  new ArrayList<ProcessStatusBO>();   
		/*Single sngButtonTop;
		Single sngScaleWidth;
		Single sngScaleHeight;
		sngScaleWidth=.ScaleWidth;
		sngScaleHeight=.ScaleHeight;
		//  move Close button to the lower right corner
		sngButtonTop=sngScaleHeight - (.Height + MARGIN_SIZE);
		sngButtonTop=sngScaleHeight - (.Height + MARGIN_SIZE);
		sngButtonTop=sngScaleHeight - (.Height + MARGIN_SIZE);
		sngButtonTop=sngScaleHeight - (.Height + MARGIN_SIZE);
		sngButtonTop=sngScaleHeight - (.Height + MARGIN_SIZE);
		sngButtonTop=sngScaleHeight - (.Height + MARGIN_SIZE);*/
		//   avoid error on negative values
	}catch (Exception ex){
		LOGGER.error("Error occurred in method: formresize()"+"and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: formresize()"+"return : "+processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method cmdcloseclick
 * 
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> cmdcloseclick(ProcessStatusBO processStatusBOReq) throws TASABusinessException {
	LOGGER.debug("Entering into the method: cmdcloseclick()" + "argument : " + processStatusBOReq);
	List<ProcessStatusBO> processStatusBOResp = null;
	try {
		processStatusBOResp = new ArrayList<ProcessStatusBO>();
		//sQuery = "Off";
	} catch (Exception ex) {
		LOGGER.error("Error occurred in method: cmdcloseclick()" + "and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: cmdcloseclick()" + "return : " + processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method formunload
 * 
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> formunload(ProcessStatusBO processStatusBOReq) throws TASABusinessException {
	LOGGER.debug("Entering into the method: formunload()" + "argument : " + processStatusBOReq);
	List<ProcessStatusBO> processStatusBOResp = null;
	try {
		processStatusBOResp = new ArrayList<ProcessStatusBO>();
		// fMainForm.mnuDataProcess_Status.Checked = False
		//fMainForm.mnuQryProcessStatus.Checked = false;
	} catch (Exception ex) {
		LOGGER.error("Error occurred in method: formunload()" + "and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: formunload()" + "return : " + processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method txtappkeypress
 * 
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> txtappkeypress(ProcessStatusBO processStatusBOReq) throws TASABusinessException {
	LOGGER.debug("Entering into the method: txtappkeypress()" + "argument : " + processStatusBOReq);
	List<ProcessStatusBO> processStatusBOResp = null;
	try {
		processStatusBOResp = new ArrayList<ProcessStatusBO>();
		//cmdQuery = true;
	} catch (Exception ex) {
		LOGGER.error("Error occurred in method: txtappkeypress()" + "and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: txtappkeypress()" + "return : " + processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method txtapplostfocus
 * 
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> txtapplostfocus(ProcessStatusBO processStatusBOReq) throws TASABusinessException {
	LOGGER.debug("Entering into the method: txtapplostfocus()" + "argument : " + processStatusBOReq);
	List<ProcessStatusBO> processStatusBOResp = null;
	try {
		processStatusBOResp = new ArrayList<ProcessStatusBO>();
		//txtApp = VBUtilFunctions.toUpper(txtApp.Text);
	} catch (Exception ex) {
		LOGGER.error("Error occurred in method: txtapplostfocus()" + "and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: txtapplostfocus()" + "return : " + processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method txtdatekeypress
 * 
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> txtdatekeypress(ProcessStatusBO processStatusBOReq) throws TASABusinessException {
	LOGGER.debug("Entering into the method: txtdatekeypress()" + "argument : " + processStatusBOReq);
	List<ProcessStatusBO> processStatusBOResp = null;
	try {
		processStatusBOResp = new ArrayList<ProcessStatusBO>();
		//cmdQuery = true;
	} catch (Exception ex) {
		LOGGER.error("Error occurred in method: txtdatekeypress()" + "and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: txtdatekeypress()" + "return : " + processStatusBOResp);
	return processStatusBOResp;
}

/**
 * Method txtnamekeypress
 * 
 * @param processStatusBOReq
 * @return processStatusBOResp
 * @throws TASABusinessException
 */
public List<ProcessStatusBO> txtnamekeypress(ProcessStatusBO processStatusBOReq) throws TASABusinessException {
	LOGGER.debug("Entering into the method: txtnamekeypress()" + "argument : " + processStatusBOReq);
	List<ProcessStatusBO> processStatusBOResp = null;
	try {
		processStatusBOResp = new ArrayList<ProcessStatusBO>();
		//cmdQuery = true;
	} catch (Exception ex) {
		LOGGER.error("Error occurred in method: txtnamekeypress()" + "and terminated due to " + ex.getMessage());
		throw new TASABusinessException(ex);
	}
	LOGGER.debug("Exiting the method: txtnamekeypress()" + "return : " + processStatusBOResp);
	return processStatusBOResp;
}

}