package com.sic.tasa.service;

import java.util.List;
import com.sic.tasa.dataobject.FrmNAVMaintBO;
import com.sic.tasa.exceptions.TASABusinessException;

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


public interface IFrmNAVMaintService {

        public List<FrmNAVMaintBO> getsource(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> enabledisablefields(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> cbofundsclick(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> cmdaddclick(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> cmdcloseclick(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> cmddeleteclick(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> cmdselectfundclick(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> dtpasofdatechange(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> populatefundcombo(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> dtpnotifieddatechange(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> formload(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> formunload(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> txtauditedratekeypress(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> txtamendauditedvalchange(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> txtamendauditedvalkeypress(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> txtreenteramendedaudvalchange(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
        public List<FrmNAVMaintBO> txtreenteramendedaudvalkeypress(FrmNAVMaintBO frmnavmaintBOReq) throws TASABusinessException;
}