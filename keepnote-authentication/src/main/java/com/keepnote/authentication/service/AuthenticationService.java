package com.keepnote.authentication.service;

import com.keepnote.authentication.exceptions.UserExceptions;
import com.keepnote.authentication.model.User;

import java.util.Map;

public interface AuthenticationService {
    Map<String, String> login(User user) throws UserExceptions.UserNameAndPasswordMismatch;

    User register(User user) throws UserExceptions.UserAlreadyExists;

    Boolean checkEmailExists(String email);
}
