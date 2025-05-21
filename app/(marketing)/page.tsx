import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">ConversAi</h1>
      <p className="text-lg mb-6">Embed a trainable AI chatbot into your website in minutes.</p>
      <Link
        href="/dashboard"
        className="bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800"
      >
        Get Started
      </Link>
    </main>
  );
}
