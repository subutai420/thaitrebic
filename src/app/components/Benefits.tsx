import { CreditCard, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Benefits() {
  const benefits = [
    {
      name: 'Edenred',
      color: 'bg-red-600',
      description: 'Přijímáme stravenky a benefitní karty Edenred'
    },
    {
      name: 'Benefit Plus',
      color: 'bg-blue-600',
      description: 'Využijte vaše benefity Benefit Plus'
    },
    {
      name: 'Pluxee',
      color: 'bg-green-600',
      description: 'Platba kartami Pluxee možná'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block w-12 h-1 bg-amber-600 mb-4"></div>
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-6">
            Zaměstnanecké benefity
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Přijímáme hlavní systémy zaměstnaneckých benefitů a stravenek
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-amber-200 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white text-center">
              <CreditCard className="h-12 w-12 mx-auto mb-3 opacity-90" />
              <p className="text-xl font-medium">Využijte své zaměstnanecké výhody</p>
            </div>
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-gradient-to-br from-white to-amber-50 rounded-xl border-2 border-amber-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`${benefit.color} text-white text-center py-3 px-4 rounded-lg mb-4 shadow-md`}>
                      <h3 className="font-bold text-lg">{benefit.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <div className="flex items-start space-x-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-amber-900 font-semibold mb-2">Jak to funguje?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Při platbě nám stačí sdělit, že chcete využít své benefity. Přijímáme jak klasické stravenky, tak i benefitní karty. Platba benefity je možná za všechny naše služby.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-amber-900 font-semibold mb-2">Neomezená možnost využití</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Benefitní poukázky a karty můžete použít na jakoukoliv masáž z naší nabídky, včetně balíčků a speciálních procedur.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
