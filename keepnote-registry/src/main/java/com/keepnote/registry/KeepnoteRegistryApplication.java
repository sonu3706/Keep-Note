package com.keepnote.registry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class KeepnoteRegistryApplication {

    public static void main(String[] args) {
        SpringApplication.run(KeepnoteRegistryApplication.class, args);
    }

}
