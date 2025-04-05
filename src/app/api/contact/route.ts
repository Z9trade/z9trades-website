import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    preferredMethod: string;
}

export async function POST(
    req: Request
) {
    const body = await req.json();
    const { name, email, phone, message, preferredMethod }: ContactFormData = body;

    try {
        // Save to Firestore
        await addDoc(collection(db, "contact_messages"), {
            name,
            email,
            phone,
            message,
            preferredMethod,
            timestamp: serverTimestamp(),
        });

        // // Send Email Notification (Optional)
        // const transporter = nodemailer.createTransport({
        //     service: "Gmail",
        //     auth: {
        //         user: process.env.EMAIL_USER as string,  // Your email
        //         pass: process.env.EMAIL_PASS as string,  // App password
        //     },
        // });

        // await transporter.sendMail({
        //     from: `"Z9Trade Contact" <${process.env.EMAIL_USER}>`,
        //     to: process.env.ADMIN_EMAIL as string,  // Admin email
        //     subject: "New Contact Form Message",
        //     text: `From: ${name} <${email}>\n\nMessage: ${message}`,
        // });

        return Response.json({ message: "Message sent successfully" }, { status: 201 });

    } catch (error) {
        return Response.json({ message: "Error processing message", error }, { status: 500 });
    }
}
