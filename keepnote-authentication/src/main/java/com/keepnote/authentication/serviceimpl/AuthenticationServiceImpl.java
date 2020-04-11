package com.keepnote.authentication.serviceimpl;

import com.keepnote.authentication.model.User;
import com.keepnote.authentication.repository.AuthenticationRepository;
import com.keepnote.authentication.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private AuthenticationRepository authenticationRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AuthenticationServiceImpl(AuthenticationRepository authenticationRepository, PasswordEncoder passwordEncoder) {
        this.authenticationRepository = authenticationRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User login(User user) {

        return null;
    }

    @Override
    public User register(User user) {
        if(!authenticationRepository.existsById(user.getUserEmail())) {
            user.setActiveStatus(Boolean.TRUE);
            user.setMemberSince(LocalDateTime.now());
            authenticationRepository.save(user);
        }
        else {
            System.out.println("throw exception");
        }
        return null;
    }
}
