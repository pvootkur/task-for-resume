package com.sic.tasa.exceptions;

public class TASADataAccessException extends Exception {

	private static final long serialVersionUID = 2L;

	public TASADataAccessException(String message) {
        super(message);
    }
	
	public TASADataAccessException(Exception ex) {
        super(ex.getMessage());
    }
}
