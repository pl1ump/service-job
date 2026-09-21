/* G-code section: what it is, where it came from, how a program is built,
   the command reference and the ordering rules. Three languages.           */

var GCODE = {};

/* ============================ УКРАЇНСЬКА ============================ */
GCODE.uk = {
  eyebrow: 'Мова верстата · від перфострічки до CAM',
  h1: 'G-код',
  lede: 'Список команд, які кажуть машині, куди рухатись, як швидко і що при цьому вмикати. Не мова програмування — там немає ні циклів, ні логіки. Радше партитура для верстата: рядок за рядком, куди їхати далі.',
  sections: [

  { n: '01', h2: 'Звідки він узявся', blocks: [
    {type:'p', html:'Кінець 1940-х, США. Задача була дуже конкретна — <b>лопаті гелікоптерних гвинтів</b>: складні криві поверхні, які людина на звичайному верстаті точно не зробить. Джон Парсонс запропонував рахувати координати точок уздовж кривої й подавати їх машині числами. ВПС дали гроші, MIT побудував перший верстат з числовим керуванням — початок 1950-х.'},
    {type:'callout', hd:'Чому код виглядає саме так', p:'Програму подавали на <b>перфострічці</b> — паперовій стрічці з дірочками. Вона була повільна й дорога, тому економили кожен символ. Звідси не «рухайся по прямій у точку», а просто <b>G01</b>. Мова лаконічна тому, що народилася на папері з дірочками — і такою лишилась досі, хоч перфострічок немає вже півстоліття.'},
    {type:'p', html:'Пізніше це стандартизували як <b>ISO 6983</b> (у Німеччині DIN 66025). А коли замість жорсткої логіки поставили комп’ютер, числове керування стало комп’ютерним — <b>CNC</b>.'},
    {type:'note', html:'Деталь, яку варто пам’ятати: першим замовником усієї технології була авіація. Сьогодні нею роблять турбінні лопатки — коло замкнулось.'} ]},

  { n: '02', h2: 'Ланцюжок сьогодні', blocks: [
    {type:'p', html:'Найважливіше: <b>G-код ніхто не пише руками.</b> Його генерують, а людина працює на рівень вище.'},
    {type:'code', text:'CAD   →   CAM   →   ПОСТПРОЦЕСОР   →   G-КОД   →   ВЕРСТАТ\nформа   стратегія      переклад        команди      метал'},
    {type:'grid', cells:[
      {kv:'CAD', h3:'Що робимо', p:'Тривимірна модель деталі. Геометрія, і більше нічого.'},
      {kv:'CAM', h3:'Як робимо', p:'Інструмент, порядок обробки, траєкторії, глибина за прохід, швидкості. <b>Тут живе справжня інженерна робота.</b>'},
      {kv:'Постпроцесор', h3:'Переклад під машину', p:'CAM видає універсальну траєкторію, кожен верстат розуміє свій діалект. Тому одна модель на двох машинах дає <b>різний код</b>.'},
      {kv:'Симуляція', h3:'Перевірка до металу', p:'Зіткнення інструмента з затискачем коштує дорожче, ніж година перевірки.'} ]} ]},

  { n: '03', h2: 'Структура програми', blocks: [
    {type:'p', html:'Скелет однаковий скрізь: <b>шапка</b> один раз, <b>тіло</b> на кожен елемент, <b>кінцівка</b> один раз.'},
    {type:'code', text:'<i>— ШАПКА: привести машину у відомий стан</i>\nG21   <i>міліметри</i>\nG90   <i>абсолютні координати</i>\nG40   <i>компенсацію вимкнути</i>\nG17   <i>площина XY</i>\nG0 Z50 <i>безпечна висота</i>'},
    {type:'p', html:'Сенс шапки — <b>не покладатися на те, що лишилось від попередньої програми</b>. Кожен рядок скидає одну групу в відомий стан.'},
    {type:'code', text:'<i>— ТІЛО: повторюється на кожен елемент</i>\nG0 X60 Y60      <i>у точку пробивання</i>\nG0 Z4           <i>висота пробивання</i>\nM07             <i>пальник увімкнути</i>\nG4 P0.5         <i>затримка на пробивання</i>\nG1 Z2 F600      <i>на висоту різання</i>\nG1 X60 Y40 F2000 <i>врізання на контур</i>\nG3 X60 Y40 I0 J20 <i>сам контур</i>\nM08             <i>пальник вимкнути</i>\nG0 Z50          <i>відвід</i>'},
    {type:'code', text:'<i>— КІНЦІВКА: один раз</i>\nM08     <i>страховка — пальник вимкнений</i>\nG0 Z50  <i>підняти</i>\nG40     <i>не лишити компенсацію наступній програмі</i>\nG0 X0 Y0 <i>паркування</i>\nM30     <i>кінець програми</i>'},
    {type:'callout', hd:'Діагностичне застосування', p:'Коли клієнт скаржиться, шукаєш, <b>на якому з кроків тіла ламається</b>. Погана кромка на початку різу — крок врізання. Не пробиває наскрізь — затримка <b>G4</b>. Гине сопло — висота пробивання.'} ]},

  { n: '04', h2: 'Довідник команд', blocks: [
    {type:'p', html:'Літера — це <b>категорія</b>, число — <b>який саме пункт з довідника</b>. <code>G2</code> не «більше» за <code>G1</code>, це просто інший пункт меню.'},
    {type:'table', head:['Код','Рух','Ріже?'], rows:[
      ['G0','по прямій, максимально швидко','ні — позиціонування'],
      ['G1','по прямій, зі швидкістю F','<b>так</b>'],
      ['G2','по дузі <b>за</b> годинниковою','<b>так</b>'],
      ['G3','по дузі <b>проти</b> годинникової','<b>так</b>'] ]},
    {type:'p', html:'Ці чотири — <b>одна група</b>. Усередині групи одночасно активний лише один код, новий скасовує попередній. Подивись на номери — сусідні числа майже завжди одна родина:'},
    {type:'table', head:['Група','Коди','Що обирає'], rows:[
      ['Тип руху','G0 G1 G2 G3','як рухатись'],
      ['Площина','G17 G18 G19','XY / XZ / YZ'],
      ['Одиниці','G20 G21','дюйми / міліметри'],
      ['Компенсація','G40 G41 G42','вимк / ліворуч / праворуч'],
      ['Координати','G90 G91','абсолютні / відносні'] ]},
    {type:'table', head:['Літера','Що задає'], rows:[
      ['X Y Z','координати точки'],
      ['I J','зміщення від старту до центра дуги'],
      ['F','швидкість подачі, мм/хв'],
      ['P','параметр; у G4 — час затримки'],
      ['N','номер рядка (необов’язково)'] ]},
    {type:'table', head:['Код','Функція'], rows:[
      ['G4 P','затримка в секундах'],
      ['M07 / M08','пальник увімк / вимк <i>(конвенція машинозалежна)</i>'],
      ['M30','кінець програми'] ]},
    {type:'callout', hd:'Важливо', p:'<b>G-коди руху універсальні</b> на всіх машинах світу. <b>M-коди в кожного виробника свої</b> — тому програму з чужої машини не можна просто скопіювати.'} ]},

  { n: '05', h2: 'Модальність — джерело прихованих помилок', blocks: [
    {type:'p', html:'Більшість команд <b>модальні</b>: діють, доки їх не змінять. <code>F2000</code> задали один раз — і воно тримається на всіх наступних рухах. Так само <code>G90</code>, <code>G21</code> із шапки діють до кінця програми.'},
    {type:'callout', hd:'Класична пастка', p:'Хтось поставив <code>F800</code> для товстого місця, а далі забув повернути — і <b>вся решта програми ріжеться на цій швидкості</b>. У коді це виглядає невинно, бо рядка <code>F800</code> більше ніде не видно.'},
    {type:'p', html:'Те саме з компенсацією: якщо десь стоїть <code>G41</code>, а <code>G40</code> забули — вона <b>лишається активною й для наступної програми</b>. Саме тому в шапці пишуть G40, G90, G21: це не перестраховка, а скидання всіх груп.'} ]},

  { n: '06', h2: 'Правила порядку', blocks: [
    {type:'table', head:['Правило','Чому'], rows:[
      ['Внутрішні контури перед зовнішнім','після відрізання зовнішнього деталь провалюється — усі наступні отвори в смітті'],
      ['Пробивання завжди у відході','пробивання лишає кратер; на готовій кромці це брак'],
      ['Компенсація вмикається на врізанні','увімкнена на контурі дає сходинку посеред різу'],
      ['Мінімум пробивань','пробивання зношує витратники сильніше за метри різу'],
      ['Перемички для дрібних деталей','інакше провалюються в стіл або перекидаються під голову'],
      ['Порядок розводить тепло','сусідні деталі поспіль перегрівають лист (не стосується води)'] ]},
    {type:'note', html:'Помилку в порядку видно <b>читанням, без запуску машини</b>: рахуєш блоки M07 — стільки в програмі пробивань — і дивишся, чи зовнішній контур останній.'} ]},

  { n: '07', h2: 'Симптом → де шукати в програмі', blocks: [
    {type:'table', head:['Скарга','Причина в програмі'], rows:[
      ['Деталі стабільно менші або більші','ширина різу в CAM'],
      ['Зіпсована кромка на початку різу','пробивання на контурі, немає врізання'],
      ['Отвори зміщені відносно контуру','зовнішній контур відрізаний раніше за внутрішні'],
      ['Сходинка посеред контуру','компенсація ввімкнена не на врізанні'],
      ['Не пробиває наскрізь','затримка G4 замала для товщини'],
      ['Скіс не з того боку','неправильний напрямок обходу контуру'],
      ['Лист повело','порядок різання не розводить тепло'] ]} ]}
  ]
};

/* ============================= SLOVENČINA ============================= */
GCODE.sk = {
  eyebrow: 'Jazyk stroja · od dierovacej pásky po CAM',
  h1: 'G-kód',
  lede: 'Zoznam príkazov, ktoré strojú hovoria, kam sa má pohnúť, ako rýchlo a čo pritom zapnúť. Nie je to programovací jazyk — nie sú tam cykly ani logika. Skôr partitúra pre stroj: riadok po riadku, kam ísť ďalej.',
  sections: [

  { n: '01', h2: 'Odkiaľ sa vzal', blocks: [
    {type:'p', html:'Koniec 40. rokov, USA. Úloha bola veľmi konkrétna — <b>listy vrtuľníkových rotorov</b>: zložité zakrivené plochy, ktoré človek na bežnom stroji presne neurobí. John Parsons navrhol vypočítať súradnice bodov pozdĺž krivky a podávať ich stroju ako čísla. Letectvo to zaplatilo, MIT postavil prvý číslicovo riadený stroj — začiatok 50. rokov.'},
    {type:'callout', hd:'Prečo kód vyzerá takto', p:'Program sa podával na <b>dierovacej páske</b> — papierovej páske s dierkami. Bola pomalá a drahá, takže sa šetril každý znak. Odtiaľ nie „pohybuj sa po priamke do bodu“, ale jednoducho <b>G01</b>. Jazyk je úsporný preto, že sa narodil na papieri s dierkami — a taký zostal dodnes, hoci dierovacie pásky zmizli pred polstoročím.'},
    {type:'p', html:'Neskôr to štandardizovali ako <b>ISO 6983</b> (v Nemecku DIN 66025). A keď pevnú logiku nahradil počítač, číslicové riadenie sa stalo počítačovým — <b>CNC</b>.'},
    {type:'note', html:'Detail, ktorý stojí za zapamätanie: prvým zákazníkom celej technológie bolo letectvo. Dnes sa ňou vyrábajú turbínové lopatky — kruh sa uzavrel.'} ]},

  { n: '02', h2: 'Reťazec dnes', blocks: [
    {type:'p', html:'To najdôležitejšie: <b>G-kód dnes nikto nepíše ručne.</b> Generuje sa a človek pracuje o úroveň vyššie.'},
    {type:'code', text:'CAD   →   CAM   →   POSTPROCESOR   →   G-KÓD   →   STROJ\ntvar    stratégia     preklad        príkazy      kov'},
    {type:'grid', cells:[
      {kv:'CAD', h3:'Čo robíme', p:'Trojrozmerný model dielca. Geometria a nič viac.'},
      {kv:'CAM', h3:'Ako to robíme', p:'Nástroj, poradie operácií, dráhy, hĺbka na prejazd, rýchlosti. <b>Tu je skutočná inžinierska práca.</b>'},
      {kv:'Postprocesor', h3:'Preklad pre stroj', p:'CAM vydá univerzálnu dráhu, každý stroj rozumie svojmu dialektu. Preto ten istý model dá na dvoch strojoch <b>iný kód</b>.'},
      {kv:'Simulácia', h3:'Kontrola pred kovom', p:'Kolízia nástroja s upínkou stojí viac než hodina kontroly.'} ]} ]},

  { n: '03', h2: 'Štruktúra programu', blocks: [
    {type:'p', html:'Kostra je všade rovnaká: <b>hlavička</b> raz, <b>telo</b> na každý prvok, <b>záver</b> raz.'},
    {type:'code', text:'<i>— HLAVIČKA: uviesť stroj do známeho stavu</i>\nG21   <i>milimetre</i>\nG90   <i>absolútne súradnice</i>\nG40   <i>korekciu vypnúť</i>\nG17   <i>rovina XY</i>\nG0 Z50 <i>bezpečná výška</i>'},
    {type:'p', html:'Zmysel hlavičky je <b>nespoliehať sa na to, čo zostalo po predchádzajúcom programe</b>. Každý riadok vynuluje jednu skupinu.'},
    {type:'code', text:'<i>— TELO: opakuje sa na každý prvok</i>\nG0 X60 Y60      <i>do bodu prepichu</i>\nG0 Z4           <i>výška prepichu</i>\nM07             <i>horák zapnúť</i>\nG4 P0.5         <i>prestoj na prepich</i>\nG1 Z2 F600      <i>na reznú výšku</i>\nG1 X60 Y40 F2000 <i>nábeh na kontúru</i>\nG3 X60 Y40 I0 J20 <i>samotná kontúra</i>\nM08             <i>horák vypnúť</i>\nG0 Z50          <i>odchod</i>'},
    {type:'code', text:'<i>— ZÁVER: raz</i>\nM08     <i>poistka — horák vypnutý</i>\nG0 Z50  <i>zdvihnúť</i>\nG40     <i>nenechať korekciu ďalšiemu programu</i>\nG0 X0 Y0 <i>parkovanie</i>\nM30     <i>koniec programu</i>'},
    {type:'callout', hd:'Využitie pri diagnostike', p:'Keď sa zákazník sťažuje, hľadáš, <b>na ktorom kroku tela to zlyháva</b>. Zlá hrana na začiatku rezu — nábeh. Neprepichne naskrz — prestoj <b>G4</b>. Hynú dýzy — výška prepichu.'} ]},

  { n: '04', h2: 'Príručka príkazov', blocks: [
    {type:'p', html:'Písmeno je <b>kategória</b>, číslo je <b>ktorá položka z príručky</b>. <code>G2</code> nie je „viac“ ako <code>G1</code>, je to iná položka menu.'},
    {type:'table', head:['Kód','Pohyb','Reže?'], rows:[
      ['G0','po priamke, maximálne rýchlo','nie — polohovanie'],
      ['G1','po priamke, rýchlosťou F','<b>áno</b>'],
      ['G2','po oblúku <b>v smere</b> hodinových ručičiek','<b>áno</b>'],
      ['G3','po oblúku <b>proti</b> smeru hodinových ručičiek','<b>áno</b>'] ]},
    {type:'p', html:'Tieto štyri tvoria <b>jednu skupinu</b>. V skupine je naraz aktívny len jeden kód, nový ruší predchádzajúci. Susedné čísla sú takmer vždy jedna rodina:'},
    {type:'table', head:['Skupina','Kódy','Čo volí'], rows:[
      ['Typ pohybu','G0 G1 G2 G3','ako sa pohybovať'],
      ['Rovina','G17 G18 G19','XY / XZ / YZ'],
      ['Jednotky','G20 G21','palce / milimetre'],
      ['Korekcia','G40 G41 G42','vyp / vľavo / vpravo'],
      ['Súradnice','G90 G91','absolútne / relatívne'] ]},
    {type:'table', head:['Písmeno','Čo zadáva'], rows:[
      ['X Y Z','súradnice bodu'],
      ['I J','posun zo štartu do stredu oblúka'],
      ['F','posuv, mm/min'],
      ['P','parameter; pri G4 čas prestoja'],
      ['N','číslo riadku (nepovinné)'] ]},
    {type:'table', head:['Kód','Funkcia'], rows:[
      ['G4 P','prestoj v sekundách'],
      ['M07 / M08','horák zap / vyp <i>(konvencia závisí od stroja)</i>'],
      ['M30','koniec programu'] ]},
    {type:'callout', hd:'Dôležité', p:'<b>G-kódy pohybu sú univerzálne</b> na celom svete. <b>M-kódy má každý výrobca vlastné</b> — preto sa program z cudzieho stroja nedá len tak skopírovať.'} ]},

  { n: '05', h2: 'Modálnosť — zdroj skrytých chýb', blocks: [
    {type:'p', html:'Väčšina príkazov je <b>modálnych</b>: platia, kým sa nezmenia. <code>F2000</code> sa zadá raz a drží sa na všetkých ďalších pohyboch. Rovnako <code>G90</code> a <code>G21</code> z hlavičky platia do konca programu.'},
    {type:'callout', hd:'Klasická nástraha', p:'Niekto dal <code>F800</code> pre hrubšie miesto a potom to zabudol vrátiť — a <b>celý zvyšok programu sa reže touto rýchlosťou</b>. V kóde to vyzerá nevinne, lebo riadok <code>F800</code> už nikde nevidno.'},
    {type:'p', html:'To isté s korekciou: ak niekde stojí <code>G41</code> a <code>G40</code> sa zabudlo — <b>zostane aktívna aj pre ďalší program</b>. Práve preto sa do hlavičky píše G40, G90, G21: nie je to opatrnosť navyše, ale vynulovanie všetkých skupín.'} ]},

  { n: '06', h2: 'Pravidlá poradia', blocks: [
    {type:'table', head:['Pravidlo','Prečo'], rows:[
      ['Vnútorné kontúry pred vonkajšou','po odrezaní vonkajšej dielec prepadne — všetky ďalšie otvory idú do šrotu'],
      ['Prepich vždy v odpade','prepich nechá kráter; na hotovej hrane je to nepodarok'],
      ['Korekcia sa zapína na nábehu','zapnutá na kontúre urobí schod uprostred rezu'],
      ['Čo najmenej prepichov','prepich opotrebuje spotrebný materiál viac než metre rezu'],
      ['Mostíky pri drobných dielcoch','inak prepadnú do stola alebo sa preklopia pod hlavu'],
      ['Poradie rozvádza teplo','susedné dielce za sebou prehrejú plech (netýka sa vody)'] ]},
    {type:'note', html:'Chybu v poradí vidno <b>čítaním, bez spustenia stroja</b>: spočítaš bloky M07 — toľko je v programe prepichov — a pozrieš, či je vonkajšia kontúra posledná.'} ]},

  { n: '07', h2: 'Príznak → kde hľadať v programe', blocks: [
    {type:'table', head:['Sťažnosť','Príčina v programe'], rows:[
      ['Dielce sú trvalo menšie alebo väčšie','šírka rezu v CAM'],
      ['Pokazená hrana na začiatku rezu','prepich na kontúre, chýba nábeh'],
      ['Otvory posunuté voči kontúre','vonkajšia kontúra odrezaná pred vnútornými'],
      ['Schod uprostred kontúry','korekcia zapnutá inde než na nábehu'],
      ['Neprepichne naskrz','prestoj G4 je krátky na danú hrúbku'],
      ['Úkos na nesprávnej strane','nesprávny smer obchádzania kontúry'],
      ['Plech sa zdeformoval','poradie rezania nerozvádza teplo'] ]} ]}
  ]
};

/* ============================== ENGLISH ============================== */
GCODE.en = {
  eyebrow: 'The machine’s language · from punched tape to CAM',
  h1: 'G-code',
  lede: 'A list of commands telling a machine where to move, how fast, and what to switch on while doing it. Not a programming language — there are no loops and no logic. Closer to a score for the machine: line by line, where to go next.',
  sections: [

  { n: '01', h2: 'Where it came from', blocks: [
    {type:'p', html:'The late 1940s, in the United States. The problem was very specific — <b>helicopter rotor blades</b>: complex curved surfaces a person cannot cut accurately by hand. John Parsons proposed calculating the coordinates of points along the curve and feeding them to the machine as numbers. The Air Force funded it, MIT built the first numerically controlled machine, and that was the early fifties.'},
    {type:'callout', hd:'Why the code looks like this', p:'The program was fed in on <b>punched tape</b> — paper tape with holes in it. Tape was slow and expensive, so every character counted. Hence not "move in a straight line to this point", but simply <b>G01</b>. The language is terse because it was born on paper tape — and it has stayed that way, though punched tape disappeared half a century ago.'},
    {type:'p', html:'It was later standardised as <b>ISO 6983</b> (DIN 66025 in Germany). And once a computer replaced the hard-wired logic, numerical control became <b>computer</b> numerical control — CNC.'},
    {type:'note', html:'A detail worth remembering: the first customer for the whole technology was aviation. Today it makes turbine blades — the circle closed.'} ]},

  { n: '02', h2: 'The chain today', blocks: [
    {type:'p', html:'The important part: <b>nobody writes G-code by hand.</b> It is generated, and the human works one level above it.'},
    {type:'code', text:'CAD   →   CAM   →   POST-PROCESSOR   →   G-CODE   →   MACHINE\nshape    strategy      translation      commands      metal'},
    {type:'grid', cells:[
      {kv:'CAD', h3:'What we are making', p:'The 3D model of the part. Geometry, nothing else.'},
      {kv:'CAM', h3:'How we make it', p:'Tool, order of operations, toolpaths, depth per pass, speeds. <b>This is where the real engineering lives.</b>'},
      {kv:'Post-processor', h3:'Translation for the machine', p:'CAM produces a generic toolpath; every machine speaks its own dialect. That is why the same model yields <b>different code</b> on two machines.'},
      {kv:'Simulation', h3:'Checking before metal', p:'A collision between tool and clamp costs far more than an hour of checking.'} ]} ]},

  { n: '03', h2: 'Program structure', blocks: [
    {type:'p', html:'The skeleton is the same everywhere: <b>header</b> once, <b>body</b> per feature, <b>footer</b> once.'},
    {type:'code', text:'<i>— HEADER: put the machine into a known state</i>\nG21   <i>millimetres</i>\nG90   <i>absolute coordinates</i>\nG40   <i>compensation off</i>\nG17   <i>XY plane</i>\nG0 Z50 <i>safe height</i>'},
    {type:'p', html:'The point of the header is <b>not to rely on whatever the previous program left behind</b>. Each line resets one group to a known state.'},
    {type:'code', text:'<i>— BODY: repeated for every feature</i>\nG0 X60 Y60      <i>to the pierce point</i>\nG0 Z4           <i>pierce height</i>\nM07             <i>torch on</i>\nG4 P0.5         <i>pierce delay</i>\nG1 Z2 F600      <i>down to cut height</i>\nG1 X60 Y40 F2000 <i>lead-in onto the contour</i>\nG3 X60 Y40 I0 J20 <i>the contour itself</i>\nM08             <i>torch off</i>\nG0 Z50          <i>retract</i>'},
    {type:'code', text:'<i>— FOOTER: once</i>\nM08     <i>safety — torch off</i>\nG0 Z50  <i>lift</i>\nG40     <i>do not leave compensation for the next program</i>\nG0 X0 Y0 <i>park</i>\nM30     <i>end of program</i>'},
    {type:'callout', hd:'Using this to diagnose', p:'When a customer complains, you look for <b>which step of the body is failing</b>. A spoiled edge at the start of the cut — the lead-in. Not piercing through — the <b>G4</b> delay. Nozzles dying — the pierce height.'} ]},

  { n: '04', h2: 'Command reference', blocks: [
    {type:'p', html:'The letter is the <b>category</b>; the number says <b>which entry from the catalogue</b>. <code>G2</code> is not "more" than <code>G1</code> — it is a different menu item.'},
    {type:'table', head:['Code','Movement','Cutting?'], rows:[
      ['G0','straight line, as fast as possible','no — positioning'],
      ['G1','straight line at feed rate F','<b>yes</b>'],
      ['G2','arc, <b>clockwise</b>','<b>yes</b>'],
      ['G3','arc, <b>counter-clockwise</b>','<b>yes</b>'] ]},
    {type:'p', html:'These four form <b>one group</b>. Only one code in a group is active at a time; a new one cancels the previous. Adjacent numbers are almost always one family:'},
    {type:'table', head:['Group','Codes','What it selects'], rows:[
      ['Motion type','G0 G1 G2 G3','how to move'],
      ['Plane','G17 G18 G19','XY / XZ / YZ'],
      ['Units','G20 G21','inches / millimetres'],
      ['Compensation','G40 G41 G42','off / left / right'],
      ['Coordinates','G90 G91','absolute / relative'] ]},
    {type:'table', head:['Letter','What it sets'], rows:[
      ['X Y Z','coordinates of a point'],
      ['I J','offset from arc start to arc centre'],
      ['F','feed rate, mm/min'],
      ['P','a parameter; with G4, the dwell time'],
      ['N','line number (optional)'] ]},
    {type:'table', head:['Code','Function'], rows:[
      ['G4 P','dwell, in seconds'],
      ['M07 / M08','torch on / off <i>(convention is machine-specific)</i>'],
      ['M30','end of program'] ]},
    {type:'callout', hd:'Important', p:'<b>Motion G-codes are universal</b> across machines worldwide. <b>M-codes are the manufacturer’s own</b> — which is why you cannot simply copy a program from someone else’s machine.'} ]},

  { n: '05', h2: 'Modality — the source of silent errors', blocks: [
    {type:'p', html:'Most commands are <b>modal</b>: they stay in effect until changed. <code>F2000</code> is set once and holds for every subsequent move. The same goes for <code>G90</code> and <code>G21</code> from the header — they apply to the end of the program.'},
    {type:'callout', hd:'The classic trap', p:'Somebody set <code>F800</code> for a thicker section and then forgot to change it back — and <b>the whole rest of the program is cut at that speed</b>. It looks innocent in the code, because the line <code>F800</code> appears nowhere else.'},
    {type:'p', html:'The same applies to compensation: if <code>G41</code> is set somewhere and <code>G40</code> is forgotten, it <b>stays active for the next program too</b>. That is exactly why headers contain G40, G90, G21 — not as excess caution, but to reset every group.'} ]},

  { n: '06', h2: 'Ordering rules', blocks: [
    {type:'table', head:['Rule','Why'], rows:[
      ['Inner contours before the outer one','once the outer contour is cut the part drops — every hole after that is scrap'],
      ['Always pierce in scrap','piercing leaves a crater; on a finished edge that is a reject'],
      ['Compensation switches on during the lead-in','switched on along the contour it leaves a step mid-cut'],
      ['As few pierces as possible','piercing wears consumables harder than metres of cutting'],
      ['Microjoints for small parts','otherwise they drop into the table or tip up under the head'],
      ['Ordering distributes heat','cutting neighbours back to back overheats the plate (not waterjet)'] ]},
    {type:'note', html:'An ordering mistake can be spotted <b>by reading, without running the machine</b>: count the M07 blocks — that is how many pierces the program has — and check that the outer contour comes last.'} ]},

  { n: '07', h2: 'Symptom → where to look in the program', blocks: [
    {type:'table', head:['Complaint','Cause in the program'], rows:[
      ['Parts consistently undersized or oversized','kerf width in CAM'],
      ['Spoiled edge at the start of the cut','pierce placed on the contour, no lead-in'],
      ['Holes offset relative to the contour','outer contour cut before the inner ones'],
      ['Step in the middle of a contour','compensation switched on somewhere other than the lead-in'],
      ['Not piercing through','G4 dwell too short for the thickness'],
      ['Bevel on the wrong side','wrong contour travel direction'],
      ['Plate distorted','cut order does not distribute heat'] ]} ]}
  ]
};
