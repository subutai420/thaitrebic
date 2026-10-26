import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { massages } from '../data/massages';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo className="h-12 w-auto text-amber-100" />
            </div>
            <p className="text-amber-100 mb-4">
              Autentické thajské masáže v srdci Třebíče. 
              Tradice, kvalita a péče o vaše wellbeing.
            </p>
            <div className="text-amber-100 text-sm">
              IČO: 14358000
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 text-amber-100">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">V. Nezvala 86/22, 674 01 Třebíč</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+420722324726" className="text-sm hover:text-white transition-colors">
                  +420 722 324 726
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@thaitrebic.cz" className="text-sm hover:text-white transition-colors">
                  info@thaitrebic.cz
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">Otevírací doba</h3>
            <div className="space-y-2 text-amber-100 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <div>Po, St - So: 9:00 - 19:00</div>
                  <div>Ne: 13:00 - 19:00</div>
                  <div>Úterý: Zavřeno</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">Služby</h3>
            <ul className="space-y-2 text-amber-100 text-sm">
              {massages.slice(0, 6).map((massage) => (
                <li key={massage.id}>
                  <Link 
                    to={`/masaze/${massage.id}`}
                    className="hover:text-white transition-colors"
                  >
                    • {massage.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-amber-100 text-sm">
              © 2025 Thajské masáže v Třebíči. Všechna práva vyhrazena.
            </div>
            <div className="flex space-x-6 text-amber-100 text-sm">
              <a href="#" className="hover:text-white transition-colors">Ochrana soukromí</a>
              <a href="#" className="hover:text-white transition-colors">Obchodní podmínky</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-amber-800">
            <p className="text-amber-100 text-sm">
              Made with ❤️ by{' '}
              <a 
                href="https://tastyweb.cz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline"
              >
                TASTYWEB.cz
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}