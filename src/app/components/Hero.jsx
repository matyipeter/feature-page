const imageUrl = '/dashboard.png';

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] text-gray-900 py-20">
    <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Egyszerűsítsd az ingatlankezelést a Rentivo-val!
            </h1>
            <p className="text-lg text-gray-700 mb-8">
                A Rentivo egy könnyen használható platform, amely segít az ingatlanok
                kezelésében, bérlők nyilvántartásában és a pénzügyi tranzakciók
                követésében.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a
                    href="#proba"
                    className="bg-gray-900 text-white px-6 py-3 rounded-md text-xl font-medium hover:bg-gray-800 transition"
                >
                    Kipróbálom!
                </a>
                <a
                    href="#features"
                    className="border border-gray-600 text-gray-900 px-6 py-3 rounded-md text-l font-medium hover:border-gray-800 transition"
                >
                    Fedezd fel a funkciókat!
                </a>
            </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full md:w-1/2">
            <img
                src={imageUrl}
                alt="App screenshot"
                className="w-full h-auto rounded-md shadow-md"
            />
        </div>
    </div>
</section>

  );
}