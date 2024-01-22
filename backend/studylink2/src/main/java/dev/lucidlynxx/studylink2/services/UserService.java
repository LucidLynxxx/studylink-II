package dev.lucidlynxx.studylink2.services;

import java.nio.CharBuffer;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import dev.lucidlynxx.studylink2.dto.CredentialsDto;
import dev.lucidlynxx.studylink2.dto.SignUpDto;
import dev.lucidlynxx.studylink2.dto.UserDto;
import dev.lucidlynxx.studylink2.entities.User;
import dev.lucidlynxx.studylink2.exceptions.AppException;
import dev.lucidlynxx.studylink2.mappers.UserMapper;
import dev.lucidlynxx.studylink2.repositories.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserDto login(CredentialsDto creds){
        User user = userRepository.findByLogin(creds.login())
            .orElseThrow(() -> new AppException("Unkown User", HttpStatus.NOT_FOUND));
        
        if(passwordEncoder.matches(CharBuffer.wrap(creds.password()), user.getPassword())){
            return userMapper.toUserDto(user);
        }
        throw new AppException("Invalid Password", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(SignUpDto signUpDto){
        Optional<User> oUser = userRepository.findByLogin(signUpDto.login());
        if(oUser.isPresent()){
            throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
        }

        User user = userMapper.signUpToUser(signUpDto);
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(signUpDto.password())));
        User savedUser = userRepository.save(user);
        return userMapper.toUserDto(savedUser);        
    }
}
