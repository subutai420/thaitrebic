import { Clock, Leaf, Heart, Star, Sparkles, Droplet, Footprints, User, Flame, Flower2, Smile, Baby } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { massages } from '../data/massages';

export function Services() {
  const iconMap: Record<string, React.ReactNode> = {
    Leaf: <Leaf className="h-8 w-8 text-amber-600" />,
    Sparkles: <Sparkles className="h-8 w-8 text-amber-600" />,
    Droplet: <Droplet className="h-8 w-8 text-amber-600" />,
    Footprints: <Footprints className="h-8 w-8 text-amber-600" />,
    User: <User className="h-8 w-8 text-amber-600" />,
    Flame: <Flame className="h-8 w-8 text-amber-600" />,
    Flower2: <Flower2 className="h-8 w-8 text-amber-600" />,
    Smile: <Smile className="h-8 w-8 text-amber-600" />,
    Baby: <Baby className="h-8 w-8 text-amber-600" />
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-amber-600 mb-4"></div>
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-6">
            Naše služby
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Objevte širokou škálu autentických thajských masáží a relaxačních procedur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {massages.map((massage) => (
            <Card key={massage.id} className="hover:shadow-lg transition-all duration-300 border-amber-100 flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-amber-50 rounded-full w-fit">
                  {iconMap[massage.icon]}
                </div>
                <CardTitle className="text-xl text-amber-900 mb-2">
                  {massage.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {massage.shortDescription}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 flex-grow flex flex-col">
                <div className="mb-4 p-3 bg-amber-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2 flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Dostupné délky
                  </div>
                  <div className="space-y-2">
                    {massage.prices.map((price, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">{price.duration}</span>
                        <span className="text-amber-700">{price.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Link to={`/masaze/${massage.id}`}>
                    <Button variant="outline" className="w-full border-amber-600 text-amber-700 hover:bg-amber-50">
                      Více informací
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Všechny masáže provádějí zkušené thajské masérky s respektem k vašemu tělu i pohodě.
          </p>
          <div className="inline-flex items-center space-x-2 text-amber-700">
            <Star className="h-5 w-5 fill-current" />
            <span>Rezervace doporučujeme minimálně 24 hodin předem</span>
          </div>
        </div>
      </div>
    </section>
  );
}