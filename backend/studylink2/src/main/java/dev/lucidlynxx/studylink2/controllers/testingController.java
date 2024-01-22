package dev.lucidlynxx.studylink2.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class testingController {

    @GetMapping("/test")
    public ResponseEntity<String> tResponseEntity() {
        return ResponseEntity.ok("test");
    }
}
