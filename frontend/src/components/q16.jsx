
import { useEffect } from "react";

async function getJson(url) {
    const res = await fetch(url);
    if (!res.ok) {
        let message;
        try {
            const data = await res.json();
            message = data.error || JSON.stringify(data);
        } catch {
            message = await res.text();
        }
        throw new Error(`HTTP ${res.status}: ${message}`);
    }

    return await res.json();
}
async function getStudent(id) {
    return await getJson(
        `http://localhost:8080/api/students/${id}`
    );
}
function Q16() {
    useEffect(() => {
        async function testStudent() {
            try {
                const student = await getStudent(99);
                console.log(student);
            } catch (e) {
                console.log(e.message);
            }
        }
        testStudent();
    }, []);

    return (
        <div>
            <h2>Q16 - Fetch Wrapper</h2>
            <p>Open the browser Console to see the result.</p>
        </div>
    );
}

export default Q16;
