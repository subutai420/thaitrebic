import { Ticket, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Vouchers() {
  return (
    <section id="vouchers" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block w-12 h-1 bg-amber-600 mb-4"></div>
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-6">
            Dárkové poukazy
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-amber-200 shadow-xl overflow-hidden">
            <div className="bg-amber-600 p-4 text-white text-center">
              <Ticket className="h-12 w-12 mx-auto mb-2 opacity-90" />
              <p className="text-xl font-medium">Darujte chvíli klidu a péče</p>
            </div>
            <CardContent className="p-8 md:p-12 text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Dárkové poukazy na masáže zakoupíte osobně v salonu nebo ve formě elektronického poukazu na <a href="mailto:info@thaitrebic.cz" className="text-amber-700 font-semibold hover:underline">info@thaitrebic.cz</a>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="p-6 bg-white rounded-xl border border-amber-100 shadow-sm">
                  <h3 className="text-amber-900 font-semibold mb-2">Osobní odběr</h3>
                  <p className="text-gray-600 text-sm">Zastavte se za námi přímo v salonu v Třebíči.</p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-amber-100 shadow-sm">
                  <h3 className="text-amber-900 font-semibold mb-2">Elektronicky</h3>
                  <p className="text-gray-600 text-sm">Napište nám e-mail a poukaz vám zašleme do 24 hodin.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
