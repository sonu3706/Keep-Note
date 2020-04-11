package com.keepnote.authentication.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class User {
    private String userEmail;
    private String userName;
    private String password;
    private Boolean activeStatus;
    private LocalDateTime lastLoggedIn;
    private LocalDateTime memberSince;
}
