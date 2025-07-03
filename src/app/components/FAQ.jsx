"use client";
import { useState } from "react";

const questions = [
  { q: "What is this product?", a: "It's a modern PMS for teams." },
  { q: "How much does it cost?", a: "Plans start at $29/month." },
  { q: "Do you offer support?", a: "Yes, 24/7 live chat support!" },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-12 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      {questions.map((item, idx) => (
        <div key={idx} className="mb-2 border-b">
          <button
            className="w-full text-left py-3 font-semibold"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            {item.q}
          </button>
          {open === idx && <div className="pb-3 px-2">{item.a}</div>}
        </div>
      ))}
    </section>
  );
}