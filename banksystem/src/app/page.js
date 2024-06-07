"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const submit = (e) => {
        e.preventDefault();
        // Assuming a successful login, navigate to the user list page
        router.push('/users');
    };

    return (
        <>
            <form onSubmit={submit}>
                <div style={{ border: "2px solid white", height: "80vh", textAlign: "center" }}>
                    <div style={{ border: "2px solid blue", marginBottom: "30px", marginTop: "20px" }}>
                        Home Login Page
                    </div>
                    Enter your id: <input style={{ color: "black" }} value={id} onChange={(e) => setId(e.target.value)} /> <br /><br /><br />
                    Enter your password: <input type="password" style={{ color: "black" }} value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br /><br />
                    <button type="submit" style={{ border: "2px solid white", backgroundColor: "red" }}>SUBMIT</button>
                </div>
            </form>
        </>
    );
}
