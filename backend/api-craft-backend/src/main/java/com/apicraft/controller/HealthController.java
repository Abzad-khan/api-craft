package com.apicraft.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/api/health")
    public String check() {
        return "API Craft Backend Running Successfully!";
    }
}
