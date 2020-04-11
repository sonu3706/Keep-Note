package com.keepnote.authentication.service;

import com.keepnote.authentication.model.User;

public interface AuthenticationService {
    User login(User user);

    User register(User user);
}
