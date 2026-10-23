// import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
//hot code
// function App() {
// return <h1>Hello React</h1>;
// }
// export default App;

// Rule 1: Return only one root element.
// // Wrong: two siblings
// return (
// <h1>Title</h1>
// <p>Text</p>
// );
// // Correct: wrap in a div or a Fragment
// return (
// <>
// <h1>Title</h1>  ()-fragement
// <p>Text</p>
// </>
// );
//Rule2
//use class name instesd of class &htmlFor instead of For
//Rule:3
//</img>-
//<br></br>
//Rule:4
//Attribute are camelCase(onClick),OnChange,tableIndex
//Rule:5
//{to put javascript inside jsx}

// function App() {
// const name = "Arun";
// const marks = 85;
// return (
// <div>
// <h1>Hello, {name}</h1>
// <p>Marks: {marks}</p>
// <p>Double marks: {marks * 2}</p>
// <p>Result: {marks >= 40 ? "Pass" : "Fail"}</p>
// </div>
// );
// }

//rule:6
//inline is an object not a string <h1 style={{ color: "blue", fontSize: "24px" }}>Styled</h1>
//Rule:7
//cmts inside jsx{/*cmt*/}
// HTML                     JSX
// class="box"           className="box"
// for="name"            htmlFor="name"
// onclick="fn()"        onClick={fn}
// style="color:red"     style={{ color: "red" }}
// <img src="a.png">     <img src="a.png" />
// <!-- comment -->       {/* comment */}

//components 

// import Welcome from "./component/Welcome";
// function app(){
//   return (
//     <div>
//       <Welcome />
//       <Welcome />
//       <Welcome />

//     </div>
//   );
// }
// export default app;

//prompts

// import StudentCard from "./components/StudentCard";
// function App() {
// return (
// <div>
// <StudentCard name="Arun" department="CSE" marks={85} />
// <StudentCard name="Bala" department="ECE" marks={72} />
// </div>
// );
// }
// export default App;
// import Card from "./components/Card";

// function App() {
//   return (
//     <div>
//       <Card title="Notice">
//         <p>Exam on Monday</p>
//       </Card>

//       <Card>
//         <p>This card has no title, so the default is used</p>
//       </Card>
//     </div>
//   );
// }

// export default App;


// import axios from "axios";
// import { useEffect } from "react";
// // get 
// function App(){
//   useEffect(()=>{
//     const getData=async()=>{
// const a=await axios.get("http://localhost:8091/api/employees");
//   console.log(a.data);
//   };
//   getData();
// },[]);
// return <h1>Welcome to axios</h1>;}
  
//   export default App;


// import axios from "axios";
// import { useEffect } from "react";
// // post
// function App(){
//   useEffect(()=>{
//     const postData=async()=>{
// const a=await axios.post("http://localhost:8091/api/employees",{
//   name:"harini",department:"IT",salary:40000,id:5
// });
//   console.log(a.data);
//   };
//   postData();
// },[]);
// return <h1>Welcome to axios</h1>;}
  
//   export default App;


// import axios from "axios";
// import { useEffect } from "react";
// // put
// function App(){
//   useEffect(()=>{
//     const putData=async()=>{
//       const var1={name:"runner",department:"HR",salary:40000};
// const c=await axios.put("http://localhost:8091/api/employees/3",var1);
//   console.log(c.data);
//   };
//   putData();
// },[]);
// return <h1>Welcome to axios</h1>;}
  
//   export default App;

// import axios from "axios";
// import { useEffect } from "react";
// // Delete
// function App(){
//   useEffect(()=>{
//     const deleteData=async()=>{
      
// const c=await axios.delete("http://localhost:8091/api/employees/6");
//   console.log(c.data);
//   };
//   deleteData();
// },[]);
// return <h1>Welcome to axios</h1>;}
  
//   export default App;

// import StudentList from './components/EmployeeList';
// function App(){
//   return(<div>
//     <h1>hello axios</h1>
//     <StudentList/>
//   </div>)
// }
// export default App;


// import { useEffect, useState } from "react";
// import api from "./api";
// import EmployeeForm from "./components/EmployeeForm";
// import EmployeeList from "./components/EmployeeList";

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     loadEmployees();
//   }, []);
//   const loadEmployees = async () => {
//     try {
//       const res = await api.get("/employees");
//       setEmployees(res.data);
//       setError("");
//     } catch (err) {
//       setError("Cannot load employees. Is the backend running?");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const addEmployee = async (employee) => {
//     try {
//       const res = await api.post("/employees", employee);
//       setEmployees([...employees, res.data]);
//       return null;
//     } catch (err) {
//       return err.response?.data || { error: "Could not add employee" };
//     }
//   };
//   const deleteEmployee = async (id) => {
//     try {
//       await api.delete(`/employees/${id}`);
//       setEmployees(employees.filter((e) => e.id !== id));
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };
//  return (
//     <div style={{ padding: "20px" }}>
//       <h1>Employee Management</h1>
//       <EmployeeForm onAdd={addEmployee} />
//       <h2>Employees</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && !error && (
//         <EmployeeList employees={employees} onDelete={deleteEmployee} />
//       )}
//     </div>
//   );
// }
// export default App;

//error_qn_3(last task)

// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [students, setStudents] = useState();

//   useEffect(() => {
//         axios.get("http://localhost:8080/api/students")
//              .then(res => setStudents(res.data));
//     });

//     return <ul>{students.map(s => <li>{s.name}</li>)}</ul>;
// }

// export default App;

//error_qn_4(last_task)
// import { useEffect, useState } from "react";
// import axios from "axios";
// function App() {
//   const [students, setStudents] = useState([]);
//   const [error, setError] = useState("");
//   async function loadStudents() {
//     try {
//       const res = await axios.get(
//         "http://localhost:8080/api/students"
//       );
//       setStudents(res.data);
//       setError("");
//     } catch (err) {
//       if (err.response) {
//         console.log("HTTP Status:", err.response.status);
//         setError("Request failed: " + err.response.status);
//       } else {
//         console.log("Server is not reachable");
//         setError("Server is not reachable");
//       }
//     }
//   }
//   useEffect(() => {
//     loadStudents();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Q4 - Load Students</h1>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <ul>
//         {students.map((s) => (
//           <li key={s.id}>{s.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;


//predict_Qn_11


// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function add() {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(c => c + 1);

//     console.log(count);
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Q11 - React State Updates</h2>

//       <h3>Count: {count}</h3>

//       <button onClick={add}>Add</button>
//     </div>
//   );
// }

// export default App;


//Part_C_qn15

// import { useEffect } from "react";
// import { deleteStudent } from "./api";

// function App() {
//     useEffect(() => {
//         async function testApi() {
//             const result = await deleteStudent(99);
//             console.log(result);
//         }

//         testApi();
//     }, []);

//     return <h2>Q15 - Axios Service Module</h2>;
// }

// export default App;

//Part_C_qn16

// import Q16 from "./components/q16";

// function App() {
//     return (
//         <div>
//             <h1>My Application</h1>

//             <Q16 />
//         </div>
//     );
// }

// export default App;

//Part_C_Qn_17


import { useEffect, useState } from "react";
import {
    getStudents,
    addStudent,
    deleteStudent,
    searchStudents
} from "./api";

function App() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        department: "",
        marks: ""
    });
    const [errors, setErrors] = useState({});

    // Load all students when the page opens
    useEffect(() => {
        loadStudents();
    }, []);

    async function loadStudents() {
        setLoading(true);
        setError("");

        const result = await getStudents();

        if (Array.isArray(result)) {
            setStudents(result);
        } else {
            setError(
                typeof result === "string"
                    ? result
                    : "Unable to load students"
            );
        }

        setLoading(false);
    }

    // Search 300 ms after typing stops
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (search.trim() === "") {
                loadStudents();
                return;
            }

            setLoading(true);
            setError("");

            const result = await searchStudents(search.trim());

            if (Array.isArray(result)) {
                setStudents(result);
            } else {
                setError(
                    typeof result === "string"
                        ? result
                        : "Unable to search students"
                );
            }

            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [search]);

    function handleChange(event) {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setErrors({});
        setError("");

        const student = {
            ...form,
            marks: Number(form.marks)
        };

        const result = await addStudent(student);

        if (result && typeof result === "object" && !Array.isArray(result)) {
            if (result.id !== undefined) {
                setForm({
                    name: "",
                    email: "",
                    department: "",
                    marks: ""
                });
                setSearch("");
                await loadStudents();
            } else {
                setErrors(result);
            }
        } else {
            setError(
                typeof result === "string"
                    ? result
                    : "Unable to add student"
            );
        }
    }

    async function handleDelete(id) {
        if (!window.confirm("Are you sure you want to delete this student?")) {
            return;
        }

        const result = await deleteStudent(id);

        if (result === "Student deleted successfully") {
            setStudents(current =>
                current.filter(student => student.id !== id)
            );
        } else {
            setError(
                typeof result === "string"
                    ? result
                    : "Unable to delete student"
            );
        }
    }

    return (
        <div style={{ padding: "24px", fontFamily: "Arial" }}>
            <h1>Q17 - Student Management</h1>

            <h2>Add Student</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p style={{ color: "red" }}>{errors.name}</p>
                    )}
                </div>

                <div>
                    <input
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <p style={{ color: "red" }}>{errors.email}</p>
                    )}
                </div>

                <div>
                    <input
                        name="department"
                        placeholder="Department"
                        value={form.department}
                        onChange={handleChange}
                    />
                    {errors.department && (
                        <p style={{ color: "red" }}>{errors.department}</p>
                    )}
                </div>

                <div>
                    <input
                        name="marks"
                        type="number"
                        placeholder="Marks"
                        value={form.marks}
                        onChange={handleChange}
                    />
                    {errors.marks && (
                        <p style={{ color: "red" }}>{errors.marks}</p>
                    )}
                </div>

                <button type="submit">Add Student</button>
            </form>

            <h2>Search Students</h2>

            <input
                placeholder="Search by name"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            {loading ? (
                <p>Loading...</p>
            ) : students.length === 0 ? (
                <p>No students found</p>
            ) : (
                <table
                    border="1"
                    cellPadding="8"
                    style={{ marginTop: "16px", borderCollapse: "collapse" }}
                >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Marks</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.department}</td>
                                <td>{student.marks}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete(student.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default App;



