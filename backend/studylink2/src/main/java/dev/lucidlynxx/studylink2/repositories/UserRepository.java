package dev.lucidlynxx.studylink2.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.lucidlynxx.studylink2.entities.User;


public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByLogin(String login);
}
