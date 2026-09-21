/* How materials behave under thermal cutting, and what power that demands.
   Three languages.                                                        */

var MAT = {};

/* ============================ УКРАЇНСЬКА ============================ */
MAT.uk = {
  eyebrow: 'Поведінка матеріалу · вибір потужності',
  h1: 'Матеріали й потужність',
  lede: 'Скільки енергії треба, визначає не товщина сама по собі, а матеріал. Три його властивості пояснюють майже все — чому нержавійка не ріжеться киснем, чому алюміній «з’їдає» потужність і чому вуглецева сталь тріскає на кромці.',
  sections: [

  { n: '01', h2: 'Три властивості, з яких випливає решта', blocks: [
    {type:'grid', cells:[
      {kv:'Температура плавлення', h3:'Скільки енергії вкласти', p:'Найочевидніша, але не найважливіша з трьох.'},
      {kv:'Теплопровідність', h3:'Як швидко тепло тікає', p:'Мідь і алюміній проводять так добре, що енергія розповзається листом замість того, щоб різати. Нержавійка навпаки — тепло концентрується, тому <b>веде сильніше, ніж очікуєш</b>.'},
      {kv:'Поведінка оксиду', h3:'Плавиться нижче чи вище за метал', p:'Саме це визначає, чи можливе кисневе різання. Оксид заліза плавиться нижче за залізо — тече й видувається. Оксид хрому й алюмінію тугоплавкі — утворюють кірку.'} ]} ]},

  { n: '02', h2: 'Матеріал за матеріалом', blocks: [
    {type:'table', head:['Матеріал','Поведінка при термічному різанні'], rows:[
      ['<b>Конструкційна сталь</b><br/>S235, S355','Найзручніша для всіх технологій. Оксид заліза плавиться нижче за залізо, тому працює навіть кисень. Кромка трохи підгартовується, при різанні киснем лишається окалина.'],
      ['<b>Високовуглецева</b><br/>понад ~0,3 % C','Швидке охолодження дає <b>мартенсит</b> — кромка гартується й може тріскати. Потрібен попередній підігрів і повільне охолодження.'],
      ['<b>Нержавіюча сталь</b>','Киснем неможливо. Плазмою азотом або H35; кисень зіпсував би корозійну стійкість. Низька теплопровідність → сильне короблення. Повітряна плазма <b>азотує кромку</b>, у ЗТВ можливе збіднення хромом.'],
      ['<b>Алюміній</b>','Al₂O₃ плавиться при ~2050 °C проти 660 °C самого металу. Величезна теплопровідність, енергія тікає. Тонкий лист сильно веде, шлак липне.'],
      ['<b>Мідь, латунь</b>','Найвища теплопровідність плюс відбивність. CO₂-лазер практично не бере, волоконний бере. Найрозумніше — <b>воднострумінь</b>.'],
      ['<b>Титан</b>','У кисні горить чудово, але реакція некерована. Плазмою в інертних газах. ЗТВ насичується киснем і азотом і стає крихкою — в авіації цей шар видаляють механічно.'],
      ['<b>Оцинкована сталь</b>','Цинк випаровується — <b>токсичні пари</b> й погіршена кромка. Витяжка обов’язкова.'] ]},
    {type:'callout', hd:'Уточнення про слово «кисень»', p:'<b>Кисневе різання</b> — це технологія, де метал горить у кисні; нержавійку так не ріжуть <b>ніколи</b>. <b>Кисень у плазмі</b> — просто один з газів, і там ріже дуга, а не хімія. Нержавійку плазма ріже будь-яким газом, але газ вирішує, наскільки придатною буде кромка. Коротко: <b>хімія перебирає матеріалом, плавлення — ні</b>.'} ]},

  { n: '03', h2: 'Що відбувається з металом на кромці', blocks: [
    {type:'p', html:'<b>Зона термічного впливу</b> — метал, який не розплавився, але змінив структуру. Оком не видно, наслідки реальні:'},
    {type:'ul', items:[
      '<b>гартування</b> у вуглецевих сталях — і ризик тріщин',
      '<b>зростання зерна</b> — падає в’язкість',
      '<b>азотування</b> кромки при повітряній плазмі',
      '<b>окалина</b> при різанні киснем',
      '<b>сенсибілізація</b> нержавійки — виділення карбідів хрому, падає корозійна стійкість біля різу'] },
    {type:'note', html:'У воднострумені зони термічного впливу <b>немає взагалі</b> — саме тому його обирають, коли структура металу критична.'} ]},

  { n: '04', h2: 'Короблення', blocks: [
    {type:'p', html:'Тепло зайшло нерівномірно, охололо нерівномірно — виникли внутрішні напруження, і лист повело. Найгірше на <b>тонкому листі</b> й на <b>довгих вузьких деталях</b>.'},
    {type:'callout', hd:'Випадок, який дивує клієнтів', p:'Прокатана плита має <b>власні залишкові напруження</b>. Коли ти її розрізаєш, вона їх вивільняє — і деталь може помітно зрушити просто від факту різання, без жодної помилки в програмі чи машині.'} ]},

  { n: '05', h2: 'Наслідки для наступних операцій', blocks: [
    {type:'table', head:['Що далі','Проблема від різання'], rows:[
      ['<b>Зварювання</b>','азотована кромка дає пористість у шві — треба зачистити або різати іншим газом'],
      ['<b>Фарбування</b>','окалину треба прибрати, інакше фарба відлущиться'],
      ['<b>Механічна обробка</b>','загартована кромка <b>вбиває інструмент</b> — лишають припуск і фрезерують за межі ЗТВ'],
      ['<b>Втомна міцність</b>','якість кромки прямо впливає на ресурс у навантажених конструкціях'] ]} ]},

  { n: '06', h2: 'Лазер — кіловати', blocks: [
    {type:'table', head:['Товщина','Конструкційна сталь (O₂)','Нержавійка (N₂)','Алюміній'], rows:[
      ['<b>10 мм</b>','2–3 кВт вистачить, 4–6 комфортно','4–6 кВт','~6 кВт'],
      ['<b>25 мм</b>','6 кВт мінімум, 8–12 для продуктивності','10–15 кВт','15 кВт і вище'] ]},
    {type:'callout', hd:'Чому нержавійка потребує вдвічі більше', p:'На сталі <b>кисень вступає в реакцію й сам додає енергії</b> — промінь лише запускає горіння. На нержавійці азот інертний, він тільки видуває розплав, і всю енергію мусить дати лазер.'},
    {type:'note', html:'Практична стеля: 12 кВт бере близько 30 мм сталі, 20 кВт до 40–50, але повільно. Вище обмеження вже <b>не в потужності, а у фізиці</b> — розплав перестає стабільно виходити з різу.'} ]},

  { n: '07', h2: 'Плазма — ампери', blocks: [
    {type:'table', head:['Струм','Якісний рез по сталі'], rows:[
      ['45 A','до ~12 мм'],
      ['85 A','до ~20 мм'],
      ['<b>130 A</b>','<b>до ~25 мм</b>'],
      ['200 A','до ~32–38 мм'],
      ['260 A','до ~40 мм'],
      ['400 A','до ~50–60 мм'] ]},
    {type:'p', html:'Тобто <b>25 мм — це 130–200 A</b> залежно від потрібної швидкості, <b>35 мм — 200–260 A</b>.'},
    {type:'callout', hd:'Три різні показники товщини', p:'<b>Якісний рез</b> — гарна кромка на робочій швидкості. <b>Максимальне пробивання</b> — воно <b>завжди менше за максимальний рез</b>: систему, яка ріже 40 мм, може не вдатися пробити на 40, і доводиться починати від краю листа. <b>Розділовий рез</b> — метал розділяється, кромка погана, це для брухту й демонтажу. Плутають їх постійно.'} ]},

  { n: '08', h2: 'Як матеріал змінює цифри', blocks: [
    {type:'grid', cells:[
      {kv:'Плазма', h3:'Мінус 20–30 %', p:'Нержавійка й алюміній ріжуться приблизно на чверть тонше тією самою системою. Машина, що дає якісні 25 мм по сталі, на нержавійці дасть якісні ~20.'},
      {kv:'Лазер', h3:'До двох разів', p:'Різниця більша — через інертний газ, який нічого не додає до енергії променя.'},
      {kv:'Спільне правило', h3:'Сталь — найкращий випадок', p:'Конструкційна сталь є найзручнішим матеріалом для обох технологій. Усе інше гірше.'} ]} ]},

  { n: '09', h2: 'Більша потужність не завжди краще', blocks: [
    {type:'p', html:'На тонкому листі надлишок енергії дає <b>ширший рез, більшу зону термічного впливу й сильніше короблення</b>. Тому потужні системи на тонкому металі працюють на зниженому режимі: плазма перемикається на менший струм <b>з іншим комплектом витратників</b>, лазер знижує потужність і піднімає швидкість.'},
    {type:'note', html:'Звідси й правило: витратники підбираються <b>під конкретний струм</b>. Сопло від 200 A на режимі 45 A дасть погану кромку, хоча формально все справне.'} ]},

  { n: '10', h2: 'Коли винен матеріал, а не машина', blocks: [
    {type:'p', html:'Частина скарг на якість різу — це взагалі не налаштування:'},
    {type:'ul', items:[
      '<b>окалина від прокату</b> на поверхні листа',
      '<b>іржа або волога</b> — особливо псують пробивання',
      '<b>не та марка</b> — клієнт каже «сталь», а це виявляється леговане',
      '<b>інша партія</b> того самого матеріалу поводиться інакше',
      '<b>лист не плаский</b> — контроль висоти не встигає'] },
    {type:'callout', hd:'Питання, яке треба ставити рано', p:'«А це на тому самому матеріалі, що вчора?» Одна відповідь відсіює цілий клас причин ще до того, як ти кудись підключишся.'} ]}
  ]
};

/* ============================= SLOVENČINA ============================= */
MAT.sk = {
  eyebrow: 'Správanie materiálu · voľba výkonu',
  h1: 'Materiály a výkon',
  lede: 'Koľko energie treba, neurčuje hrúbka sama osebe, ale materiál. Tri jeho vlastnosti vysvetlia takmer všetko — prečo sa nerez nedá rezať autogénom, prečo hliník „zožerie“ výkon a prečo uhlíková oceľ na hrane praská.',
  sections: [

  { n: '01', h2: 'Tri vlastnosti, z ktorých vyplýva zvyšok', blocks: [
    {type:'grid', cells:[
      {kv:'Teplota tavenia', h3:'Koľko energie dodať', p:'Najzrejmejšia, ale nie najdôležitejšia z troch.'},
      {kv:'Tepelná vodivosť', h3:'Ako rýchlo teplo uniká', p:'Meď a hliník vedú tak dobre, že energia sa rozlezie plechom namiesto rezania. Nerez naopak — teplo sa koncentruje, takže <b>deformuje viac, než by človek čakal</b>.'},
      {kv:'Správanie oxidu', h3:'Taví sa nižšie či vyššie ako kov', p:'Práve to určuje, či je autogén možný. Oxid železa sa taví nižšie ako železo — tečie a vyfúkne sa. Oxid chrómu a hliníka sú žiaruvzdorné a vytvoria kôru.'} ]} ]},

  { n: '02', h2: 'Materiál po materiáli', blocks: [
    {type:'table', head:['Materiál','Správanie pri tepelnom delení'], rows:[
      ['<b>Konštrukčná oceľ</b><br/>S235, S355','Najpohodlnejšia pre všetky technológie. Oxid železa sa taví nižšie ako železo, takže funguje aj autogén. Hrana sa mierne zakalí, pri kyslíku ostáva okuje.'],
      ['<b>Vysokouhlíková</b><br/>nad ~0,3 % C','Rýchle ochladenie dá <b>martenzit</b> — hrana sa zakalí a môže praskať. Treba predhrev a pomalé chladnutie.'],
      ['<b>Nerezová oceľ</b>','Autogénom nemožné. Plazmou dusíkom alebo H35; kyslík by pokazil koróznu odolnosť. Nízka vodivosť → silná deformácia. Vzduchová plazma <b>nitriduje hranu</b>, v TOO môže dôjsť k ochudobneniu o chróm.'],
      ['<b>Hliník</b>','Al₂O₃ sa taví pri ~2050 °C oproti 660 °C samotného kovu. Obrovská vodivosť, energia uniká. Tenký plech sa silno krúti, troska sa lepí.'],
      ['<b>Meď, mosadz</b>','Najvyššia vodivosť plus odrazivosť. CO₂ laser prakticky neberie, vláknový áno. Najrozumnejší je <b>vodný lúč</b>.'],
      ['<b>Titán</b>','V kyslíku horí výborne, ale reakcia je neovládateľná. Plazmou v inertných plynoch. TOO sa nasýti kyslíkom a dusíkom a krehne — v letectve sa táto vrstva mechanicky odstraňuje.'],
      ['<b>Pozinkovaná oceľ</b>','Zinok sa odparuje — <b>toxické výpary</b> a horšia hrana. Odsávanie je nutnosť.'] ]},
    {type:'callout', hd:'Spresnenie k slovu „kyslík“', p:'<b>Autogénne rezanie</b> je technológia, kde kov horí v kyslíku; nerez sa tak nereže <b>nikdy</b>. <b>Kyslík v plazme</b> je len jeden z plynov a tam reže oblúk, nie chémia. Nerez plazma reže s ktorýmkoľvek plynom, ale plyn rozhodne, aká použiteľná bude hrana. Skrátka: <b>chémia si vyberá materiál, tavenie nie</b>.'} ]},

  { n: '03', h2: 'Čo sa deje s kovom na hrane', blocks: [
    {type:'p', html:'<b>Tepelne ovplyvnená oblasť</b> je kov, ktorý sa neroztavil, ale zmenil štruktúru. Okom to nevidno, následky sú skutočné:'},
    {type:'ul', items:[
      '<b>zakalenie</b> pri uhlíkových oceliach — a riziko trhlín',
      '<b>rast zrna</b> — klesá húževnatosť',
      '<b>nitridácia</b> hrany pri vzduchovej plazme',
      '<b>okuje</b> pri rezaní kyslíkom',
      '<b>senzibilizácia</b> nerezu — vylučovanie karbidov chrómu, klesá korózna odolnosť pri reze'] },
    {type:'note', html:'Pri vodnom lúči tepelne ovplyvnená oblasť <b>neexistuje</b> — preto sa volí tam, kde je štruktúra kovu kritická.'} ]},

  { n: '04', h2: 'Deformácia', blocks: [
    {type:'p', html:'Teplo vstúpilo nerovnomerne, vychladlo nerovnomerne — vznikli vnútorné napätia a plech sa skrútil. Najhoršie pri <b>tenkom plechu</b> a <b>dlhých úzkych dielcoch</b>.'},
    {type:'callout', hd:'Prípad, ktorý zákazníkov prekvapí', p:'Valcovaná tabuľa má <b>vlastné zvyškové napätia</b>. Keď ju rozrežeš, uvoľní ich — a dielec sa môže citeľne pohnúť len preto, že bol vyrezaný, bez akejkoľvek chyby programu či stroja.'} ]},

  { n: '05', h2: 'Následky pre ďalšie operácie', blocks: [
    {type:'table', head:['Čo nasleduje','Problém z rezania'], rows:[
      ['<b>Zváranie</b>','nitridovaná hrana spôsobí pórovitosť vo zvare — treba ju očistiť alebo rezať iným plynom'],
      ['<b>Lakovanie</b>','okuje treba odstrániť, inak farba odpadne'],
      ['<b>Obrábanie</b>','zakalená hrana <b>ničí nástroj</b> — necháva sa prídavok a frézuje sa za hranicu TOO'],
      ['<b>Únavová pevnosť</b>','kvalita hrany priamo ovplyvňuje životnosť v namáhaných konštrukciách'] ]} ]},

  { n: '06', h2: 'Laser — kilowatty', blocks: [
    {type:'table', head:['Hrúbka','Konštrukčná oceľ (O₂)','Nerez (N₂)','Hliník'], rows:[
      ['<b>10 mm</b>','2–3 kW stačí, 4–6 pohodlne','4–6 kW','~6 kW'],
      ['<b>25 mm</b>','6 kW minimum, 8–12 pre produktivitu','10–15 kW','15 kW a viac'] ]},
    {type:'callout', hd:'Prečo nerez potrebuje dvojnásobok', p:'Pri oceli <b>kyslík vstupuje do reakcie a sám pridáva energiu</b> — lúč len spustí horenie. Pri nereze je dusík inertný, iba vyfukuje taveninu, a všetku energiu musí dodať laser.'},
    {type:'note', html:'Praktický strop: 12 kW zvládne asi 30 mm ocele, 20 kW do 40–50, ale pomaly. Vyššie už nejde o výkon, ale <b>o fyziku</b> — tavenina prestáva stabilne odchádzať zo škáry.'} ]},

  { n: '07', h2: 'Plazma — ampéry', blocks: [
    {type:'table', head:['Prúd','Kvalitný rez v oceli'], rows:[
      ['45 A','do ~12 mm'],
      ['85 A','do ~20 mm'],
      ['<b>130 A</b>','<b>do ~25 mm</b>'],
      ['200 A','do ~32–38 mm'],
      ['260 A','do ~40 mm'],
      ['400 A','do ~50–60 mm'] ]},
    {type:'p', html:'Čiže <b>25 mm je 130–200 A</b> podľa požadovanej rýchlosti, <b>35 mm je 200–260 A</b>.'},
    {type:'callout', hd:'Tri rôzne údaje o hrúbke', p:'<b>Kvalitný rez</b> — dobrá hrana pri pracovnej rýchlosti. <b>Maximálny prepich</b> — je <b>vždy menší než maximálny rez</b>: systém, ktorý reže 40 mm, nemusí 40 mm prepichnúť a treba začať od okraja plechu. <b>Deliaci rez</b> — materiál sa oddelí, hrana je zlá, je to pre šrot a demontáž. Plieta sa to neustále.'} ]},

  { n: '08', h2: 'Ako materiál mení čísla', blocks: [
    {type:'grid', cells:[
      {kv:'Plazma', h3:'Mínus 20–30 %', p:'Nerez a hliník sa režú asi o štvrtinu tenšie tým istým systémom. Stroj s kvalitnými 25 mm v oceli dá v nereze kvalitných ~20.'},
      {kv:'Laser', h3:'Až dvojnásobok', p:'Rozdiel je väčší — kvôli inertnému plynu, ktorý k energii lúča nič nepridáva.'},
      {kv:'Spoločné pravidlo', h3:'Oceľ je najlepší prípad', p:'Konštrukčná oceľ je pre obe technológie najpohodlnejší materiál. Všetko ostatné je horšie.'} ]} ]},

  { n: '09', h2: 'Vyšší výkon nie je vždy lepší', blocks: [
    {type:'p', html:'Pri tenkom plechu dá prebytok energie <b>širšiu škáru, väčšiu tepelne ovplyvnenú oblasť a silnejšiu deformáciu</b>. Preto výkonné systémy na tenkom materiáli pracujú v zníženom režime: plazma prepne na nižší prúd <b>s inou sadou spotrebného materiálu</b>, laser zníži výkon a zvýši rýchlosť.'},
    {type:'note', html:'Odtiaľ aj pravidlo: spotrebný materiál sa vyberá <b>na konkrétny prúd</b>. Dýza pre 200 A pri režime 45 A dá zlú hranu, hoci formálne je všetko v poriadku.'} ]},

  { n: '10', h2: 'Keď je na vine materiál, nie stroj', blocks: [
    {type:'p', html:'Časť sťažností na kvalitu rezu vôbec nie je o nastavení:'},
    {type:'ul', items:[
      '<b>okuje z valcovania</b> na povrchu plechu',
      '<b>hrdza alebo vlhkosť</b> — kazia najmä prepich',
      '<b>iná akosť</b> — zákazník hovorí „oceľ“ a je to legovaný materiál',
      '<b>iná šarža</b> toho istého materiálu sa správa inak',
      '<b>plech nie je rovný</b> — riadenie výšky nestíha'] },
    {type:'callout', hd:'Otázka, ktorú treba položiť skoro', p:'„Je to na tom istom materiáli ako včera?“ Jedna odpoveď odfiltruje celú triedu príčin ešte pred tým, než sa niekam pripojíš.'} ]}
  ]
};

/* ============================== ENGLISH ============================== */
MAT.en = {
  eyebrow: 'Material behaviour · choosing power',
  h1: 'Materials and power',
  lede: 'How much energy you need is decided by the material, not by thickness alone. Three of its properties explain nearly everything — why stainless cannot be oxy-fuel cut, why aluminium swallows power, and why carbon steel cracks at the edge.',
  sections: [

  { n: '01', h2: 'Three properties everything follows from', blocks: [
    {type:'grid', cells:[
      {kv:'Melting point', h3:'How much energy to put in', p:'The most obvious of the three, though not the most important.'},
      {kv:'Thermal conductivity', h3:'How fast heat escapes', p:'Copper and aluminium conduct so well that the energy spreads through the sheet instead of cutting. Stainless is the opposite — heat concentrates, so it <b>distorts more than you would expect</b>.'},
      {kv:'Oxide behaviour', h3:'Melts below or above the metal', p:'This is what decides whether oxy-fuel is possible at all. Iron oxide melts below iron — it flows and blows out. Chromium and aluminium oxides are refractory and form a crust.'} ]} ]},

  { n: '02', h2: 'Material by material', blocks: [
    {type:'table', head:['Material','Behaviour under thermal cutting'], rows:[
      ['<b>Mild steel</b><br/>S235, S355','The easiest for every technology. Iron oxide melts below iron, so even oxy-fuel works. The edge hardens slightly, and oxygen cutting leaves scale.'],
      ['<b>High-carbon steel</b><br/>above ~0.3 % C','Rapid cooling produces <b>martensite</b> — the edge hardens and can crack. Needs preheat and slow cooling.'],
      ['<b>Stainless steel</b>','Impossible with oxy-fuel. Plasma with nitrogen or H35; oxygen would ruin the corrosion resistance. Low conductivity means heavy distortion. Air plasma <b>nitrides the edge</b>, and the HAZ can be depleted of chromium.'],
      ['<b>Aluminium</b>','Al₂O₃ melts at ~2050 °C against 660 °C for the metal itself. Enormous conductivity, so energy escapes. Thin sheet distorts badly and dross sticks.'],
      ['<b>Copper, brass</b>','The highest conductivity plus reflectivity. A CO₂ laser barely touches them, fibre manages. The sensible answer is <b>waterjet</b>.'],
      ['<b>Titanium</b>','It burns beautifully in oxygen, but the reaction is uncontrollable. Plasma with inert gases. The HAZ absorbs oxygen and nitrogen and becomes brittle — in aerospace that layer is machined away.'],
      ['<b>Galvanised steel</b>','Zinc vaporises — <b>toxic fumes</b> and a poorer edge. Extraction is mandatory.'] ]},
    {type:'callout', hd:'A note on the word "oxygen"', p:'<b>Oxy-fuel cutting</b> is a technology in which the metal burns in oxygen; stainless is <b>never</b> cut that way. <b>Oxygen in plasma</b> is simply one of the gases, and there the arc does the cutting, not chemistry. Plasma cuts stainless with any gas — the gas decides how usable the edge is. In short: <b>chemistry is fussy about material, melting is not</b>.'} ]},

  { n: '03', h2: 'What happens to the metal at the edge', blocks: [
    {type:'p', html:'The <b>heat-affected zone</b> is metal that did not melt but changed structure. Invisible to the eye, and the consequences are real:'},
    {type:'ul', items:[
      '<b>hardening</b> in carbon steels — and a risk of cracking',
      '<b>grain growth</b> — toughness drops',
      '<b>nitriding</b> of the edge under air plasma',
      '<b>scale</b> from oxygen cutting',
      '<b>sensitisation</b> of stainless — chromium carbide precipitation, so corrosion resistance falls near the cut'] },
    {type:'note', html:'With waterjet there is <b>no heat-affected zone at all</b> — which is exactly why it is chosen when the metal structure matters.'} ]},

  { n: '04', h2: 'Distortion', blocks: [
    {type:'p', html:'Heat went in unevenly and came out unevenly, internal stresses appeared, and the sheet moved. Worst on <b>thin sheet</b> and on <b>long narrow parts</b>.'},
    {type:'callout', hd:'The case that surprises customers', p:'Rolled plate carries <b>its own residual stresses</b>. Cutting it releases them — so a part can move noticeably simply because it was cut out, with nothing wrong in the program or the machine.'} ]},

  { n: '05', h2: 'Consequences for what comes next', blocks: [
    {type:'table', head:['What follows','The problem cutting caused'], rows:[
      ['<b>Welding</b>','a nitrided edge causes porosity in the weld — grind it or cut with a different gas'],
      ['<b>Painting</b>','scale has to come off or the paint will flake'],
      ['<b>Machining</b>','a hardened edge <b>destroys tooling</b> — leave stock and machine past the HAZ'],
      ['<b>Fatigue strength</b>','edge quality directly affects service life in loaded structures'] ]} ]},

  { n: '06', h2: 'Laser — kilowatts', blocks: [
    {type:'table', head:['Thickness','Mild steel (O₂)','Stainless (N₂)','Aluminium'], rows:[
      ['<b>10 mm</b>','2–3 kW is enough, 4–6 comfortable','4–6 kW','~6 kW'],
      ['<b>25 mm</b>','6 kW minimum, 8–12 for production','10–15 kW','15 kW and above'] ]},
    {type:'callout', hd:'Why stainless needs roughly double', p:'On mild steel, <b>oxygen enters the reaction and adds energy itself</b> — the beam only starts the burning. On stainless, nitrogen is inert and merely ejects the melt, so the laser has to supply all of the energy.'},
    {type:'note', html:'The practical ceiling: 12 kW handles around 30 mm of steel, 20 kW reaches 40–50 but slowly. Above that the limit is <b>no longer power but physics</b> — the melt stops leaving the kerf reliably.'} ]},

  { n: '07', h2: 'Plasma — amperes', blocks: [
    {type:'table', head:['Current','Quality cut in steel'], rows:[
      ['45 A','up to ~12 mm'],
      ['85 A','up to ~20 mm'],
      ['<b>130 A</b>','<b>up to ~25 mm</b>'],
      ['200 A','up to ~32–38 mm'],
      ['260 A','up to ~40 mm'],
      ['400 A','up to ~50–60 mm'] ]},
    {type:'p', html:'So <b>25 mm is 130–200 A</b> depending on the speed you want, and <b>35 mm is 200–260 A</b>.'},
    {type:'callout', hd:'Three different thickness figures', p:'<b>Quality cut</b> — a good edge at working speed. <b>Maximum pierce</b> — always <b>lower than the maximum cut</b>: a system that cuts 40 mm may not pierce 40 mm, and you have to start from the plate edge. <b>Severance cut</b> — the material separates but the edge is poor; that is for scrapping and demolition. These three get confused constantly.'} ]},

  { n: '08', h2: 'How material changes the numbers', blocks: [
    {type:'grid', cells:[
      {kv:'Plasma', h3:'Minus 20–30 %', p:'Stainless and aluminium cut about a quarter thinner on the same system. A machine rated for a quality 25 mm in steel will give a quality ~20 mm in stainless.'},
      {kv:'Laser', h3:'Up to double', p:'The gap is wider — because of the inert gas, which adds nothing to the beam’s energy.'},
      {kv:'The common rule', h3:'Mild steel is the best case', p:'Mild steel is the most forgiving material for both technologies. Everything else is harder.'} ]} ]},

  { n: '09', h2: 'More power is not always better', blocks: [
    {type:'p', html:'On thin sheet, excess energy produces <b>a wider kerf, a larger heat-affected zone and more distortion</b>. So powerful systems run thin material in a reduced mode: plasma switches to a lower current <b>with a different consumable set</b>, and the laser drops power and raises speed.'},
    {type:'note', html:'Hence the rule: consumables are chosen <b>for a specific current</b>. A 200 A nozzle used at 45 A gives a poor edge even though nothing is formally faulty.'} ]},

  { n: '10', h2: 'When the material is at fault, not the machine', blocks: [
    {type:'p', html:'A share of cut-quality complaints are not about settings at all:'},
    {type:'ul', items:[
      '<b>mill scale</b> on the surface of the plate',
      '<b>rust or moisture</b> — these ruin piercing in particular',
      '<b>the wrong grade</b> — the customer says "steel" and it turns out to be alloyed',
      '<b>a different batch</b> of the same material behaves differently',
      '<b>the plate is not flat</b> — height control cannot keep up'] },
    {type:'callout', hd:'A question worth asking early', p:'"Is this on the same material as yesterday?" One answer rules out a whole class of causes before you connect to anything.'} ]}
  ]
};
