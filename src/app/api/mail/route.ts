import { NextResponse } from "next/server";

interface EmailRequestBody {
    email: string;
    type: "subscribe" | "unsubscribe";
}

export async function POST(request: Request) {

    const body = await request.json();
    const { email, type }: EmailRequestBody = body;

    // if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

    // const { email, type }: EmailRequestBody = req.body; // type: "subscribe" | "unsubscribe"

    // SMTP Transporter Setup (Example: Gmail SMTP)
    // const transporter = nodemailer.createTransport({
    //     service: "Gmail",
    //     auth: {
    //         user: process.env.EMAIL_USER,  // Your email
    //         pass: process.env.EMAIL_PASS   // App password (not your real password)
    //     },
    // });

    let subject: string = "";
    let html: string = "";

    if (type === "subscribe") {
        subject = "Welcome to Z9Trade!";
        html = `
        <h2>Welcome to Z9Trade!</h2>
        <p>Thank you for subscribing to our updates. Stay tuned for our launch and exclusive offers.</p>
        <p>If you didn't subscribe, you can <a href="${process.env.BASE_URL}/unsubscribe?email=${encodeURIComponent(email)}">unsubscribe here</a>.</p>
      `;
    } else if (type === "unsubscribe") {
        subject = "<h2>You've unsubscribed</h2>";
        html = `<p>We're sorry to see you go. You've been removed from the waiting list.</p>`;
    }

    try {
        // await transporter.sendMail({
        //     from: `"Z9Trade" <${process.env.EMAIL_USER}>`,
        //     to: email,
        //     subject,
        //     html,
        // });
        return NextResponse.json({ message: "Email  successfully sent" }, { status: 201 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
