package com.sic.tasa.rest;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sic.tasa.dataobject.FrmNAVMaintBO;
import com.sic.tasa.exceptions.TASARESTException;
import com.sic.tasa.service.IFrmNAVMaintService;
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
@RequestMapping(value = "/FrmNAVMaintController")
public class FrmNAVMaintController {

    private static AtmaLogger LOGGER = AtmaLogger.create(FrmNAVMaintController.class.getName());

		@Autowired
		private IFrmNAVMaintService frmnavmaintService;

		public void setFrmNAVMaintService(IFrmNAVMaintService frmnavmaintService) {
		    this.frmnavmaintService = frmnavmaintService;
		}


    /*
     * Method getsource
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/getsource" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> getsource(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: getsource and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.getsource(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: getsource and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: getsource()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method enabledisablefields
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/enabledisablefields" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> enabledisablefields(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: enabledisablefields and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.enabledisablefields(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: enabledisablefields and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: enabledisablefields()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method cbofundsclick
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cbofundsclick" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> cbofundsclick(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cbofundsclick and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.cbofundsclick(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cbofundsclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cbofundsclick()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method cmdaddclick
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdaddclick" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> cmdaddclick(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdaddclick and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.cmdaddclick(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdaddclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdaddclick()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method cmdcloseclick
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdcloseclick" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> cmdcloseclick(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdcloseclick and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.cmdcloseclick(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdcloseclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdcloseclick()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method cmddeleteclick
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmddeleteclick" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> cmddeleteclick(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmddeleteclick and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.cmddeleteclick(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmddeleteclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmddeleteclick()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method cmdselectfundclick
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/cmdselectfundclick" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> cmdselectfundclick(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: cmdselectfundclick and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.cmdselectfundclick(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: cmdselectfundclick and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: cmdselectfundclick()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method dtpasofdatechange
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/dtpasofdatechange" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> dtpasofdatechange(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: dtpasofdatechange and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.dtpasofdatechange(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: dtpasofdatechange and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: dtpasofdatechange()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method populatefundcombo
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/populatefundcombo" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> populatefundcombo(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: populatefundcombo and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.populatefundcombo(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: populatefundcombo and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: populatefundcombo()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method dtpnotifieddatechange
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/dtpnotifieddatechange" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> dtpnotifieddatechange(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: dtpnotifieddatechange and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.dtpnotifieddatechange(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: dtpnotifieddatechange and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: dtpnotifieddatechange()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method formload
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/formload" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> formload(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: formload and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.formload(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: formload and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: formload()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method formunload
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/formunload" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> formunload(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: formunload and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.formunload(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: formunload and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: formunload()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method txtauditedratekeypress
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/txtauditedratekeypress" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> txtauditedratekeypress(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: txtauditedratekeypress and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.txtauditedratekeypress(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: txtauditedratekeypress and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: txtauditedratekeypress()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method txtamendauditedvalchange
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/txtamendauditedvalchange" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> txtamendauditedvalchange(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: txtamendauditedvalchange and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.txtamendauditedvalchange(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: txtamendauditedvalchange and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: txtamendauditedvalchange()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method txtamendauditedvalkeypress
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/txtamendauditedvalkeypress" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> txtamendauditedvalkeypress(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: txtamendauditedvalkeypress and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.txtamendauditedvalkeypress(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: txtamendauditedvalkeypress and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: txtamendauditedvalkeypress()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method txtreenteramendedaudvalchange
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/txtreenteramendedaudvalchange" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> txtreenteramendedaudvalchange(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: txtreenteramendedaudvalchange and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.txtreenteramendedaudvalchange(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: txtreenteramendedaudvalchange and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: txtreenteramendedaudvalchange()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
    /*
     * Method txtreenteramendedaudvalkeypress
     * @param frmnavmaintBOReq
     * @return frmnavmaintBOResp
     * @throws TASARESTException
    */
    @RequestMapping(value = "/txtreenteramendedaudvalkeypress" , method = RequestMethod.POST)
    public List<FrmNAVMaintBO> txtreenteramendedaudvalkeypress(FrmNAVMaintBO frmnavmaintBOReq) throws TASARESTException{    
        LOGGER.debug("Entering into the method: txtreenteramendedaudvalkeypress and argument : "+frmnavmaintBOReq); 
        List<FrmNAVMaintBO> frmnavmaintBOResp =  new ArrayList<FrmNAVMaintBO>();
        try{
            frmnavmaintBOResp = frmnavmaintService.txtreenteramendedaudvalkeypress(frmnavmaintBOReq);
        }
        catch (Exception ex){
            LOGGER.error("Error occurred in method: txtreenteramendedaudvalkeypress and terminated due to " + ex.getMessage());
            throw new TASARESTException(ex);
        }
        LOGGER.debug("Exiting the method: txtreenteramendedaudvalkeypress()and return : "+frmnavmaintBOResp);
        return frmnavmaintBOResp;
    }
}