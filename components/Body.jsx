"use client";
export default function Body({ children }) {
    return (
            <body className="flex flex-col min-h-screen ">
                <main className={`flex-1`}>
                    {children}
                </main>
            </body>
    );
}
