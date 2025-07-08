"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const coreFeatures = [
  {
    icon: "🔐",
    title: "Felhasználói beléptető rendszer",
    desc: "Szerepkör alapú biztonságos hozzáférés tulajdonosoknak, bérlőknek és (hamarosan) karbantartóknak.",
  },
  {
    icon: "🏢",
    title: "Ingatlan-kezelés",
    desc: "Lakáslisták, lakók és ingatlan adatok egy helyen, könnyedén.",
  },
  {
    icon: "📄",
    title: "Bérleti ügyintézés",
    desc: "Kövesd a bérleti díjakat, kezeld a szerződéseket, és értesülj a megújításokról (hamarosan).",
  },
  {
    icon: "🛠️",
    title: "Karbantartási ügyek",
    desc: "A bérlők jelzik a problémákat, te pedig nyomon követed és gyorsan reagálsz.",
  },
];

export default function CoreFeatures() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section id="features" className="bg-[#f5f5f5] text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fő funkciók</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Eszközök, amelyek segítenek az ingatlankezelésben és a bérlőkkel való kapcsolattartásban.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {coreFeatures.map((f, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group bg-white rounded-xl shadow-md p-6 transform transition duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col sm:flex-row items-start gap-4"
            >
              <div className="text-3xl transition-transform duration-300 group-hover:rotate-3">
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-gray-700">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
