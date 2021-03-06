package com.sic.tasa.repositories.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.sic.tasa.dataobject.FrmBatchProcessControlBO;
import com.sic.tasa.exceptions.TASADataAccessException;
import com.sic.tasa.repositories.IFrmBatchProcessControlRepository;
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
public class FrmBatchProcessControlRepositoryImpl implements IFrmBatchProcessControlRepository {

	private static final AtmaLogger LOGGER = AtmaLogger.create(FrmBatchProcessControlRepositoryImpl.class);

	private HibernateTemplate template;

	/*
	 * Method cmdqueryClick1
	 * 
	 * @param frmbatchprocesscontrolBOReq
	 * 
	 * @return frmbatchprocesscontrolBOResp
	 * 
	 * @throws TASADataAccessException
	 */
	public List<FrmBatchProcessControlBO> cmdqueryClick1(FrmBatchProcessControlBO frmbatchprocesscontrolBOReq)
			throws TASADataAccessException {
		LOGGER.debug("Entering into the method: cmdqueryClick1 and argument : " + frmbatchprocesscontrolBOReq);
		List<FrmBatchProcessControlBO> frmbatchprocesscontrolBOResp = new ArrayList<FrmBatchProcessControlBO>();
		String sql = "Select RP_BATCH_APPLICATION_CD APP_CODE,RP_BATCH_PROCESS_CONTROL_SEQ BATCH_ID,";
		try {
				FrmBatchProcessControlBO bo = new FrmBatchProcessControlBO();
				bo.setProcessDate("05/06/2017");
				bo.setAsOfDate("07/07/2017");
				bo.setCompletedStep("Completed");
				bo.setCompletedFlag("TRUE");
				bo.setGlPostingCode("1100");
				bo.setExecutedFrom("SIC");
				FrmBatchProcessControlBO bo1 = new FrmBatchProcessControlBO();
				bo1.setProcessDate("12/06/2017");
				bo1.setAsOfDate("25/07/2017");
				bo1.setCompletedStep("In Progress");
				bo1.setCompletedFlag("FALSE");
				bo1.setGlPostingCode("1102");
				bo1.setExecutedFrom("TASA");
	
				frmbatchprocesscontrolBOResp.add(bo);
				frmbatchprocesscontrolBOResp.add(bo1);
			/*
			 * List<IDomainObj> entityList = template.find(sql,new
			 * BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
			 * ObjectCopier.copy(entityList, frmbatchprocesscontrolBOResp);
			 */
		} catch (Exception ex) {
			LOGGER.error("Error occurred in method: cmdqueryClick1()" + "and terminated due to " + ex.getMessage());
			throw new TASADataAccessException(ex);
		}
		LOGGER.debug("Exiting the method: cmdqueryClick1()" + "return : " + frmbatchprocesscontrolBOResp);
		return frmbatchprocesscontrolBOResp;
	}

	/*
	 * Method formLoad1
	 * 
	 * @param frmbatchprocesscontrolBOReq
	 * 
	 * @return frmbatchprocesscontrolBOResp
	 * 
	 * @throws TASADataAccessException
	 */
	public List<FrmBatchProcessControlBO> formLoad1() throws TASADataAccessException {
		LOGGER.debug("Entering into the method: formLoad1 and argument : ");
		List<FrmBatchProcessControlBO> frmbatchprocesscontrolBOResp = new ArrayList<FrmBatchProcessControlBO>();
		String sql = "Select RP_BATCH_APPLICATION_CD APP_CODE,RP_BATCH_PROCESS_CONTROL_SEQ BATCH_ID,";
		try {
			/*
			 * List<IDomainObj> entityList = template.find(sql,new
			 * BeanPropertyRowMapper<IDomainObj>(<IDomainObj>.class));
			 * ObjectCopier.copy(entityList, frmbatchprocesscontrolBOResp);
			 */
			FrmBatchProcessControlBO bo = new FrmBatchProcessControlBO();
				bo.setProcessDate("10/07/2017");
				bo.setAsOfDate("12/07/2017");
				bo.setCompletedStep("Completed");
				bo.setCompletedFlag("TRUE");
				bo.setGlPostingCode("1001");
				bo.setExecutedFrom("SIC");
				FrmBatchProcessControlBO bo1 = new FrmBatchProcessControlBO();
				bo1.setProcessDate("11/06/2017");
				bo1.setAsOfDate("21/07/2017");
				bo1.setCompletedStep("In Progress");
				bo1.setCompletedFlag("FALSE");
				bo1.setGlPostingCode("1002");
				bo1.setExecutedFrom("TASA");

			frmbatchprocesscontrolBOResp.add(bo);
			frmbatchprocesscontrolBOResp.add(bo1);
		} catch (Exception ex) {
			LOGGER.error("Error occurred in method: formLoad1()" + "and terminated due to " + ex.getMessage());
			throw new TASADataAccessException(ex);
		}
		LOGGER.debug("Exiting the method: formLoad1()" + "return : " + frmbatchprocesscontrolBOResp);
		return frmbatchprocesscontrolBOResp;
	}

}