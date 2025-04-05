import { db } from "@/lib/firebase";
import { collection, updateDoc, serverTimestamp, where } from "firebase/firestore";
import { NextResponse } from "next/server";
import { query, getDocs } from "firebase/firestore";

// interface SubscriptionData {
//     email: string;
// }
export async function GET(req: Request) {
    try {

        const { searchParams } = new URL(req.url);
        const email = searchParams.get("email");


        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Find and delete the subscription
        const subsRef = collection(db, "waiting_list");

        const q = query(subsRef, where("email", "==", email));

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return NextResponse.json({ error: "Email not found" }, { status: 404 });
        }

        snapshot.forEach((doc) => doc.data().status == "ACTIVE" && updateDoc(doc.ref, {
            status: "INACTIVE",
            timestamp: serverTimestamp(),
        }));

        // Redirect to the home page after successful unsubscription
        return NextResponse.redirect(new URL("/unsubscribed", req.url));

        // return NextResponse.json({ message: "Unsubscribed successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error unsubscribing:", error);
        return new Response(
            `<html>
                <head>
                    <title>Error</title>
                </head>
                <body>
                    <h1>An error has occurred</h1>
                    <p>We encountered an issue while processing your request. Please try again later.</p>
                </body>
            </html>`,
            { status: 500, headers: { "Content-Type": "text/html" } }
        );
        // return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
