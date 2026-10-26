import { Card, CardContent } from './ui/card';
import { Clock, Coffee, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export function BeforeVisit() {
  return (
    <section id="before-visit" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Před návštěvou */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-1 bg-amber-600 mb-4"></div>
            <h2 className="text-3xl md:text-4xl text-amber-900 mb-6 flex items-center justify-center">
              <Clock className="h-8 w-8 mr-3 text-amber-600" />
              Před návštěvou
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Přijďte si k nám odpočinout. Připravili jsme pár tipů, co udělat před masáží, aby byla co nejpříjemnější.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-amber-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Doporučujeme přijít pár minut před domluveným časem.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Před masáží se vyhněte těžkému jídlu a nadměrnému pití alkoholu.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Sdělte nám prosím své aktuální pocity - jestli máte nějaké bolesti, ztuhlost nebo zdravotní omezení. Pomůže nám to přizpůsobit masáž přesně Vám.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Po masáži si dejte čas na odpočinek - neplánujte hned náročný fyzický výkon a dopřejte tělu možnost se zregenerovat.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-amber-100 rounded-xl border border-amber-200 flex items-start">
            <Coffee className="h-6 w-6 text-amber-700 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg text-amber-900 mb-2">Malý rituál po masáži</h3>
              <p className="text-gray-700">
                Po každé masáži vám nabídneme šálek teplého thajského čaje, abyste si mohli v klidu prodloužit ten pocit uvolnění. Věříme, že i pár minut ticha může změnit celý den.
              </p>
            </div>
          </div>
        </div>

        {/* Kontraindikace */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-1 bg-amber-600 mb-4"></div>
            <h2 className="text-3xl md:text-4xl text-amber-900 mb-6 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 mr-3 text-amber-600" />
              Kontraindikace
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vaše bezpečí a pohodlí jsou pro nás důležité. Existují situace, kdy je potřeba masáž odložit, upravit techniku nebo nejprve konzultovat stav s lékařem.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl text-red-900 mb-4 flex items-center">
                <XCircle className="h-6 w-6 mr-3 text-red-600" />
                Kdy masáž není vhodná (absolutní kontraindikace)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Horečka či akutní infekce, tělesné onemocnění v aktivní fázi (např. chřipka) – masáž by mohla místo uvolnění tělo zatížit</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Hluboká žilní trombóza (DVT) či jiné vážné cévní onemocnění – zvýšený průtok krve by mohl problém zhoršit</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Čerstvé zlomeniny, otevřené rány nebo těžké popáleniny</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="text-xl text-amber-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 mr-3 text-amber-600" />
                Kdy je potřeba opatrnosti / úpravy techniky
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Kožní onemocnění (např. rozsáhlý ekzém, plísňové infekce) nebo nehojící se rány – v takovém případě postiženou oblast vynecháme</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Vážnější onemocnění (např. osteoporóza, užívání léků ovlivňujících srážlivost krve, onkologická léčba) – doporučujeme předem konzultovat s lékařem</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Těhotenství či první trimestr – v těhotenství je třeba volit speciální techniky a vždy o něm informovat terapeutku</span>
                </li>
              </ul>
            </div>

            <p className="text-center text-gray-600 italic">
              Pokud si nejste jisti, zda je masáž pro vás vhodná, dejte nám vědět – společně najdeme bezpečné řešení nebo doporučíme jiný typ ošetření.
            </p>
          </div>
        </div>

        {/* O masérách */}
        <div className="mt-16 bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-2xl text-amber-900 mb-4 text-center">O našich masérkách</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Naše thajské masérky k nám přijely z daleka, aby mohly dělat to, co opravdu milují – pomáhat lidem prostřednictvím doteku, přinášet úlevu, klid a kousek thajské tradice. Masírování je pro ně nejen práce, ale i způsob, jak sdílet svou kulturu, energii a radost z péče o druhé.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Po masáži vám nabídneme šálek teplého čaje, abyste si mohli v klidu vychutnat chvíli odpočinku. Pokud jste s masáží spokojeni a chcete masérce projevit uznání, můžete jí nechat drobné spropitné – je to pro ně milé gesto, které vnímají jako poděkování za jejich práci a pečlivost. Každý úsměv, poděkování či malá pozornost jsou pro ně skutečnou radostí a motivací v tom, co dělají.
          </p>
        </div>
      </div>
    </section>
  );
}