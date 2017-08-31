package com.sic.tasa.exceptions;


public class TASABusinessException  extends Exception{
	private static final long serialVersionUID = 1L;

	public TASABusinessException(String message) {
        super(message);
    }
	
	public TASABusinessException(Exception ex) {
        super(ex.getMessage());
    }	
	
}
