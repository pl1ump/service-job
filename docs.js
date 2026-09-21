/* Technical documentation: reading drawings, tolerances, standards,
   process plans. Three languages.                                        */

var TDOCS = {};

/* ============================ УКРАЇНСЬКА ============================ */
TDOCS.uk = {
  eyebrow: 'Креслення · допуски · норми · технологія',
  h1: 'Документація',
  lede: 'Креслення — це контракт між конструктором і виробництвом. Розмір без допуску нічого не означає, а геометричний допуск без бази не означає нічого взагалі. Тут те, що відрізняє «бачив креслення» від «вмію читати».',
  sections: [

  { n: '01', h2: 'Що містить креслення', blocks: [
    {type:'grid', cells:[
      {kv:'Проєкції', h3:'Перший чи третій кут', p:'У Європі діє <b>перший кут</b> (метод E), в Америці третій. Прочитане не тим методом креслення дає <b>дзеркальну деталь</b>. Метод позначений символом у штампі.'},
      {kv:'Кутовий штамп', h3:'Хто, що, коли', p:'Матеріал, масштаб, номер, <b>ревізія</b>, підписи. Ревізія критична — робота за старою версією креслення це класична дорога помилка.'},
      {kv:'Розрізи й перерізи', h3:'Що всередині', p:'Показують внутрішню будову. Штрихування вказує на матеріал, напрям погляду — стрілками.'},
      {kv:'Позначення', h3:'Не лише розміри', p:'Шорсткість поверхонь, зварювальні шви, різьби, термообробка. Для складань ще й специфікація.'} ]} ]},

  { n: '02', h2: 'Розмірні допуски', blocks: [
    {type:'p', html:'Виготовити точно неможливо. Розмір <b>50 мм</b> сам по собі нічого не каже виробництву — питання <b>наскільки приблизно</b>. Допуск і є відповіддю. Без нього креслення технологічно беззмістовне.'},
    {type:'code', text:'50 ±0,1        <i>симетрично</i>\n50 +0,2 −0,1   <i>асиметрично</i>\n50 H7          <i>система ISO 286</i>'},
    {type:'grid', cells:[
      {kv:'Літера', h3:'Де стоїть поле допуску', p:'<b>Велика літера = отвір, мала = вал.</b> <code>H</code> — отвір з нижнім відхиленням нуль, <code>h</code> — вал з верхнім відхиленням нуль. Це правило варто знати автоматично.'},
      {kv:'Число', h3:'Клас точності IT', p:'Від IT01 до IT18, менше число — жорсткіше. <b>IT7</b> — типова точна механічна обробка, <b>IT11–13</b> — рівень різання й чорнових операцій.'} ]} ]},

  { n: '03', h2: 'Посадки', blocks: [
    {type:'table', head:['Тип','Приклад','Що виходить','Де застосовують'], rows:[
      ['<b>З зазором</b>','H7/g6','завжди проміжок','рухомі з’єднання, ковзання'],
      ['<b>Перехідна</b>','H7/k6','або малий зазор, або малий натяг','точне центрування'],
      ['<b>З натягом</b>','H7/p6','завжди натяг','підшипники, втулки — під прес або нагрів'] ]},
    {type:'note', html:'<b>H7/h6</b> — базова точна пара. Якщо треба назвати одну посадку з голови, називай цю.'} ]},

  { n: '04', h2: 'Загальні допуски — ISO 2768', blocks: [
    {type:'callout', hd:'Те, що більшість пропускає', p:'Розміри <b>без</b> проставленого допуску не є вільними. Вони підпадають під загальний допуск, указаний у штампі. Розмір «50» без нічого при класі <b>m</b> — це насправді приблизно <b>±0,3</b>, а не «як вийде».'},
    {type:'table', head:['Клас','Назва','Застосування'], rows:[
      ['f','точний','точна механічна обробка'],
      ['m','середній','<b>найпоширеніший</b>, звичайна обробка'],
      ['c','грубий','зварні конструкції, різані заготовки'],
      ['v','дуже грубий','термічне різання, кування'] ]},
    {type:'p', html:'Стандарт задає не лише лінійні розміри, а й <b>кути</b> та загальні геометричні відхилення. Тому перш ніж питати конструктора про розмір без допуску, варто подивитися в штамп.'} ]},

  { n: '05', h2: 'Геометричні допуски — ISO 1101', blocks: [
    {type:'p', html:'Розмірного допуску мало. Отвір може бути <b>потрібного діаметра, але не в тому місці</b>. Поверхня — потрібного розміру, але не пласка.'},
    {type:'table', head:['Група','Що обмежує'], rows:[
      ['<b>Форма</b>','площинність, прямолінійність, круглість, циліндричність'],
      ['<b>Орієнтація</b>','перпендикулярність, паралельність, нахил'],
      ['<b>Розташування</b>','позиція, співвісність, симетричність'],
      ['<b>Биття</b>','радіальне й торцеве'] ]},
    {type:'callout', hd:'Бази — без них допуск не має сенсу', p:'Позначаються <b>A, B, C</b>. «Перпендикулярно» — перпендикулярно до <b>чого</b>? Бази задають систему відліку й порядок закріплення при вимірюванні. Геометричний допуск без бази прочитати неможливо.'} ]},

  { n: '06', h2: 'Шорсткість поверхні', blocks: [
    {type:'p', html:'Параметр <b>Ra</b>, у мікрометрах — середнє відхилення профілю.'},
    {type:'table', head:['Ra, мкм','Чим досягається'], rows:[
      ['12,5 – 6,3','грубе точіння, фрезерування'],
      ['3,2','звичайна механічна обробка'],
      ['1,6','чистова обробка'],
      ['0,8 і нижче','шліфування, притирання'] ]},
    {type:'note', html:'Термічне різання дає значно грубішу кромку, ніж механічна обробка — тому для нього існує окремий стандарт якості.'} ]},

  { n: '07', h2: 'EN ISO 9013 — якість термічного різу', blocks: [
    {type:'p', html:'Профільний стандарт для <b>плазми, лазера й кисневого різання</b>. Задає класи якості різаної кромки за двома параметрами:'},
    {type:'grid', cells:[
      {kv:'u', h3:'Перпендикулярність кромки', p:'Наскільки кромка відхиляється від прямого кута — тобто величина скосу.'},
      {kv:'Rz5', h3:'Середня висота профілю', p:'Шорсткість самої різаної поверхні.'} ]},
    {type:'callout', hd:'Як це рятує виїзд', p:'Коли замовник каже «ріже погано», правильне перше питання — <b>який клас за ISO 9013 замовлений</b>. Часто виявляється, що машина працює в межах норми, а очікування були з іншого класу. Це розмова про стандарт, а не про сварку.'} ]},

  { n: '08', h2: 'Технологічний поступ', blocks: [
    {type:'p', html:'Креслення каже <b>що</b>, технологічний поступ каже <b>як</b>. Це послідовність операцій від заготовки до готової деталі.'},
    {type:'table', head:['Що містить','Приклад'], rows:[
      ['номер операції','010, 020, 030…'],
      ['робоче місце','плазмове різання / фрезерний центр / контроль'],
      ['опис','вирізати заготовку з припуском 3 мм'],
      ['інструмент і оснащення','фреза Ø20, лещата, упор'],
      ['режими','швидкість, подача, глибина'],
      ['контроль','що міряємо, чим і на якому етапі'] ]},
    {type:'callout', hd:'Де вирішується ціна', p:'Одну деталь можна зробити десятьма способами з різною собівартістю. Поступ — саме те місце, де ця різниця виникає: чи потрібне окреме встановлення, чи вистачить одного; чи ріжемо з запасом і фрезеруємо, чи одразу точно.'} ]},

  { n: '09', h2: 'Стандарти, які варто назвати', blocks: [
    {type:'table', head:['Стандарт','Про що'], rows:[
      ['<b>ISO 286</b>','система допусків і посадок'],
      ['<b>ISO 2768</b>','загальні допуски (класи f, m, c, v)'],
      ['<b>ISO 1101</b>','геометричні допуски й бази'],
      ['<b>ISO 1302</b>','позначення шорсткості'],
      ['<b>ISO 128</b>','правила виконання креслень'],
      ['<b>EN ISO 9013</b>','якість термічного різу'] ]} ]}
  ]
};

/* ============================= SLOVENČINA ============================= */
TDOCS.sk = {
  eyebrow: 'Výkresy · tolerancie · normy · technológia',
  h1: 'Dokumentácia',
  lede: 'Výkres je zmluva medzi konštruktérom a výrobou. Rozmer bez tolerancie nehovorí nič a geometrická tolerancia bez základne sa nedá ani prečítať. Tu je to, čo odlišuje „videl som výkres“ od „viem ho čítať“.',
  sections: [

  { n: '01', h2: 'Čo výkres obsahuje', blocks: [
    {type:'grid', cells:[
      {kv:'Premietanie', h3:'Prvý alebo tretí kvadrant', p:'V Európe platí <b>prvý kvadrant</b> (metóda E), v Amerike tretí. Výkres prečítaný nesprávnou metódou dá <b>zrkadlový dielec</b>. Metóda je vyznačená symbolom v rohovej pečiatke.'},
      {kv:'Rohová pečiatka', h3:'Kto, čo, kedy', p:'Materiál, mierka, číslo, <b>revízia</b>, podpisy. Revízia je kritická — práca podľa starej verzie výkresu je klasická drahá chyba.'},
      {kv:'Rezy a prierezy', h3:'Čo je vnútri', p:'Ukazujú vnútornú stavbu. Šrafovanie naznačuje materiál, smer pohľadu udávajú šípky.'},
      {kv:'Označenia', h3:'Nielen rozmery', p:'Drsnosť povrchu, zvary, závity, tepelné spracovanie. Pri zostavách aj kusovník.'} ]} ]},

  { n: '02', h2: 'Rozmerové tolerancie', blocks: [
    {type:'p', html:'Vyrobiť presne sa nedá. Rozmer <b>50 mm</b> sám osebe výrobe nehovorí nič — otázka je <b>ako presne</b>. Tolerancia je tá odpoveď. Bez nej je výkres technologicky nepoužiteľný.'},
    {type:'code', text:'50 ±0,1        <i>symetricky</i>\n50 +0,2 −0,1   <i>nesymetricky</i>\n50 H7          <i>sústava ISO 286</i>'},
    {type:'grid', cells:[
      {kv:'Písmeno', h3:'Poloha tolerančného poľa', p:'<b>Veľké písmeno = diera, malé = hriadeľ.</b> <code>H</code> je diera s dolnou úchylkou nula, <code>h</code> hriadeľ s hornou úchylkou nula. Toto pravidlo treba vedieť automaticky.'},
      {kv:'Číslo', h3:'Stupeň presnosti IT', p:'Od IT01 po IT18, menšie číslo je prísnejšie. <b>IT7</b> je bežné presné obrábanie, <b>IT11–13</b> úroveň rezania a hrubovania.'} ]} ]},

  { n: '03', h2: 'Uloženia', blocks: [
    {type:'table', head:['Typ','Príklad','Výsledok','Kde sa používa'], rows:[
      ['<b>S vôľou</b>','H7/g6','vždy medzera','pohyblivé spoje, klzné'],
      ['<b>Prechodné</b>','H7/k6','malá vôľa alebo malý presah','presné stredenie'],
      ['<b>S presahom</b>','H7/p6','vždy presah','ložiská, puzdrá — lis alebo ohrev'] ]},
    {type:'note', html:'<b>H7/h6</b> je základná presná dvojica. Ak treba spamäti pomenovať jedno uloženie, pomenuj toto.'} ]},

  { n: '04', h2: 'Všeobecné tolerancie — ISO 2768', blocks: [
    {type:'callout', hd:'To, čo väčšina prehliadne', p:'Rozmery <b>bez</b> zapísanej tolerancie nie sú voľné. Platí pre ne všeobecná tolerancia uvedená v pečiatke. Rozmer „50“ bez ničoho pri triede <b>m</b> znamená v skutočnosti asi <b>±0,3</b>, nie „ako vyjde“.'},
    {type:'table', head:['Trieda','Názov','Použitie'], rows:[
      ['f','jemná','presné obrábanie'],
      ['m','stredná','<b>najbežnejšia</b>, bežné obrábanie'],
      ['c','hrubá','zvarence, rezané polotovary'],
      ['v','veľmi hrubá','tepelné rezanie, kovanie'] ]},
    {type:'p', html:'Norma určuje nielen dĺžkové rozmery, ale aj <b>uhly</b> a všeobecné geometrické úchylky. Preto skôr než sa spýtaš konštruktéra na rozmer bez tolerancie, pozri sa do pečiatky.'} ]},

  { n: '05', h2: 'Geometrické tolerancie — ISO 1101', blocks: [
    {type:'p', html:'Rozmerová tolerancia nestačí. Diera môže mať <b>správny priemer, ale byť na zlom mieste</b>. Plocha môže mať správny rozmer a nebyť rovná.'},
    {type:'table', head:['Skupina','Čo obmedzuje'], rows:[
      ['<b>Tvar</b>','rovinnosť, priamosť, kruhovitosť, valcovitosť'],
      ['<b>Orientácia</b>','kolmosť, rovnobežnosť, sklon'],
      ['<b>Poloha</b>','poloha, súosovosť, súmernosť'],
      ['<b>Hádzanie</b>','radiálne a čelné'] ]},
    {type:'callout', hd:'Základne — bez nich tolerancia nedáva zmysel', p:'Označujú sa <b>A, B, C</b>. „Kolmo“ — kolmo na <b>čo</b>? Základne určujú vzťažnú sústavu aj poradie upnutia pri meraní. Geometrickú toleranciu bez základne nemožno prečítať.'} ]},

  { n: '06', h2: 'Drsnosť povrchu', blocks: [
    {type:'p', html:'Parameter <b>Ra</b> v mikrometroch — stredná úchylka profilu.'},
    {type:'table', head:['Ra, µm','Čím sa dosiahne'], rows:[
      ['12,5 – 6,3','hrubé sústruženie, frézovanie'],
      ['3,2','bežné obrábanie'],
      ['1,6','dokončovacie obrábanie'],
      ['0,8 a menej','brúsenie, lapovanie'] ]},
    {type:'note', html:'Tepelné rezanie dáva podstatne hrubšiu hranu než obrábanie — preto preň existuje samostatná norma kvality.'} ]},

  { n: '07', h2: 'EN ISO 9013 — kvalita tepelného rezu', blocks: [
    {type:'p', html:'Odborná norma pre <b>plazmu, laser a autogén</b>. Určuje triedy kvality reznej hrany dvoma parametrami:'},
    {type:'grid', cells:[
      {kv:'u', h3:'Kolmosť hrany', p:'O koľko sa hrana odkláňa od pravého uhla — teda veľkosť úkosu.'},
      {kv:'Rz5', h3:'Stredná výška profilu', p:'Drsnosť samotnej reznej plochy.'} ]},
    {type:'callout', hd:'Ako to ušetrí výjazd', p:'Keď zákazník povie „reže zle“, správna prvá otázka je, <b>akú triedu podľa ISO 9013 si objednal</b>. Často sa ukáže, že stroj pracuje v norme a očakávanie bolo z inej triedy. Je to rozhovor o norme, nie hádka.'} ]},

  { n: '08', h2: 'Technologický postup', blocks: [
    {type:'p', html:'Výkres hovorí <b>čo</b>, technologický postup hovorí <b>ako</b>. Je to sled operácií od polotovaru po hotový dielec.'},
    {type:'table', head:['Čo obsahuje','Príklad'], rows:[
      ['číslo operácie','010, 020, 030…'],
      ['pracovisko','plazmové rezanie / frézovacie centrum / kontrola'],
      ['popis','vyrezať polotovar s prídavkom 3 mm'],
      ['nástroj a prípravky','fréza Ø20, zverák, doraz'],
      ['režimy','rýchlosť, posuv, hĺbka'],
      ['kontrola','čo meriame, čím a v ktorej fáze'] ]},
    {type:'callout', hd:'Tu sa rozhoduje cena', p:'Ten istý dielec sa dá vyrobiť desiatimi spôsobmi s rôznymi nákladmi. Postup je práve to miesto, kde ten rozdiel vzniká: či treba ďalšie upnutie, alebo stačí jedno; či režeme s prídavkom a frézujeme, alebo rovno načisto.'} ]},

  { n: '09', h2: 'Normy, ktoré stojí za to pomenovať', blocks: [
    {type:'table', head:['Norma','O čom je'], rows:[
      ['<b>ISO 286</b>','sústava tolerancií a uložení'],
      ['<b>ISO 2768</b>','všeobecné tolerancie (triedy f, m, c, v)'],
      ['<b>ISO 1101</b>','geometrické tolerancie a základne'],
      ['<b>ISO 1302</b>','označovanie drsnosti'],
      ['<b>ISO 128</b>','pravidlá kreslenia'],
      ['<b>EN ISO 9013</b>','kvalita tepelného rezu'] ]} ]}
  ]
};

/* ============================== ENGLISH ============================== */
TDOCS.en = {
  eyebrow: 'Drawings · tolerances · standards · process plans',
  h1: 'Documentation',
  lede: 'A drawing is a contract between the designer and the shop floor. A dimension without a tolerance says nothing, and a geometric tolerance without a datum cannot be read at all. This is what separates "I have seen a drawing" from "I can read one".',
  sections: [

  { n: '01', h2: 'What a drawing contains', blocks: [
    {type:'grid', cells:[
      {kv:'Projection', h3:'First or third angle', p:'Europe uses <b>first-angle</b> projection, America third-angle. A drawing read in the wrong convention produces a <b>mirrored part</b>. The method is marked by a symbol in the title block.'},
      {kv:'Title block', h3:'Who, what, when', p:'Material, scale, drawing number, <b>revision</b>, signatures. The revision matters — working from an outdated drawing is the classic expensive mistake.'},
      {kv:'Sections and cuts', h3:'What is inside', p:'They reveal internal structure. Hatching indicates material; arrows give the viewing direction.'},
      {kv:'Annotations', h3:'Not only dimensions', p:'Surface roughness, welds, threads, heat treatment. For assemblies, a bill of materials as well.'} ]} ]},

  { n: '02', h2: 'Dimensional tolerances', blocks: [
    {type:'p', html:'Nothing can be made exactly. A dimension of <b>50 mm</b> on its own tells manufacturing nothing — the question is <b>how exactly</b>. The tolerance is that answer, and without it a drawing is useless for production.'},
    {type:'code', text:'50 ±0.1        <i>symmetrical</i>\n50 +0.2 −0.1   <i>asymmetrical</i>\n50 H7          <i>the ISO 286 system</i>'},
    {type:'grid', cells:[
      {kv:'Letter', h3:'Position of the tolerance zone', p:'<b>Upper case = hole, lower case = shaft.</b> <code>H</code> is a hole with zero lower deviation, <code>h</code> a shaft with zero upper deviation. Worth knowing without thinking.'},
      {kv:'Number', h3:'IT grade', p:'From IT01 to IT18; a smaller number is tighter. <b>IT7</b> is ordinary precision machining, <b>IT11–13</b> the level of cutting and roughing.'} ]} ]},

  { n: '03', h2: 'Fits', blocks: [
    {type:'table', head:['Type','Example','Result','Where it is used'], rows:[
      ['<b>Clearance</b>','H7/g6','always a gap','moving joints, sliding'],
      ['<b>Transition</b>','H7/k6','a small gap or a small interference','precise location'],
      ['<b>Interference</b>','H7/p6','always interference','bearings, bushings — press or heat'] ]},
    {type:'note', html:'<b>H7/h6</b> is the baseline precision pairing. If you have to name one fit from memory, name that one.'} ]},

  { n: '04', h2: 'General tolerances — ISO 2768', blocks: [
    {type:'callout', hd:'What most people miss', p:'Dimensions <b>without</b> a stated tolerance are not free. They fall under the general tolerance class named in the title block. A bare "50" under class <b>m</b> actually means roughly <b>±0.3</b>, not "whatever comes out".'},
    {type:'table', head:['Class','Name','Use'], rows:[
      ['f','fine','precision machining'],
      ['m','medium','<b>the most common</b>, ordinary machining'],
      ['c','coarse','weldments, cut blanks'],
      ['v','very coarse','thermal cutting, forging'] ]},
    {type:'p', html:'The standard covers not only linear dimensions but also <b>angles</b> and general geometric deviations. So before asking the designer about an untoleranced dimension, look at the title block.'} ]},

  { n: '05', h2: 'Geometric tolerances — ISO 1101', blocks: [
    {type:'p', html:'Dimensional tolerance is not enough. A hole can be <b>the right diameter but in the wrong place</b>. A face can be the right size and not be flat.'},
    {type:'table', head:['Group','What it constrains'], rows:[
      ['<b>Form</b>','flatness, straightness, roundness, cylindricity'],
      ['<b>Orientation</b>','perpendicularity, parallelism, angularity'],
      ['<b>Location</b>','position, concentricity, symmetry'],
      ['<b>Run-out</b>','radial and axial'] ]},
    {type:'callout', hd:'Datums — without them a tolerance is meaningless', p:'Marked <b>A, B, C</b>. "Perpendicular" — perpendicular to <b>what</b>? Datums establish the reference frame and the clamping order for measurement. A geometric tolerance without a datum simply cannot be read.'} ]},

  { n: '06', h2: 'Surface roughness', blocks: [
    {type:'p', html:'The <b>Ra</b> parameter, in micrometres — the average deviation of the profile.'},
    {type:'table', head:['Ra, µm','How it is achieved'], rows:[
      ['12.5 – 6.3','rough turning, milling'],
      ['3.2','ordinary machining'],
      ['1.6','finish machining'],
      ['0.8 and below','grinding, lapping'] ]},
    {type:'note', html:'Thermal cutting leaves a far rougher edge than machining — which is why it has a quality standard of its own.'} ]},

  { n: '07', h2: 'EN ISO 9013 — thermal cut quality', blocks: [
    {type:'p', html:'The standard for <b>plasma, laser and oxy-fuel</b>. It defines quality classes for a cut edge using two parameters:'},
    {type:'grid', cells:[
      {kv:'u', h3:'Perpendicularity of the edge', p:'How far the edge deviates from square — in other words, the amount of bevel.'},
      {kv:'Rz5', h3:'Mean height of the profile', p:'The roughness of the cut face itself.'} ]},
    {type:'callout', hd:'How this saves a site visit', p:'When a customer says "it cuts badly", the right first question is <b>which ISO 9013 class was ordered</b>. Often the machine is working within specification and the expectation came from a different class. That turns it into a conversation about a standard rather than an argument.'} ]},

  { n: '08', h2: 'The process plan', blocks: [
    {type:'p', html:'The drawing says <b>what</b>; the process plan says <b>how</b>. It is the sequence of operations from raw stock to finished part.'},
    {type:'table', head:['What it contains','Example'], rows:[
      ['operation number','010, 020, 030…'],
      ['workstation','plasma cutting / milling centre / inspection'],
      ['description','cut the blank with 3 mm stock allowance'],
      ['tooling and fixtures','Ø20 cutter, vice, stop'],
      ['parameters','speed, feed, depth'],
      ['inspection','what is measured, with what, at which stage'] ]},
    {type:'callout', hd:'Where the cost is decided', p:'The same part can be made ten ways at ten different costs. The process plan is exactly where that difference arises: whether another setup is needed or one will do; whether we cut oversize and mill, or cut to size straight away.'} ]},

  { n: '09', h2: 'Standards worth being able to name', blocks: [
    {type:'table', head:['Standard','Subject'], rows:[
      ['<b>ISO 286</b>','the system of tolerances and fits'],
      ['<b>ISO 2768</b>','general tolerances (classes f, m, c, v)'],
      ['<b>ISO 1101</b>','geometric tolerancing and datums'],
      ['<b>ISO 1302</b>','surface roughness notation'],
      ['<b>ISO 128</b>','technical drawing conventions'],
      ['<b>EN ISO 9013</b>','thermal cut quality'] ]} ]}
  ]
};
