package com.sheffmachine.repository;

import com.sheffmachine.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {

}
