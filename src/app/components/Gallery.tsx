import { ImageWithFallback } from './figma/ImageWithFallback';
import studioReception from 'figma:asset/70a91110837d1601a31f70dc7ff27d53c44451e8.png';
import studioDetail from 'figma:asset/23bea1ee855380312d5de82133bc9662b423deed.png';
import massageRoom from 'figma:asset/297f460189062f9decdf96860e2bc8cee91730a9.png';

export function Gallery() {
  const images = [
    {
      url: studioReception,
      alt: "Recepce a čekárna thajského masážního studia v Třebíči"
    },
    {
      url: studioDetail,
      alt: "Atmosféra studia s detaily"
    },
    {
      url: massageRoom,
      alt: "Masážní místnost"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-amber-600 mb-4"></div>
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-6">
            Atmosféra našeho studia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nahlédněte do prostředí, kde najdete klid a harmonii
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-[4/3]">
                <ImageWithFallback 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
              </div>
              <h3 className="text-xl text-amber-900 mb-2">Klid a harmonie</h3>
              <p className="text-gray-600">
                Prostředí navržené pro maximální relaxaci a odpočinek
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-full relative">
                  <div className="absolute top-1 left-2 w-2 h-2 bg-amber-200 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl text-amber-900 mb-2">Čistota a hygiena</h3>
              <p className="text-gray-600">
                Nejvyšší standardy čistoty a dezinfekce pro vaše zdraví
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-full relative">
                  <div className="absolute inset-1 border-2 border-amber-200 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl text-amber-900 mb-2">Autentický zážitek</h3>
              <p className="text-gray-600">
                Pravá thajská atmosféra s tradičními prvky a vůněmi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
