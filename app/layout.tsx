import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ConversAi - Trainable AI Chatbot",
  description: "Embed a smart AI chatbot trained on your PDFs and websites.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-white text-gray-900 font-sans">{children}</body>
      </html>
    </ClerkProvider>
  );
}
