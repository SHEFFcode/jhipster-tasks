package com.sheffmachine;

import com.sheffmachine.domain.Task;
import com.sheffmachine.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class TasksApplication {
    public static void main(String[] args) {
        SpringApplication.run(TasksApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(TaskService taskService) {
        return args -> {
            taskService.save(new Task(1L, "Create Spring Boot Application", LocalDate.now(), true));
            taskService.save(new Task(2L, "Create Spring Project Packages", LocalDate.now().plus(1, ChronoUnit.DAYS), false));
            taskService.save(new Task(3L, "Create Spring Boot Application", LocalDate.now().plus(10, ChronoUnit.DAYS), false));
            taskService.save(new Task(4L, "Create Spring Boot Application", LocalDate.now().plus(25, ChronoUnit.DAYS), false));
            taskService.save(new Task(5L, "Create Spring Boot Application", LocalDate.now().plus(30, ChronoUnit.DAYS), false));
            taskService.save(new Task(6L, "Create Spring Boot Application", LocalDate.now().plus(45, ChronoUnit.DAYS), false));
            taskService.save(new Task(7L, "Create Spring Boot Application", LocalDate.now().plus(13, ChronoUnit.DAYS), false));
        };
    }

}
