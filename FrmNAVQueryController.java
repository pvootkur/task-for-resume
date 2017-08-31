package com.sic.tasa.rest;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sic.tasa.dataobject.FrmNAVQueryBO;
import com.sic.tasa.exceptions.TASARESTException;
import com.sic.tasa.service.IFrmNAVQueryService;
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
@RequestMapping(value = "/FrmNAVQueryController")
public class FrmNAVQueryController {

    private static AtmaLogger LOGGER = AtmaLogger.create(FrmNAVQueryController.class.getName());

		@Autowired
		private IFrmNAVQueryService frmnavqueryService;

		public void setFrmNAVQueryService(IFrmNAVQueryService frmnavqueryService) {
		    this.frmnavqueryService = frmnavqueryService;
		}


    /*
     * Method cbofundsclick
     * @param frmnavqueryBOReq
     * @return frmnavqueryBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cbofundsclick" , method = RequestMethod.POST)
    public List<FrmNAVQueryBO> cbofundsclick(FrmNAVQueryBO frmnavqueryBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cbofundsclick and argument : "+frmnavqueryBOReq); 
        List<FrmNAVQueryBO> frmnavqueryBOResp =  new ArrayList<FrmNAVQueryBO>();
        try{
            frmnavqueryBOResp = frmnavqueryService.cbofundsclick(frmnavqueryBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cbofundsclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cbofundsclick()and return : "+frmnavqueryBOResp);
        return frmnavqueryBOResp;
    }
    /*
     * Method cmdcloseclick
     * @param frmnavqueryBOReq
     * @return frmnavqueryBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdcloseclick" , method = RequestMethod.POST)
    public List<FrmNAVQueryBO> cmdcloseclick(FrmNAVQueryBO frmnavqueryBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdcloseclick and argument : "+frmnavqueryBOReq); 
        List<FrmNAVQueryBO> frmnavqueryBOResp =  new ArrayList<FrmNAVQueryBO>();
        try{
            frmnavqueryBOResp = frmnavqueryService.cmdcloseclick(frmnavqueryBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdcloseclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdcloseclick()and return : "+frmnavqueryBOResp);
        return frmnavqueryBOResp;
    }
    /*
     * Method cmdexportclick
     * @param frmnavqueryBOReq
     * @return frmnavqueryBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdexportclick" , method = RequestMethod.POST)
    public List<FrmNAVQueryBO> cmdexportclick(FrmNAVQueryBO frmnavqueryBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdexportclick and argument : "+frmnavqueryBOReq); 
        List<FrmNAVQueryBO> frmnavqueryBOResp =  new ArrayList<FrmNAVQueryBO>();
        try{
            frmnavqueryBOResp = frmnavqueryService.cmdexportclick(frmnavqueryBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdexportclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdexportclick()and return : "+frmnavqueryBOResp);
        return frmnavqueryBOResp;
    }
    /*
     * Method cmdselectclick
     * @param frmnavqueryBOReq
     * @return frmnavqueryBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdselectclick" , method = RequestMethod.POST)
    public List<FrmNAVQueryBO> cmdselectclick(FrmNAVQueryBO frmnavqueryBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdselectclick and argument : "+frmnavqueryBOReq); 
        List<FrmNAVQueryBO> frmnavqueryBOResp =  new ArrayList<FrmNAVQueryBO>();
        try{
            frmnavqueryBOResp = frmnavqueryService.cmdselectclick(frmnavqueryBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdselectclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdselectclick()and return : "+frmnavqueryBOResp);
        return frmnavqueryBOResp;
    }
    /*
     * Method formactivate
     * @param frmnavqueryBOReq
     * @return frmnavqueryBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/formactivate" , method = RequestMethod.POST)
    public List<FrmNAVQueryBO> formactivate(FrmNAVQueryBO frmnavqueryBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: formactivate and argument : "+frmnavqueryBOReq); 
        List<FrmNAVQueryBO> frmnavqueryBOResp =  new ArrayList<FrmNAVQueryBO>();
        try{
            frmnavqueryBOResp = frmnavqueryService.formactivate(frmnavqueryBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: formactivate and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: formactivate()and return : "+frmnavqueryBOResp);
        return frmnavqueryBOResp;
    }
    /*
     * Method formload
     * @param frmnavqueryBOReq
     * @return frmnavqueryBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/formload" , method = RequestMethod.POST)
    public List<FrmNAVQueryBO> formload(FrmNAVQueryBO frmnavqueryBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: formload and argument : "+frmnavqueryBOReq); 
        List<FrmNAVQueryBO> frmnavqueryBOResp =  new ArrayList<FrmNAVQueryBO>();
        try{
            frmnavqueryBOResp = frmnavqueryService.formload(frmnavqueryBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: formload and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: formload()and return : "+frmnavqueryBOResp);
        return frmnavqueryBOResp;
    }
    /*
     * Method formunload
     * @param frmnavqueryBOReq
     * @return frmnavqueryBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/formunload" , method = RequestMethod.POST)
    public List<FrmNAVQueryBO> formunload(FrmNAVQueryBO frmnavqueryBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: formunload and argument : "+frmnavqueryBOReq); 
        List<FrmNAVQueryBO> frmnavqueryBOResp =  new ArrayList<FrmNAVQueryBO>();
        try{
            frmnavqueryBOResp = frmnavqueryService.formunload(frmnavqueryBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: formunload and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: formunload()and return : "+frmnavqueryBOResp);
        return frmnavqueryBOResp;
    }
    /*
     * Method populatelvwhistory
     * @param frmnavqueryBOReq
     * @return frmnavqueryBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/populatelvwhistory" , method = RequestMethod.POST)
    public List<FrmNAVQueryBO> populatelvwhistory(FrmNAVQueryBO frmnavqueryBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: populatelvwhistory and argument : "+frmnavqueryBOReq); 
        List<FrmNAVQueryBO> frmnavqueryBOResp =  new ArrayList<FrmNAVQueryBO>();
        try{
            frmnavqueryBOResp = frmnavqueryService.populatelvwhistory(frmnavqueryBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: populatelvwhistory and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: populatelvwhistory()and return : "+frmnavqueryBOResp);
        return frmnavqueryBOResp;
    }
    /*
     * Method addadjfactorlvwhistory
     * @param frmnavqueryBOReq
     * @return frmnavqueryBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/addadjfactorlvwhistory" , method = RequestMethod.POST)
    public List<FrmNAVQueryBO> addadjfactorlvwhistory(FrmNAVQueryBO frmnavqueryBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: addadjfactorlvwhistory and argument : "+frmnavqueryBOReq); 
        List<FrmNAVQueryBO> frmnavqueryBOResp =  new ArrayList<FrmNAVQueryBO>();
        try{
            frmnavqueryBOResp = frmnavqueryService.addadjfactorlvwhistory(frmnavqueryBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: addadjfactorlvwhistory and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: addadjfactorlvwhistory()and return : "+frmnavqueryBOResp);
        return frmnavqueryBOResp;
    }
    /*
     * Method adddividendlvwhistory
     * @param frmnavqueryBOReq
     * @return frmnavqueryBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/adddividendlvwhistory" , method = RequestMethod.POST)
    public List<FrmNAVQueryBO> adddividendlvwhistory(FrmNAVQueryBO frmnavqueryBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: adddividendlvwhistory and argument : "+frmnavqueryBOReq); 
        List<FrmNAVQueryBO> frmnavqueryBOResp =  new ArrayList<FrmNAVQueryBO>();
        try{
            frmnavqueryBOResp = frmnavqueryService.adddividendlvwhistory(frmnavqueryBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: adddividendlvwhistory and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: adddividendlvwhistory()and return : "+frmnavqueryBOResp);
        return frmnavqueryBOResp;
    }
}