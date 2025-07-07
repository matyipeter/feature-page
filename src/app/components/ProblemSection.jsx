  
  export default function ProblemSection() {
    return (
      <section className="bg-[#f5f5f5] text-gray-900 py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Kiknek készült a Rentivo?
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Ha ingatlanokat kezelsz, bérbe adsz és szeretnél időt spórolni, illetve leegyszerűsíteni az adminisztratív feladatokat, akkor a Rentivo neked szól.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Item 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-2">
                    Késnek a bérleti díjak?
                </h3>
                <p className="text-sm text-gray-700 mb-1">
                  Gyakran csúsznak a bérlőid a fizetéssel?
                </p>
                <p className="text-sm text-gray-600">
                Használj automatikus emlékeztetőket és kövesd a befizetéseket valós időben, hogy mindig képben legyél!
                </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-2">
                    Szétszórt a kommunikáció?
                </h3>
                <p className="text-sm text-gray-700 mb-1">
                  Üzenetek mindenhol - e-mailben, SMS-ben, telefonon?
                </p>
                <p className="text-sm text-gray-600">
                  Tedd rendbe a káoszt: minden beszélgetés egy helyen, áttekinthetően és könnyen kezelhetően!                
                </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-2">
                    Elavult pénzügyi nyilvántartás?
                </h3>
                <p className="text-sm text-gray-700 mb-1">
                  Nehéz átlátni a tranzakciókat és jelentéseket? Még mindig papíron vagy Excelben vezeted a pénzügyeidet?
                </p>
                <p className="text-sm text-gray-600">
                Válts automatikusan frissülő, digitális nyilvántartásra – egyszerűbb, gyorsabb, átláthatóbb!
                </p>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Eleged van a bonyolult rendszerekből?
                </h3>
                <p className="text-sm text-gray-700 mb-1">
                Más szoftverek túl összetettek, átláthatatlanok, és csak fejfájást okoznak?
                </p>
                <p className="text-sm text-gray-600">
                  Válts egy egyszerű, érthető és könnyen használható megoldásra – minden, amire szükséged van, felesleges bonyodalmak nélkül.
                </p>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Hiányzik az átláthatóság?
                </h3>
                <p className="text-sm text-gray-700 mb-1">
                  Nem vagy biztos benne, melyik lakás termel nyereséget, és hol van elmaradás?
                </p>
                <p className="text-sm text-gray-600">
                  Tekints át mindent egy helyen: átfogó, könnyen átlátható irányítópult minden ingatlanról és bérlőről!
                </p>
            </div>

            {/* Item 6 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-2">
                 Időigényes beköltözés?
                </h3>
                <p className="text-sm text-gray-700 mb-1">
                  Az új bérlőkkel rengeteg papírmunka és folyamatos egyeztetés jár?
                </p>
                <p className="text-sm text-gray-600">
                  Egyszerűsítsd a folyamatot digitális bérleti szerződésekkel és automatikus lépésekkel!
                </p>
            </div>
        </div>
    </div>
</section>

    );
  }