'use client';

import React from 'react';

const comparisonData = [
  {
    feature: 'DIY bérbeadóknak építve',
    rentivo: '✅ Kifejezetten a magánbérbeadók igényeire szabva',
    rentify: '❌ Inkább kezelőcégeknek',
    rentingo: '🔲 Bérlő-tulaj kommunikációs fókusz',
  },
  {
    feature: 'Egyszerű, lényegretörő funkciók',
    rentivo: '✅ Csak a legszükségesebb funkciók – nincs túlbonyolítva',
    rentify: '❌ Komplett rendszer kezelőcégeknek, összetett használat',
    rentingo: '✅ Alapfunkciók: üzenetküldés, hirdetéskezelés',
  },
  {
    feature: 'Megfizethető ármodell',
    rentivo: '✅ Alacsony, átlátható havi díj',
    rentify: '❌ Egyedi árazás, gyakran magasabb költségek',
    rentingo: '✅ Ingyenes vagy freemium modell',
  },
  {
    feature: 'Kétnyelvű felület (HU/EN)',
    rentivo: '✅ Magyar és angol nyelv támogatott',
    rentify: '❌ Nincs többnyelvű támogatás',
    rentingo: '🔲 Főként magyar felület, korlátozott EN támogatás',
  },
  {
    feature: 'Intuitív, tanulásmentes kezelőfelület',
    rentivo: '✅ Letisztult design, minimális tanulási idő',
    rentify: '❌ Komplex rendszer, betanulást igényel',
    rentingo: '✅ Egyszerű, felhasználóbarát kezelőfelület',
  },
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#f5f5f5] text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Miben jobb a Rentivo?
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Nézd meg, hogyan viszonyul a Rentivo a versenytársakhoz, ha egyszerű, hatékony és kedvező megoldást keresel.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-200 text-sm sm:text-base">
                <th className="p-4 font-semibold">Funkció</th>
                <th className="p-4 font-semibold">Rentivo</th>
                <th className="p-4 font-semibold">Rentify.hu</th>
                <th className="p-4 font-semibold">Rentingo.hu</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                >
                  <td className="p-4 font-medium">{item.feature}</td>
                  <td className="p-4 bg-purple-50">{item.rentivo}</td>
                  <td className="p-4">{item.rentify}</td>
                  <td className="p-4">{item.rentingo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
