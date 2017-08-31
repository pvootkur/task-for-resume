package com.sic.tasa.exceptions;

public class TASAHandlerException  extends Exception{
	private static final long serialVersionUID = 3L;

	public TASAHandlerException(String message) {
        super(message);
    }
	
	public TASAHandlerException(Exception ex) {
        super(ex.getMessage());
    }
}
