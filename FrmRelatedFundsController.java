package com.sic.tasa.rest;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sic.tasa.dataobject.FrmRelatedFundsBO;
import com.sic.tasa.exceptions.TASARESTException;
import com.sic.tasa.service.IFrmRelatedFundsService;
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
@RequestMapping(value = "/FrmRelatedFundsController")
public class FrmRelatedFundsController {

	private static final AtmaLogger LOGGER = AtmaLogger.create(FrmRelatedFundsController.class.getName());

		@Autowired
		private IFrmRelatedFundsService frmrelatedfundsService;

		public void setFrmRelatedFundsService(IFrmRelatedFundsService frmrelatedfundsService) {
		    this.frmrelatedfundsService = frmrelatedfundsService;
		}


    /*
     * Method populatesfgfunds
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/populatesfgfunds" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> populatesfgfunds(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: populatesfgfunds and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.populatesfgfunds(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: populatesfgfunds and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: populatesfgfunds()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method populaterelatedfunds
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/populaterelatedfunds" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> populaterelatedfunds(@RequestBody FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: populaterelatedfunds and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            frmrelatedfundsBOResp = frmrelatedfundsService.populaterelatedfunds(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: populaterelatedfunds and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: populaterelatedfunds()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method cboallfundsclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cboallfundsclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> cboallfundsclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cboallfundsclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            frmrelatedfundsBOResp = frmrelatedfundsService.cboallfundsclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cboallfundsclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cboallfundsclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method cbosfgfundsclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cbosfgfundsclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> cbosfgfundsclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cbosfgfundsclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.cbosfgfundsclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cbosfgfundsclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cbosfgfundsclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method cmdaddclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdaddclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> cmdaddclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdaddclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.cmdaddclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdaddclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdaddclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method getthehighestpriority
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/getthehighestpriority" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> getthehighestpriority(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: getthehighestpriority and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.getthehighestpriority(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: getthehighestpriority and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: getthehighestpriority()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method cmdcloseclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdcloseclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> cmdcloseclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdcloseclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.cmdcloseclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdcloseclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdcloseclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method reorderpriority
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/reorderpriority" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> reorderpriority(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: reorderpriority and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.reorderpriority(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: reorderpriority and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: reorderpriority()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method cmddeleteclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmddeleteclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> cmddeleteclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmddeleteclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.cmddeleteclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmddeleteclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmddeleteclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method cmddownclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmddownclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> cmddownclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmddownclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.cmddownclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmddownclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmddownclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method updatepriority
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/updatepriority" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> updatepriority(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: updatepriority and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.updatepriority(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: updatepriority and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: updatepriority()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method cmdmodifyclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdmodifyclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> cmdmodifyclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdmodifyclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.cmdmodifyclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdmodifyclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdmodifyclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method cmdselfundclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdselfundclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> cmdselfundclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdselfundclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.cmdselfundclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdselfundclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdselfundclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method cmdupclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdupclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> cmdupclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdupclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.cmdupclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdupclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdupclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method formload
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/formload" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> formload(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: formload and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.formload(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: formload and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: formload()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method formunload
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/formunload" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> formunload(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: formunload and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.formunload(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: formunload and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: formunload()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method lvrelfundsclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/lvrelfundsclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> lvrelfundsclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: lvrelfundsclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.lvrelfundsclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: lvrelfundsclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: lvrelfundsclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method lvrelfundscolumnclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/lvrelfundscolumnclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> lvrelfundscolumnclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: lvrelfundscolumnclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.lvrelfundscolumnclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: lvrelfundscolumnclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: lvrelfundscolumnclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method selfundswithsameassetclass
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/selfundswithsameassetclass" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> selfundswithsameassetclass(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: selfundswithsameassetclass and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.selfundswithsameassetclass(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: selfundswithsameassetclass and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: selfundswithsameassetclass()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method showallfunds
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/showallfunds" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> showallfunds(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: showallfunds and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.showallfunds(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: showallfunds and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: showallfunds()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method optsameassetclassclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/optsameassetclassclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> optsameassetclassclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: optsameassetclassclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.optsameassetclassclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: optsameassetclassclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: optsameassetclassclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
    /*
     * Method optshowallclick
     * @param frmrelatedfundsBOReq
     * @return frmrelatedfundsBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/optshowallclick" , method = RequestMethod.POST)
    public List<FrmRelatedFundsBO> optshowallclick(FrmRelatedFundsBO frmrelatedfundsBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: optshowallclick and argument : "+frmrelatedfundsBOReq); 
        List<FrmRelatedFundsBO> frmrelatedfundsBOResp =  new ArrayList<FrmRelatedFundsBO>();
        try{
            //frmrelatedfundsBOResp = frmrelatedfundsService.optshowallclick(frmrelatedfundsBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: optshowallclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: optshowallclick()and return : "+frmrelatedfundsBOResp);
        return frmrelatedfundsBOResp;
    }
}