package dev.lucidlynxx.studylink2.exceptions;

import org.springframework.http.HttpStatus;

public class AppException extends RuntimeException{
    private final HttpStatus httpStatus;

    public AppException(String msg, HttpStatus httpStatus){
        super(msg);
        this.httpStatus = httpStatus;
    }

    public HttpStatus geHttpStatus(){
        return httpStatus;
    }

}
