// import { useEffect, useState } from "react";
// import api from "./api";

// function StudentList() {
//   const [students, setStudents] = useState([]);
//   useEffect(() => {
//     const loadStudents = async () => {
//       const res = await api.get("/employees");
//       setStudents(res.data);
//     };
//     loadStudents();
//   }, []);
//   const handleDelete = async (id) => {
//     await api.delete(`/employees/${id}`);
//     setStudents(students.filter((s) => s.id !== id));
//   };
//   return (
//     <ul>
//       {students.map((s) => (
//         <li key={s.id}>
//           {s.name}
//           <button onClick={() => handleDelete(s.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }
// export default StudentList;

import { useEffect, useState } from "react";
import api from "../api";
import EmployeeForm from "./EmployeeForm";

function EmployeeList({ employees, onDelete}) {
  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }
  return (
    
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Department</th>
          <th>Salary</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.department}</td>
            <td>{e.salary}</td>
            <td><button onClick={() => onDelete(e.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
      
    </table>
    
  );
}
export default EmployeeList;