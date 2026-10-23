//package com.demo.student.repository;
//
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.demo.student.entity.Student;
//
//public interface StudentRepository extends JpaRepository<Student, Long> {
//	
//}

package com.demo.student.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.demo.student.entity.Student;
public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findByDepartment(String department);

    List<Student> findByNameContainingIgnoreCase(String name);

    List<Student> findByMarksGreaterThan(int marks);

    List<Student> findByDepartmentAndMarksGreaterThanEqual(String department, int marks);

    List<Student> findTop3ByOrderByMarksDesc();

    boolean existsByEmail(String email);
    long countByDepartment(String department); 
    @Query("SELECT s FROM Student s WHERE s.department = :dept ORDER BY s.marks DESC")
    List<Student> topByDepartment(@Param("dept") String dept);
    @Query(value = "SELECT * FROM students WHERE marks BETWEEN ?1 AND ?2", nativeQuery = true)
    List<Student> marksBetween(int low, int high);
}


