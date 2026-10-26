import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-amber-600" />,
      title: 'Adresa',
      content: 'V. Nezvala 86/22\n674 01 Třebíč',
      link: 'https://maps.google.com/?q=V.+Nezvala+86/22+Třebíč'
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-600" />,
      title: 'Telefon',
      content: '+420 722 324 726',
      link: 'tel:+420722324726'
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-600" />,
      title: 'E-mail',
      content: 'info@thaitrebic.cz',
      link: 'mailto:info@thaitrebic.cz'
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      title: 'Otevírací doba',
      content: 'Po, St - So: 9:00 - 19:00\nNe: 13:00 - 19:00\nÚterý: Zavřeno',
      link: null
    }
  ];

  const openingHours = [
    { day: 'Po, St - So', hours: '9:00 - 19:00' },
    { day: 'Neděle', hours: '13:00 - 19:00' },
    { day: 'Úterý', hours: 'Zavřeno' },
    { day: 'Svátky', hours: 'Zavřeno nebo dle dohody' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-amber-600 mb-4"></div>
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-6">
            Kontakt a rezervace
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kontaktujte nás pro rezervaci nebo jakékoliv otázky
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl text-amber-900 mb-8">Jak nás najdete</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-amber-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-3 text-lg">
                      {info.icon}
                      <span className="text-amber-900">{info.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-700 hover:text-amber-700 transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <span className="text-gray-700 whitespace-pre-line">{info.content}</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-amber-100 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-900">Detailní otevírací doba</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {openingHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.day}</span>
                      <span className="text-amber-700">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl text-amber-900 mb-8">Rezervace</h3>
            
            <Card className="border-amber-100">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-amber-600" />
                    </div>
                    <h4 className="text-xl text-amber-900 mb-2">Rezervace telefonicky</h4>
                    <p className="text-gray-600 mb-4">
                      Nejrychlejší způsob rezervace. Volejte kdykoliv během otevírací doby.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                      onClick={() => window.open('tel:+420722324726')}
                    >
                      +420 722 324 726
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-lg text-amber-900 mb-4">Důležité informace</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Rezervace doporučujeme minimálně 24 hodin předem</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>V případě zrušení prosíme o včasné oznámení</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Platba možná hotově nebo kartou</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>Dárkové poukazy k zakoupení v našem studiu</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 p-6 bg-amber-50 rounded-xl">
              <h4 className="text-lg text-amber-900 mb-3">Parkování</h4>
              <p className="text-gray-600">
                Parkování možné přímo před studiem na ulici V. Nezvala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}