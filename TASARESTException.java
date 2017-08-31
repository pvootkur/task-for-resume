package com.sic.tasa.exceptions;


public class TASARESTException  extends Exception{
	private static final long serialVersionUID = 4L;

	public TASARESTException(String message) {
        super(message);
    }
	
	public TASARESTException(Exception ex) {
        super(ex.getMessage());
    }	
	
}
