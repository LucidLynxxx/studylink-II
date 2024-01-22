package dev.lucidlynxx.studylink2.config;

import java.util.Date;
import java.util.Base64;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;

import dev.lucidlynxx.studylink2.dto.UserDto;
import dev.lucidlynxx.studylink2.mappers.UserMapper;
import dev.lucidlynxx.studylink2.repositories.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.val;

@RequiredArgsConstructor
@Component
public class UserAuthProvider {
    
    @Value("${security.jwt.token.secret-key:secret-key}")
    private String secretKey;

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @PostConstruct
    protected void init(){
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());

    }

    public String createToken(UserDto dto){
        Date now = new Date();
        Date validity = new Date(now.getTime() + 3_600_000);

        return JWT.create()
            .withIssuer(dto.getLogin())
            .withIssuedAt(now)
            .withExpiresAt(validity)
            // .withClaim("firstName", dto.getFirstName())
            // .withClaim("lastName", dto.getLastName())
            .sign(Algorithm.HMAC256(secretKey));
    }

    public Authentication validateToken(String token){
        Algorithm algo = Algorithm.HMAC256(secretKey);
        JWTVerifier verifier = JWT.require(algo).build();
        DecodedJWT decoded = verifier.verify(token);

        UserDto user = UserDto.builder()
            .login(decoded.getIssuer())
            // .firstName(decoded.getClaim("firstName").asString())
            // .lastName(decoded.getClaim("lastName").asString())
            .build();

        return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
    }

    // public Authentication validateTokenStrongly
}
