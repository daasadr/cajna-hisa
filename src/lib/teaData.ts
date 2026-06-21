import type { Lang } from './translations';

export interface Tea {
  id: string;
  name: Record<Lang, string>;
  origin?: string;
  desc: Record<Lang, string>;
  price100g: string;
  priceServing: string;
  servingType: 'konvicka' | 'zhong' | 'skodelica';
  isSpeciality?: boolean;
}

export interface TeaSection {
  id: string;
  slug: string;
  emoji: string;
  name: Record<Lang, string>;
  sub: Record<Lang, string>;
  imagePath?: string;
  teas: Tea[];
}

export interface FoodItem {
  id: string;
  emoji: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  price: string;
  note?: Record<Lang, string>;
  isSeasonal?: boolean;
}

export const TEA_SECTIONS: TeaSection[] = [
  {
    id: 'zeleni-caji',
    slug: 'zeleni-caji',
    emoji: '🍃',
    name: { sl: 'Zeleni čaji', en: 'Green teas' },
    sub: {
      sl: 'Čaji minimalne predelave — od japonskih senčenih specialitet do kitajskih klasikov.',
      en: 'Minimally processed teas — from Japanese shaded specialities to Chinese classics.',
    },
    imagePath: '/images/gallery-4.jpg',
    teas: [
      {
        id: 'gyokuro',
        name: { sl: 'Gyokuro', en: 'Gyokuro' },
        origin: 'Japonska / Uji',
        desc: {
          sl: 'Senčen čaj, pred spravilom zaščiten pred soncem 3–4 tedne. Razvije intenziven okus umami, nežno sladkost in elegantno zeleno aromo, ki dolgo ostane na nebu ust.',
          en: 'Shade-grown tea, protected from the sun for 3–4 weeks before harvesting. Develops an intense umami flavour, gentle sweetness and an elegant green aroma that lingers on the palate.',
        },
        price100g: '28 €',
        priceServing: '9 €',
        servingType: 'zhong',
        isSpeciality: true,
      },
      {
        id: 'sencha',
        name: { sl: 'Sencha', en: 'Sencha' },
        origin: 'Japonska / Shizuoka',
        desc: {
          sl: 'Najpopularnejši japonski zeleni čaj. Svež, travnat okus z rahlo trpkostjo — popoln uvod v svet japonskega čaja in odlična vsakodnevna izbira.',
          en: 'The most popular Japanese green tea. Fresh, grassy flavour with slight astringency — a perfect introduction to Japanese tea and an excellent everyday choice.',
        },
        price100g: '12 €',
        priceServing: '5,50 €',
        servingType: 'konvicka',
      },
      {
        id: 'matcha',
        name: { sl: 'Matcha ceremonielna', en: 'Ceremonial matcha' },
        origin: 'Japonska / Nishio',
        desc: {
          sl: 'Vrhunski mleti zeleni čaj za čajno ceremonijo. Kremasta, intenzivna matcha z globokim okusom umami in svilnato teksturo — osnova japonske čajne kulture.',
          en: 'Premium ground green tea for the tea ceremony. Creamy, intense matcha with deep umami flavour and silky texture — the foundation of Japanese tea culture.',
        },
        price100g: '35 €',
        priceServing: '11 €',
        servingType: 'skodelica',
        isSpeciality: true,
      },
      {
        id: 'longjing',
        name: { sl: 'Dragon Well / Longjing', en: 'Dragon Well / Longjing' },
        origin: 'Kitajska / Hangzhou',
        desc: {
          sl: 'Legendarni kitajski zeleni čaj iz Zahodnega jezera. Značilna praženost z notami oreha in kostanja, svilnata tekstura. Eden najprestižnejših kitajskih čajev vseh časov.',
          en: 'Legendary Chinese green tea from West Lake. Characteristic roasted notes of walnut and chestnut, silky texture. One of the most prestigious Chinese teas of all time.',
        },
        price100g: '22 €',
        priceServing: '7 €',
        servingType: 'zhong',
        isSpeciality: true,
      },
      {
        id: 'genmaicha',
        name: { sl: 'Genmaicha', en: 'Genmaicha' },
        origin: 'Japonska',
        desc: {
          sl: 'Japonski zeleni čaj z dodatkom praženih rižovih zrn. Topel, oreščkov okus z rahlo zemeljsko noto — edinstvena in topla alternativa za zimska popoldneva.',
          en: 'Japanese green tea blended with roasted rice grains. Warm, nutty flavour with a slightly earthy note — a unique and warming alternative for winter afternoons.',
        },
        price100g: '10 €',
        priceServing: '5 €',
        servingType: 'konvicka',
      },
      {
        id: 'houjicha',
        name: { sl: 'Houjicha', en: 'Houjicha' },
        origin: 'Japonska / Kyoto',
        desc: {
          sl: 'Praženi japonski zeleni čaj z rdečkasto-rjavim napojem. Nizka vsebnost kofeina, blag topel okus z notami karamele in lesa — idealen zvečer ali za otroke.',
          en: 'Roasted Japanese green tea with a reddish-brown brew. Low caffeine, mild warm taste with notes of caramel and wood — ideal in the evening or for children.',
        },
        price100g: '11 €',
        priceServing: '5 €',
        servingType: 'konvicka',
      },
      {
        id: 'bi-luo-chun',
        name: { sl: 'Bi Luo Chun / Jade Snail Spring', en: 'Bi Luo Chun / Jade Snail Spring' },
        origin: 'Kitajska / Jiangsu',
        desc: {
          sl: 'Pomladni zeleni čaj iz obale Tajhujskega jezera. Vijačasto zviti listi, fruktni ton, svilnata tekstura in cvetoča aroma — čaj pesnikov in zanesenjakov.',
          en: 'Spring green tea from the shores of Lake Taihu. Spirally twisted leaves, fruity tone, silky texture and floral aroma — the poet\'s tea.',
        },
        price100g: '26 €',
        priceServing: '8 €',
        servingType: 'zhong',
        isSpeciality: true,
      },
      {
        id: 'kukicha',
        name: { sl: 'Kukicha (twig tea)', en: 'Kukicha (twig tea)' },
        origin: 'Japonska',
        desc: {
          sl: 'Japonski čaj iz stebel in vejic čajne rastline. Izredno nizka vsebnost kofeina, kremast okus z nežno noto morja — mirna izbira za tiste, ki iščejo počitek.',
          en: 'Japanese tea made from the stems and twigs of the tea plant. Very low caffeine, creamy taste with a gentle note of the sea — a calm choice for those seeking rest.',
        },
        price100g: '9 €',
        priceServing: '5 €',
        servingType: 'konvicka',
      },
    ],
  },
  {
    id: 'beli-caji',
    slug: 'beli-caji',
    emoji: '☁️',
    name: { sl: 'Beli čaji', en: 'White teas' },
    sub: {
      sl: 'Najdelikatnejši čaji sveta — minimalna predelava ohrani prvotno aromo popkov in prvih listov.',
      en: 'The most delicate teas in the world — minimal processing preserves the original aroma of buds and first leaves.',
    },
    imagePath: '/images/gallery-5.jpg',
    teas: [
      {
        id: 'silver-needle',
        name: { sl: 'Silver Needle / Baihao Yinzhen', en: 'Silver Needle / Baihao Yinzhen' },
        origin: 'Kitajska / Fujian',
        desc: {
          sl: 'Kralj belih čajev. Nabrani samo iz nedotaknjenih popkov, pokritih s srebrnimi dlačicami. Subtilno sladek, medeni in cvetlični z izjemno svilnatostjo.',
          en: 'The king of white teas. Harvested only from intact buds covered with silver hair. Subtly sweet, honey and floral with exceptional silkiness.',
        },
        price100g: '38 €',
        priceServing: '12 €',
        servingType: 'konvicka',
        isSpeciality: true,
      },
      {
        id: 'white-peony',
        name: { sl: 'White Peony / Bai Mu Dan', en: 'White Peony / Bai Mu Dan' },
        origin: 'Kitajska / Fujian',
        desc: {
          sl: 'Kombinacija popkov in prvih listov daje polnejši okus od Silver Needle. Nežen med, bela breskev in cvetlični odtenki z rahlo zemeljsko osnovo — odlična vrednost.',
          en: 'Combination of buds and first leaves gives a fuller flavour than Silver Needle. Delicate honey, white peach and floral notes with a slightly earthy base — excellent value.',
        },
        price100g: '18 €',
        priceServing: '6,50 €',
        servingType: 'konvicka',
      },
      {
        id: 'jasmine-silver',
        name: { sl: 'Jasmine Silver Needle', en: 'Jasmine Silver Needle' },
        origin: 'Kitajska / Fujian',
        desc: {
          sl: 'Srebrnobeli popki, večkrat prepojeni z aromo svežih jasminovih cvetov. Poetična kombinacija nežnega belega čaja in intenzivnega jasmina — vonj pomladi v skodelici.',
          en: 'Silver white buds, repeatedly infused with the aroma of fresh jasmine blossoms. A poetic combination of delicate white tea and intense jasmine — the scent of spring in a cup.',
        },
        price100g: '32 €',
        priceServing: '10 €',
        servingType: 'konvicka',
        isSpeciality: true,
      },
      {
        id: 'darjeeling-white',
        name: { sl: 'Darjeeling First Flush White', en: 'Darjeeling First Flush White' },
        origin: 'Indija / Darjeeling',
        desc: {
          sl: 'Redko pridelan beli čaj iz prvih pomladnih listov doliny Darjeeling. Muskatelni ton, nežni cvetlični in sadni odtenki — elegantna izkušnja vzhodnih pobočij Himalaje.',
          en: 'Rarely produced white tea from the first spring leaves of the Darjeeling valley. Muscatel notes, delicate floral and fruity tones — an elegant experience from the Himalayas.',
        },
        price100g: '24 €',
        priceServing: '8 €',
        servingType: 'konvicka',
        isSpeciality: true,
      },
      {
        id: 'shou-mei',
        name: { sl: 'Shou Mei', en: 'Shou Mei' },
        origin: 'Kitajska / Fujian',
        desc: {
          sl: 'Zrel beli čaj z bogatejšim okusom in temnejšo barvo napoja. Zemeljski toni, sušeno sadje in rahla trpkost — idealen za dolge zimske popoldneve ob knjigi.',
          en: 'Mature white tea with a richer flavour and darker brew colour. Earthy tones, dried fruit and slight astringency — ideal for long winter afternoons with a book.',
        },
        price100g: '14 €',
        priceServing: '5,50 €',
        servingType: 'konvicka',
      },
      {
        id: 'wild-white',
        name: { sl: 'Divji beli čaj / Yunnan Wild', en: 'Wild White Tea / Yunnan Wild' },
        origin: 'Kitajska / Yunnan',
        desc: {
          sl: 'Divje rastoče čajne rastline iz visokogorskih gozdov Yunnana, stare do 300 let. Edinstvena kompleksnost — cvetlični, sadni in rahlo dimljeni toni z dolgo mineralno noto.',
          en: 'Wild-growing tea plants from the high-altitude forests of Yunnan, up to 300 years old. Unique complexity — floral, fruity and lightly smoky tones with a long mineral note.',
        },
        price100g: '29 €',
        priceServing: '9 €',
        servingType: 'konvicka',
        isSpeciality: true,
      },
    ],
  },
  {
    id: 'oolong',
    slug: 'oolong',
    emoji: '🌀',
    name: { sl: 'Oolong čaji', en: 'Oolong teas' },
    sub: {
      sl: 'Čaji med zelenim in črnim — delna oksidacija ustvari neskončne nianse in večplastne okuse.',
      en: 'Teas between green and black — partial oxidation creates endless nuances and multi-layered flavours.',
    },
    imagePath: '/images/onanacha-matcha-847918.jpg',
    teas: [
      {
        id: 'tie-guan-yin',
        name: { sl: 'Tie Guan Yin / Boginja milosrčnosti', en: 'Tie Guan Yin / Iron Goddess' },
        origin: 'Kitajska / Anxi, Fujian',
        desc: {
          sl: 'Čaj Boginje milosrčnosti, eden najpopularnejših oolongov na svetu. Cvetlično-svež okus z notami orhideje in dolg cvetlični zaključek. Klasika, ki jo je treba okusiti.',
          en: 'The Goddess of Mercy tea, one of the most popular oolongs in the world. Floral-fresh taste with orchid notes and a long floral finish. A classic that must be experienced.',
        },
        price100g: '19 €',
        priceServing: '8 €',
        servingType: 'zhong',
      },
      {
        id: 'da-hong-pao',
        name: { sl: 'Da Hong Pao / Veliki rdeči plašč', en: 'Da Hong Pao / Big Red Robe' },
        origin: 'Kitajska / Wuyi, Fujian',
        desc: {
          sl: 'Legendarni oolong iz gorovja Wuyi, eden najprestižnejših čajev na svetu. Globoka praženost, temni med, mineralna nota skalnih stenin in dolg zaključek, ki ostane ure.',
          en: 'Legendary oolong from the Wuyi mountains, one of the most prestigious teas in the world. Deep roasted, dark honey, mineral note of rocky cliffs and a finish that lingers for hours.',
        },
        price100g: '45 €',
        priceServing: '14 €',
        servingType: 'zhong',
        isSpeciality: true,
      },
      {
        id: 'dong-ding',
        name: { sl: 'Dong Ding / Zmrznjeni vrh', en: 'Dong Ding / Frozen Summit' },
        origin: 'Tajvan / Nantou',
        desc: {
          sl: 'Klasični tajvanski visokogorski oolong z Zmrznjenega vrha. Kremast, oreščkov okus z notami rumenega voska in cvetja. Bogata tekstura in dolg, prijeten zaključek.',
          en: 'Classic Taiwanese high-mountain oolong from the Frozen Summit. Creamy, nutty taste with notes of yellow wax and flowers. Rich texture and long, pleasant finish.',
        },
        price100g: '22 €',
        priceServing: '8,50 €',
        servingType: 'zhong',
      },
      {
        id: 'oriental-beauty',
        name: { sl: 'Oriental Beauty / Bai Hao', en: 'Oriental Beauty / Bai Hao' },
        origin: 'Tajvan / Hsinchu',
        desc: {
          sl: 'Edinstvena tajvanska posebnost: škržatke predgrizejo čajne liste in sprožijo naravni obrambni odziv, ki ustvari neverjetno sadno sladkost brez kaplice grenkobe.',
          en: 'A unique Taiwanese speciality: leafhoppers bite the tea leaves, triggering a natural defence response that creates incredible fruity sweetness without a drop of bitterness.',
        },
        price100g: '34 €',
        priceServing: '12 €',
        servingType: 'zhong',
        isSpeciality: true,
      },
      {
        id: 'dan-cong',
        name: { sl: 'Phoenix Dan Cong / Fenghuang', en: 'Phoenix Dan Cong / Fenghuang' },
        origin: 'Kitajska / Guangdong',
        desc: {
          sl: 'Oolong z goric Fenghuang, znan po intenzivnih naravnih aromah. Naša izbira: Rumeni cvet — cvetoča marelica in med z mineralno čistostjo. Odlično za večkratno zalivanje.',
          en: 'Oolong from the Fenghuang mountains, known for intense natural aromas. Our selection: Yellow Blossom — flowering apricot and honey in pure mineralic clarity. Excellent for multiple infusions.',
        },
        price100g: '28 €',
        priceServing: '9,50 €',
        servingType: 'zhong',
        isSpeciality: true,
      },
      {
        id: 'alishan',
        name: { sl: 'Alishan visokogorski oolong', en: 'Alishan High Mountain Oolong' },
        origin: 'Tajvan / Alishan, 1500 m n.v.',
        desc: {
          sl: 'Visokogorski oolong s pobočij gore Alishan. Izjemna svežina alpskega zraka, kremasta tekstura in nežna cvetlična aroma — čaj, ki prihaja iz oblakov.',
          en: 'High mountain oolong from the slopes of Mount Alishan. Exceptional freshness of alpine air, creamy texture and delicate floral aroma — tea that comes from the clouds.',
        },
        price100g: '26 €',
        priceServing: '9 €',
        servingType: 'zhong',
        isSpeciality: true,
      },
      {
        id: 'formosa',
        name: { sl: 'Formosa Oolong', en: 'Formosa Oolong' },
        origin: 'Tajvan',
        desc: {
          sl: 'Klasični tajvanski oolong srednje oksidacije — idealen uvod v svet oolongov. Uravnotežen, s cvetličnimi in sadnimi notami ter nežnim kremastim zaključkom.',
          en: 'Classic medium-oxidised Taiwanese oolong — the ideal introduction to the world of oolongs. Balanced, with floral and fruity notes and a gentle creamy finish.',
        },
        price100g: '17 €',
        priceServing: '7 €',
        servingType: 'zhong',
      },
    ],
  },
  {
    id: 'zeliscni-caji',
    slug: 'zeliscni-caji',
    emoji: '🌿',
    name: { sl: 'Zeliščni čaji', en: 'Herbal teas' },
    sub: {
      sl: 'Narava v skodelici — mešanice brez kofeina za vsakodnevno dobrobit telesa in duha.',
      en: 'Nature in a cup — caffeine-free blends for everyday wellbeing of body and mind.',
    },
    imagePath: '/images/gallery-6.jpg',
    teas: [
      {
        id: 'kamilica',
        name: { sl: 'Kamilica', en: 'Chamomile' },
        origin: 'Slovenija / Gorenjska',
        desc: {
          sl: 'Naša kamilica prihaja z gorenjskih sončnih travnikov, nabrana ročno v polnem cvetu. Blaga jabolčna sladkost z medenim odtenkom, ki sprosti in pomiri — večni klasik.',
          en: 'Our chamomile comes from sunny Gorenjska meadows, hand-picked at full bloom. Mild apple sweetness with a honey tone that relaxes and soothes — the eternal classic.',
        },
        price100g: '7 €',
        priceServing: '4 €',
        servingType: 'konvicka',
      },
      {
        id: 'trojna-meta',
        name: { sl: 'Trojna meta', en: 'Triple mint' },
        origin: 'Slovenija & Maroko',
        desc: {
          sl: 'Mešanica treh vrst mete — poprova, spearmint in kodrasta — za maksimalno osvežitev. Hladen in čist okus, ki prebudi in osveži. Popolno po obroku.',
          en: 'A blend of three types of mint — peppermint, spearmint and curly mint — for maximum refreshment. Cool and clean taste that awakens and refreshes. Perfect after a meal.',
        },
        price100g: '6 €',
        priceServing: '4 €',
        servingType: 'konvicka',
      },
      {
        id: 'sipek-hibiskus',
        name: { sl: 'Šipek & hibiskus', en: 'Rose hip & hibiscus' },
        origin: 'Slovenija & Egipt',
        desc: {
          sl: 'Živahna rubinasta mešanica z intenzivno naravno kislostjo in nežno sladkostjo. Izjemno bogata z vitaminom C — topla zaščita v prehodnih letnih časih.',
          en: 'Vibrant ruby blend with intense natural acidity and gentle sweetness. Exceptionally rich in vitamin C — warm protection during transitional seasons.',
        },
        price100g: '8 €',
        priceServing: '4,50 €',
        servingType: 'konvicka',
      },
      {
        id: 'sivka-melisa',
        name: { sl: 'Sivka & melisa', en: 'Lavender & lemon balm' },
        origin: 'Slovenija / Gorenjska',
        desc: {
          sl: 'Gorenjska sivka in sveža melisa iz naše pokrajine. Edinstvena pomirjujoča mešanica za konec dneva — sprošča napetost, umirja misli, pripravlja za miren spanec.',
          en: 'Gorenjska lavender and fresh lemon balm from our region. A unique calming blend for the end of the day — releases tension, calms the mind, prepares for peaceful sleep.',
        },
        price100g: '10 €',
        priceServing: '5 €',
        servingType: 'konvicka',
        isSpeciality: true,
      },
      {
        id: 'ingver-limon',
        name: { sl: 'Ingver & limon', en: 'Ginger & lemon' },
        origin: 'Azija & Mediteran',
        desc: {
          sl: 'Ognjevita kombinacija svežega ingverja, limoninega soka in limonske trave. Greje od znotraj, prebuja in krepi imunski sistem. Naš zimski hit.',
          en: 'Fiery combination of fresh ginger, lemon juice and lemongrass. Warms from within, awakens and strengthens the immune system. Our winter favourite.',
        },
        price100g: '9 €',
        priceServing: '4,50 €',
        servingType: 'konvicka',
      },
      {
        id: 'lipovec',
        name: { sl: 'Lipovec', en: 'Linden blossom' },
        origin: 'Slovenija / Gorenjska',
        desc: {
          sl: 'Ročno nabrani cvetovi starih gorenjskih lip v polnem poletnem cvetu. Nežen med, cvetlična sladkost in dolga, topla aroma — babičin čaj v sodobni, nežni podobi.',
          en: 'Hand-picked blossoms from old Gorenjska linden trees at full summer bloom. Delicate honey, floral sweetness and long, warm aroma — grandmother\'s tea in a modern form.',
        },
        price100g: '8 €',
        priceServing: '4,50 €',
        servingType: 'konvicka',
      },
      {
        id: 'spanec',
        name: { sl: 'Čaj za dober spanec', en: 'Good night tea' },
        origin: 'Slovenija & Alpska Evropa',
        desc: {
          sl: 'Posebna mešanica hmelja, baldrijana, gorenjske sivke in kamilice za globok, naraven spanec. Brez kofeina — skodelica pred spanjem, ki zares deluje.',
          en: 'A special blend of hops, valerian, Gorenjska lavender and chamomile for deep, natural sleep. Caffeine-free — a cup before bed that truly works.',
        },
        price100g: '12 €',
        priceServing: '5 €',
        servingType: 'konvicka',
        isSpeciality: true,
      },
      {
        id: 'sentjanZevka',
        name: { sl: 'Šentjanževka & rman', en: 'St. John\'s wort & yarrow' },
        origin: 'Slovenija / Gorenjska',
        desc: {
          sl: 'Gorenjski zelišči za ravnovesje in moč. Šentjanževka za svetlobo v temnih dneh, rman za prečiščenje in uravnavo prebave. Tisočletna tradicija gorskega zdravilstva.',
          en: 'Gorenjska herbs for balance and strength. St. John\'s wort for light on dark days, yarrow for cleansing and regulating digestion. A millennial tradition of mountain medicine.',
        },
        price100g: '9 €',
        priceServing: '4,50 €',
        servingType: 'konvicka',
      },
    ],
  },
  {
    id: 'domace-bylinky',
    slug: 'domace-bylinky',
    emoji: '🏔️',
    name: { sl: 'Domáce bylinky z Gorenjske', en: 'Local herbs from Gorenjska' },
    sub: {
      sl: 'Zelišča, nabrana z roko v naši Gorenjski — v soteskah, na travnikih in planinskih pobočjih. Vsaka vrečka nosi vonj domačega kraja.',
      en: 'Herbs hand-picked in our Gorenjska — in gorges, meadows and mountain slopes. Every bag carries the scent of home.',
    },
    imagePath: '/images/gallery-9.jpg',
    teas: [
      {
        id: 'gorenjska-planinska',
        name: { sl: 'Gorenjska planinska mešanica', en: 'Gorenjska mountain blend' },
        origin: 'Slovenija / Gorenjske planine',
        desc: {
          sl: 'Naša lastna mešanica dvanajstih gorenjskih zelišč, nabranih po letnih časih. Vsaka sezona prinese svojo aromo — travniška harmonija v vsakem požirku. Naš ponos.',
          en: 'Our own blend of twelve Gorenjska herbs, harvested with the seasons. Each season brings its own aroma — meadow harmony in every sip. Our pride.',
        },
        price100g: '13 €',
        priceServing: '5,50 €',
        servingType: 'konvicka',
        isSpeciality: true,
      },
      {
        id: 'alpska-sivka',
        name: { sl: 'Alpska sivka', en: 'Alpine lavender' },
        origin: 'Slovenija / Gorenjska, 900–1200 m n.v.',
        desc: {
          sl: 'Sivka z visokogorskih gorenjskih travnikov. Intenzivnejša in čistejša od nižinske — prefinjena aromatičnost, ki sprošča in odpira dihanje.',
          en: 'Lavender from high-altitude Gorenjska meadows. More intense and purer than lowland varieties — refined aromatics that relax and open breathing.',
        },
        price100g: '11 €',
        priceServing: '5 €',
        servingType: 'konvicka',
      },
      {
        id: 'materina-dusica',
        name: { sl: 'Materina dušica', en: 'Wild mountain thyme' },
        origin: 'Slovenija / Gorenjska pobočja',
        desc: {
          sl: 'Gorska materina dušica z gorenjskih skalnatih pobočij — neizmerljivo aromatičnejša od gojene. Blago pikantna z mehkim cvetličnim zaključkom. Ščiti dihala.',
          en: 'Mountain wild thyme from Gorenjska rocky slopes — incomparably more aromatic than cultivated varieties. Mildly spicy with a soft floral finish. Protects the respiratory system.',
        },
        price100g: '9 €',
        priceServing: '4,50 €',
        servingType: 'konvicka',
      },
      {
        id: 'smrekovi-vrscki',
        name: { sl: 'Smrekovi vršički', en: 'Young spruce tips' },
        origin: 'Slovenija / Gorenjska gozdovi',
        desc: {
          sl: 'Mladi pomladanski poganjki gorenjskih smrek, nabrani ročno v prvih majskih tednih. Svežina bora, citrusna nota in rahla smolnata sladkost — redka gorska posebnost.',
          en: 'Young spring shoots of Gorenjska spruce, hand-picked in the first weeks of May. Pine freshness, citrus note and a slight resinous sweetness — a rare mountain speciality.',
        },
        price100g: '14 €',
        priceServing: '5,50 €',
        servingType: 'konvicka',
        isSpeciality: true,
      },
      {
        id: 'gorski-rozmarim',
        name: { sl: 'Gorski rožmarin & žajbelj', en: 'Mountain rosemary & sage' },
        origin: 'Slovenija / Gorenjska',
        desc: {
          sl: 'Gorski rožmarin in žajbelj z gorenjskih skalnatih pobočij. Intenzivno aromatičen z blagim grelnim učinkom, antimikrobni in krepilni. Mediteransko sonce v alpski skodelici.',
          en: 'Mountain rosemary and sage from Gorenjska rocky slopes. Intensely aromatic with mild warming effect, antimicrobial and invigorating. Mediterranean sunshine in an Alpine cup.',
        },
        price100g: '10 €',
        priceServing: '4,50 €',
        servingType: 'konvicka',
      },
      {
        id: 'cvetlicni-caj',
        name: { sl: 'Planinski cvetlični čaj', en: 'Mountain flower tea' },
        origin: 'Slovenija / Gorenjski gorski travniki',
        desc: {
          sl: 'Šopek dvanajstih posušenih gorenjskih cvetov — koruzni cvet, nageljček, sivka, lipov cvet, rožmarin, kamilica... Vizualno spektakularen, nežno aromatičen. Za posebne trenutke.',
          en: 'A bouquet of twelve dried Gorenjska flowers — cornflower, carnation, lavender, linden, rosemary, chamomile... Visually spectacular, gently aromatic. For special moments.',
        },
        price100g: '15 €',
        priceServing: '6 €',
        servingType: 'konvicka',
        isSpeciality: true,
      },
      {
        id: 'rman-pelin',
        name: { sl: 'Rman & pelin', en: 'Yarrow & wormwood' },
        origin: 'Slovenija / Gorenjska',
        desc: {
          sl: 'Gorski rman in pelin — dve zelišči za prebavno zdravje z dolgo alpsko tradicijo. Intenzivna, rahlo grenka — za tiste, ki iščejo zelišče z resnim namenom.',
          en: 'Mountain yarrow and wormwood — two herbs for digestive health with a long Alpine tradition. Intense, slightly bitter — for those who seek a herb with serious intent.',
        },
        price100g: '8 €',
        priceServing: '4 €',
        servingType: 'konvicka',
      },
    ],
  },
];

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: 'mochi',
    emoji: '🍡',
    name: { sl: 'Japonske mochi', en: 'Japanese mochi' },
    desc: {
      sl: 'Ročno gneten riž z različnimi nadevami: matcha-anko, jagoda, mango, sezam. Mehki, svilnati, iz pristnih sestavin.',
      en: 'Hand-kneaded rice with various fillings: matcha-anko, strawberry, mango, sesame. Soft, silky, from authentic ingredients.',
    },
    price: '3,50 € / kos',
  },
  {
    id: 'matcha-torta',
    emoji: '🍰',
    name: { sl: 'Matcha torta', en: 'Matcha cake' },
    desc: {
      sl: 'Nežna torta iz ceremonialne matche z rahlo sladkim mascarpone kremom. Brez umetnih dodatkov — čista zelena intenzivnost.',
      en: 'Delicate cake made from ceremonial matcha with lightly sweetened mascarpone cream. No artificial additives — pure green intensity.',
    },
    price: '5,50 € / kos',
  },
  {
    id: 'potica',
    emoji: '🌀',
    name: { sl: 'Tradicionalna potica', en: 'Traditional potica' },
    desc: {
      sl: 'Slovenska babičina potica po starinski recepturi — orehova ali makova, pečena iz izvirnih sestavin brez umetnih dodatkov.',
      en: 'Slovenian grandmother\'s potica by ancient recipe — walnut or poppy seed, baked from original ingredients without artificial additives.',
    },
    price: '22 € / kg',
    note: {
      sl: 'Samo na naročilo, min. 48 ur vnaprej, min. 0,5 kg',
      en: 'By pre-order only, min. 48 hours in advance, min. 0.5 kg',
    },
  },
  {
    id: 'oreski',
    emoji: '🥜',
    name: { sl: 'Praženi oreščki v medu', en: 'Honey roasted nuts' },
    desc: {
      sl: 'Gorenjski lešniki in mandeljni, praženi z gorenjskim medom in himalajsko soljo. Vroči, hrustljavi, zasvojljivi.',
      en: 'Gorenjska hazelnuts and almonds, roasted with Gorenjska honey and Himalayan salt. Hot, crunchy, irresistible.',
    },
    price: '4 € / skledica',
  },
  {
    id: 'cimetni-zavitki',
    emoji: '🥐',
    name: { sl: 'Polnozrnati cimetni zavitki', en: 'Wholegrain cinnamon rolls' },
    desc: {
      sl: 'Pečeni na dan iz polnozrnatega testa z organskim cimetom in trsnim sladkorjem. Topli, mehki, z rahlo glazuro.',
      en: 'Baked on the day from wholegrain dough with organic cinnamon and cane sugar. Warm, soft, with a light glaze.',
    },
    price: '3,80 € / kos',
  },
  {
    id: 'kuskus',
    emoji: '🥙',
    name: { sl: 'Kuskus z zelenjavo in stročnicami', en: 'Couscous with vegetables & legumes' },
    desc: {
      sl: 'Sočen kuskus z mešanico sezonske zelenjave in stročnic, začinjen z arabskimi začimbami harissa in ras el hanout.',
      en: 'Juicy couscous with seasonal vegetables and legumes, seasoned with Arabic spices harissa and ras el hanout.',
    },
    price: '9,50 €',
  },
  {
    id: 'juha',
    emoji: '🍲',
    name: { sl: 'Zelenjavna juha z žličniki', en: 'Vegetable soup with yeast dumplings' },
    desc: {
      sl: 'Domača zelenjavna juha z drožnimi žličniki po slovensko. Sezonska zelenjava iz lokalnih kmetij, osnova kuhana 6 ur.',
      en: 'Home-made vegetable soup with yeast dumplings, Slovenian style. Seasonal vegetables from local farms, base cooked 6 hours.',
    },
    price: '7,50 €',
  },
  {
    id: 'pita',
    emoji: '🫓',
    name: { sl: 'Pita kruh z balkanskim sirom', en: 'Pita with Balkan cheese' },
    desc: {
      sl: 'Topla pita z balkanskim sirom feta, svežo zelenjavo — paradižnik, kumara, paprika — in prelivom iz olivnega olja z zelišči.',
      en: 'Warm pita with Balkan feta cheese, fresh vegetables — tomato, cucumber, pepper — and a dressing of olive oil with herbs.',
    },
    price: '8,50 €',
  },
  {
    id: 'sladoled',
    emoji: '🍦',
    name: { sl: 'Domač rastlinski sladoled', en: 'Homemade plant-based ice cream' },
    desc: {
      sl: 'Sladoled iz rastlinske smetane brez umetnih dodatkov: orehova, matcha, vanilija, sezonska jagodičja. Kremasta izbira za vse.',
      en: 'Ice cream from plant-based cream without artificial additives: walnut, matcha, vanilla, seasonal berries. A creamy choice for everyone.',
    },
    price: '3,50 € / žlica',
  },
  {
    id: 'marshmallow',
    emoji: '🟩',
    name: { sl: 'Matcha marshmallow rezine', en: 'Matcha marshmallow slices' },
    desc: {
      sl: 'Domači matcha biskvit s plastjo ročno narejenega marshmallowa in temno čokolado. Nežna sladkost, grenkoba čaja, bogata čokolada.',
      en: 'Homemade matcha sponge with a layer of hand-made marshmallow and dark chocolate. Gentle sweetness, tea bitterness, rich chocolate.',
    },
    price: '4,50 € / kos',
  },
  {
    id: 'sezonsko',
    emoji: '🍓',
    name: { sl: 'Sveže sezonsko sadje', en: 'Fresh seasonal fruit' },
    desc: {
      sl: 'Izbor svežega sadja iz gorenjskih sadovnjakov in bližnjih kmetij. Sestava se menja z naravnim ritmom letnih časov.',
      en: 'Selection of fresh fruit from Gorenjska orchards and nearby farms. Changes with the natural rhythm of the seasons.',
    },
    price: 'sezonska cena',
    isSeasonal: true,
  },
];
