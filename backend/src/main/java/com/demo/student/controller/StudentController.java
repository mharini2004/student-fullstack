package com.demo.student.controller;

//
//import java.util.List;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.demo.student.entity.Student;
//import com.demo.student.service.StudentService;
//
//import jakarta.validation.Valid;
//
//@RestController
//@RequestMapping("/api/students")
//public class StudentController {
//
//    private final StudentService service;
//
//    public StudentController(StudentService service) {
//        this.service = service;
//    }
//
//    @GetMapping
//    public List<Student> getAll() {
//        return service.getAll();
//    }
//
//    @GetMapping("/{id}")
//    public Student getById(@PathVariable Long id) {
//        return service.getById(id);
//    }
//
//    @PostMapping
//    public ResponseEntity<Student> create(@Valid @RequestBody Student s) {
//        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(s));
//    }
//
//    @PutMapping("/{id}")
//    public Student update(@PathVariable Long id, @Valid @RequestBody Student s) {
//        return service.update(id, s);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> delete(@PathVariable Long id) {
//        service.delete(id);
//        return ResponseEntity.noContent().build();
//    }
//}


import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.demo.student.entity.Student;
import com.demo.student.service.StudentService;
import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService service;
    public StudentController(StudentService service) {
        this.service = service;
    }
    @GetMapping
    public List<Student> getAll() {
        return service.getAll();
    }
    @GetMapping("/{id}")
    public Student getById(@PathVariable Long id) {
        return service.getById(id);
    }
    @PostMapping
    public ResponseEntity<Student> create(@Valid @RequestBody Student s) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(s));
    }
    @PutMapping("/{id}")
    public Student update(@PathVariable Long id, @Valid @RequestBody Student s) {
        return service.update(id, s);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/department/{dept}")
    public List<Student> byDepartment(@PathVariable String dept) {
        return service.byDepartment(dept);
    }
    @GetMapping("/department/{dept}/top")
    public List<Student> topByDepartment(@PathVariable String dept) {
        return service.topByDepartment(dept);
    }
    @GetMapping("/search")
    public List<Student> search(@RequestParam String name) {
        return service.search(name);
    }
    @GetMapping("/toppers")
    public List<Student> toppers() {
        return service.toppers();
    }
    @GetMapping("/marks")
    public List<Student> marksBetween(@RequestParam int low, @RequestParam int high) {
        return service.marksBetween(low, high);
    }
    @GetMapping("/page")
    public Page<Student> page(@RequestParam(defaultValue = "0") int page,
                              @RequestParam(defaultValue = "5") int size) {
        return service.getPage(page, size);
    }
}



