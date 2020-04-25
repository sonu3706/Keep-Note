package com.keepnote.authentication.exceptions;

public class UserExceptions  {
    public UserExceptions() {

    }

    public static class UserAlreadyExists extends Exception {
        public UserAlreadyExists(String message) {
            super(message);
        }
    }

    public static class UserNotFound extends Exception {
        public UserNotFound(String message) {
            super(message);
        }
    }

    public static class UserNameAndPasswordMismatch extends Exception {
        public UserNameAndPasswordMismatch(String message) {
            super(message);
        }
    }
}
