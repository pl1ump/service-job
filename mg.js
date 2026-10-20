/* Gantry cutting machine, part by part. Drawing labels stay Slovak in every
   language; the legend under each drawing carries EN and UK.
   Reference machine: MicroStep MG (plasma + oxyfuel portal machine).        */

var MG = {};

/* The schematic is label-free apart from the numbered markers, so one drawing
   serves all three languages. SVG is declared in index.html before this file. */
SVG.mgmachine = function () {
  function mk(x, y, n, c) {
    return '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + (c || 'var(--ink)') + '"/>' +
      '<text class="lbl-sm" x="' + x + '" y="' + (y + 3.8) + '" text-anchor="middle" ' +
      'fill="var(--panel)" font-weight="600">' + n + '</text>';
  }
  function ld(x1, y1, x2, y2, c) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 +
      '" stroke="' + (c || 'var(--ink)') + '" stroke-width="1.2"/>';
  }
  var s = '<svg viewBox="0 0 900 600" role="img" aria-label="Schéma portálového rezacieho stroja">';

  /* floor */
  s += '<line x1="20" y1="560" x2="880" y2="560" stroke="var(--line-soft)" stroke-width="1.5"/>';

  /* cutting table */
  s += '<polygon points="165,435 672,435 787,320 280,320" fill="var(--steel)" opacity=".18"/>' +
       '<polygon points="165,435 672,435 787,320 280,320" fill="none" stroke="var(--steel-dark)" stroke-width="1.8"/>' +
       '<polygon points="165,435 672,435 672,490 165,490" fill="var(--steel)" opacity=".3"/>' +
       '<polygon points="165,435 672,435 672,490 165,490" fill="none" stroke="var(--steel-dark)" stroke-width="1.8"/>' +
       '<polygon points="672,435 787,320 787,375 672,490" fill="var(--steel)" opacity=".3"/>' +
       '<polygon points="672,435 787,320 787,375 672,490" fill="none" stroke="var(--steel-dark)" stroke-width="1.8"/>';
  /* slats */
  s += '<g stroke="var(--steel-dark)" stroke-width="0.9" opacity=".5">';
  for (var x = 180; x <= 655; x += 25) s += '<line x1="' + x + '" y1="435" x2="' + (x + 115) + '" y2="320"/>';
  s += '</g>';
  /* zone dividers */
  s += '<g stroke="var(--steel-dark)" stroke-width="2" opacity=".85">' +
       '<line x1="330" y1="435" x2="445" y2="320"/><line x1="505" y1="435" x2="620" y2="320"/></g>';

  /* rails */
  s += '<line x1="157" y1="441" x2="680" y2="441" stroke="var(--steel-dark)" stroke-width="7"/>' +
       '<line x1="272" y1="326" x2="795" y2="326" stroke="var(--steel-dark)" stroke-width="7"/>';
  /* rack */
  s += '<line x1="170" y1="453" x2="680" y2="453" stroke="var(--steel-dark)" stroke-width="2.2"/><g stroke="var(--steel-dark)" stroke-width="1.3">';
  for (var r = 180; r <= 400; r += 14) s += '<line x1="' + r + '" y1="449" x2="' + r + '" y2="457"/>';
  s += '</g>';
  /* bellows cover */
  s += '<rect x="162" y="428" width="118" height="14" fill="var(--steel)" opacity=".35"/>' +
       '<rect x="162" y="428" width="118" height="14" fill="none" stroke="var(--steel-dark)" stroke-width="1.2"/><g stroke="var(--steel-dark)" stroke-width="1">';
  for (var b2 = 176; b2 < 280; b2 += 14) s += '<line x1="' + b2 + '" y1="428" x2="' + b2 + '" y2="442"/>';
  s += '</g>';
  /* energy chain */
  s += '<g fill="var(--steel)" stroke="var(--steel-dark)" stroke-width="1" opacity=".9">';
  for (var e = 292; e <= 520; e += 19) s += '<rect x="' + e + '" y="308" width="15" height="10"/>';
  s += '</g>';

  /* gantry */
  s += '<line x1="425" y1="441" x2="425" y2="222" stroke="var(--steel-dark)" stroke-width="16"/>' +
       '<line x1="540" y1="326" x2="540" y2="107" stroke="var(--steel-dark)" stroke-width="16"/>' +
       '<line x1="425" y1="222" x2="540" y2="107" stroke="var(--steel-dark)" stroke-width="23"/>' +
       '<rect x="406" y="418" width="28" height="22" rx="2" fill="var(--steel)" stroke="var(--steel-dark)" stroke-width="1.5"/>' +
       '<rect x="521" y="303" width="28" height="22" rx="2" fill="var(--steel)" stroke="var(--steel-dark)" stroke-width="1.5"/>';

  /* plasma station */
  s += '<rect x="450" y="162" width="38" height="29" rx="2" fill="var(--steel)" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<line x1="469" y1="191" x2="469" y2="352" stroke="var(--steel-dark)" stroke-width="6"/>' +
       '<rect x="461" y="352" width="16" height="25" rx="2" fill="var(--arc)" opacity=".85"/>' +
       '<polygon points="462,377 476,377 473,385 465,385" fill="var(--arc)"/>' +
       '<path d="M469,385 l-4,6 l8,0 l-5,8" stroke="var(--arc)" stroke-width="2" fill="none"/>';
  /* oxyfuel station */
  s += '<rect x="484" y="128" width="38" height="29" rx="2" fill="var(--steel)" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<line x1="503" y1="157" x2="503" y2="318" stroke="var(--steel-dark)" stroke-width="6"/>' +
       '<rect x="495" y="318" width="16" height="25" rx="2" fill="var(--heat)" opacity=".85"/>' +
       '<polygon points="496,343 510,343 507,351 499,351" fill="var(--heat)"/>' +
       '<line x1="503" y1="351" x2="503" y2="358" stroke="var(--heat)" stroke-width="2.2"/>';

  /* operator panel on the gantry */
  s += '<g transform="rotate(-9 392 265)">' +
       '<line x1="410" y1="268" x2="428" y2="268" stroke="var(--steel-dark)" stroke-width="4"/>' +
       '<rect x="358" y="245" width="52" height="40" rx="3" fill="var(--panel)" stroke="var(--warn)" stroke-width="2.2"/>' +
       '<rect x="363" y="250" width="42" height="22" rx="1.5" fill="var(--warn)" opacity=".28"/>' +
       '<circle cx="370" cy="279" r="2.6" fill="var(--steel-dark)"/>' +
       '<circle cx="380" cy="279" r="2.6" fill="var(--steel-dark)"/>' +
       '<circle cx="399" cy="279" r="3.2" fill="var(--bad)"/></g>';

  /* standalone operator console */
  s += '<rect x="255" y="474" width="21" height="72" fill="var(--steel)" stroke="var(--steel-dark)" stroke-width="1.5"/>' +
       '<g transform="rotate(-8 265 450)">' +
       '<rect x="230" y="424" width="70" height="50" rx="3" fill="var(--panel)" stroke="var(--steel-dark)" stroke-width="1.8"/>' +
       '<rect x="235" y="429" width="60" height="33" rx="1.5" fill="var(--arc)" opacity=".2"/>' +
       '<circle cx="293" cy="469" r="4" fill="var(--bad)"/></g>';

  /* plasma source */
  s += '<polygon points="45,440 118,440 118,360 45,360" fill="var(--steel)" opacity=".22"/>' +
       '<polygon points="45,440 118,440 118,360 45,360" fill="none" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<polygon points="45,360 118,360 148,330 75,330" fill="var(--steel)" opacity=".34"/>' +
       '<polygon points="45,360 118,360 148,330 75,330" fill="none" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<polygon points="118,360 148,330 148,410 118,440" fill="var(--steel)" opacity=".34"/>' +
       '<polygon points="118,360 148,330 148,410 118,440" fill="none" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<g stroke="var(--arc)" stroke-width="1.8" opacity=".85"><line x1="57" y1="377" x2="106" y2="377"/>' +
       '<line x1="57" y1="387" x2="92" y2="387"/></g>';
  /* gas console */
  s += '<polygon points="158,438 196,438 196,384 158,384" fill="var(--steel)" opacity=".22"/>' +
       '<polygon points="158,438 196,438 196,384 158,384" fill="none" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<polygon points="158,384 196,384 214,366 176,366" fill="var(--steel)" opacity=".34"/>' +
       '<polygon points="158,384 196,384 214,366 176,366" fill="none" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<polygon points="196,384 214,366 214,420 196,438" fill="var(--steel)" opacity=".34"/>' +
       '<polygon points="196,384 214,366 214,420 196,438" fill="none" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<g stroke="var(--heat)" stroke-width="1.6" fill="none"><circle cx="169" cy="400" r="4.5"/>' +
       '<circle cx="185" cy="400" r="4.5"/></g>';
  /* control cabinet */
  s += '<polygon points="210,296 262,296 262,222 210,222" fill="var(--steel)" opacity=".22"/>' +
       '<polygon points="210,296 262,296 262,222 210,222" fill="none" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<polygon points="210,222 262,222 284,200 232,200" fill="var(--steel)" opacity=".34"/>' +
       '<polygon points="210,222 262,222 284,200 232,200" fill="none" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<polygon points="262,222 284,200 284,274 262,296" fill="var(--steel)" opacity=".34"/>' +
       '<polygon points="262,222 284,200 284,274 262,296" fill="none" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<line x1="236" y1="222" x2="236" y2="296" stroke="var(--steel-dark)" stroke-width="1.1"/>';
  /* extraction duct */
  s += '<polygon points="787,355 855,395 855,428 787,388" fill="var(--steel)" opacity=".3"/>' +
       '<polygon points="787,355 855,395 855,428 787,388" fill="none" stroke="var(--steel-dark)" stroke-width="1.6"/>' +
       '<line x1="800" y1="378" x2="845" y2="405" stroke="var(--arc)" stroke-width="2"/>' +
       '<path d="M838,398 l10,6 l-11,5" fill="var(--arc)"/>';

  /* markers */
  s += ld(342, 240, 360, 252, 'var(--warn)') + mk(330, 232, '1', 'var(--warn)');
  s += ld(207, 452, 231, 452) + mk(196, 452, '2');
  s += ld(566, 152, 522, 126) + mk(576, 158, '3');
  s += ld(403, 370, 418, 370) + mk(392, 370, '4');
  s += ld(600, 449, 600, 443) + mk(600, 460, '5');
  s += ld(290, 467, 290, 457) + mk(290, 478, '6');
  s += ld(387, 415, 408, 428) + mk(378, 406, '7');
  s += ld(439, 152, 452, 166) + mk(430, 144, '8');
  s += ld(534, 387, 481, 370, 'var(--arc)') + mk(545, 390, '9', 'var(--arc)');
  s += ld(577, 338, 515, 332, 'var(--heat)') + mk(588, 340, '10', 'var(--heat)');
  s += ld(443, 300, 464, 300) + mk(432, 300, '11');
  s += ld(352, 295, 360, 308) + mk(344, 286, '12');
  s += ld(258, 416, 264, 427) + mk(252, 405, '13');
  s += ld(689, 400, 660, 400) + mk(700, 400, '14');
  s += ld(80, 489, 82, 445) + mk(80, 500, '15');
  s += ld(170, 489, 176, 442) + mk(170, 500, '16');
  s += ld(186, 221, 208, 238) + mk(175, 213, '17');
  s += ld(836, 441, 826, 418) + mk(840, 452, '18');
  s += ld(322, 503, 300, 478, 'var(--bad)') + mk(330, 512, '19', 'var(--bad)');

  /* axis triad */
  s += '<g stroke="var(--arc)" stroke-width="1.8" fill="none">' +
       '<line x1="730" y1="540" x2="818" y2="540"/><path d="M810,535 l10,5 l-10,5" fill="var(--arc)"/>' +
       '<line x1="730" y1="540" x2="774" y2="496"/><path d="M770,503 l6,-9 l3,10" fill="var(--arc)"/>' +
       '<line x1="730" y1="540" x2="730" y2="490"/><path d="M725,498 l5,-10 l5,10" fill="var(--arc)"/></g>' +
       '<text class="lbl" x="826" y="544" fill="var(--arc)">X</text>' +
       '<text class="lbl" x="780" y="492" fill="var(--arc)">Y</text>' +
       '<text class="lbl" x="714" y="486" fill="var(--arc)">Z</text>';

  return s + '</svg>';
};

/* The legend is identical in all three languages — only the header changes,
   because the drawing itself is deliberately labelled in Slovak. */
var MG_LEGEND = [
  ['1', 'Ovládací panel na portáli (LCD)', 'Control panel on the gantry', 'Пульт оператора на порталі'],
  ['2', 'Konzola obsluhy s TFT dotykovou obrazovkou', 'Operator console with TFT touch screen', 'Консоль оператора із сенсорним екраном'],
  ['3', 'Portál (most) a priečny nosník', 'Gantry (bridge) and cross beam', 'Портал (міст) і поперечна балка'],
  ['4', 'Bočná noha portálu / pojazd', 'Gantry side leg / carriage', 'Бокова опора портала / каретка'],
  ['5', 'Pozdĺžne lineárne vedenie — os X', 'Longitudinal linear guides — X axis', 'Поздовжні лінійні напрямні — вісь X'],
  ['6', 'Ozubený hrebeň a delený skrutkovicový pastorok', 'Helical rack and split helical pinion', 'Зубчаста рейка і розрізна косозуба шестерня'],
  ['7', 'Pohon osi X (servomotor s prevodovkou)', 'X axis drive (servo motor with gearbox)', 'Привід осі X (сервомотор з редуктором)'],
  ['8', 'Suport / nástrojová stanica — os Y', 'Tool station / carriage — Y axis', 'Супорт / інструментальна станція — вісь Y'],
  ['9', 'Plazmový horák', 'Plasma torch', 'Плазмовий різак'],
  ['10', 'Autogénový (kyslíkový) horák', 'Oxyfuel torch', 'Кисневий різак'],
  ['11', 'Os Z s guľôčkovou skrutkou', 'Z axis with ball screw', 'Вісь Z з кульково-гвинтовою передачею'],
  ['12', 'Energetický (vlečný) reťaz', 'Cable carrier / energy chain', 'Кабельний ланцюг (гусениця)'],
  ['13', 'Kryty mechanických častí', 'Covers for mechanical parts', 'Кожухи механічних частин'],
  ['14', 'Sekčný rezací stôl', 'Sectional cutting table', 'Секційний різальний стіл'],
  ['15', 'Plazmový zdroj', 'Plasma power source', 'Джерело плазми'],
  ['16', 'Plynová konzola (rozvod plynov)', 'Gas console', 'Газова консоль (розподіл газів)'],
  ['17', 'Rozvádzač / riadiaca skriňa', 'Control cabinet', 'Шафа керування'],
  ['18', 'Odsávacie potrubie k filtračnej jednotke', 'Extraction duct to the filter unit', 'Витяжний канал до фільтра'],
  ['19', 'Núdzové zastavenie (E-STOP)', 'Emergency stop', 'Аварійна зупинка']
];

function mgLegend(head) {
  return { type: 'table', head: head, rows: MG_LEGEND.map(function (r) {
    return ['<b>' + r[0] + '</b>', '<b>' + r[1] + '</b>', r[2], r[3]];
  }) };
}

/* ============================ УКРАЇНСЬКА ============================ */
MG.uk = {
  eyebrow: 'Портальний різальний станок · будова',
  h1: 'Будова станка',
  lede: 'Як влаштований портальний станок для плазмового й кисневого різання — вузол за вузлом. Підписи на схемі навмисно словацькою: саме цими словами про них говорять у цеху. Переклад у легенді під схемою.',
  sections: [

  { n: '01', h2: 'Схема станка', blocks: [
    {type:'p', html:'Портальний станок — це міст, що їде по двох рейках уздовж столу. По мосту впоперек їде супорт з різаком. Усе інше навколо — джерело, гази, керування, витяжка.'},
    {type:'fig', svg:'mgmachine', caption:'Портальний станок у конфігурації плазма + кисень. Схематично, не в масштабі.'},
    mgLegend(['№','Slovensky','English','Українською']) ]},

  { n: '02', h2: 'Чому різаки стоять окремо', blocks: [
    {type:'p', html:'Плазмовий і кисневий різаки на схемі стоять як <b>дві окремі інструментальні станції</b> на одній балці — і це не помилка. Вони <b>не ріжуть одночасно той самий рез</b>. Це дві альтернативні технології на одному станку.'},
    {type:'grid', cells:[
      {kv:'Плазма', h3:'Тонкий і середній метал', p:'Швидко, будь-який струмопровідний метал, вузька різальна щілина. Практична стеля якісного різу — приблизно 50–60 мм.'},
      {kv:'Кисень', h3:'Товста вуглецева сталь', p:'Повільно, але дешево й бере там, куди плазма не дістає: <b>до 150 мм</b>, а з підвищеним порталом до 250 мм. Тільки вуглецева сталь.'} ]},
    {type:'callout', hd:'Що справді працює в парі', p:'Паралельно працюють <b>кілька різаків одного типу</b>. Класика — <b>autogénový trojhorák</b>: три кисневі різаки ріжуть три однакові деталі водночас. Саме тому в параметрах стоїть «max. počet rezacích hláv». Кисневі різаки дешеві, тому їх ставлять по три-шість; плазмових зазвичай один-два, бо кожному потрібне своє джерело.'},
    {type:'note', html:'Сенс комбінованого станка — <b>одна розкладка й одне базування</b>. У межах однієї програми тонкі контури ріже плазма, товсті — кисень, і лист не треба перекладати на інший станок. Незадіяний супорт у цей час піднятий і стоїть.'} ]},

  { n: '03', h2: 'Портал і приводи', blocks: [
    {type:'p', html:'Міст їде по <b>лінійних напрямних</b> з обох боків, привід — <b>сервомотор через зубчасту рейку</b>. Кожна сторона має свій привід, і керування тримає їх синхронно: якщо один бік відстане, портал перекосить.'},
    {type:'callout', hd:'Розрізна косозуба шестерня', p:'Шестерня розділена на дві половини, підтиснуті одна проти одної. Вони вибирають люфт у зачепленні з рейкою. Без цього на зміні напрямку з’являвся б зазор — і кут контуру виходив би заокругленим замість гострого.'},
    {type:'ul', items:[
      '<b>вісь X</b> — поздовжній хід усього портала',
      '<b>вісь Y</b> — хід супорта по поперечній балці',
      '<b>вісь Z</b> — підйом різака, кулькова гвинтова передача',
      '<b>осі A / C</b> — нахил і поворот ротатора для різання під кутом'] },
    {type:'note', html:'<b>Кабельний ланцюг</b> веде струм, гази й сигнали до рухомого портала. <b>Кожухи</b> закривають напрямні й рейку від бризок і диму — без них абразивний пил швидко вбиває механіку.'} ]},

  { n: '04', h2: 'Супорт, вісь Z і різак', blocks: [
    {type:'p', html:'На супорті сидить різак. Вісь Z на кульково-гвинтовій передачі тримає <b>відстань різака до листа</b> — параметр, від якого залежить уся якість різу.'},
    {type:'grid', cells:[
      {kv:'Початковий дотик', h3:'Initial height sensing', p:'Перед пробиванням різак опускається, намацує лист і від цієї точки відраховує робочу висоту.'},
      {kv:'Під час різу', h3:'Контроль висоти (THC)', p:'Система тримає висоту <b>за напругою дуги</b>: напруга зросла — різак відійшов, треба опустити. Так компенсується жолоблення листа.'},
      {kv:'Пробивання', h3:'Підйом на прошивку', p:'Пробивають із більшої висоти, щоб бризки розплаву не залетіли в сопло, потім опускаються на робочу.'} ]},
    {type:'note', html:'Розхідники різака — <b>сопло, електрод із гафнієвою вставкою, завихрювач, захисний ковпак</b>. Зношений електрод одразу видно по якості кромки й по скосу.'} ]},

  { n: '05', h2: 'Різальний стіл і витяжка', blocks: [
    {type:'p', html:'Стіл <b>секційний</b>: поділений на зони, і електроніка відкриває витяжку <b>тільки в тій зоні, над якою зараз ріжуть</b>. При тому самому вентиляторі це дає значно сильніший потік саме там, де йде дим.'},
    {type:'ul', items:[
      '<b>ламелі</b> — змінна решітка, на якій лежить лист; витратна частина',
      '<b>заслінки зон</b> — відкриваються за командою керування',
      '<b>витяжний канал</b> — веде до фільтрувальної установки',
      '<b>піддон для шлаку</b> — висувний, збирає окалину й обрізки'] },
    {type:'callout', hd:'Чому це взагалі питання', p:'Плазмове різання дає дрібний метал і оксиди в повітрі, оцинкована сталь — ще й пари цинку. Витяжка тут не комфорт, а вимога охорони праці.'} ]},

  { n: '06', h2: 'Пульт оператора на порталі', blocks: [
    {type:'p', html:'Збоку на порталі стоять <b>один-два пульти з LCD-дисплеєм</b>. Це ручні блоки керування <b>біля самого матеріалу</b>, а не заміна головної консолі.'},
    {type:'ul', items:[
      'ручні посуви (jog) по осях X, Y, Z',
      'нульова точка й старт програми, пауза, повернення на контур',
      'запалювання різака, перевірка пілотної дуги',
      'технологічні параметри — струм, швидкість, висота пробивання',
      'калібрування висоти й дотик до листа',
      'заміна розхідників і перевірка після заміни',
      'аварійна зупинка'] },
    {type:'callout', hd:'Навіщо він потрібен', p:'Робоча довжина портального станка буває <b>до 50 метрів</b>. Без пульта на порталі оператор при кожному доналаштуванні йшов би через увесь стіл до головної консолі й назад. Виробники прямо рекомендують такий пульт саме для довгих станків.'},
    {type:'grid', cells:[
      {kv:'Головна консоль', h3:'Підготовка роботи', p:'Окрема стійка з сенсорним екраном: розкладка й редагування програм <b>паралельно з різанням</b>, база матеріалів та інструментів, мережа, діагностика, контроль ресурсу розхідників.'},
      {kv:'Пульт на порталі', h3:'Робота біля різу', p:'Позиціювання й технологія в прямому пoгляді на рез. Опційно на портал ставлять і <b>повноцінний другий сенсорний екран</b>, який поводиться як екран головної консолі.'} ]} ]},

  { n: '07', h2: 'Що можна дoставити на той самий портал', blocks: [
    {type:'chips', items:['плазмовий ротатор 50° / 90°','нахильний плазмовий супорт','автоматичне калібрування геометрії ротатора','кисневий трійник','мультирізаковий супорт','свердлильний супорт — свердління і нарізання різьби','чорнильний маркувальник','мікроударний маркувальник','маркування цинковим порошком','різання й свердління труб','CCD-камера','автоматичне вирівнювання листа','другий сенсорний екран на порталі'] },
    {type:'note', html:'Через це портальний станок і купують: одна механіка, а технології на неї навішують за потребою виробництва.'} ]}
  ]
};

/* ============================ SLOVENSKY ============================ */
MG.sk = {
  eyebrow: 'Portálový rezací stroj · stavba',
  h1: 'Stavba stroja',
  lede: 'Ako je postavený portálový stroj na plazmové a kyslíkové rezanie — uzol po uzle. Popisky na výkrese sú slovenské, preklad do angličtiny a ukrajinčiny je v legende pod výkresom.',
  sections: [

  { n: '01', h2: 'Schéma stroja', blocks: [
    {type:'p', html:'Portálový stroj je most, ktorý ide po dvoch koľajniciach pozdĺž stola. Po moste ide naprieč suport s horákom. Všetko ostatné okolo — zdroj, plyny, riadenie, odsávanie.'},
    {type:'fig', svg:'mgmachine', caption:'Portálový stroj v konfigurácii plazma + autogén. Schematicky, nie v mierke.'},
    mgLegend(['№','Slovensky','English','Українською']) ]},

  { n: '02', h2: 'Prečo stoja horáky oddelene', blocks: [
    {type:'p', html:'Plazmový a autogénový horák sú na výkrese <b>dve samostatné nástrojové stanice</b> na jednom nosníku — a tak to naozaj je. <b>Nerežú súčasne ten istý rez.</b> Sú to dve alternatívne technológie na jednom stroji.'},
    {type:'grid', cells:[
      {kv:'Plazma', h3:'Tenký a stredný materiál', p:'Rýchlo, každý vodivý kov, úzka rezná škára. Praktický strop kvalitného rezu je približne 50–60 mm.'},
      {kv:'Autogén', h3:'Hrubá uhlíková oceľ', p:'Pomaly, ale lacno a tam, kam plazma nedosiahne: <b>do 150 mm</b>, so zvýšeným portálom do 250 mm. Len uhlíková oceľ.'} ]},
    {type:'callout', hd:'Čo naozaj pracuje v dvojici', p:'Súbežne pracujú <b>viaceré horáky rovnakého typu</b>. Klasika je <b>autogénový trojhorák</b> — tri kyslíkové horáky režú tri rovnaké diely naraz. Preto je v parametroch „max. počet rezacích hláv“. Autogénové horáky sú lacné, dávajú sa po tri až šesť; plazmové bývajú jeden-dva, lebo každý potrebuje vlastný zdroj.'},
    {type:'note', html:'Zmysel kombinovaného stroja je <b>jedno nestovanie a jedno upnutie</b>. V rámci jednej úlohy režú tenké kontúry plazmou a hrubé kyslíkom bez prekladania plechu na iný stroj. Nepoužitý suport je medzitým zdvihnutý.'} ]},

  { n: '03', h2: 'Portál a pohony', blocks: [
    {type:'p', html:'Most ide po <b>lineárnom vedení</b> z oboch strán, pohon je <b>servomotor cez ozubený hrebeň</b>. Každá strana má vlastný pohon a riadenie ich drží synchrónne — ak jedna strana zaostane, portál sa vzprieči.'},
    {type:'callout', hd:'Delený skrutkovicový pastorok', p:'Pastorok je rozdelený na dve polovice predopnuté proti sebe. Tie vymedzia vôľu v zábere s hrebeňom. Bez toho by pri zmene smeru vznikla vôľa a roh kontúry by vyšiel zaoblený namiesto ostrého.'},
    {type:'ul', items:[
      '<b>os X</b> — pozdĺžny pojazd celého portálu',
      '<b>os Y</b> — pojazd suportu po priečnom nosníku',
      '<b>os Z</b> — zdvih horáka, guľôčková skrutka',
      '<b>osi A / C</b> — naklonenie a otočenie rotátora pri úkosovom rezaní'] },
    {type:'note', html:'<b>Energetický reťaz</b> vedie prúd, plyny a signály k pohyblivému portálu. <b>Kryty</b> chránia vedenie a hrebeň pred rozstrekom a dymom — bez nich abrazívny prach rýchlo zničí mechaniku.'} ]},

  { n: '04', h2: 'Suport, os Z a horák', blocks: [
    {type:'p', html:'Na suporte sedí horák. Os Z na guľôčkovej skrutke drží <b>odstup horáka od plechu</b> — parameter, od ktorého závisí celá kvalita rezu.'},
    {type:'grid', cells:[
      {kv:'Prvý dotyk', h3:'Initial height sensing', p:'Pred prepichom horák klesne, nahmatá plech a od tohto bodu odpočíta pracovnú výšku.'},
      {kv:'Počas rezu', h3:'Riadenie výšky (THC)', p:'Systém drží výšku <b>podľa napätia oblúka</b>: napätie stúplo — horák sa vzdialil, treba klesnúť. Takto sa kompenzuje zvlnenie plechu.'},
      {kv:'Prepich', h3:'Zdvih na prepich', p:'Prepichuje sa z väčšej výšky, aby rozstrek nevletel do dýzy, potom sa klesne na pracovnú.'} ]},
    {type:'note', html:'Spotrebné diely horáka — <b>dýza, elektróda s hafniovou vložkou, vírivý krúžok, ochranný kryt</b>. Opotrebovaná elektróda je hneď vidieť na kvalite hrany a na úkose rezu.'} ]},

  { n: '05', h2: 'Rezací stôl a odsávanie', blocks: [
    {type:'p', html:'Stôl je <b>sekčný</b>: rozdelený na zóny a elektronika otvára odsávanie <b>len v zóne, nad ktorou sa práve reže</b>. Pri rovnakom ventilátore to dá podstatne silnejší ťah práve tam, kde vzniká dym.'},
    {type:'ul', items:[
      '<b>lamely</b> — vymeniteľný rošt, na ktorom leží plech; spotrebný diel',
      '<b>klapky zón</b> — otvárajú sa na povel riadenia',
      '<b>odsávací kanál</b> — vedie k filtračnej jednotke',
      '<b>škvarová vaňa</b> — výsuvná, zbiera okuje a odrezky'] },
    {type:'callout', hd:'Prečo je to vôbec téma', p:'Plazmové rezanie uvoľňuje jemný kov a oxidy do vzduchu, pozinkovaná oceľ navyše pary zinku. Odsávanie tu nie je komfort, ale požiadavka BOZP.'} ]},

  { n: '06', h2: 'Ovládací panel na portáli', blocks: [
    {type:'p', html:'Po stranách portálu stoja <b>jeden alebo dva ovládacie panely s LCD displejom</b>. Sú to ručné ovládacie jednotky <b>priamo pri materiáli</b>, nie náhrada hlavnej konzoly.'},
    {type:'ul', items:[
      'ručné posuvy (jog) v osiach X, Y, Z',
      'nulový bod a štart programu, pauza, návrat na kontúru',
      'zapálenie horáka, kontrola pilotného oblúka',
      'technologické parametre — prúd, rýchlosť, výška prepichu',
      'kalibrácia výšky a dotyk plechu',
      'výmena spotrebných dielov a kontrola po výmene',
      'núdzové zastavenie'] },
    {type:'callout', hd:'Načo existuje', p:'Pracovná dĺžka portálového stroja býva <b>až 50 metrov</b>. Bez panela na portáli by obsluha pri každom doladení musela prejsť celý stôl k hlavnej konzole a späť. Výrobcovia ho odporúčajú práve pri dlhých strojoch.'},
    {type:'grid', cells:[
      {kv:'Hlavná konzola', h3:'Príprava práce', p:'Samostatná konzola s dotykovou obrazovkou: nestovanie a editácia programov <b>súbežne s rezaním</b>, databáza materiálov a nástrojov, sieť, diagnostika, sledovanie životnosti spotrebných dielov.'},
      {kv:'Panel na portáli', h3:'Práca pri reze', p:'Polohovanie a technológia v priamom pohľade na rez. Voliteľne sa na portál dáva aj <b>druhá dotyková obrazovka</b>, ktorá sa správa ako obrazovka hlavnej konzoly.'} ]} ]},

  { n: '07', h2: 'Čo sa dá doplniť na ten istý portál', blocks: [
    {type:'chips', items:['plazmový rotátor 50° / 90°','naklápací plazmový suport','automatická kalibrácia rotátorovej geometrie','autogénový trojhorák','multihorákový suport','vŕtací suport — vŕtanie a závitovanie','atramentový popisovač','mikroúderový popisovač','popisovanie zinkovým práškom','rezanie a vŕtanie rúr','kamera CCD','automatické zarovnanie plechu','druhá dotyková obrazovka na portáli'] },
    {type:'note', html:'Práve preto sa portálový stroj kupuje: jedna mechanika a technológie sa na ňu dopĺňajú podľa potrieb výroby.'} ]}
  ]
};

/* ============================= ENGLISH ============================= */
MG.en = {
  eyebrow: 'Gantry cutting machine · layout',
  h1: 'Machine layout',
  lede: 'How a gantry machine for plasma and oxyfuel cutting is built, assembly by assembly. The drawing is labelled in Slovak on purpose — those are the words used on the shop floor. Translations are in the legend below it.',
  sections: [

  { n: '01', h2: 'Machine schematic', blocks: [
    {type:'p', html:'A gantry machine is a bridge running on two rails along the table. A carriage with the torch runs across the bridge. Everything else around it is the power source, gases, control and extraction.'},
    {type:'fig', svg:'mgmachine', caption:'Gantry machine in a plasma + oxyfuel configuration. Schematic, not to scale.'},
    mgLegend(['No.','Slovensky','English','Українською']) ]},

  { n: '02', h2: 'Why the torches sit apart', blocks: [
    {type:'p', html:'The plasma and oxyfuel torches are drawn as <b>two separate tool stations</b> on one beam, and that is how it really works. They <b>do not cut the same kerf at the same time</b>. They are two alternative technologies on one machine.'},
    {type:'grid', cells:[
      {kv:'Plasma', h3:'Thin to medium material', p:'Fast, any conductive metal, narrow kerf. The practical ceiling for a quality cut is roughly 50–60 mm.'},
      {kv:'Oxyfuel', h3:'Thick carbon steel', p:'Slow, but cheap and able to reach where plasma cannot: <b>up to 150 mm</b>, or 250 mm with a raised gantry. Carbon steel only.'} ]},
    {type:'callout', hd:'What does work in pairs', p:'<b>Several torches of the same type</b> run simultaneously. The classic case is the <b>oxy triple torch</b> — three oxyfuel torches cutting three identical parts at once. That is what "max. number of cutting heads" in the specs refers to. Oxyfuel torches are cheap, so three to six are common; plasma heads are usually one or two, because each needs its own power source.'},
    {type:'note', html:'The point of a combined machine is <b>one nest and one setup</b>. Within a single job, thin contours are cut with plasma and thick plate with oxyfuel, without moving the plate to another machine. The idle station is raised and parked meanwhile.'} ]},

  { n: '03', h2: 'Gantry and drives', blocks: [
    {type:'p', html:'The bridge runs on <b>linear guides</b> on both sides, driven by a <b>servo motor through a toothed rack</b>. Each side has its own drive and the control keeps them synchronised — if one side lags, the gantry racks over.'},
    {type:'callout', hd:'Split helical pinion', p:'The pinion is split into two halves preloaded against each other, taking up the backlash in mesh with the rack. Without it a reversal would open a gap, and a contour corner would come out rounded instead of sharp.'},
    {type:'ul', items:[
      '<b>X axis</b> — the whole gantry travelling lengthwise',
      '<b>Y axis</b> — the carriage travelling across the cross beam',
      '<b>Z axis</b> — torch lift, on a ball screw',
      '<b>A / C axes</b> — rotator tilt and rotation for bevel cutting'] },
    {type:'note', html:'The <b>energy chain</b> carries current, gases and signals to the moving gantry. <b>Covers</b> protect the guides and rack from spatter and fume — without them the abrasive dust kills the mechanics quickly.'} ]},

  { n: '04', h2: 'Carriage, Z axis and torch', blocks: [
    {type:'p', html:'The torch sits on the carriage. The ball-screw Z axis holds the <b>standoff between torch and plate</b> — the parameter the whole cut quality depends on.'},
    {type:'grid', cells:[
      {kv:'First touch', h3:'Initial height sensing', p:'Before piercing, the torch descends, feels for the plate and counts the working height from that point.'},
      {kv:'During the cut', h3:'Torch height control', p:'The system holds height <b>by arc voltage</b>: voltage rises, so the torch has drifted away and must come down. That compensates for a buckled plate.'},
      {kv:'Piercing', h3:'Lift to pierce', p:'Piercing is done from a greater height so the blow-back does not hit the nozzle, then the torch drops to working height.'} ]},
    {type:'note', html:'Torch consumables are the <b>nozzle, electrode with hafnium insert, swirl ring and shield cap</b>. A worn electrode shows immediately in edge quality and cut bevel.'} ]},

  { n: '05', h2: 'Cutting table and extraction', blocks: [
    {type:'p', html:'The table is <b>sectional</b>: divided into zones, with the electronics opening extraction <b>only in the zone currently being cut</b>. With the same fan that gives far stronger draw exactly where the fume is.'},
    {type:'ul', items:[
      '<b>slats</b> — the replaceable grid the plate rests on; a consumable',
      '<b>zone dampers</b> — opened on command from the control',
      '<b>extraction channel</b> — leading to the filter unit',
      '<b>slag container</b> — a pull-out drawer collecting scale and offcuts'] },
    {type:'callout', hd:'Why this matters at all', p:'Plasma cutting releases fine metal and oxides into the air; galvanised steel adds zinc fume. Extraction here is not a comfort feature but an occupational-safety requirement.'} ]},

  { n: '06', h2: 'Control panel on the gantry', blocks: [
    {type:'p', html:'<b>One or two control panels with LCD displays</b> sit on the sides of the gantry. They are manual control units <b>right at the material</b>, not a replacement for the main console.'},
    {type:'ul', items:[
      'manual jog in the X, Y and Z axes',
      'zero point and program start, pause, return to contour',
      'torch ignition, pilot arc check',
      'technology parameters — current, speed, pierce height',
      'height calibration and plate touch-off',
      'consumable change and the check after it',
      'emergency stop'] },
    {type:'callout', hd:'Why it exists', p:'A gantry machine can have a working length of <b>up to 50 metres</b>. Without a panel on the gantry the operator would walk the whole table to the main console and back for every adjustment. Manufacturers recommend it specifically for long machines.'},
    {type:'grid', cells:[
      {kv:'Main console', h3:'Preparing the work', p:'A standalone console with a touch screen: nesting and editing programs <b>while cutting continues</b>, material and tool database, networking, diagnostics, consumable life monitoring.'},
      {kv:'Panel on the gantry', h3:'Working at the cut', p:'Positioning and technology in direct sight of the kerf. Optionally a <b>second touch screen</b> is fitted to the gantry, behaving exactly like the main console screen.'} ]} ]},

  { n: '07', h2: 'What can be added to the same gantry', blocks: [
    {type:'chips', items:['plasma rotator 50° / 90°','tilting plasma station','automatic calibration of rotator geometry','oxy triple torch','multi-torch station','drilling station — drilling and tapping','inkjet marker','micro-punch marker','zinc powder marking','pipe cutting and drilling','CCD camera','automatic plate alignment','second touch screen on the gantry'] },
    {type:'note', html:'This is exactly why a gantry machine gets bought: one set of mechanics, with technologies added to it as production needs them.'} ]}
  ]
};
