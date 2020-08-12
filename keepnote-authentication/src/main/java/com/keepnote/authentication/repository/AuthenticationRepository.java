package com.keepnote.authentication.repository;

import com.keepnote.authentication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthenticationRepository extends JpaRepository<User, String> {

    Optional<User> findByUserEmailAndPassword(String userEmail, String password);
}
