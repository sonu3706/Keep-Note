package com.keepnote.authentication.serviceimpl;

import com.keepnote.authentication.model.User;
import com.keepnote.authentication.repository.AuthenticationRepository;
import com.keepnote.authentication.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private final AuthenticationRepository authenticationRepository;

    @Autowired
    public AuthenticationServiceImpl(AuthenticationRepository authenticationRepository) {
        this.authenticationRepository = authenticationRepository;
    }

    @Override
    public User login(User user) {
        return null;
    }

    @Override
    public User register(User user) {
        if (!authenticationRepository.existsById(user.getUserEmail())) {
            user.setActiveStatus(Boolean.TRUE);
            user.setMemberSince(LocalDateTime.now());
            authenticationRepository.save(user);
        } else {
            System.out.println("throw exception");
        }
        return user;
    }
}
