package dev.lucidlynxx.studylink2.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import dev.lucidlynxx.studylink2.dto.SignUpDto;
import dev.lucidlynxx.studylink2.dto.UserDto;
import dev.lucidlynxx.studylink2.entities.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);
}
