import { db } from "@/lib/firebase";
import { collection, addDoc, where, serverTimestamp } from "firebase/firestore";
import { NextResponse } from "next/server";
import { query, getDocs } from "firebase/firestore";


interface SubscriptionData {
    email: string;
}

export async function POST(
    request: Request
) {
    const body = await request.json();
    const { email }: SubscriptionData = body;

    if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    try {

        const subsRef = collection(db, "waiting_list");

        const q = query(subsRef, where("email", "==", email));

        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 });
        }

        // Save to Firestore
        await addDoc(collection(db, "waiting_list"), {
            email,
            status: "ACTIVE",
            timestamp: serverTimestamp(),
        });

        // await fetch("/api/send-email", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ email, type: "subscribe" }),
        // });

        return new Response(JSON.stringify({ message: "Message sent successfully" }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Error processing message", error }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
