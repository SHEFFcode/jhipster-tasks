package com.sheffmachine.controllers;

import com.sheffmachine.domain.Task;
import com.sheffmachine.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> list() {
        return this.taskService.list();
    }

    @PostMapping(value = {"", "/"})
    public Task saveTask(@RequestBody Task task) {
        return this.taskService.save(task);
    }

}
