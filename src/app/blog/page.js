"use client";

import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function App() {
  const posts = [
    {
      title: "5 Things Every DIY Landlord Should Automate",
      date: "2025-06-12",
      excerpt:
        "Managing rentals alone? Here are the top automations that save you hours — from rent reminders to lease renewals.",
    },
    {
      title: "Why Enterprise Property Tools Are Failing Small Owners",
      date: "2025-05-28",
      excerpt:
        "Most tools are built for agencies — not individuals. We break down why simplicity and focus are the future.",
    },
  ];

  return (
    <div className="bg-[#f5f5f5] text-gray-900 min-h-screen flex flex-col">
      <Menu />

      <main className="flex-grow py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Blog</h1>

        <div className="space-y-10">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a
                href="#"
                className="text-purple-700 hover:underline font-medium"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
