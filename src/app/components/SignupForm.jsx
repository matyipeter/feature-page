'use client';

import { useState } from 'react';

export default function UnderDevelopmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch('/api/suggestion', {
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/json',
    //  },
    //  body: JSON.stringify(formData),
    //  });

    console.log('Suggestion submitted:', formData);

    setSubmitted(true);
    setFormData({ name: '', email: '', suggestion: '' });
  };

  return (
    <section className="bg-[#f5f5f5] text-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          A Rentivo fejlesztés alatt áll
        </h2>
        <p className="text-gray-700 mb-10 max-w-xl mx-auto">
          Dolgozunk rajta, hogy a lehető legjobb megoldást hozzuk el számodra! Addig is, ha van ötleted, javaslatod vagy visszajelzésed, oszd meg velünk!
        </p>

        {submitted ? (
          <p className="text-green-600 font-medium">
            Köszönjük a visszajelzést! Hamarosan felvesszük veled a kapcsolatot.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 text-left space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Név</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Javaslatod / Ötleted</label>
              <textarea
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                rows={4}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Küldés
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
