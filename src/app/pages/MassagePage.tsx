import { useParams, Link } from 'react-router-dom';
import { massages } from '../data/massages';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Clock, Check, Info, Heart } from 'lucide-react';
import * as Icons from 'lucide-react';

export function MassagePage() {
  const { id } = useParams<{ id: string }>();
  const massage = massages.find(m => m.id === id);

  if (!massage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-amber-900 mb-4">Masáž nebyla nalezena</h1>
          <Link to="/">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Zpět na hlavní stránku
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Získat ikonu podle jména
  const IconComponent = (Icons as any)[massage.icon] || Icons.Sparkles;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Zpět navigace */}
        <Link to="/#services">
          <Button variant="ghost" className="mb-8 text-amber-700 hover:text-amber-900 hover:bg-amber-50">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zpět na všechny služby
          </Button>
        </Link>

        {/* Hlavička */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-amber-100 rounded-full mb-6">
            <IconComponent className="h-12 w-12 text-amber-700" />
          </div>
          <h1 className="text-4xl md:text-5xl text-amber-900 mb-4">
            {massage.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {massage.shortDescription}
          </p>
        </div>

        {/* Ceník */}
        <Card className="mb-12 border-amber-200 bg-white shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-amber-600 mr-2" />
              <h2 className="text-2xl text-amber-900">Ceník</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {massage.prices.map((price, index) => (
                <div key={index} className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="text-lg text-amber-900 mb-1">{price.duration}</div>
                  <div className="text-2xl text-amber-700">{price.price}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popis */}
        <section className="mb-12">
          <h2 className="text-3xl text-amber-900 mb-6 flex items-center">
            <Info className="h-7 w-7 mr-3 text-amber-600" />
            Co vás čeká
          </h2>
          <div className="space-y-4">
            {massage.fullDescription.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Benefity */}
        {massage.benefits.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl text-amber-900 mb-6 flex items-center">
              <Heart className="h-7 w-7 mr-3 text-amber-600" />
              Jak vám pomůže
            </h2>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <ul className="space-y-3">
                {massage.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Check className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Pro koho je vhodná */}
        {massage.suitableFor.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl text-amber-900 mb-6">Pro koho je vhodná</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {massage.suitableFor.map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg border border-amber-200">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Jak probíhá */}
        {massage.process.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl text-amber-900 mb-6">Jak probíhá</h2>
            <div className="bg-white rounded-xl p-6 border border-amber-200">
              <ul className="space-y-3">
                {massage.process.map((step, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-amber-700">{index + 1}</span>
                    </div>
                    <span className="text-lg mt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Po masáži doporučujeme */}
        {massage.aftercare.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl text-amber-900 mb-6">Po masáži doporučujeme</h2>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <ul className="space-y-3">
                {massage.aftercare.map((tip, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Check className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-amber-100 to-amber-50 rounded-xl border border-amber-200">
          <h3 className="text-2xl text-amber-900 mb-4">Chcete si vyzkoušet {massage.name.toLowerCase()}?</h3>
          <p className="text-gray-700 mb-6">Rezervujte si svůj termín a dopřejte tělu odpočinek, který si zaslouží.</p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8" asChild>
            <a href="https://rezervace.thaitrebic.cz/" target="_blank" rel="noopener noreferrer">
              Rezervovat termín
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
