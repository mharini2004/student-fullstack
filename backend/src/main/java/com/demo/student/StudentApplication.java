package com.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.student.entity.Student;
import com.demo.student.repository.StudentRepository;

@SpringBootApplication
//@RestController
public class StudentApplication {
	public static void main(String[] args) {
		SpringApplication.run(StudentApplication.class, args);
	}
//	@Bean
//    CommandLineRunner test(StudentRepository repo) {
//        return args -> {
//            repo.save(new Student("Arun", "arun@gmail.com", "CSE", 85));
//            repo.save(new Student("Bala", "bala@gmail.com", "ECE", 72));
//            repo.findAll().forEach(s -> System.out.println(s.getName()));
//        };
//    }
}
