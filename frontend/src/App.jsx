// import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

//Part_C_Qn_17



import { useEffect, useState } from "react";
import {
    getStudents,
    addStudent,
    deleteStudent,
    searchStudents
} from "./api";
import "./App.css";

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
                    : "Unable to load students."
            );
        }

        setLoading(false);
    }

    useEffect(() => {
        const timer = setTimeout(async () => {
            setLoading(true);
            setError("");

            const result = search.trim()
                ? await searchStudents(search.trim())
                : await getStudents();

            if (Array.isArray(result)) {
                setStudents(result);
            } else {
                setError(
                    typeof result === "string"
                        ? result
                        : "Unable to fetch students."
                );
            }

            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [search]);

    function handleChange(event) {
        const { name, value } = event.target;

        setForm(current => ({
            ...current,
            [name]: value
        }));

        setErrors(current => ({
            ...current,
            [name]: ""
        }));
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

        if (
            result &&
            typeof result === "object" &&
            !Array.isArray(result) &&
            result.id !== undefined
        ) {
            setForm({
                name: "",
                email: "",
                department: "",
                marks: ""
            });
            setSearch("");
            await loadStudents();
        } else if (
            result &&
            typeof result === "object" &&
            !Array.isArray(result)
        ) {
            setErrors(result);
        } else {
            setError(
                typeof result === "string"
                    ? result
                    : "Unable to add student. Please try again."
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
            setError("");
        } else {
            setError(
                typeof result === "string"
                    ? result
                    : "Unable to delete student."
            );
        }
    }

    return (
        <main className="dashboard">
            <header className="topbar">
                <div className="brand">
                    <div className="brand-icon">S</div>
                    <span>Student<span className="brand-light">Space</span></span>
                </div>
                <span className="topbar-label">MANAGEMENT PORTAL</span>
            </header>

            <section className="page-heading">
                <div>
                    <p className="eyebrow">YOUR ACADEMIC WORKSPACE</p>
                    <h1>Student Management</h1>
                    <p className="subtitle">
                        Manage student records, track marks, and keep everything organized.
                    </p>
                </div>

                <div className="total-card">
                    <span className="total-icon">✦</span>
                    <div>
                        <span className="total-label">Students displayed</span>
                        <strong>{students.length}</strong>
                    </div>
                </div>
            </section>

            {error && (
                <div className="alert-error" role="alert">
                    <span className="alert-symbol">!</span>
                    <span>{error}</span>
                    <button
                        type="button"
                        className="alert-close"
                        onClick={() => setError("")}
                        aria-label="Dismiss error"
                    >
                        ×
                    </button>
                </div>
            )}

            <section className="content-grid">
                <div className="panel form-panel">
                    <div className="panel-heading">
                        <div className="section-icon purple-icon">＋</div>
                        <div>
                            <h2>Add a student</h2>
                            <p>Enter the student's details below.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="student-form">
                        <div className="field">
                            <label htmlFor="name">Full name</label>
                            <input
                                id="name"
                                name="name"
                                placeholder="e.g. Harini M."
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && (
                                <small className="field-error">{errors.name}</small>
                            )}
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="student@example.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && (
                                <small className="field-error">{errors.email}</small>
                            )}
                        </div>

                        <div className="field">
                            <label htmlFor="department">Department</label>
                            <input
                                id="department"
                                name="department"
                                placeholder="e.g. Information Technology"
                                value={form.department}
                                onChange={handleChange}
                                required
                            />
                            {errors.department && (
                                <small className="field-error">{errors.department}</small>
                            )}
                        </div>

                        <div className="field">
                            <label htmlFor="marks">Marks</label>
                            <input
                                id="marks"
                                name="marks"
                                type="number"
                                min="0"
                                max="100"
                                placeholder="Enter marks (0–100)"
                                value={form.marks}
                                onChange={handleChange}
                                required
                            />
                            {errors.marks && (
                                <small className="field-error">{errors.marks}</small>
                            )}
                        </div>

                        <button className="primary-button" type="submit">
                            <span>＋</span> Add student
                        </button>
                    </form>
                </div>

                <div className="panel records-panel">
                    <div className="panel-heading records-heading">
                        <div className="section-icon blue-icon">▤</div>
                        <div>
                            <h2>Student directory</h2>
                            <p>Search and manage your student records.</p>
                        </div>
                    </div>

                    <div className="search-box">
                        <span className="search-icon">⌕</span>
                        <input
                            type="search"
                            placeholder="Search students by name..."
                            value={search}
                            onChange={event => setSearch(event.target.value)}
                            aria-label="Search students by name"
                        />
                        {search && (
                            <button
                                type="button"
                                className="clear-search"
                                onClick={() => setSearch("")}
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}
                    </div>

                    <div className="table-wrap">
                        {loading ? (
                            <div className="empty-state">
                                <div className="loader" />
                                <p>Loading student records...</p>
                            </div>
                        ) : students.length === 0 ? (
                            <div className="empty-state">
                                <div className="empty-icon">⌕</div>
                                <h3>No students found</h3>
                                <p>
                                    {search
                                        ? "Try another name or clear your search."
                                        : "Add your first student using the form."}
                                </p>
                            </div>
                        ) : (
                            <table className="student-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Student</th>
                                        <th>Department</th>
                                        <th>Marks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map(student => (
                                        <tr key={student.id}>
                                            <td>
                                                <span className="id-badge">
                                                    #{student.id}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="student-cell">
                                                    <div className="avatar">
                                                        {(student.name || "?")
                                                            .charAt(0)
                                                            .toUpperCase()}
                                                    </div>
                                                    <div className="student-info">
                                                        <strong>{student.name}</strong>
                                                        <span>{student.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="department-badge">
                                                    {student.department}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="marks-value">
                                                    {student.marks}
                                                </span>
                                                <span className="marks-total"> / 100</span>
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="delete-button"
                                                    onClick={() => handleDelete(student.id)}
                                                    aria-label={`Delete ${student.name}`}
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

                    <div className="table-footer">
                        <span>
                            {students.length} {students.length === 1 ? "student" : "students"}
                        </span>
                        <span className="live-status">
                            <span /> Live records
                        </span>
                    </div>
                </div>
            </section>

            <footer className="page-footer">
                <span>StudentSpace</span>
                <span>Simple records. Better organization.</span>
            </footer>
        </main>
    );
}

export default App;




