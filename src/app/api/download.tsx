// import { getDocs, collection } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { parse } from "json2csv";
// import { NextApiRequest, NextApiResponse } from "next";
// import JSZip from "jszip";
// import { config } from "dotenv";

// interface Subscriber {
//     email: string;
//     timestamp: string;
//     status: string;
// }

// interface ErrorResponse {
//     message: string;
//     error?: unknown;
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
//     if (req.method !== "GET") {
//         return res.status(405).json({ message: "Method Not Allowed" });
//     }

//     try {
//         const snapshot = await getDocs(collection(db, "waiting_list"));
//         const subscribers: Subscriber[] = snapshot.docs.map(doc => ({
//             email: doc.data().email,
//             timestamp: doc.data().timestamp.toDate().toISOString(),
//             status: doc.data().status,
//         }));

//         config(); // Load environment variables from .env file

//         const zip = new JSZip();
//         const password = process.env.ZIP_PASSWORD;

//         if (!password) {
//             throw new Error("ZIP_PASSWORD is not defined in the .env file");
//         }

//         const csv = parse(subscribers);
//         zip.file("subscribers.csv", csv);

//         const zipContent = await zip.generateAsync({
//             type: "nodebuffer",
//             compression: "DEFLATE",
//             compressionOptions: { level: 9 },
//         });

//         // Note: JSZip does not support password protection natively.
//         // To add password protection, consider using a library like 'archiver' or 'zip-lib'.

//         res.setHeader("Content-Type", "application/zip");
//         res.setHeader("Content-Disposition", "attachment; filename=subscribers.zip");
//         res.status(200).send(zipContent);

//         // const csv = parse(subscribers);
//         // res.setHeader("Content-Type", "text/csv");
//         // res.setHeader("Content-Disposition", "attachment; filename=subscribers.csv");
//         // res.status(200).send(csv);
//     } catch (error) {
//         const errorResponse: ErrorResponse = { message: "Error generating CSV", error };
//         res.status(500).json(errorResponse);
//     }
// }

// import { getDocs, collection } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { parse } from "json2csv";
// import { NextApiRequest, NextApiResponse } from "next";
// import { config } from "dotenv";
// import { ZipFile } from "zip-lib";
// import { writeFile, unlink } from "fs/promises";
// import path from "path";
// import os from "os";

// interface Subscriber {
//     email: string;
//     timestamp: string;
//     status: string;
// }

// interface ErrorResponse {
//     message: string;
//     error?: unknown;
// }

// config(); // Load env variables outside the handler

// export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
//     if (req.method !== "GET") {
//         return res.status(405).json({ message: "Method Not Allowed" });
//     }

//     try {
//         const snapshot = await getDocs(collection(db, "waiting_list"));
//         const subscribers: Subscriber[] = snapshot.docs.map(doc => ({
//             email: doc.data().email,
//             timestamp: doc.data().timestamp.toDate().toISOString(),
//             status: doc.data().status,
//         }));

//         const csv = parse(subscribers);

//         // Create a temp CSV file
//         const tmpCsvPath = path.join(os.tmpdir(), "subscribers.csv");
//         await writeFile(tmpCsvPath, csv);

//         const password = process.env.ZIP_PASSWORD;
//         if (!password) {
//             throw new Error("ZIP_PASSWORD is not defined in .env file");
//         }

//         // Create zip file with password
//         const zip = new ZipFile();
//         zip.addFile(tmpCsvPath);
//         zip.setPassword(password);

//         const tmpZipPath = path.join(os.tmpdir(), "subscribers.zip");
//         await zip.archive(tmpZipPath);

//         const zipBuffer = await Bun.file(tmpZipPath).arrayBuffer();

//         // Clean up temporary files
//         await unlink(tmpCsvPath);
//         await unlink(tmpZipPath);

//         // Send the zip
//         res.setHeader("Content-Type", "application/zip");
//         res.setHeader("Content-Disposition", "attachment; filename=subscribers.zip");
//         res.status(200).send(Buffer.from(zipBuffer));
//     } catch (error) {
//         const errorResponse: ErrorResponse = { message: "Error generating ZIP file", error };
//         res.status(500).json(errorResponse);
//     }
// }
