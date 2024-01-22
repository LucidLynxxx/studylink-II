package dev.lucidlynxx.studylink2.controllers;

import org.springframework.web.bind.annotation.RestController;

import dev.lucidlynxx.studylink2.config.UserAuthProvider;
import dev.lucidlynxx.studylink2.dto.CredentialsDto;
import dev.lucidlynxx.studylink2.dto.UserDto;
import dev.lucidlynxx.studylink2.services.UserService;
import lombok.RequiredArgsConstructor;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequiredArgsConstructor
public class AuthController {

     private final UserService userService;
    private final UserAuthProvider userAuthProvider;

    @PostMapping("login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDto credentialsDto) {
        UserDto user = userService.login(credentialsDto);
        //TODO will have to change this to login to the webuntis auth server
        user.setToken(userAuthProvider.createToken(user));
        
        return ResponseEntity.created(URI.create("/users/" + user.getId())).body(user);
    }
    
}
