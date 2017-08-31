package com.sic.tasa.service;

import java.util.List;

import com.sic.tasa.dataobject.ProcessStatusBO;
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


public interface IProcessStatusService {

        public List<ProcessStatusBO> cmdqueryclick(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> cmdrefreshclick(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> flexgriddragdrop(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> flexgridmousedown(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> flexgridmousemove(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> flexgridmouseup(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> flexgriddblclick(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> docolumnsort(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> flexgridrowcolchange(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> formactivate(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> formload() throws TASABusinessException;
        public List<ProcessStatusBO> formatflexgrid(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> mshflexgriddblclick(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> columnsort(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> formresize(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> cmdcloseclick(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> formunload(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> txtappkeypress(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> txtapplostfocus(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> txtdatekeypress(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
        public List<ProcessStatusBO> txtnamekeypress(ProcessStatusBO processStatusBOReq) throws TASABusinessException;
}