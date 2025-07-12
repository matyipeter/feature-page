"use client";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const coreFeatures = [
  {
    icon: "🔐",
    title: "Felhasználói beléptető rendszer",
    desc: "Szerepkör alapú biztonságos hozzáférés tulajdonosoknak és bérlőknek.",
    long_desc: "A Rentivo felhasználói beléptető rendszere lehetővé teszi, hogy a tulajdonosok és bérlők biztonságosan hozzáférjenek az ingatlan adataihoz és funkcióihoz. A szerepkör alapú hozzáférés biztosítja, hogy minden felhasználó csak a számára releváns információkat lássa.",
  },
  {
    icon: "🏢",
    title: "Ingatlan-kezelés",
    desc: "Lakáslisták, lakók és ingatlan adatok egy helyen, könnyedén.",
    long_desc: "A Rentivo ingatlan-kezelési funkciója lehetővé teszi, hogy minden ingatlanod adatait egy helyen tárold és kezeld. Könnyedén hozzáadhatod a lakásokat, nyilvántarthatod a bérlőket és az ingatlanokkal kapcsolatos információkat.",
  },
  {
    icon: "💰",
    title: "Pénzügyek rögzítése/követése",
    desc: "Kövesd a bérleti díjakat, számlákat és egyéb tranzakciókat valós időben.",
    long_desc: "A Rentivo pénzügyi modulja lehetővé teszi, hogy valós időben kövesd a bérleti díjakat és egyéb pénzügyi tranzakciókat. Rögzítheted a bejövő és kimenő összegeket, így mindig naprakész lehetsz az ingatlanod pénzügyeivel kapcsolatban.",
  },
  {
    icon: "📄",
    title: "Jelentések",
    desc: "Könnyedén átlátható és lekérhető statisztikák és jelentések az ingatlanokról, bérlőkről és pénzügyekről.",
    long_desc: "A Rentivo jelentéskészítő funkciója lehetővé teszi, hogy részletes statisztikákat és jelentéseket készíts az ingatlanjaidról, bérlőidről és pénzügyeidről. Könnyedén lekérheted a szükséges adatokat, és letöltheted őket pdf formában.",
  },
];

export default function CoreFeatures() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  // Close popup on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setSelectedFeature(null);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedFeature(null);
      }
    };

    if (selectedFeature) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedFeature]);

  return (
    <section id="features" className="bg-[#f5f5f5] text-gray-900 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fő funkciók</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Eszközök, amelyek segítenek az ingatlankezelésben és a bérlőkkel való kapcsolattartásban.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {coreFeatures.map((feature, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group bg-white rounded-xl shadow-md p-6 transform transition duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col sm:flex-row items-start gap-4 cursor-pointer"
              onClick={() => setSelectedFeature(feature)}
            >
              <div className="text-3xl transition-transform duration-300 group-hover:rotate-3">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedFeature && (
        <div className="absolute left-1/2 top-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2">
          <div
            ref={popupRef}
            className="relative bg-white p-6 rounded-xl shadow-2xl max-w-md w-full border border-gray-200 animate-fadeIn"
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setSelectedFeature(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-4xl mb-2">{selectedFeature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{selectedFeature.title}</h3>
            <p className="text-gray-700">{selectedFeature.long_desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
