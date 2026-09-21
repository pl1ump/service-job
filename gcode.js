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

  { n: '04', h2: 'Адреси — з чого складається рядок', blocks: [
    {type:'p', html:'Кожен рядок (блок) — це набір <b>адрес</b>: літера плюс значення. Порядок традиційно такий: номер рядка, підготовча функція, координати, параметри, допоміжна функція.'},
    {type:'code', text:'N10  G01  X60 Y40  F2000  M08\n │    │     │        │      │\n │    │     │        │      └─ допоміжна функція\n │    │     │        └──────── подача\n │    │     └───────────────── координати\n │    └─────────────────────── підготовча функція\n └──────────────────────────── номер рядка'},
    {type:'table', head:['Літера','Що задає'], rows:[
      ['<b>N</b>','номер рядка — необов\u2019язковий, для зручності'],
      ['<b>G</b>','підготовча функція — <b>як</b> рухатись'],
      ['<b>M</b>','допоміжна функція — керування залізом машини'],
      ['<b>X Y Z</b>','координати по лінійних осях'],
      ['<b>A B C</b>','поворотні осі — нахил і обертання голови'],
      ['<b>I J K</b>','зміщення від початку дуги до її центра'],
      ['<b>R</b>','радіус дуги — альтернатива I J'],
      ['<b>F</b>','подача, мм/хв'],
      ['<b>S</b>','оберти шпинделя або струм'],
      ['<b>T</b>','номер інструмента'],
      ['<b>D</b>','номер корекції на радіус'],
      ['<b>H</b>','номер корекції на довжину'],
      ['<b>P</b>','параметр: час затримки або номер підпрограми'],
      ['<b>Q</b>','крок при свердлінні з виведенням'],
      ['<b>L</b>','кількість повторів'] ]} ]},

  { n: '05', h2: 'G-коди', blocks: [
    {type:'p', html:'Літера — <b>категорія</b>, число — <b>який саме пункт з довідника</b>. <code>G2</code> не «більше» за <code>G1</code>, це інший пункт меню.'},
    {type:'table', head:['Код','Що робить','Група'], rows:[
      ['<b>G00</b>','швидкий хід, без різання','рух'],
      ['<b>G01</b>','лінійний рух з подачею','рух'],
      ['<b>G02</b>','дуга за годинниковою','рух'],
      ['<b>G03</b>','дуга проти годинникової','рух'],
      ['<b>G04</b>','затримка, час у P','<i>разова</i>'],
      ['<b>G17 G18 G19</b>','площина XY / XZ / YZ','площина'],
      ['<b>G20 G21</b>','дюйми / міліметри','одиниці'],
      ['<b>G28</b>','повернення в референтну точку','—'],
      ['<b>G40</b>','компенсація вимкнена','компенсація'],
      ['<b>G41</b>','компенсація ліворуч від руху','компенсація'],
      ['<b>G42</b>','компенсація праворуч від руху','компенсація'],
      ['<b>G43 G49</b>','корекція на довжину інструмента увімк / вимк','корекція'],
      ['<b>G53</b>','рух у координатах машини','<i>разова</i>'],
      ['<b>G54…G59</b>','робочі системи координат — <b>де нуль деталі</b>','зміщення'],
      ['<b>G80</b>','скасувати постійний цикл','цикли'],
      ['<b>G81 G83</b>','свердління / свердління з виведенням','цикли'],
      ['<b>G90 G91</b>','абсолютні / відносні координати','координати'],
      ['<b>G92</b>','задати поточну позицію','—'],
      ['<b>G94 G95</b>','подача за хвилину / за оберт','подача'] ]},
    {type:'note', html:'Позначені як <i>разові</i> діють лише в своєму рядку. Решта <b>модальні</b> — тримаються, доки їх не змінять.'} ]},

  { n: '06', h2: 'M-коди — і чому вони не переносяться', blocks: [
    {type:'table', head:['Код','Типове значення'], rows:[
      ['<b>M00</b>','безумовна зупинка програми'],
      ['<b>M01</b>','зупинка за вибором оператора'],
      ['<b>M02</b>','кінець програми'],
      ['<b>M03 M04</b>','шпиндель за / проти годинникової'],
      ['<b>M05</b>','зупинка шпинделя'],
      ['<b>M06</b>','зміна інструмента'],
      ['<b>M07 M08</b>','<b>на фрезерному</b> — подача ЗОР<br/><b>на різальному</b> — часто пальник увімк / вимк'],
      ['<b>M09</b>','вимкнути ЗОР'],
      ['<b>M30</b>','кінець програми з перемотуванням'],
      ['<b>M98 M99</b>','виклик підпрограми / повернення'] ]},
    {type:'callout', hd:'Ось де ховається пастка', p:'Подивись на рядок <b>M07 / M08</b>. На фрезерному верстаті це <b>охолоджувальна рідина</b>, на багатьох різальних — <b>пальник</b>. Одні й ті самі коди, протилежний зміст. Саме тому програму з чужої машини <b>не можна просто скопіювати</b>, і саме тому існує постпроцесор. G-коди руху універсальні, M-коди — ні.'} ]},

  { n: '07', h2: 'Модальність — джерело прихованих помилок', blocks: [
    {type:'p', html:'Більшість команд <b>модальні</b>: діють, доки їх не змінять. <code>F2000</code> задали один раз — і воно тримається на всіх наступних рухах. Так само <code>G90</code>, <code>G21</code> із шапки діють до кінця програми.'},
    {type:'callout', hd:'Класична пастка', p:'Хтось поставив <code>F800</code> для товстого місця, а далі забув повернути — і <b>вся решта програми ріжеться на цій швидкості</b>. У коді це виглядає невинно, бо рядка <code>F800</code> більше ніде не видно.'},
    {type:'p', html:'Те саме з компенсацією: якщо десь стоїть <code>G41</code>, а <code>G40</code> забули — вона <b>лишається активною й для наступної програми</b>. Саме тому в шапці пишуть G40, G90, G21: це не перестраховка, а скидання всіх груп.'} ]},

  { n: '08', h2: 'Правила порядку', blocks: [
    {type:'table', head:['Правило','Чому'], rows:[
      ['Внутрішні контури перед зовнішнім','після відрізання зовнішнього деталь провалюється — усі наступні отвори в смітті'],
      ['Пробивання завжди у відході','пробивання лишає кратер; на готовій кромці це брак'],
      ['Компенсація вмикається на врізанні','увімкнена на контурі дає сходинку посеред різу'],
      ['Мінімум пробивань','пробивання зношує витратники сильніше за метри різу'],
      ['Перемички для дрібних деталей','інакше провалюються в стіл або перекидаються під голову'],
      ['Порядок розводить тепло','сусідні деталі поспіль перегрівають лист (не стосується води)'] ]},
    {type:'note', html:'Помилку в порядку видно <b>читанням, без запуску машини</b>: рахуєш блоки M07 — стільки в програмі пробивань — і дивишся, чи зовнішній контур останній.'} ]},

  { n: '09', h2: 'Симптом → де шукати в програмі', blocks: [
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

  { n: '04', h2: 'Adresy — z čoho sa skladá riadok', blocks: [
    {type:'p', html:'Každý riadok (blok) je súbor <b>adries</b>: písmeno plus hodnota. Poradie býva takéto: číslo riadku, prípravná funkcia, súradnice, parametre, pomocná funkcia.'},
    {type:'code', text:'N10  G01  X60 Y40  F2000  M08\n │    │     │        │      │\n │    │     │        │      └─ pomocná funkcia\n │    │     │        └──────── posuv\n │    │     └───────────────── súradnice\n │    └─────────────────────── prípravná funkcia\n └──────────────────────────── číslo riadku'},
    {type:'table', head:['Písmeno','Čo zadáva'], rows:[
      ['<b>N</b>','číslo riadku — nepovinné, pre prehľadnosť'],
      ['<b>G</b>','prípravná funkcia — <b>ako</b> sa pohybovať'],
      ['<b>M</b>','pomocná funkcia — ovládanie hardvéru stroja'],
      ['<b>X Y Z</b>','súradnice lineárnych osí'],
      ['<b>A B C</b>','rotačné osi — naklonenie a otáčanie hlavy'],
      ['<b>I J K</b>','posun od začiatku oblúka do jeho stredu'],
      ['<b>R</b>','polomer oblúka — alternatíva k I J'],
      ['<b>F</b>','posuv, mm/min'],
      ['<b>S</b>','otáčky vretena alebo prúd'],
      ['<b>T</b>','číslo nástroja'],
      ['<b>D</b>','číslo korekcie na polomer'],
      ['<b>H</b>','číslo korekcie na dĺžku'],
      ['<b>P</b>','parameter: čas prestoja alebo číslo podprogramu'],
      ['<b>Q</b>','krok pri vŕtaní s vyvedením'],
      ['<b>L</b>','počet opakovaní'] ]} ]},

  { n: '05', h2: 'G-kódy', blocks: [
    {type:'p', html:'Písmeno je <b>kategória</b>, číslo hovorí, <b>ktorá položka z príručky</b>. <code>G2</code> nie je „viac“ ako <code>G1</code>, je to iná položka menu.'},
    {type:'table', head:['Kód','Čo robí','Skupina'], rows:[
      ['<b>G00</b>','rýchloposuv, bez rezania','pohyb'],
      ['<b>G01</b>','lineárny pohyb s posuvom','pohyb'],
      ['<b>G02</b>','oblúk v smere hodinových ručičiek','pohyb'],
      ['<b>G03</b>','oblúk proti smeru hodinových ručičiek','pohyb'],
      ['<b>G04</b>','prestoj, čas v P','<i>jednorazový</i>'],
      ['<b>G17 G18 G19</b>','rovina XY / XZ / YZ','rovina'],
      ['<b>G20 G21</b>','palce / milimetre','jednotky'],
      ['<b>G28</b>','návrat do referenčného bodu','—'],
      ['<b>G40</b>','korekcia vypnutá','korekcia'],
      ['<b>G41</b>','korekcia vľavo od pohybu','korekcia'],
      ['<b>G42</b>','korekcia vpravo od pohybu','korekcia'],
      ['<b>G43 G49</b>','korekcia dĺžky nástroja zap / vyp','korekcia'],
      ['<b>G53</b>','pohyb v súradniciach stroja','<i>jednorazový</i>'],
      ['<b>G54…G59</b>','pracovné súradnicové systémy — <b>kde je nula dielca</b>','posunutia'],
      ['<b>G80</b>','zrušiť pevný cyklus','cykly'],
      ['<b>G81 G83</b>','vŕtanie / vŕtanie s vyvedením','cykly'],
      ['<b>G90 G91</b>','absolútne / relatívne súradnice','súradnice'],
      ['<b>G92</b>','nastaviť aktuálnu polohu','—'],
      ['<b>G94 G95</b>','posuv za minútu / za otáčku','posuv'] ]},
    {type:'note', html:'Označené ako <i>jednorazové</i> platia len vo svojom riadku. Ostatné sú <b>modálne</b> — držia sa, kým sa nezmenia.'} ]},

  { n: '06', h2: 'M-kódy — a prečo sa neprenášajú', blocks: [
    {type:'table', head:['Kód','Bežný význam'], rows:[
      ['<b>M00</b>','bezpodmienečné zastavenie programu'],
      ['<b>M01</b>','zastavenie na výber obsluhy'],
      ['<b>M02</b>','koniec programu'],
      ['<b>M03 M04</b>','vreteno v smere / proti smeru hodinových ručičiek'],
      ['<b>M05</b>','zastavenie vretena'],
      ['<b>M06</b>','výmena nástroja'],
      ['<b>M07 M08</b>','<b>na frézke</b> — prívod chladiva<br/><b>na rezacom stroji</b> — často horák zap / vyp'],
      ['<b>M09</b>','vypnúť chladivo'],
      ['<b>M30</b>','koniec programu s previnutím'],
      ['<b>M98 M99</b>','volanie podprogramu / návrat'] ]},
    {type:'callout', hd:'Tu je ukrytá nástraha', p:'Pozri sa na riadok <b>M07 / M08</b>. Na frézke je to <b>chladiaca kvapalina</b>, na mnohých rezacích strojoch <b>horák</b>. Tie isté kódy, opačný význam. Práve preto sa program z cudzieho stroja <b>nedá len tak skopírovať</b> a práve preto existuje postprocesor. G-kódy pohybu sú univerzálne, M-kódy nie.'} ]},

  { n: '07', h2: 'Modálnosť — zdroj skrytých chýb', blocks: [
    {type:'p', html:'Väčšina príkazov je <b>modálnych</b>: platia, kým sa nezmenia. <code>F2000</code> sa zadá raz a drží sa na všetkých ďalších pohyboch. Rovnako <code>G90</code> a <code>G21</code> z hlavičky platia do konca programu.'},
    {type:'callout', hd:'Klasická nástraha', p:'Niekto dal <code>F800</code> pre hrubšie miesto a potom to zabudol vrátiť — a <b>celý zvyšok programu sa reže touto rýchlosťou</b>. V kóde to vyzerá nevinne, lebo riadok <code>F800</code> už nikde nevidno.'},
    {type:'p', html:'To isté s korekciou: ak niekde stojí <code>G41</code> a <code>G40</code> sa zabudlo — <b>zostane aktívna aj pre ďalší program</b>. Práve preto sa do hlavičky píše G40, G90, G21: nie je to opatrnosť navyše, ale vynulovanie všetkých skupín.'} ]},

  { n: '08', h2: 'Pravidlá poradia', blocks: [
    {type:'table', head:['Pravidlo','Prečo'], rows:[
      ['Vnútorné kontúry pred vonkajšou','po odrezaní vonkajšej dielec prepadne — všetky ďalšie otvory idú do šrotu'],
      ['Prepich vždy v odpade','prepich nechá kráter; na hotovej hrane je to nepodarok'],
      ['Korekcia sa zapína na nábehu','zapnutá na kontúre urobí schod uprostred rezu'],
      ['Čo najmenej prepichov','prepich opotrebuje spotrebný materiál viac než metre rezu'],
      ['Mostíky pri drobných dielcoch','inak prepadnú do stola alebo sa preklopia pod hlavu'],
      ['Poradie rozvádza teplo','susedné dielce za sebou prehrejú plech (netýka sa vody)'] ]},
    {type:'note', html:'Chybu v poradí vidno <b>čítaním, bez spustenia stroja</b>: spočítaš bloky M07 — toľko je v programe prepichov — a pozrieš, či je vonkajšia kontúra posledná.'} ]},

  { n: '09', h2: 'Príznak → kde hľadať v programe', blocks: [
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

  { n: '04', h2: 'Addresses — what a line is made of', blocks: [
    {type:'p', html:'Every line (block) is a set of <b>addresses</b>: a letter plus a value. The conventional order is line number, preparatory function, coordinates, parameters, miscellaneous function.'},
    {type:'code', text:'N10  G01  X60 Y40  F2000  M08\n │    │     │        │      │\n │    │     │        │      └─ miscellaneous function\n │    │     │        └──────── feed rate\n │    │     └───────────────── coordinates\n │    └─────────────────────── preparatory function\n └──────────────────────────── line number'},
    {type:'table', head:['Letter','What it sets'], rows:[
      ['<b>N</b>','line number — optional, for readability'],
      ['<b>G</b>','preparatory function — <b>how</b> to move'],
      ['<b>M</b>','miscellaneous function — controls machine hardware'],
      ['<b>X Y Z</b>','coordinates on the linear axes'],
      ['<b>A B C</b>','rotary axes — tilt and rotation of the head'],
      ['<b>I J K</b>','offset from arc start to arc centre'],
      ['<b>R</b>','arc radius — an alternative to I J'],
      ['<b>F</b>','feed rate, mm/min'],
      ['<b>S</b>','spindle speed, or current'],
      ['<b>T</b>','tool number'],
      ['<b>D</b>','radius offset number'],
      ['<b>H</b>','length offset number'],
      ['<b>P</b>','a parameter: dwell time or subprogram number'],
      ['<b>Q</b>','peck depth when drilling'],
      ['<b>L</b>','number of repeats'] ]} ]},

  { n: '05', h2: 'G-codes', blocks: [
    {type:'p', html:'The letter is the <b>category</b>; the number says <b>which entry from the catalogue</b>. <code>G2</code> is not "more" than <code>G1</code> — it is a different menu item.'},
    {type:'table', head:['Code','What it does','Group'], rows:[
      ['<b>G00</b>','rapid traverse, not cutting','motion'],
      ['<b>G01</b>','linear move at feed rate','motion'],
      ['<b>G02</b>','arc, clockwise','motion'],
      ['<b>G03</b>','arc, counter-clockwise','motion'],
      ['<b>G04</b>','dwell, time given in P','<i>one-shot</i>'],
      ['<b>G17 G18 G19</b>','plane XY / XZ / YZ','plane'],
      ['<b>G20 G21</b>','inches / millimetres','units'],
      ['<b>G28</b>','return to the reference point','—'],
      ['<b>G40</b>','compensation off','compensation'],
      ['<b>G41</b>','compensation left of travel','compensation'],
      ['<b>G42</b>','compensation right of travel','compensation'],
      ['<b>G43 G49</b>','tool length offset on / off','offset'],
      ['<b>G53</b>','move in machine coordinates','<i>one-shot</i>'],
      ['<b>G54…G59</b>','work coordinate systems — <b>where the part zero is</b>','offsets'],
      ['<b>G80</b>','cancel canned cycle','cycles'],
      ['<b>G81 G83</b>','drilling / peck drilling','cycles'],
      ['<b>G90 G91</b>','absolute / incremental coordinates','coordinates'],
      ['<b>G92</b>','set the current position','—'],
      ['<b>G94 G95</b>','feed per minute / per revolution','feed'] ]},
    {type:'note', html:'Those marked <i>one-shot</i> apply only on their own line. The rest are <b>modal</b> — they hold until something changes them.'} ]},

  { n: '06', h2: 'M-codes — and why they do not travel', blocks: [
    {type:'table', head:['Code','Usual meaning'], rows:[
      ['<b>M00</b>','unconditional program stop'],
      ['<b>M01</b>','optional stop, operator\u2019s choice'],
      ['<b>M02</b>','end of program'],
      ['<b>M03 M04</b>','spindle clockwise / counter-clockwise'],
      ['<b>M05</b>','spindle stop'],
      ['<b>M06</b>','tool change'],
      ['<b>M07 M08</b>','<b>on a mill</b> — coolant supply<br/><b>on a cutting machine</b> — often torch on / off'],
      ['<b>M09</b>','coolant off'],
      ['<b>M30</b>','end of program with rewind'],
      ['<b>M98 M99</b>','call subprogram / return'] ]},
    {type:'callout', hd:'Here is where the trap hides', p:'Look at the <b>M07 / M08</b> row. On a milling machine that is <b>coolant</b>; on many cutting machines it is the <b>torch</b>. The same codes, opposite meanings. That is exactly why a program from someone else\u2019s machine <b>cannot simply be copied</b>, and exactly why post-processors exist. Motion G-codes are universal; M-codes are not.'} ]},

  { n: '07', h2: 'Modality — the source of silent errors', blocks: [
    {type:'p', html:'Most commands are <b>modal</b>: they stay in effect until changed. <code>F2000</code> is set once and holds for every subsequent move. The same goes for <code>G90</code> and <code>G21</code> from the header — they apply to the end of the program.'},
    {type:'callout', hd:'The classic trap', p:'Somebody set <code>F800</code> for a thicker section and then forgot to change it back — and <b>the whole rest of the program is cut at that speed</b>. It looks innocent in the code, because the line <code>F800</code> appears nowhere else.'},
    {type:'p', html:'The same applies to compensation: if <code>G41</code> is set somewhere and <code>G40</code> is forgotten, it <b>stays active for the next program too</b>. That is exactly why headers contain G40, G90, G21 — not as excess caution, but to reset every group.'} ]},

  { n: '08', h2: 'Ordering rules', blocks: [
    {type:'table', head:['Rule','Why'], rows:[
      ['Inner contours before the outer one','once the outer contour is cut the part drops — every hole after that is scrap'],
      ['Always pierce in scrap','piercing leaves a crater; on a finished edge that is a reject'],
      ['Compensation switches on during the lead-in','switched on along the contour it leaves a step mid-cut'],
      ['As few pierces as possible','piercing wears consumables harder than metres of cutting'],
      ['Microjoints for small parts','otherwise they drop into the table or tip up under the head'],
      ['Ordering distributes heat','cutting neighbours back to back overheats the plate (not waterjet)'] ]},
    {type:'note', html:'An ordering mistake can be spotted <b>by reading, without running the machine</b>: count the M07 blocks — that is how many pierces the program has — and check that the outer contour comes last.'} ]},

  { n: '09', h2: 'Symptom → where to look in the program', blocks: [
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
