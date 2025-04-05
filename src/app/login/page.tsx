"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/dashboard");
        } catch (err) {
            if (err instanceof Error) {
                alert("Login failed: " + err.message);
            } else {
                alert("Login failed: An unknown error occurred.");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100" >
            <div className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-sm" >
                <h1 className="text-2xl font-bold mb-6 text-center" > Admin Login </h1>
                < Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)
                } className="mb-4" />
                <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4" />
                <Button className="w-full bg-[blue]" onClick={handleLogin} > Login </Button>
            </div>
        </div>
    );
}
