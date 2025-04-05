"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface subsData {
    email: string;
    status: string;
    timestamp: string;
}

interface ContactMessagesData {
    name: string;
    email: string;
    phone: string;
    message: string;
    preferredMethod: string;
    timestamp: string; // Added timestamp property
}

interface TableOptions {
    value: "subscribers" | "messages";
}

export default function Dashboard() {
    const [subscribers, setSubscribers] = useState<subsData[]>([]);
    const [messages, setMessages] = useState<ContactMessagesData[]>([]);


    const [selectedTable, setSelectedTable] = useState<TableOptions>({ value: "subscribers" });

    const handleTableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTable({ value: event.target.value as "subscribers" | "messages" });
    };
    const router = useRouter();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (!user) router.push("/login");

        });



        const loadSubscriptionData = async () => {
            const snap = await getDocs(collection(db, "waiting_list"));
            const data = snap.docs.map(doc => {
                const docData = doc.data();
                return {
                    id: doc.id,
                    email: docData.email ?? "",
                    status: docData.status ?? "",
                    timestamp: docData.timestamp?.toDate().toISOString() ?? "",
                };

            });
            setSubscribers(data);
        };
        const loadMessagesData = async () => {
            const snap = await getDocs(collection(db, "contact_messages"));
            const data = snap.docs.map(doc => {
                const docData = doc.data();
                return {
                    id: doc.id,
                    name: docData.name ?? "",
                    email: docData.email ?? "",
                    phone: docData.phone ?? "",
                    message: docData.message ?? "",
                    preferredMethod: docData.preferredMethod ?? "",
                    timestamp: docData.timestamp?.toDate().toISOString() ?? "",
                };

            });
            console.log(data);
            setMessages(data);
        };

        loadSubscriptionData();
        loadMessagesData();
        return () => unsub();
    }, [router]);

    const handleSubscribersDownload = () => {
        const csv = [
            ["Email", "Status", "Timestamp"],
            ...subscribers.map((s) => [s.email, s.status, s.timestamp]),
        ]
            .map(row => row.join(","))
            .join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "subscribers.csv";
        link.click();
    };

    const handleMessagesDownload = () => {
        const csv = [
            ["Name", "Email", "Phone Number", "Message", "Preffered Contact Method", "Time"],
            ...messages.map((s) => [s.name, s.email, s.phone, s.message, s.preferredMethod, s.timestamp]),
        ]
            .map(row => row.join(","))
            .join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Messages.csv";
        link.click();
    };

    return (
        <div className="p-6 max-w-6xl mx-auto my-20">
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold">Subscribers</h1>
                <Button variant={"destructive"} onClick={() => signOut(auth)}>Logout</Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full my-2">

                <Card className="p-4 flex justify-between items-center">
                    <div className="text-lg font-medium">Total Subscribers: {subscribers.length}</div>
                    <Button variant={"outline"} className="mt-2" onClick={handleSubscribersDownload}>Download CSV</Button>
                </Card>
                <Card className="p-4 flex justify-between items-center">
                    <div className="text-lg font-medium">Total Messages: {messages.length}</div>
                    <Button variant={"outline"} className="mt-2" onClick={handleMessagesDownload}>Download CSV</Button>
                </Card>
            </div>

            <div className="flex justify-start align-center mb-4 ">
                <Button className="mx-1" variant={selectedTable.value === "messages" ? "outline" : "default"} onClick={() => setSelectedTable({ value: "subscribers" })}>
                    Show Subscribers
                </Button>
                <Button className="mx-1" variant={selectedTable.value === "subscribers" ? "outline" : "default"} onClick={() => setSelectedTable({ value: "messages" })}>
                    Show Messages
                </Button>
            </div>
            {selectedTable.value === "messages" && (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 rounded-xl">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left p-2">#</th>
                                <th className="text-left p-2">Name</th>
                                <th className="text-left p-2">Email</th>
                                <th className="text-left p-2">Phone</th>
                                <th className="text-left p-2">Message</th>
                                <th className="text-left p-2">Preferred Method</th>
                                <th className="text-left p-2">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages
                                .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                                .map((s, i) => (
                                    <tr key={i} className="border-t border-gray-200">
                                        <td className="p-2">{i + 1}</td>
                                        <td className="p-2">{s.name}</td>
                                        <td className="p-2">{s.email}</td>
                                        <td className="p-2">{s.phone}</td>
                                        <td className="p-2">{s.message}</td>
                                        <td className="p-2">{s.preferredMethod}</td>
                                        <td className="p-2">{new Date(s.timestamp).toLocaleString()}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            )}


            {/* {selectedTable.value === "subscribers" && (
                <div className="flex justify-between mb-4">
                    <div>
                        <label className="mr-2">Select Table:</label>
                        <input
                            type="radio"
                            value="subscribers"
                            checked={selectedTable.value === "subscribers"}
                            onChange={handleTableChange}
                        /> Subscribers
                        <input
                            type="radio"
                            value="messages"
                            checked={selectedTable.value === "messages"}
                            onChange={handleTableChange}
                        /> Messages
                    </div>
                </div>
            )} */}

            {selectedTable.value === "subscribers" && (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 rounded-xl">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left p-2">#</th>
                                <th className="text-left p-2">Email</th>
                                <th className="text-left p-2">Status</th>
                                <th className="text-left p-2">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscribers
                                .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                                .map((s, i) => (
                                    <tr key={i} className="border-t border-gray-200">
                                        <td className="p-2">{i + 1}</td>
                                        <td className="p-2">{s.email}</td>
                                        <td className="p-2">{s.status}</td>
                                        <td className="p-2">{new Date(s.timestamp).toLocaleString()}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>)}
        </div>
    );
}
