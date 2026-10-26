export interface MassageData {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string[];
  benefits: string[];
  process: string[];
  aftercare: string[];
  suitableFor: string[];
  prices: { duration: string; price: string }[];
  icon: string;
}

export const massages: MassageData[] = [
  {
    id: 'tradicni-thajska',
    name: 'Tradiční thajská masáž (Nuad Thai)',
    shortDescription: 'Klasická thajská masáž, kombinující tlak, protahování a rytmické uvolnění celého těla.',
    fullDescription: [
      'Tradiční thajská masáž uvolňuje tělo kombinací tlaku palci, dlaněmi a předloktími a jemných protahovacích prvků. Pomáhá rozhýbat ztuhlé svaly, podpořit cirkulaci a vrátit tělu lehkost i po dlouhém sezení či sportu.',
      'Masérka pracuje v rytmu dechu, postupuje od chodidel po šíji a respektuje vaše možnosti pohybu. Vše je plynulé a přizpůsobené - žádná gymnastika, ale příjemný plynulý pohyb, který pomáhá tělu cítit se opět volně.',
      'Tato technika podporuje pružnost, zlepšuje cirkulaci a přináší hluboké fyzické i mentální uvolnění. Vše probíhá pomalu, v rytmu dechu, bez spěchu.'
    ],
    benefits: [
      'Skvělé, pokud cítíte ztuhlá záda, kyčle nebo krční oblast a potřebujete nastartovat energii',
      'Pro hlubší uvolnění doporučujeme pravidelnost, třeba jednou za 2–4 týdny',
      'Pomáhá rozhýbat ztuhlé tělo a obnovit přirozený tok energie'
    ],
    suitableFor: [
      'Při ztuhlosti zad, šíje nebo kloubů',
      'Při pocitu únavy nebo přetížení'
    ],
    process: [
      'Masáž celého těla',
      'Kombinace tlaku a protahování',
      'Práce v rytmu dechu'
    ],
    aftercare: [
      'Pít dostatek vody',
      'Dopřát si klid a nenamáhat tělo',
      'Pravidelně opakovat 1× za 2–4 týdny'
    ],
    prices: [
      { duration: '60 min', price: '890 Kč' },
      { duration: '90 min', price: '1090 Kč' },
      { duration: '120 min', price: '1390 Kč' }
    ],
    icon: 'Leaf'
  },
  {
    id: 'olejna-aromaticka',
    name: 'Olejová aromatická masáž',
    shortDescription: 'Jemná olejová masáž s vůní esenciálních olejů (lze i bez vůně) – uvolní tělo, zklidní mysl, zlepší spánek.',
    fullDescription: [
      'Olejová aromatická masáž zklidní mysl a uvolní svaly dlouhými, plynulými tahy. Lehce zahřátý olej a jemná vůně esenciálních olejů pomáhají ztlumit napětí a stres, prohloubit dýchání a navodit klidný spánek.',
      'Aromaterapeutická směs je volena s ohledem na náladu a citlivost pokožky (na přání i bez parfemace). Masáž je ideální po náročném dni, při napětí ramen, lehkých bolestech hlavy z přetížení nebo když si prostě chcete odpočinout.',
      'Působí proti stresu, napětí v ramenou i mírným bolestem hlavy. Masérka používá jemné, plynulé tahy a tlak přizpůsobuje vašim potřebám.'
    ],
    benefits: [
      'Zklidní mysl a uvolní tělo',
      'Pomáhá při napětí a stresu',
      'Zlepšuje kvalitu spánku'
    ],
    suitableFor: [
      'Při stresu a napětí',
      'Pro zlepšení spánku a regeneraci',
      'Pro ty, kdo mají rádi vůně a teplo'
    ],
    process: [
      'Celotělová masáž s teplým aromatickým olejem',
      'Volba vůně dle nálady',
      'Plynulé, uklidňující tahy'
    ],
    aftercare: [
      'Relaxovat a odpočívat',
      'Vyhnout se studené sprše',
      'Pít vodu nebo bylinkový čaj'
    ],
    prices: [
      { duration: '60 min', price: '990 Kč' },
      { duration: '90 min', price: '1290 Kč' },
      { duration: '120 min', price: '1550 Kč' }
    ],
    icon: 'Sparkles'
  },
  {
    id: 'mandlovy-olej',
    name: 'Masáž mandlovým olejem',
    shortDescription: 'Výživná masáž s čistým mandlovým olejem pro hebkou pokožku a uvolněné tělo.',
    fullDescription: [
      'Masáž mandlovým olejem je jemná a výživná péče o pokožku i svaly. Sladký mandlový olej je bohatý na vitamín E a přirozeně změkčuje a hydratuje - skvělá volba pro sušší či citlivější kůži.',
      'Technika kombinuje delší tahy, lehké hnětení a práci na místech, kde se drží napětí (lopatky, bedra, šíje). Pokožka zůstává hebká bez těžkého filmu, tělo se cítí lehčí a uvolněné.',
      'Vhodná i pro citlivou pokožku nebo ty, kteří hledají něžnější formu masáže.'
    ],
    benefits: [
      'Regeneruje a hydratuje pokožku',
      'Uvolňuje napětí v celém těle',
      'Ideální pro citlivou pokožku'
    ],
    suitableFor: [
      'Pro suchou nebo citlivou pokožku',
      'Při lehkém napětí a únavě',
      'Pro milovníky jemné péče'
    ],
    process: [
      'Teplý mandlový olej, jemné tahy',
      'Celotělová masáž nebo částečná dle výběru',
      'Přizpůsobený tlak i rytmus'
    ],
    aftercare: [
      'Ponechat olej na kůži, nechat působit',
      'Vyhnout se hned po masáži sprchování',
      'Pít vodu a odpočívat'
    ],
    prices: [
      { duration: '60 min', price: '1090 Kč' },
      { duration: '90 min', price: '1390 Kč' },
      { duration: '120 min', price: '1690 Kč' }
    ],
    icon: 'Droplet'
  },
  {
    id: 'relaxacni-nohy',
    name: 'Relaxační masáž nohou',
    shortDescription: 'Úleva pro unavené nohy - kombinace reflexní terapie a masáže lýtek.',
    fullDescription: [
      'Naše relaxační masáž nohou se zaměřuje na chodidla, lýtka a kotníky - místa, která nás nesou celý den. Úlevu přináší kombinace tlaku na reflexní body chodidel a uvolňovacích tahů na svalech lýtek.',
      'Je ideální pro každého, kdo tráví hodně času na nohou, při pocitu „těžkých" nohou, po dlouhém řízení nebo létání. Pomáhá prokrvit, snížit napětí a přináší překvapivě celkové zklidnění.',
      'Skvěle funguje samostatně i jako doplněk k jiné masáži.'
    ],
    benefits: [
      'Úleva pro unavené nohy',
      'Zlepšuje cirkulaci',
      'Celkové zklidnění celého těla'
    ],
    suitableFor: [
      'Při únavě nohou, otocích',
      'Po dlouhém stání či chůzi',
      'Pro zlepšení cirkulace'
    ],
    process: [
      'Masáž chodidel a lýtek s olejem',
      'Tlak na reflexní body',
      'Možnost kombinace s jinou masáží'
    ],
    aftercare: [
      'Lehké protažení',
      'Pitný režim',
      'Chvíli odpočinku'
    ],
    prices: [
      { duration: '30 min', price: '650 Kč' },
      { duration: '60 min', price: '850 Kč' }
    ],
    icon: 'Footprints'
  },
  {
    id: 'zada-sije',
    name: 'Masáž zad a šíje',
    shortDescription: 'Cílená masáž na nejčastější místa napětí – záda, šíje, trapézy a lopatky.',
    fullDescription: [
      'Cílená masáž pro oblast, kde napětí cítíme nejčastěji: trapézy, lopatky, krční páteř a bedra. Masérka pracuje na povrchových i hlubších svalech, uvolňuje zatuhlé body a zlepšuje hybnost ramen a krku.',
      'Pomáhá při „počítačových" bolestech, přetížených ramenou i typickém napětí z dlouhého sezení. Technika je přizpůsobená citlivosti - od jemnějšího uvolnění až po razantnější tlak, pokud je potřeba.',
      'Krátká, ale účinná volba, když nemáte čas na celotělovou masáž.'
    ],
    benefits: [
      'Rychlá úleva přetíženým svalům',
      'Pomáhá při bolestech hlavy',
      'Zlepšuje hybnost ramen a krku'
    ],
    suitableFor: [
      'Při bolestech krku a ramen',
      'Po dlouhém sezení nebo stresu',
      'Pro každého, kdo potřebuje rychlou úlevu'
    ],
    process: [
      'Masáž zad, šíje a ramen s olejem',
      'Zaměření na ztuhlé body',
      'Délka dle výběru (30–90 min)'
    ],
    aftercare: [
      'Klid',
      'Pitný režim',
      'Pravidelnost pro dlouhodobý efekt'
    ],
    prices: [
      { duration: '30 min', price: '650 Kč' },
      { duration: '60 min', price: '850 Kč' },
      { duration: '90 min', price: '1050 Kč' }
    ],
    icon: 'User'
  },
  {
    id: 'lavove-kameny',
    name: 'Masáž lávovými kameny',
    shortDescription: 'Teplé čedičové kameny pro hluboké uvolnění svalů a dokonalou relaxaci.',
    fullDescription: [
      'Hluboké uvolnění díky teplu hladkých čedičových kamenů a plynulým tahům. Teplo proniká do svalů, zlepšuje prokrvení a pomáhá uvolnit i dlouhodobé napětí. Pocity jsou příjemné, uklidňující a velmi relaxační.',
      'Masáž je vhodná při celkové únavě, ztuhlosti zad a v chladnějším období. Pracujeme s bezpečnou teplotou kamenů a techniku přizpůsobíme vaší citlivosti.',
      'Nedoporučuje se při akutním zánětu, horečce nebo čerstvém poranění.'
    ],
    benefits: [
      'Hluboké uvolnění svalů',
      'Zlepšuje prokrvení',
      'Ideální v chladném období'
    ],
    suitableFor: [
      'Při únavě, stresu, bolestech svalů',
      'V chladnějším období',
      'Pro milovníky tepla a hlubokého klidu'
    ],
    process: [
      'Masáž teplými kameny a olejem',
      'Kladení kamenů na tělo',
      'Střídání tepla a plynulých tahů'
    ],
    aftercare: [
      'Dopřát tělu klid',
      'Zvýšit příjem tekutin',
      'Vyhnout se sauně či horké koupeli'
    ],
    prices: [
      { duration: '90 min', price: '1450 Kč' },
      { duration: '120 min', price: '1750 Kč' }
    ],
    icon: 'Flame'
  },
  {
    id: 'bylinne-sacky',
    name: 'Masáž bylinnými sáčky (herbal compress)',
    shortDescription: 'Teplé bylinné měšce s thajskou směsí – uvolní svaly, provoní tělo a povzbudí energii.',
    fullDescription: [
      'Teplé bylinné sáčky naplněné tradiční směsí (např. citronová tráva, kurkuma, kafrovník aj.) uvolní svaly, povzbudí cirkulaci a provoní tělo i mysl. Kombinujeme je s jemnou masáží, aby účinek tepla a bylin pronikl hlouběji.',
      'Bylinné sáčky pomáhají při ztuhlosti, „těžkých" zádech po práci i celkové únavě. Teplo zmírňuje napětí, bylinné aroma zklidňuje a oživuje zároveň — výborné spojení pro regeneraci.',
      'Pokud máte velmi citlivou kůži nebo akutní zánět, zvolíme jiný typ masáže.'
    ],
    benefits: [
      'Uvolňuje svaly a ztuhlost',
      'Aromaterapeutický efekt',
      'Povzbuzuje energii'
    ],
    suitableFor: [
      'Při únavě a ztuhlosti zad',
      'Pro milovníky vůní a tepla',
      'Po fyzické námaze nebo stresu'
    ],
    process: [
      'Nahřáté bylinné sáčky a olej',
      'Kombinace přikládání a masáže',
      'Individuálně přizpůsobený tlak'
    ],
    aftercare: [
      'Pít teplý čaj',
      'Dopřát si klid',
      'Nechodit ihned do sprchy'
    ],
    prices: [
      { duration: '60 min', price: '1150 Kč' },
      { duration: '90 min', price: '1450 Kč' },
      { duration: '120 min', price: '1750 Kč' }
    ],
    icon: 'Flower2'
  },
  {
    id: 'masaz-obliceje',
    name: 'Masáž obličeje',
    shortDescription: 'Jemná relaxační masáž obličeje, krku a dekoltu pro celkové zklidnění.',
    fullDescription: [
      'Jemná relaxační masáž zaměřená na oblast obličeje, krku a dekoltu. Masáž je prováděna pomalými, citlivými tahy bez intenzivního tlaku.',
      'Varianta 60 minut zahrnuje také masáž oblasti hlavy a šíje. Je to ideální volba pro hluboké uvolnění po psychicky náročném dni.',
      'Masáž pomáhá uvolnit napětí v oblasti obličeje a šíje a přispívá k celkovému zklidnění a relaxaci.'
    ],
    benefits: [
      'Uvolňuje napětí v obličeji a šíji',
      'Přispívá k celkovému zklidnění',
      'Vhodná jako doplněk k tělovým masážím'
    ],
    suitableFor: [
      'Pro ženy i muže',
      'Při stresu a napětí',
      'Pro milovníky jemných masáží'
    ],
    process: [
      'Vleže v klidném tempu',
      'Bez použití silného tlaku',
      'U 60 min. varianty i masáž hlavy'
    ],
    aftercare: [
      'Chvíle klidu',
      'Dostatek tekutin',
      'Vyhnout se spěchu a stresu'
    ],
    prices: [
      { duration: '30 min', price: '650 Kč' },
      { duration: '60 min', price: '850 Kč' }
    ],
    icon: 'Smile'
  },
  {
    id: 'masaz-pro-deti',
    name: 'Masáž pro děti',
    shortDescription: 'Šetrná relaxační masáž pro děti od 5 let v doprovodu rodičů.',
    fullDescription: [
      'Jemná relaxační masáž přizpůsobená dětem, prováděná velmi šetrně a s ohledem na věk dítěte. Masáž probíhá v klidném tempu a bez intenzivního tlaku.',
      'Cílem masáže je navodit pocit uvolnění, klidu a pohody a vytvořit pozitivní zkušenost s masáží. V případě zájmu je možné masáž provádět současně s rodičem v jedné místnosti.',
      'Masáž není léčebná a nenahrazuje lékařskou péči. Vždy vyžadujeme souhlas zákonného zástupce.'
    ],
    benefits: [
      'Navození pocitu klidu a pohody',
      'Pozitivní první zkušenost s masáží',
      'Možnost masáže společně s rodičem'
    ],
    suitableFor: [
      'Děti od 5 let',
      'Děti potřebující zklidnění',
      'Se souhlasem zákonného zástupce'
    ],
    process: [
      'Za přítomnosti rodiče',
      'Individuálně dle potřeb dítěte',
      'Jemné a šetrné techniky'
    ],
    aftercare: [
      'Klidový režim',
      'Vnímání účinků v klidu',
      'Pro mladší děti doporučujeme 30 min'
    ],
    prices: [
      { duration: '30 min', price: '650 Kč' },
      { duration: '60 min', price: '850 Kč' }
    ],
    icon: 'Baby'
  }
];
