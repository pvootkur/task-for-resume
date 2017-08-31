package com.sic.tasa.repositories.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.sic.tasa.dataobject.FrmProductFundsBO;
import com.sic.tasa.exceptions.TASADataAccessException;
import com.sic.tasa.repositories.IFrmProductFundsRepository;
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


@Repository
public class FrmProductFundsRepositoryImpl implements IFrmProductFundsRepository{

    private static final AtmaLogger LOGGER = AtmaLogger.create(FrmProductFundsRepositoryImpl.class);

    private HibernateTemplate template;


    /*
	 * Method datagridAftercolupdate1
	 * @param frmproductfundsBOReq
	 * @return frmproductfundsBOResp
	 * @throws TASADataAccessException
	 */
    public List<FrmProductFundsBO> datagridAftercolupdate1(List<FrmProductFundsBO> frmproductfundsBOReq) throws TASADataAccessException {
	    LOGGER.debug("Entering into the method: datagridAftercolupdate1 and argument : "+frmproductfundsBOReq); 
	    List<FrmProductFundsBO> frmproductfundsBOResp =new ArrayList<FrmProductFundsBO>();
//	    String sql = "Update INVSTMNT_FUND_CATEGORY IFC" +
//	    " Set AS_OF_DT = '" + Format(DataGrid.Text, "dd-MMM-yy") + "'," 
//             + " LAST_UPDT_DT = '" + Format(Date, "dd-MMM-yy") + "'," 
//             + " LAST_UPDT_USER_ID = '" + frmproductfundsBOReq.getsUserID() + "'" 
//             + " Where IFC.INVSTMNT_FUND_CATEGORY_CD = '" + DataGrid.Columns("Inv Fund Category").Text + "'";
	    try {
//	         List<IDomainObj>  entityList = template.find(sql,new BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
//	         ObjectCopier.copy(entityList, frmproductfundsBOResp);  
	    }catch (Exception ex) {
            LOGGER.error("Error occurred in method: datagridAftercolupdate1()" +"and terminated due to " + ex.getMessage());
            throw new TASADataAccessException(ex);
        }        
        LOGGER.debug("Exiting the method: datagridAftercolupdate1()"+"return : "+frmproductfundsBOResp);
         return frmproductfundsBOResp;
    }
    /*
	 * Method datagridBeforecolupdate1
	 * @param frmproductfundsBOReq
	 * @return frmproductfundsBOResp
	 * @throws TASADataAccessException
	 */
    public List<FrmProductFundsBO> datagridBeforecolupdate1(List<FrmProductFundsBO> frmproductfundsBOReq) throws TASADataAccessException {
	    LOGGER.debug("Entering into the method: datagridBeforecolupdate1 and argument : "+frmproductfundsBOReq); 
	    List<FrmProductFundsBO> frmproductfundsBOResp =new ArrayList<FrmProductFundsBO>();
//	    String sql = "SELECT * FROM INVSTMNT_FUND_CATEGORY IFC WHERE IFC.INVSTMNT_FUND_CATEGORY_CD = '" + DataGrid.Columns("Inv Fund Category").Text + "'";
	    try {
//	         List<IDomainObj>  entityList = template.find(sql,new BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
//	         ObjectCopier.copy(entityList, frmproductfundsBOResp);  
	    }catch (Exception ex) {
            LOGGER.error("Error occurred in method: datagridBeforecolupdate1()" +"and terminated due to " + ex.getMessage());
            throw new TASADataAccessException(ex);
        }        
        LOGGER.debug("Exiting the method: datagridBeforecolupdate1()"+"return : "+frmproductfundsBOResp);
         return frmproductfundsBOResp;
    }
    /*
	 * Method formLoad1
	 * @param frmproductfundsBOReq
	 * @return frmproductfundsBOResp
	 * @throws TASADataAccessException
	 */
    public List<FrmProductFundsBO> formLoad1() throws TASADataAccessException {
	    LOGGER.debug("Entering into the method: formLoad1 "); 
	    List<FrmProductFundsBO> frmproductfundsBOResp =new ArrayList<FrmProductFundsBO>();
	    FrmProductFundsBO frmProductFundsBO = new FrmProductFundsBO();
	    frmProductFundsBO.setAsOfDateonFPU("12-07-2017");
	    frmProductFundsBO.setDescription("Test");
	    frmProductFundsBO.setInvFundCategory("");
	    frmProductFundsBO.setLastUpdated("Testing");
	    frmProductFundsBO.setUpdatedBy("Testing");
	    frmproductfundsBOResp.add(frmProductFundsBO);
//	    String sql = "Select AS_OF_DT,INVSTMNT_FUND_CATEGORY_CD, DESCP DESCRIPTION, LAST_UPDT_DT,LAST_UPDT_USER_ID From INVSTMNT_FUND_CATEGORY"
//	    		+ " Order by INVSTMNT_FUND_CATEGORY_CD DESC";
	    try {
//	         List<IDomainObj>  entityList = template.find(sql,new BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
//	         ObjectCopier.copy(entityList, frmproductfundsBOResp);  
	    }catch (Exception ex) {
            LOGGER.error("Error occurred in method: formLoad1()" +"and terminated due to " + ex.getMessage());
            throw new TASADataAccessException(ex);
        }        
        LOGGER.debug("Exiting the method: formLoad1()"+"return : "+frmproductfundsBOResp);
         return frmproductfundsBOResp;
    }

}