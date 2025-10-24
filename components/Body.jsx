"use client";
import MyContextProvider from "@/provider/MyContextProvider";
export default function Body({ children }) {
    return (
        <MyContextProvider>
            <body className="flex flex-col min-h-screen ">
                <main className={`flex-1`}>
                    {children}
                </main>
            </body>
        </MyContextProvider>

    );
}
