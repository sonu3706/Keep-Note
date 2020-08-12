package com.keepnote.authentication.serviceimpl;

import com.keepnote.authentication.exceptions.UserExceptions;
import com.keepnote.authentication.model.User;
import com.keepnote.authentication.repository.AuthenticationRepository;
import com.keepnote.authentication.service.AuthenticationService;
import com.keepnote.authentication.utility.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private final AuthenticationRepository authenticationRepository;
    private final JwtTokenUtil jwtTokenUtil;

    @Autowired
    public AuthenticationServiceImpl(AuthenticationRepository authenticationRepository, JwtTokenUtil jwtTokenUtil) {
        this.authenticationRepository = authenticationRepository;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @Override
    public Map<String, String> login(User user) throws UserExceptions.UserNameAndPasswordMismatch {
        Map<String, String> map = new HashMap<>();
        User fetchedUser = authenticationRepository.findByUserEmailAndPassword(user.getUserEmail(), user.getPassword())
                .orElseThrow(() -> new UserExceptions.UserNameAndPasswordMismatch("Email and password does not match"));
        map.put("access_token", this.jwtTokenUtil.generateToken(fetchedUser.getUserEmail()));
        map.put("userId", fetchedUser.getUserEmail());
        return map;
    }

    @Override
    public User register(User user) throws UserExceptions.UserAlreadyExists {
        if (!authenticationRepository.existsById(user.getUserEmail())) {
            user.setActiveStatus(Boolean.TRUE);
            user.setMemberSince(LocalDateTime.now());
            authenticationRepository.save(user);
        } else {
            System.out.println("throw exception");
            throw new UserExceptions.UserAlreadyExists("User exists with id, " + user.getUserEmail());
        }
        return user;
    }

    @Override
    public Boolean checkEmailExists(String email) {
        return authenticationRepository.existsById(email.trim());
    }
}
