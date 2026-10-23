package com.demo.student.service;

//import java.util.*;
//import org.springframework.stereotype.Service;
//import com.demo.student.entity.Student;
//import com.demo.student.exception.ResourceNotFoundException;
//import com.demo.student.repository.StudentRepository;
//@Service
//
//public class StudentService {
//	private final StudentRepository repo;
//    public StudentService(StudentRepository repo) {     
//        this.repo = repo;
//    }
//    public List<Student> getAll() {
//        return repo.findAll();
//    }
//    public Student getById(Long id) {
//        return repo.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Student not found with id " + id));
//    }
//    public Student save(Student s) {
//        return repo.save(s);
//    }
//    public Student update(Long id, Student s) {
//        Student existing = getById(id);
//        existing.setName(s.getName());
//        existing.setEmail(s.getEmail());
//        existing.setDepartment(s.getDepartment());
//        existing.setMarks(s.getMarks());
//        return repo.save(existing);
//    }
//
//    public void delete(Long id) {
//        if (!repo.existsById(id)) {
//            throw new ResourceNotFoundException("Student not found with id " + id);
//        }
//        repo.deleteById(id);
//    }
//}


import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.demo.student.entity.Student;
import com.demo.student.exception.ResourceNotFoundException;
import com.demo.student.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository repo;
    public StudentService(StudentRepository repo) {
        this.repo = repo;
    }
    public List<Student> getAll() {
        return repo.findAll();
    }
    public Student getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found with id " + id));
    }
    public Student save(Student s) {
        return repo.save(s);
    }
    public Student update(Long id, Student s) {
        Student existing = getById(id);
        existing.setName(s.getName());
        existing.setEmail(s.getEmail());
        existing.setDepartment(s.getDepartment());
        existing.setMarks(s.getMarks());
        return repo.save(existing);
    }
    public void delete(Long id) {
        if (!repo.existsById(id)) {
            throw new ResourceNotFoundException("Student not found with id " + id);
        }
        repo.deleteById(id);
    }
    public List<Student> byDepartment(String dept) {
        return repo.findByDepartment(dept);
    }
    public List<Student> search(String name) {
        return repo.findByNameContainingIgnoreCase(name);
    }
    public List<Student> toppers() {
        return repo.findTop3ByOrderByMarksDesc();
    }
    public List<Student> topByDepartment(String dept) {
        return repo.topByDepartment(dept);
    }
    public List<Student> marksBetween(int low, int high) {
        return repo.marksBetween(low, high);
    }
    public Page<Student> getPage(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("marks").descending());
        return repo.findAll(pageable);
    }
}

