package com.sic.tasa.repositories.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.sic.tasa.dataobject.FrmProductSeriesBO;
import com.sic.tasa.exceptions.TASADataAccessException;
import com.sic.tasa.repositories.IFrmProductSeriesRepository;
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
public class FrmProductSeriesRepositoryImpl implements IFrmProductSeriesRepository{
	
	private static final AtmaLogger LOGGER = AtmaLogger.create(FrmProductSeriesRepositoryImpl.class.getName());

    private HibernateTemplate template;


    /*
	 * Method cmdqueryClick1
	 * @param frmproductseriesBOReq
	 * @return frmproductseriesBOResp
	 * @throws TASADataAccessException
	 */
    public List<FrmProductSeriesBO> cmdqueryClick1(FrmProductSeriesBO frmproductseriesBOReq) throws TASADataAccessException {
	    LOGGER.debug("Entering into the method: cmdqueryClick1 and argument : "+frmproductseriesBOReq); 
	    List<FrmProductSeriesBO> frmproductseriesBOResp =new ArrayList<FrmProductSeriesBO>();
	    String sql = "Select SHORT_NAME,IRMA_PRINT_FL,NAME,DESCP,FUND_PERFORMANCE_FIGURE_TXT IRMA_FOOTNOTE,"       + "to_char(LAST_UPDT_DT,'mm/dd/yyyy') LAST_UPDATE"       + "From PRODUCT_SERIES Where";
	    try {
	         /*List<IDomainObj>  entityList = template.find(sql,new BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
	         ObjectCopier.copy(entityList, frmproductseriesBOResp);*/  
	    	FrmProductSeriesBO bo = new FrmProductSeriesBO();
	    	bo.setShortName("SIC");
	    	bo.setIrmaPrintFile("Print File");
	    	bo.setName("TASA");
	    	bo.setDescription("Standard Insurance Corporation");
	    	bo.setIrmaFootNote("Foot Note");
	    	bo.setLastUpdated("11/07/2017");
	    	FrmProductSeriesBO bo1 = new FrmProductSeriesBO();
	    	bo1.setShortName("SICccc");
	    	bo1.setIrmaPrintFile("Print File1");
	    	bo1.setName("TASAaaa");
	    	bo1.setDescription("Standard Insurance Corporation");
	    	bo1.setIrmaFootNote("Foot Note1");
	    	bo1.setLastUpdated("12/07/2017");
	    	frmproductseriesBOResp.add(bo);
	    	frmproductseriesBOResp.add(bo1);
	    }catch (Exception ex) {
            LOGGER.error("Error occurred in method: cmdqueryClick1()" +"and terminated due to " + ex.getMessage());
            throw new TASADataAccessException(ex);
        }        
        LOGGER.debug("Exiting the method: cmdqueryClick1()"+"return : "+frmproductseriesBOResp);
         return frmproductseriesBOResp;
    }
    /*
	 * Method formLoad1
	 * @param frmproductseriesBOReq
	 * @return frmproductseriesBOResp
	 * @throws TASADataAccessException
	 */
    public List<FrmProductSeriesBO> formLoad1() throws TASADataAccessException {
	    LOGGER.debug("Entering into the method: formLoad1 and argument : "); 
	    List<FrmProductSeriesBO> frmproductseriesBOResp =new ArrayList<FrmProductSeriesBO>();
	    String sql = "Select short_name, name"           + "From product_series"           + "Order by short_name ASC";
	    try {
	         /*List<IDomainObj>  entityList = template.find(sql,new BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
	         ObjectCopier.copy(entityList, frmproductseriesBOResp);  */
	    	FrmProductSeriesBO bo = new FrmProductSeriesBO();
	    	bo.setShortName("Short Name");
	    	bo.setIrmaPrintFile("Print File");
	    	bo.setName("TASA");
	    	bo.setDescription("Standard Insurance Corporation");
	    	bo.setIrmaFootNote("Foot Note1");
	    	bo.setLastUpdated("13/07/2017");
	    	FrmProductSeriesBO bo1 = new FrmProductSeriesBO();
	    	bo1.setShortName("Name");
	    	bo1.setIrmaPrintFile("Print File Name");
	    	bo1.setName("TASA");
	    	bo1.setDescription("Standard Insurance Corporation");
	    	bo1.setIrmaFootNote("Foot Note");
	    	bo1.setLastUpdated("06/07/2017");
	    	frmproductseriesBOResp.add(bo);
	    	frmproductseriesBOResp.add(bo1);
	    }catch (Exception ex) {
            LOGGER.error("Error occurred in method: formLoad1()" +"and terminated due to " + ex.getMessage());
            throw new TASADataAccessException(ex);
        }        
        LOGGER.debug("Exiting the method: formLoad1()"+"return : "+frmproductseriesBOResp);
         return frmproductseriesBOResp;
    }

}