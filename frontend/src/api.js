
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});
function handleError(err) {
    if (err.response) {
        if (err.response.status === 404) {
            return err.response.data.error || "Resource not found";
        }
        if (err.response.status === 400) {
            return err.response.data;
        }
        return err.response.data?.error || "Request failed";
    }
    return "Server is not reachable";
}
export async function getStudents() {
    try {
        const res = await api.get("/students");
        return res.data;
    } catch (err) {
        return handleError(err);
    }
}
export async function addStudent(student) {
    try {
        const res = await api.post("/students", student);
        return res.data;
    } catch (err) {
        return handleError(err);
    }
}
export async function deleteStudent(id) {
    try {
        await api.delete(`/students/${id}`);
        return "Student deleted successfully";
    } catch (err) {
        return handleError(err);
    }
}

//part_c_q17
export async function searchStudents(name) {
    try {
        const res = await api.get(
            `/students/search?name=${encodeURIComponent(name)}`
        );
        return res.data;
    } catch (err) {
        return handleError(err);
    }
}
