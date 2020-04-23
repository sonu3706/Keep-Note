package com.keepnote.authentication.controller;

import com.keepnote.authentication.model.User;
import com.keepnote.authentication.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        ResponseEntity<?>responseEntity;
        try {
            responseEntity = new ResponseEntity<>(authenticationService.register(user), HttpStatus.CREATED);
        } catch (Exception exception) {
            responseEntity = new ResponseEntity<>(exception.getMessage(), HttpStatus.CONFLICT);
        }

        return responseEntity;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user){
        return null;
    }
}
