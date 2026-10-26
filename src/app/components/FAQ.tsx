import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { HelpCircle } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: 'Co když mě tlak bolí nebo je to nepříjemné?',
      answer: 'Masérce to řekněte. Masáž by neměla být bolestivá. Pokud je tlak příliš silný nebo vám není příjemný, masérka ho upraví – vaše pohodlí a uvolnění jsou pro nás důležité.'
    },
    {
      question: 'Jak často chodit na masáž?',
      answer: 'Záleží na vašich potřebách. Pro běžné uvolnění a prevenci stačí jednou měsíčně. Pokud máte větší napětí nebo opakované potíže, doporučujeme masáž častěji – například jednou za 1–2 týdny.'
    },
    {
      question: 'Můžu přijít po cvičení nebo po jídle?',
      answer: 'Ano, ale doporučujeme vyhnout se masáži bezprostředně po těžkém jídle nebo náročném tréninku. Tělo by mohlo být přetížené a hůře reagovat na uvolnění. Po masáži si dopřejte klidnější režim a dostatek tekutin.'
    },
    {
      question: 'Jak si vybrat vhodnou masáž?',
      answer: 'Záleží na tom, co právě vaše tělo potřebuje:\n\n• Pokud máte ztuhlé svaly a potřebujete více protáhnout, zvolte tradiční thajskou masáž.\n• Pokud chcete zklidnit mysl a užít si relaxaci, vyzkoušejte olejovou aromatickou masáž.\n• Při citlivé nebo suché pokožce doporučujeme masáž mandlovým olejem.\n• Při únavě nebo „těžkých" nohách se skvěle hodí relaxační masáž nohou.\n\nRádi vám s výběrem poradíme i osobně nebo po telefonu.'
    },
    {
      question: 'Co když mám citlivou pokožku nebo alergii?',
      answer: 'Používáme kvalitní, šetrné a čisté oleje. Pokud máte alergii nebo citlivou pokožku, dejte nám to prosím vědět před masáží – vybereme vhodný olej nebo masáž bez parfemace. V případě potřeby můžeme vyzkoušet malé množství oleje na kůži před začátkem masáže.'
    },
    {
      question: 'Můžu přijít bez rezervace?',
      answer: 'Bohužel ne. Masáže poskytujeme pouze na objednání, abychom mohli každému věnovat dostatek času a zajistili klidné prostředí bez čekání. Rezervaci si můžete vytvořit snadno online nebo po telefonu.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block w-12 h-1 bg-amber-600 mb-4"></div>
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-6 flex items-center justify-center">
            <HelpCircle className="h-8 w-8 mr-3 text-amber-600" />
            Nejčastější otázky
          </h2>
          <p className="text-xl text-gray-600">
            Odpovědi na otázky, které nám kladete nejčastěji
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-amber-200 rounded-lg px-6 bg-amber-50"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg text-amber-900 pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
