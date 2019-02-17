package com.sheffmachine.service;

import com.sheffmachine.domain.Task;
import org.springframework.stereotype.Service;

@Service
public interface TaskService {
    Iterable<Task> list();
}
