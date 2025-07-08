"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* Contact Info */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold mb-2">Kapcsolat</h3>
            <p>📞 <a href="tel:+36300763845" className="hover:text-blue-600 transition">+36 30 076 3845</a></p>
            <p>✉️ <a href="mailto:rentivohu@gmail.com" className="hover:text-blue-600 transition">rentivohu@gmail.com</a></p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Hasznos linkek</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-blue-600 transition">Főoldal</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Funkciók</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Árak</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Kapcsolat</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col max-w-xs w-full">
            <h3 className="text-lg font-semibold mb-2">Iratkozz fel a hírlevelünkre</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Köszönjük, hogy feliratkoztál!');
              }}
              className="flex"
            >
              <input
                type="email"
                placeholder="Email címed"
                required
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-900 transition"
              >
                Feliratkozás
              </button>
            </form>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Rentivo. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}
