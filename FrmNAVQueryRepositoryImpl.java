package com.sic.tasa.repositories.impl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaDelete;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.CriteriaUpdate;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.sql.DataSource;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Order;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.sic.tasa.repositories.IFrmNAVQueryRepository;
import com.sic.tasa.dataobject.FrmNAVQueryBO;
import com.sic.tasa.util.AtmaLogger;
import com.sic.tasa.exceptions.TASADataAccessException;


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
public class FrmNAVQueryRepositoryImpl implements IFrmNAVQueryRepository{

    private static AtmaLogger LOGGER = AtmaLogger.create(FrmNAVQueryRepositoryImpl.class.getName());

    private HibernateTemplate template;


    /*
	 * Method cmdselectClick1
	 * @param frmnavqueryBOReq
	 * @return frmnavqueryBOResp
	 * @throws TASADataAccessException
	 */
    public List<FrmNAVQueryBO> cmdselectClick1(FrmNAVQueryBO frmnavqueryBOReq) throws TASADataAccessException {
	    LOGGER.debug("Entering into the method: cmdselectClick1 and argument : "+frmnavqueryBOReq); 
	    List<FrmNAVQueryBO> frmnavqueryBOResp =new ArrayList<FrmNAVQueryBO>();
	    String sql = "SELECT distinct rmip.full_nm,rmip.rp_mip_seq,dd.dividend_type_cd,dd.estimated_dividend_rt,dd.dividend_detail_seq,dd.actual_dividend_rt,dd.as_of_dt,dd.e_invst_instrument_seq FROM dividend_detail dd,rp_modified_investment_pool rmip WHERE dd.as_of_dt >=to_date(' format()(dteFrom, 'mmddyyyy') + ', 'mmddyyyy') AND dd.as_of_dt <= to_date('format()(dteTo, 'mmddyyyy') + ', 'mmddyyyy') ";
	    try {
//	         List<IDomainObj>  entityList = template.find(sql,new BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
//	         ObjectCopier.copy(entityList, frmnavqueryBOResp);  
	    }catch (Exception ex) {
            LOGGER.error("Error occurred in method: cmdselectClick1()" +"and terminated due to " + ex.getMessage());
            throw new TASADataAccessException(ex);
        }        
        LOGGER.debug("Exiting the method: cmdselectClick1()"+"return : "+frmnavqueryBOResp);
         return frmnavqueryBOResp;
    }
    /*
	 * Method formLoad1
	 * @param frmnavqueryBOReq
	 * @return frmnavqueryBOResp
	 * @throws TASADataAccessException
	 */
    public List<FrmNAVQueryBO> formLoad1(FrmNAVQueryBO frmnavqueryBOReq) throws TASADataAccessException {
	    LOGGER.debug("Entering into the method: formLoad1 and argument : "+frmnavqueryBOReq); 
	    List<FrmNAVQueryBO> frmnavqueryBOResp =new ArrayList<FrmNAVQueryBO>();
	    String sql = "SELECT full_nm, rp_mip_seq, e_invst_instrument_seq FROM rp_modified_investment_pool WHERE e_invst_instrument_seq is not null ORDER BY full_nm";
	    try {
//	         List<IDomainObj>  entityList = template.find(sql,new BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
//	         ObjectCopier.copy(entityList, frmnavqueryBOResp);  
	    }catch (Exception ex) {
            LOGGER.error("Error occurred in method: formLoad1()" +"and terminated due to " + ex.getMessage());
            throw new TASADataAccessException(ex);
        }        
        LOGGER.debug("Exiting the method: formLoad1()"+"return : "+frmnavqueryBOResp);
         return frmnavqueryBOResp;
    }
    /*
	 * Method addDividendLvwhistory1
	 * @param frmnavqueryBOReq
	 * @return frmnavqueryBOResp
	 * @throws TASADataAccessException
	 */
    public List<FrmNAVQueryBO> addDividendLvwhistory1(FrmNAVQueryBO frmnavqueryBOReq) throws TASADataAccessException {
	    LOGGER.debug("Entering into the method: addDividendLvwhistory1 and argument : "+frmnavqueryBOReq); 
	    List<FrmNAVQueryBO> frmnavqueryBOResp =new ArrayList<FrmNAVQueryBO>();
	    String sql = "select dividend_share_nbr, dividend_share_dollar_amt from rp_mip_dividend_detail where rp_mip_seq =  rstDividend!rp_mip_seq + and dividend_detail_seq =  rstDividend!dividend_detail_seq";
	    try {
//	         List<IDomainObj>  entityList = template.find(sql,new BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
//	         ObjectCopier.copy(entityList, frmnavqueryBOResp);  
	    }catch (Exception ex) {
            LOGGER.error("Error occurred in method: addDividendLvwhistory1()" +"and terminated due to " + ex.getMessage());
            throw new TASADataAccessException(ex);
        }        
        LOGGER.debug("Exiting the method: addDividendLvwhistory1()"+"return : "+frmnavqueryBOResp);
         return frmnavqueryBOResp;
    }
    /*
	 * Method addDividendLvwhistory2
	 * @param frmnavqueryBOReq
	 * @return frmnavqueryBOResp
	 * @throws TASADataAccessException
	 */
    public List<FrmNAVQueryBO> addDividendLvwhistory2(FrmNAVQueryBO frmnavqueryBOReq) throws TASADataAccessException {
	    LOGGER.debug("Entering into the method: addDividendLvwhistory2 and argument : "+frmnavqueryBOReq); 
	    List<FrmNAVQueryBO> frmnavqueryBOResp =new ArrayList<FrmNAVQueryBO>();
	    String sql = "select dividend_share_nbr, dividend_share_dollar_amt from rp_mip_dividend_detail where rp_mip_seq =  rstDividend!rp_mip_seq + and dividend_detail_seq =  rstDividend!dividend_detail_seq";
	    try {
//	         List<IDomainObj>  entityList = template.find(sql,new BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
//	         ObjectCopier.copy(entityList, frmnavqueryBOResp);  
	    }catch (Exception ex) {
            LOGGER.error("Error occurred in method: addDividendLvwhistory2()" +"and terminated due to " + ex.getMessage());
            throw new TASADataAccessException(ex);
        }        
        LOGGER.debug("Exiting the method: addDividendLvwhistory2()"+"return : "+frmnavqueryBOResp);
         return frmnavqueryBOResp;
    }

}