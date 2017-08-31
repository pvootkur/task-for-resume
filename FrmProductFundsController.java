package com.sic.tasa.rest;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sic.tasa.dataobject.FrmProductFundsBO;
import com.sic.tasa.exceptions.TASARESTException;
import com.sic.tasa.service.IFrmProductFundsService;
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


@RestController
@RequestMapping(value = "/FrmProductFundsController")
public class FrmProductFundsController {

    private static final AtmaLogger LOGGER = AtmaLogger.create(FrmProductFundsController.class);

		@Autowired
		private IFrmProductFundsService frmproductfundsService;

		public void setFrmProductFundsService(IFrmProductFundsService frmproductfundsService) {
		    this.frmproductfundsService = frmproductfundsService;
		}
    /*
     * Method datagridaftercolupdate
     * @param frmproductfundsBOReq
     * @return frmproductfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/datagridaftercolupdate" , method = RequestMethod.POST)
    public List<FrmProductFundsBO> datagridaftercolupdate(@RequestBody List<FrmProductFundsBO> frmproductfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: datagridaftercolupdate and argument : "+frmproductfundsBOReq); 
        List<FrmProductFundsBO> frmproductfundsBOResp =  new ArrayList<FrmProductFundsBO>();
        try{
            frmproductfundsBOResp = frmproductfundsService.datagridaftercolupdate(frmproductfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: datagridaftercolupdate and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: datagridaftercolupdate()and return : "+frmproductfundsBOResp);
        return frmproductfundsBOResp;
    }
    /*
     * Method datagridbeforecolupdate
     * @param frmproductfundsBOReq
     * @return frmproductfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/datagridbeforecolupdate" , method = RequestMethod.POST)
    public List<FrmProductFundsBO> datagridbeforecolupdate(@RequestBody List<FrmProductFundsBO> frmproductfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: datagridbeforecolupdate and argument : "+frmproductfundsBOReq); 
        List<FrmProductFundsBO> frmproductfundsBOResp =  new ArrayList<FrmProductFundsBO>();
        try{
            frmproductfundsBOResp = frmproductfundsService.datagridbeforecolupdate(frmproductfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: datagridbeforecolupdate and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: datagridbeforecolupdate()and return : "+frmproductfundsBOResp);
        return frmproductfundsBOResp;
    }
    /*
     * Method formload
     * @param frmproductfundsBOReq
     * @return frmproductfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/formload" , method = RequestMethod.POST)
    public List<FrmProductFundsBO> formload() throws TASARESTException{    
        LOGGER.debug("Entering into the method: formload"); 
        List<FrmProductFundsBO> frmproductfundsBOResp =  new ArrayList<FrmProductFundsBO>();
        try{
            frmproductfundsBOResp = frmproductfundsService.formload();
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: formload and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: formload()and return : "+frmproductfundsBOResp);
        return frmproductfundsBOResp;
    }
}