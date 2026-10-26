import { Button } from './ui/button';
import { MapPin, Phone } from 'lucide-react';
import heroImage from 'figma:asset/119de24d185f2e2ac90e254f80d06b1a8d85292e.png';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden mt-0">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Thajské masáže v Třebíči
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-4">
            Místo, kde zpomalíte a znovu se nadechnete
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 text-white">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">V. Nezvala 86/22, Třebíč</span>
            </div>
            <div className="hidden sm:block text-white opacity-50">|</div>
            <a href="tel:+420722324726" className="flex items-center gap-2 hover:text-amber-200 transition-colors">
              <Phone className="h-5 w-5" />
              <span className="text-lg">+420 722 324 726</span>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Naše služby
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-white/10 hover:bg-white hover:text-amber-900 px-8"
              asChild
            >
              <a href="https://rezervace.thaitrebic.cz/" target="_blank" rel="noopener noreferrer">
                Rezervace
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
