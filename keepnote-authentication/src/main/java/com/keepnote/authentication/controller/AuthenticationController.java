package com.keepnote.authentication.controller;

import com.keepnote.authentication.exceptions.UserExceptions;
import com.keepnote.authentication.model.User;
import com.keepnote.authentication.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        ResponseEntity<?> responseEntity;
        try {
            responseEntity = new ResponseEntity<>(authenticationService.register(user), HttpStatus.CREATED);
        } catch (Exception exception) {
            responseEntity = new ResponseEntity<>(exception.getMessage(), HttpStatus.CONFLICT);
        }

        return responseEntity;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        ResponseEntity<?> responseEntity;
        try {
            responseEntity = new ResponseEntity<Map<String, String>>(authenticationService.login(user), HttpStatus.OK);
        } catch (UserExceptions.UserNameAndPasswordMismatch exception) {
            responseEntity = new ResponseEntity<String>(exception.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @GetMapping(value = "/{email}")
    public ResponseEntity<?> checkEmailExists(@PathVariable("email") String email) {
        ResponseEntity<Boolean> responseEntity;
        responseEntity = new ResponseEntity<>(authenticationService.checkEmailExists(email), HttpStatus.OK);
        return responseEntity;
    }
}
