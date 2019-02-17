package com.sheffmachine.service;

import com.sheffmachine.domain.Task;
import com.sheffmachine.repository.TaskRepository;

public class TaskServiceImpl implements TaskService {
    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list() {
        return this.taskRepository.findAll();
    }
}
