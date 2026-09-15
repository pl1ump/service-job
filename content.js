/* Content for all three languages.
   Block types: p | note | ul | grid | callout | fig | table | chips        */

var CONTENT = {};

/* ============================ УКРАЇНСЬКА ============================ */
CONTENT.uk = {
  htmlLang: 'uk',
  brand: 'Шпаргалка сервісного техніка',
  sub: 'особисті нотатки · В. Ковба',
  foot: 'Особисті нотатки для підготовки до співбесіди · не є офіційною документацією виробника',
  tabs: { plasma:'Плазма', laser:'Лазер', water:'Воднострумінь', oxy:'Кисень', mill:'Фрезерування', common:'Спільне', faults:'Несправності' },

  svg: {
    torch: { alt:'Розріз плазмового пальника', gas:'ГАЗ', swirl:'Завихрювач', swirlSub:'закрутка → скіс на один бік',
      electrode:'Електрод (катод −)', electrodeSub:'мідь', nozzle:'Сопло', nozzleSub:'стискає дугу — суть плазми',
      hafnium:'Вставка гафнію', hafniumSub:'витримує кисень', shield:'Захисний ковпак', shieldSub:'ловить бризки',
      arc:'Стиснена дуга', work:'ДЕТАЛЬ (анод +)' },
    pilot: { alt:'Пілотна та перенесена дуга', t1:'1 · ПІЛОТНА — анод СОПЛО', c1:'струм → сопло', n1:'деталь ще не в колі',
      t2:'2 · ПЕРЕНЕСЕНА — анод ДЕТАЛЬ', c2:'струм → деталь', n2:'сопло вийшло з кола' },
    thc: { alt:'Напруга дуги залежно від висоти', low:'НИЗЬКО', ok:'НОРМА', high:'ВИСОКО',
      r1:'довша дуга = вища напруга', r2:'Z-вісь підправляє висоту,', r3:'доки не зійдеться з уставкою' },
    sparks: { alt:'Напрямок іскор', fast:'ЗАШВИДКО', fast1:'іскри тягнуться назад', fast2:'шлак знизу, скіс',
      good:'НОРМА', good1:'іскри майже вертикально', slow:'ЗАПОВІЛЬНО', slow1:'іскри розлітаються вгору', slow2:'широкий рез, шлак зверху' },
    laserhead: { alt:'Розріз лазерної голови', fiber:'ВОЛОКНО', gas:'ГАЗ', collim:'Колімувальна лінза', collimSub:'робить промінь паралельним',
      focus:'Фокусувальна лінза', focusSub:'зводить у пляму < 0,3 мм', glass:'Захисне скло', glassSub:'найчастіша причина скарг',
      nozzle:'Сопло + керамічне кільце', nozzleSub:'ємнісний датчик висоти', fp:'Фокус', fpSub:'положення відносно поверхні критичне' },
    waterhead: { alt:'Розріз воднострумінної голови', press:'вода 4000 бар', abr:'АБРАЗИВ', abrSub:'гранат',
      orifice:'Сопло-отвір', orificeSub:'рубін / сапфір / алмаз · 0,2–0,4 мм', mix:'Змішувальна камера', mixSub:'струмінь підсмоктує абразив',
      tube:'Фокусувальна трубка', tubeSub:'карбід · зношується в дзвін', taper:'Конусність', taperSub:'рез ширший зверху' },
    oxy: { alt:'Принцип кисневого різання', fuel:'ПАЛИВНИЙ ГАЗ', o2:'КИСЕНЬ', flame:'підігрівне полум’я',
      jet:'струмінь чистого O₂', blow:'оксид видувається', tip:'Мундштук', tipSub:'кільце підігріву + центральний O₂',
      burn:'Залізо горить у кисні', burnSub:'реакція сама дає ~70 % тепла' }
  },

  pages: {
    plasma: { color:'var(--arc)', eyebrow:'Термічне різання · електрична дуга', h1:'Плазма',
      lede:'Дуга плавить метал, закручений газ видуває розплав. Забери газ — буде зварювання. Ріже тільки комбінація.',
      sections: [
        { n:'01', h2:'Пальник у розрізі', blocks:[
          {type:'fig', svg:'torch', caption:'Розріз симетричний — показано обидві половини.'} ]},
        { n:'02', h2:'Витратники', blocks:[
          {type:'note', html:'Ресурс рахують <b>не в метрах різу, а в кількості пробивань</b> — пробивання вбиває витратники значно сильніше.'},
          {type:'grid', cells:[
            {kv:'Електрод', h3:'Гафнієва вставка в міді', p:'Катод. Гафній емітує електрони і витримує кисень. Зношується від <b>іонного бомбардування</b> — утворюється лунка, її глибина і є критерієм заміни.'},
            {kv:'Завихрювач', h3:'Кільце з похилими отворами', p:'Закручує газ, вихор стискає й центрує дугу. <b>Джерело несиметричного скосу</b> — звідси правило напрямку обходу контурів.'},
            {kv:'Сопло', h3:'Стискає дугу', p:'Діаметр отвору прив’язаний до струму. Розбивається до овалу → ширший рез, більший скіс, блукання дуги.'},
            {kv:'Захисний ковпак', h3:'Приймає бризки', p:'Формує вторинний потік. Забризкується, отвір заростає — потік перекошується і рез іде вбік при справному соплі.'} ]} ]},
        { n:'03', h2:'Пілотна → перенесена дуга', blocks:[
          {type:'p', html:'Дуга запалюється <b>один раз</b> і горить безперервно. Міняється лише анод: спершу сопло, потім деталь.'},
          {type:'fig', svg:'pilot'},
          {type:'callout', hd:'Наслідок для сервісу', p:'Якщо перенесення не відбувається, пілот далі горить <b>у сопло й вигорає за секунди</b>. Клієнт скаржиться, що «сопла не живуть», а справжня причина — висота IHS, маса або тиск газу.'} ]},
        { n:'04', h2:'THC — висота по напрузі дуги', blocks:[
          {type:'p', html:'Джерело стабілізує <b>струм</b>, тому напруга вільна і прямо залежить від довжини дуги. Міряємо напругу — знаємо висоту.'},
          {type:'fig', svg:'thc', caption:'Значення умовні — реальні уставки залежать від струму, газу й товщини.'},
          {type:'callout', hd:'Пастка', p:'THC «зійшов з розуму» частіше означає <b>зношені витратники</b>, а не датчик: знос змінює напругу при тій самій висоті.'} ]},
        { n:'05', h2:'Читання іскор', blocks:[
          {type:'fig', svg:'sparks', caption:'Стрілка зверху — напрямок руху. Ти дивишся на іскри, але бачиш форму дуги: вона відстає й нахиляється.'} ]},
        { n:'06', h2:'Гази', blocks:[
          {type:'grid', cells:[
            {kv:'Повітря', p:'Дешево й універсально. Кромка <b>азотується</b> — гірше зварюється потім.'},
            {kv:'Кисень', p:'Конструкційна сталь. Горіння додає енергії — швидше, кромка чистіша. Потребує гафнієвого електрода.'},
            {kv:'Азот', p:'Нержавійка й алюміній. Без окислення, чиста кромка.'},
            {kv:'H35 · 35 % H₂ + Ar', p:'Товста нержавійка й алюміній. Найвища якість, найдорожче.'} ]} ]} ]},

    laser: { color:'var(--beam)', eyebrow:'Термічне різання · сфокусоване світло', h1:'Лазер',
      lede:'Промінь фокусується в пляму часток міліметра, метал плавиться або випаровується, допоміжний газ видуває розплав. Ріже не тепло взагалі, а <b>щільність потужності в точці</b>.',
      sections: [
        { n:'01', h2:'Голова в розрізі', blocks:[
          {type:'fig', svg:'laserhead', caption:'Оптичний тракт: волокно → колімація → фокусування → захисне скло → сопло.'} ]},
        { n:'02', h2:'Волоконний проти CO₂', blocks:[
          {type:'grid', cells:[
            {kv:'Волоконний', h3:'Довжина хвилі ≈ 1,07 мкм', p:'Промінь ведеться <b>оптичним волокном</b> — немає дзеркал і юстування. Метали поглинають цю хвилю значно краще, тож ріже <b>мідь і латунь</b>, які CO₂ майже не бере. ККД у рази вищий.'},
            {kv:'CO₂', h3:'Довжина хвилі ≈ 10,6 мкм', p:'Промінь ведеться <b>системою дзеркал</b>, які треба юстувати й чистити. Натомість добре ріже <b>неметали</b> — акрил, дерево, шкіру.'} ]},
          {type:'note', html:'Сьогодні в металі майже всюди волоконний. Знати різницю варто, бо в клієнтів досі багато CO₂-машин у роботі.'} ]},
        { n:'03', h2:'Допоміжний газ — половина якості', blocks:[
          {type:'grid', cells:[
            {kv:'Кисень · конструкційна сталь', p:'Вступає в <b>екзотермічну реакцію</b> з залізом і сам додає енергії — ріже швидше й меншою потужністю. Кромка лишається <b>окисленою</b>.'},
            {kv:'Азот · нержавійка й алюміній', p:'Інертний, лише видуває розплав. Кромка <b>чиста, без окислення</b>, одразу під зварювання. Ціна: високий тиск і більша потужність.'},
            {kv:'Повітря', p:'Компроміс — дешево, якість посередині. Потребує дуже доброї підготовки: сухе й без масла.'},
            {kv:'Положення фокуса', p:'Для кисню зазвичай <b>на поверхні або вище</b>, для азоту <b>глибоко в матеріалі</b>, щоб розширити рез. Помилка тут → рез не наскрізь.'} ]} ]},
        { n:'04', h2:'Висота — ємнісна, не по напрузі', blocks:[
          {type:'p', html:'Тут принципова відмінність від плазми. Дуги немає, міряти нічого. Тому <b>сопло працює як обкладка конденсатора</b> відносно листа: чим ближче — тим більша ємність.'},
          {type:'callout', color:'var(--beam)', hd:'Наслідок', p:'Бризки на соплі чи тріснуте <b>керамічне кільце</b> ламають вимірювання. Симптом виглядає як «голова стрибає», а причина копійчана.'} ]},
        { n:'05', h2:'Що зношується', blocks:[
          {type:'chips', items:['захисне скло — розхідник №1','сопло','керамічне кільце','лінзи (рідко)','фільтри газу']},
          {type:'callout', color:'var(--beam)', hd:'Правило, яке рятує виїзд', p:'Якість <b>поступово</b> падає протягом тижня — це майже завжди <b>забруднене захисне скло</b>, а не вмирання джерела. Скло коштує копійки, джерело — як автомобіль.'} ]} ]},

    water: { color:'var(--water)', eyebrow:'Холодне різання · ерозія', h1:'Воднострумінь',
      lede:'Вода під тиском близько <b>4000 бар</b> розганяється в надзвуковий струмінь, підхоплює абразив і <b>стирає</b> матеріал. Єдина технологія без нагріву — а отже без зони термічного впливу й короблення.',
      sections: [
        { n:'01', h2:'Різальна голова', blocks:[
          {type:'fig', svg:'waterhead', caption:'Вода створює струмінь, абразив ріже. Чиста вода — тільки для м’яких матеріалів.'} ]},
        { n:'02', h2:'Дві геометричні особливості', blocks:[
          {type:'grid', cells:[
            {kv:'Конусність', h3:'Рез ширший зверху', p:'Струмінь втрачає енергію вниз, тому знизу зрізає менше. Компенсують <b>нахилом голови</b>. Швидше ріжеш → більша конусність.'},
            {kv:'Відставання струменя', h3:'Низ виходить пізніше за верх', p:'Струмінь не миттєвий: внизу він відстає. На <b>кутах і малих радіусах</b> це спотворює геометрію. Лікується сповільненням у кутах.'} ]} ]},
        { n:'03', h2:'Насос і тракт', blocks:[
          {type:'ul', items:[
            '<b>Інтенсифікаторний насос</b> — гідравліка тисне великим поршнем на малий, множачи тиск. Або <b>прямого приводу</b> — простіший, але нижчий тиск.',
            '<b>Ущільнення високого тиску</b> — регламентний розхідник, міняються за напрацюванням.',
            '<b>Зворотні клапани</b> — знос дає пульсацію тиску, видно по кромці.',
            '<b>Підготовка води</b> — пом’якшення й фільтрація. Жорстка вода вбиває сопло-отвір і ущільнення.',
            '<b>Ванна-вловлювач</b> під столом гасить струмінь після проходу.'] } ]},
        { n:'04', h2:'Чому це часто єдиний варіант', blocks:[
          {type:'p', html:'Холодний процес — <b>немає зони термічного впливу</b>. Не змінюється структура металу, не веде тонкий лист, можна різати вже загартовані деталі. Ріже майже все: метал, камінь, скло, композити, титан.'},
          {type:'callout', color:'var(--water)', hd:'Пробивання — найделікатніше місце', p:'У шаруватих і крихких матеріалах удар струменя може <b>розшарувати або сколоти</b> матеріал. Тому пробивають на <b>зниженому тиску</b> або з попередньо просвердленого отвору.'} ]} ]},

    oxy: { color:'var(--heat)', eyebrow:'Термічне різання · хімічна реакція', h1:'Кисневе різання',
      lede:'Єдина технологія, де ріже не машина, а <b>хімія</b>. Полум’я лише розігріває, а метал далі <b>горить у кисні</b> сам.',
      sections: [
        { n:'01', h2:'Як це працює', blocks:[
          {type:'fig', svg:'oxy', caption:'Підігрів доводить сталь приблизно до 900 °C, далі струмінь кисню підтримує горіння.'},
          {type:'ul', items:[
            '<b>Крок 1.</b> Підігрівне полум’я розігріває сталь до температури займання, близько 900 °C.',
            '<b>Крок 2.</b> Відкривається струмінь <b>чистого кисню</b>. Залізо починає горіти — екзотермічна реакція сама дає більшість тепла.',
            '<b>Крок 3.</b> Оксид заліза плавиться нижче, ніж саме залізо, і струмінь видуває його з різу.'] } ]},
        { n:'02', h2:'Чому тільки конструкційна сталь', blocks:[
          {type:'p', html:'Умова процесу: <b>оксид має плавитися нижче за сам метал</b>, інакше його не видути.'},
          {type:'grid', cells:[
            {kv:'Працює', h3:'Конструкційна й низьколегована сталь', p:'Оксид заліза плавиться нижче за залізо — тече й видувається. Товщини до 300 мм і більше.'},
            {kv:'Не працює', h3:'Нержавійка, алюміній', p:'Оксид хрому й оксид алюмінію <b>тугоплавкі</b> — утворюють кірку, яка гасить процес. Потрібні плазма, лазер або вода.'} ]} ]},
        { n:'03', h2:'Особливості в роботі', blocks:[
          {type:'ul', items:[
            '<b>Чистота кисню критична.</b> Падіння на відсоток помітно знижує швидкість і псує кромку.',
            '<b>Кромка дуже рівна</b> — на товстому металі якість краща за плазму.',
            '<b>Повільно.</b> Це нормально, така фізика процесу.',
            '<b>Пробивання довге й брудне</b> — за можливості починають від краю листа.',
            '<b>Багато пальників одночасно</b> — типово різати десяток однакових смуг паралельно.'] },
          {type:'callout', color:'var(--bad)', hd:'Безпека — тут найсерйозніше', p:'<b>Зворотний удар полум’я</b> у шланг — реальна аварія з вибухом. Причини: неправильні тиски, забруднений мундштук, несправні <b>зворотні клапани й вогнеперепинювачі</b>.'} ]} ]},

    mill: { color:'var(--mech)', eyebrow:'Механічна обробка · знімання стружки', h1:'Фрезерування, свердління, маркування',
      lede:'На різальних машинах це додаткові агрегати. Єдина група, де матеріал знімається <b>механічно</b>, а не плавиться чи стирається.',
      sections: [
        { n:'01', h2:'Чим це принципово відрізняється', blocks:[
          {type:'grid', cells:[
            {kv:'Сила', h3:'З’являється механічне навантаження', p:'Плазма й лазер не торкаються деталі. Свердло <b>тисне</b> — потрібні жорсткість, надійне притискання листа й міцна вісь Z.'},
            {kv:'Інструмент', h3:'Зношується поступово і тихо', p:'Затуплене свердло не подає сигналу — просто гріється, ламається або дає погану різьбу.'},
            {kv:'Охолодження', h3:'Без ЗОР інструмент гине', p:'Мастило-охолоджувальна рідина або мінімальне змащування. Немає подачі — свердло згорає за кілька отворів.'},
            {kv:'Стружка', h3:'Її треба кудись дівати', p:'Намотана стружка ламає свердло й псує різьбу. Звідси режими з виведенням інструмента.'} ]} ]},
        { n:'02', h2:'Що роблять ці агрегати', blocks:[
          {type:'ul', items:[
            '<b>Свердління</b> — отвори, точніші за плазмові, особливо малі діаметри, які плазмою не вийдуть через довжину врізання.',
            '<b>Нарізання різьби</b> — метчиком, одразу на машині. Найкрихкіша операція.',
            '<b>Маркування</b> — голкою або самою плазмою на зниженому струмі. Номери деталей, лінії згину.',
            '<b>Фрезерування скосу</b> — механічна альтернатива термічному скосу, де потрібна висока якість кромки.'] } ]},
        { n:'03', h2:'Два числа, які все визначають', blocks:[
          {type:'grid', cells:[
            {kv:'Швидкість різання', h3:'Наскільки швидко рухається кромка', p:'Задається матеріалом та інструментом. Забагато — інструмент згорає. Замало — налипання й погана поверхня.'},
            {kv:'Подача на зуб', h3:'Скільки знімає кожна кромка', p:'Забагато — злам. Замало — інструмент <b>тре замість різати</b>, гріється й тупиться швидше. Це контрінтуїтивно, тому й питають.'} ]},
          {type:'note', html:'Класична помилка новачка: «зменшу подачу, щоб не зламати». Насправді занизька подача вбиває інструмент швидше за зависоку.'} ]} ]},

    common: { color:'var(--steel)', eyebrow:'Однаково для всіх технологій', h1:'Спільне',
      lede:'Механіка машини, структура програми й правила порядку не залежать від того, чим саме ріжеш.',
      sections: [
        { n:'01', h2:'Будова машини', blocks:[
          {type:'grid', cells:[
            {kv:'Портал', h3:'Міст через стіл', p:'Приводиться сервоприводами <b>з обох боків</b>, вони мусять іти синхронно. Розсинхрон = перекіс порталу, геометрія летить.'},
            {kv:'Привід', h3:'Рейка-шестерня або ШВП', p:'На великих ходах рейка, на малих кулькові гвинти. Люфт дає биття контуру в кутах.'},
            {kv:'Вісь Z', h3:'Несе голову', p:'Майже завжди із <b>захистом від зіткнення</b> — при наїзді голова зривається, а не гне вісь.'},
            {kv:'Енкодери', h3:'Зворотний зв’язок по положенню', p:'Помилка стеження — привід не встигає за завданням. Причини: механічний опір, знос, параметри.'},
            {kv:'Стіл', h3:'Ламелі — витратний матеріал', p:'Їх поступово розрізає. Зношені перестають тримати деталь рівно, вона перекидається під голову.'},
            {kv:'Витяжка', h3:'Зонована або водяний стіл', p:'Відкривається лише зона під головою. Несправні заслінки = дим у цеху.'} ]} ]},
        { n:'02', h2:'Структура програми', blocks:[
          {type:'p', html:'Скелет однаковий скрізь: <b>шапка</b> один раз, <b>тіло</b> на кожен елемент, <b>кінцівка</b> один раз.'},
          {type:'table', head:['Правило','Чому'], rows:[
            ['Внутрішні контури перед зовнішнім','після відрізання зовнішнього деталь провалюється — усі наступні отвори в смітті'],
            ['Пробивання завжди у відході','пробивання лишає кратер; на готовій кромці це брак'],
            ['Компенсація вмикається на врізанні','увімкнена на контурі дає сходинку посеред різу'],
            ['Мінімум пробивань','пробивання зношує витратники сильніше за метри різу'],
            ['Перемички для дрібних деталей','інакше провалюються в стіл або перекидаються під голову'],
            ['Порядок розводить тепло','сусідні деталі поспіль перегрівають лист (не стосується води)'] ]} ]},
        { n:'03', h2:'Контроль висоти — три різні принципи', blocks:[
          {type:'grid', cells:[
            {kv:'Плазма', h3:'По напрузі дуги', p:'Струм стабілізований, напруга пропорційна довжині дуги. Знос витратників <b>збиває це вимірювання</b>.'},
            {kv:'Лазер', h3:'Ємнісний датчик', p:'Сопло як обкладка конденсатора. Бризки й тріснута кераміка ламають вимірювання.'},
            {kv:'Вода й кисень', h3:'Механічно або ємнісно', p:'У воді висота менш критична. У кисні висота підігріву тримається простішими засобами.'} ]} ]},
        { n:'04', h2:'Дистанційна діагностика', blocks:[
          {type:'ul', items:[
            'Резервна копія параметрів машини — <b>до</b> будь-якого втручання.',
            'Журнал аварій і історія — що передувало.',
            'Питання оператору: <b>що змінилося з учора</b>; коли почалося; щоразу чи інколи; який матеріал і товщина; що востаннє міняли.',
            'Найважливіше розділення: <b>це на кожній програмі чи тільки на одній.</b> Ця відповідь ділить проблему навпіл ще до підключення.'] } ]} ]}
  },

  faults: { eyebrow:'Довідник · симптом → причина', h1:'Несправності',
    lede:'Симптом не називає причину, але звужує її до одного-двох місць. Пошук і фільтри працюють одночасно.',
    ph:'Пошук: шлак, скіс, сопло, висота…', of:'з',
    head:['Технологія','Симптом','Ймовірна причина','Де шукати'],
    filters:{ all:'усі', plasma:'плазма', laser:'лазер', water:'вода', oxy:'кисень', mill:'фрези' },
    tags:{ prog:'програма', cons:'витратники', set:'параметри', mach:'машина', safe:'безпека' },
    names:{ plasma:'Плазма', laser:'Лазер', water:'Вода', oxy:'Кисень', mill:'Фрези', thermal:'Термічні', all:'Усі' } }
};

/* ============================= SLOVENČINA ============================= */
CONTENT.sk = {
  htmlLang: 'sk',
  brand: 'Šablóna servisného technika',
  sub: 'osobné poznámky · V. Kovba',
  foot: 'Osobné poznámky k príprave na pohovor · nejde o oficiálnu dokumentáciu výrobcu',
  tabs: { plasma:'Plazma', laser:'Laser', water:'Vodný lúč', oxy:'Autogén', mill:'Frézovanie', common:'Spoločné', faults:'Poruchy' },

  svg: {
    torch: { alt:'Rez plazmovým horákom', gas:'PLYN', swirl:'Vírivý krúžok', swirlSub:'vír → úkos na jednu stranu',
      electrode:'Elektróda (katóda −)', electrodeSub:'meď', nozzle:'Dýza', nozzleSub:'zužuje oblúk — podstata plazmy',
      hafnium:'Hafniová vložka', hafniumSub:'znesie kyslík', shield:'Ochranný kryt', shieldSub:'zachytáva rozstrek',
      arc:'Zúžený oblúk', work:'DIELEC (anóda +)' },
    pilot: { alt:'Pilotný a prenesený oblúk', t1:'1 · PILOTNÝ — anóda DÝZA', c1:'prúd → dýza', n1:'dielec ešte nie je v obvode',
      t2:'2 · PRENESENÝ — anóda DIELEC', c2:'prúd → dielec', n2:'dýza vypadla z obvodu' },
    thc: { alt:'Napätie oblúka podľa výšky', low:'NÍZKO', ok:'SPRÁVNE', high:'VYSOKO',
      r1:'dlhší oblúk = vyššie napätie', r2:'os Z dorovnáva výšku,', r3:'kým napätie nesedí so žiadanou' },
    sparks: { alt:'Smer iskier', fast:'PRÍLIŠ RÝCHLO', fast1:'iskry sa vlečú dozadu', fast2:'troska zdola, úkos',
      good:'SPRÁVNE', good1:'iskry takmer zvisle', slow:'PRÍLIŠ POMALY', slow1:'iskry odletujú nahor', slow2:'široká škára, troska zhora' },
    laserhead: { alt:'Rez laserovou hlavou', fiber:'VLÁKNO', gas:'PLYN', collim:'Kolimačná šošovka', collimSub:'urobí lúč rovnobežným',
      focus:'Zaostrovacia šošovka', focusSub:'zvedie do stopy < 0,3 mm', glass:'Ochranné sklo', glassSub:'najčastejšia príčina sťažností',
      nozzle:'Dýza + keramický krúžok', nozzleSub:'kapacitný snímač výšky', fp:'Ohnisko', fpSub:'poloha voči povrchu je kritická' },
    waterhead: { alt:'Rez vodnou hlavou', press:'voda 4000 bar', abr:'ABRAZÍVO', abrSub:'granát',
      orifice:'Tryska-otvor', orificeSub:'rubín / zafír / diamant · 0,2–0,4 mm', mix:'Zmiešavacia komora', mixSub:'lúč nasáva abrazívo',
      tube:'Zaostrovacia trubica', tubeSub:'karbid · opotrebuje sa do zvonu', taper:'Kužeľovitosť', taperSub:'škára je hore širšia' },
    oxy: { alt:'Princíp autogénneho rezania', fuel:'HORĽAVÝ PLYN', o2:'KYSLÍK', flame:'predhrievací plameň',
      jet:'prúd čistého O₂', blow:'oxid sa vyfukuje', tip:'Hubica', tipSub:'veniec predhrevu + stredový O₂',
      burn:'Železo horí v kyslíku', burnSub:'reakcia sama dá ~70 % tepla' }
  },

  pages: {
    plasma: { color:'var(--arc)', eyebrow:'Tepelné rezanie · elektrický oblúk', h1:'Plazma',
      lede:'Oblúk taví kov, zvírený plyn vyfukuje taveninu zo škáry. Bez plynu je to zváranie. Reže až kombinácia oboch.',
      sections: [
        { n:'01', h2:'Horák v reze', blocks:[
          {type:'fig', svg:'torch', caption:'Rez je symetrický — zobrazené sú obe polovice.'} ]},
        { n:'02', h2:'Spotrebný materiál', blocks:[
          {type:'note', html:'Životnosť sa počíta <b>nie v metroch rezu, ale v počte prepichov</b> — prepich ničí spotrebný materiál oveľa viac.'},
          {type:'grid', cells:[
            {kv:'Elektróda', h3:'Hafniová vložka v medi', p:'Katóda. Hafnium emituje elektróny a znesie kyslík. Opotrebuje sa <b>iónovým bombardovaním</b> — vzniká jamka a jej hĺbka je kritériom výmeny.'},
            {kv:'Vírivý krúžok', h3:'Krúžok so šikmými otvormi', p:'Zviri plyn, vír zúži a vycentruje oblúk. <b>Zdroj nesymetrického úkosu</b> — odtiaľ pravidlo smeru obchádzania kontúr.'},
            {kv:'Dýza', h3:'Zužuje oblúk', p:'Priemer otvoru je viazaný na prúd. Rozbije sa do oválu → širšia škára, väčší úkos, oblúk blúdi.'},
            {kv:'Ochranný kryt', h3:'Zachytáva rozstrek', p:'Tvaruje sekundárny prúd. Zanesie sa, otvor zarastie — prúd sa nakloní a rez ide nabok aj pri dobrej dýze.'} ]} ]},
        { n:'03', h2:'Pilotný → prenesený oblúk', blocks:[
          {type:'p', html:'Oblúk sa zapáli <b>raz</b> a horí nepretržite. Mení sa len anóda: najprv dýza, potom dielec.'},
          {type:'fig', svg:'pilot'},
          {type:'callout', hd:'Dôsledok pre servis', p:'Ak k prenosu nedôjde, pilot horí <b>do dýzy a vypáli ju za pár sekúnd</b>. Zákazník sa sťažuje, že „dýzy nevydržia", ale skutočná príčina je výška IHS, ukostrenie alebo tlak plynu.'} ]},
        { n:'04', h2:'THC — výška podľa napätia oblúka', blocks:[
          {type:'p', html:'Zdroj stabilizuje <b>prúd</b>, preto je napätie voľné a priamo závisí od dĺžky oblúka. Meriame napätie — poznáme výšku.'},
          {type:'fig', svg:'thc', caption:'Hodnoty sú orientačné — skutočné závisia od prúdu, plynu a hrúbky.'},
          {type:'callout', hd:'Nástraha', p:'Keď THC „šalie", častejšie ide o <b>opotrebovaný spotrebný materiál</b> než o snímač: opotrebenie zmení napätie pri rovnakej výške.'} ]},
        { n:'05', h2:'Čítanie iskier', blocks:[
          {type:'fig', svg:'sparks', caption:'Šípka hore je smer pohybu. Pozeráš na iskry, ale vidíš tvar oblúka: zaostáva a nakláňa sa.'} ]},
        { n:'06', h2:'Plyny', blocks:[
          {type:'grid', cells:[
            {kv:'Vzduch', p:'Lacný a univerzálny. Hrana sa <b>nitriduje</b> — horšie sa potom zvára.'},
            {kv:'Kyslík', p:'Konštrukčná oceľ. Horenie pridáva energiu — rýchlejšie, čistejšia hrana. Vyžaduje hafniovú elektródu.'},
            {kv:'Dusík', p:'Nerez a hliník. Bez oxidácie, čistá hrana.'},
            {kv:'H35 · 35 % H₂ + Ar', p:'Hrubý nerez a hliník. Najvyššia kvalita, najdrahšie.'} ]} ]} ]},

    laser: { color:'var(--beam)', eyebrow:'Tepelné rezanie · sústredené svetlo', h1:'Laser',
      lede:'Lúč sa zaostrí do stopy zlomkov milimetra, kov sa taví alebo odparuje a asistenčný plyn vyfukuje taveninu. Nereže teplo ako také, ale <b>hustota výkonu v bode</b>.',
      sections: [
        { n:'01', h2:'Hlava v reze', blocks:[
          {type:'fig', svg:'laserhead', caption:'Optická dráha: vlákno → kolimácia → zaostrenie → ochranné sklo → dýza.'} ]},
        { n:'02', h2:'Vláknový verzus CO₂', blocks:[
          {type:'grid', cells:[
            {kv:'Vláknový', h3:'Vlnová dĺžka ≈ 1,07 µm', p:'Lúč sa vedie <b>optickým vláknom</b> — žiadne zrkadlá a justáž. Kovy túto vlnu pohlcujú oveľa lepšie, preto reže aj <b>meď a mosadz</b>, ktoré CO₂ takmer neberie.'},
            {kv:'CO₂', h3:'Vlnová dĺžka ≈ 10,6 µm', p:'Lúč vedie <b>sústava zrkadiel</b>, ktoré treba justovať a čistiť. Zato dobre reže <b>nekovy</b> — akrylát, drevo, kožu.'} ]},
          {type:'note', html:'Dnes je v kove takmer všade vláknový. Rozdiel je dobré poznať, lebo u zákazníkov je stále veľa CO₂ strojov v prevádzke.'} ]},
        { n:'03', h2:'Asistenčný plyn — polovica kvality', blocks:[
          {type:'grid', cells:[
            {kv:'Kyslík · konštrukčná oceľ', p:'Vstupuje do <b>exotermickej reakcie</b> so železom a sám pridáva energiu — reže rýchlejšie a menším výkonom. Hrana ostáva <b>oxidovaná</b>.'},
            {kv:'Dusík · nerez a hliník', p:'Inertný, len vyfukuje taveninu. Hrana je <b>čistá, bez oxidácie</b>, hneď pod zvar. Cena: vysoký tlak a vyšší výkon.'},
            {kv:'Vzduch', p:'Kompromis — lacno, kvalita v strede. Vyžaduje veľmi dobrú prípravu: suchý a bez oleja.'},
            {kv:'Poloha ohniska', p:'Pri kyslíku zvyčajne <b>na povrchu alebo vyššie</b>, pri dusíku <b>hlboko v materiáli</b>, aby sa škára rozšírila. Chyba tu → rez nejde naskrz.'} ]} ]},
        { n:'04', h2:'Výška — kapacitne, nie podľa napätia', blocks:[
          {type:'p', html:'Tu je zásadný rozdiel oproti plazme. Oblúk nie je, nie je čo merať. Preto <b>dýza funguje ako doska kondenzátora</b> voči plechu: čím bližšie, tým väčšia kapacita.'},
          {type:'callout', color:'var(--beam)', hd:'Dôsledok', p:'Rozstrek na dýze alebo prasknutý <b>keramický krúžok</b> pokazia meranie. Príznak vyzerá ako „hlava skáče", pričom príčina stojí pár eur.'} ]},
        { n:'05', h2:'Čo sa opotrebuje', blocks:[
          {type:'chips', items:['ochranné sklo — spotreba č. 1','dýza','keramický krúžok','šošovky (zriedka)','filtre plynu']},
          {type:'callout', color:'var(--beam)', hd:'Pravidlo, ktoré ušetrí výjazd', p:'Ak kvalita klesá <b>postupne</b> počas týždňa, je to takmer vždy <b>znečistené ochranné sklo</b>, nie umierajúci zdroj. Sklo stojí pár eur, zdroj ako auto.'} ]} ]},

    water: { color:'var(--water)', eyebrow:'Studené rezanie · erózia', h1:'Vodný lúč',
      lede:'Voda pod tlakom okolo <b>4000 bar</b> sa zrýchli na nadzvukový lúč, strhne abrazívo a materiál <b>obrusuje</b>. Jediná technológia bez ohrevu — teda bez tepelne ovplyvnenej oblasti a bez deformácie.',
      sections: [
        { n:'01', h2:'Rezacia hlava', blocks:[
          {type:'fig', svg:'waterhead', caption:'Voda tvorí lúč, abrazívo reže. Čistá voda len na mäkké materiály.'} ]},
        { n:'02', h2:'Dve geometrické zvláštnosti', blocks:[
          {type:'grid', cells:[
            {kv:'Kužeľovitosť', h3:'Škára je hore širšia', p:'Lúč stráca energiu smerom dole, preto dole uberá menej. Kompenzuje sa <b>naklonením hlavy</b>. Rýchlejšie rezanie → väčšia kužeľovitosť.'},
            {kv:'Zaostávanie lúča', h3:'Spodok vychádza neskôr ako vrch', p:'Lúč nie je okamžitý: dole zaostáva. Na <b>rohoch a malých polomeroch</b> to deformuje geometriu. Rieši sa spomalením v rohoch.'} ]} ]},
        { n:'03', h2:'Čerpadlo a dráha', blocks:[
          {type:'ul', items:[
            '<b>Intenzifikátorové čerpadlo</b> — hydraulika tlačí veľkým piestom na malý a násobí tlak. Alebo <b>priamy pohon</b> — jednoduchší, ale nižší tlak.',
            '<b>Vysokotlakové tesnenia</b> — plánovaná spotreba, menia sa podľa motohodín.',
            '<b>Spätné ventily</b> — opotrebenie spôsobí pulzáciu tlaku, vidno to na hrane.',
            '<b>Úprava vody</b> — zmäkčovanie a filtrácia. Tvrdá voda ničí trysku aj tesnenia.',
            '<b>Zachytávacia vaňa</b> pod stolom pohltí lúč po prechode.'] } ]},
        { n:'04', h2:'Prečo býva jedinou možnosťou', blocks:[
          {type:'p', html:'Studený proces — <b>žiadna tepelne ovplyvnená oblasť</b>. Nemení sa štruktúra kovu, neskrúti sa tenký plech, dajú sa rezať už kalené diely. Reže takmer všetko: kov, kameň, sklo, kompozity, titán.'},
          {type:'callout', color:'var(--water)', hd:'Prepich je najcitlivejšie miesto', p:'Vo vrstvených a krehkých materiáloch môže náraz lúča materiál <b>rozvrstviť alebo odštiepiť</b>. Preto sa prepichuje <b>zníženým tlakom</b> alebo z predvŕtaného otvoru.'} ]} ]},

    oxy: { color:'var(--heat)', eyebrow:'Tepelné rezanie · chemická reakcia', h1:'Autogénne rezanie',
      lede:'Jediná technológia, kde nereže stroj, ale <b>chémia</b>. Plameň len predhreje a kov ďalej <b>horí v kyslíku</b> sám.',
      sections: [
        { n:'01', h2:'Ako to funguje', blocks:[
          {type:'fig', svg:'oxy', caption:'Predhrev dostane oceľ na približne 900 °C, ďalej horenie udržuje prúd kyslíka.'},
          {type:'ul', items:[
            '<b>Krok 1.</b> Predhrievací plameň zohreje oceľ na zápalnú teplotu, približne 900 °C.',
            '<b>Krok 2.</b> Otvorí sa prúd <b>čistého kyslíka</b>. Železo začne horieť — exotermická reakcia sama dodá väčšinu tepla.',
            '<b>Krok 3.</b> Oxid železa sa taví nižšie ako samotné železo a prúd ho vyfúkne zo škáry.'] } ]},
        { n:'02', h2:'Prečo len konštrukčná oceľ', blocks:[
          {type:'p', html:'Podmienka procesu: <b>oxid sa musí taviť nižšie ako samotný kov</b>, inak sa nedá vyfúknuť.'},
          {type:'grid', cells:[
            {kv:'Funguje', h3:'Konštrukčná a nízkolegovaná oceľ', p:'Oxid železa sa taví nižšie ako železo — tečie a vyfúkne sa. Hrúbky do 300 mm aj viac.'},
            {kv:'Nefunguje', h3:'Nerez, hliník', p:'Oxid chrómu a oxid hliníka sú <b>žiaruvzdorné</b> — vytvoria kôru, ktorá proces udusí. Treba plazmu, laser alebo vodu.'} ]} ]},
        { n:'03', h2:'Zvláštnosti v prevádzke', blocks:[
          {type:'ul', items:[
            '<b>Čistota kyslíka je kritická.</b> Pokles o percento citeľne zníži rýchlosť a pokazí hranu.',
            '<b>Hrana je veľmi rovná</b> — na hrubom materiáli kvalitnejšia než plazma.',
            '<b>Pomaly.</b> Je to normálne, taká je fyzika procesu.',
            '<b>Prepich je dlhý a špinavý</b> — ak sa dá, začína sa od okraja plechu.',
            '<b>Viac horákov naraz</b> — typicky rezať desať rovnakých pásov paralelne.'] },
          {type:'callout', color:'var(--bad)', hd:'Bezpečnosť — tu je najvážnejšia', p:'<b>Spätný šľah plameňa</b> do hadice je reálna havária s výbuchom. Príčiny: nesprávne tlaky, znečistená hubica, nefunkčné <b>spätné ventily a poistky proti šľahnutiu</b>.'} ]} ]},

    mill: { color:'var(--mech)', eyebrow:'Mechanické obrábanie · odoberanie triesky', h1:'Frézovanie, vŕtanie, značenie',
      lede:'Na rezacích strojoch sú to prídavné agregáty. Jediná skupina, kde sa materiál odoberá <b>mechanicky</b>, nie tavením či obrusovaním.',
      sections: [
        { n:'01', h2:'V čom je zásadný rozdiel', blocks:[
          {type:'grid', cells:[
            {kv:'Sila', h3:'Vzniká mechanické zaťaženie', p:'Plazma ani laser sa dielca nedotýkajú. Vrták <b>tlačí</b> — treba tuhosť, spoľahlivé pritlačenie plechu a pevnú os Z.'},
            {kv:'Nástroj', h3:'Opotrebuje sa postupne a potichu', p:'Tupý vrták nedá signál — len sa hreje, zlomí sa alebo urobí zlý závit.'},
            {kv:'Chladenie', h3:'Bez chladiva nástroj zahynie', p:'Chladiaca kvapalina alebo minimálne mazanie. Bez prívodu vrták zhorí za pár otvorov.'},
            {kv:'Trieska', h3:'Treba ju niekam dostať', p:'Namotaná trieska zlomí vrták a pokazí závit. Odtiaľ režimy s vyvedením nástroja.'} ]} ]},
        { n:'02', h2:'Čo tieto agregáty robia', blocks:[
          {type:'ul', items:[
            '<b>Vŕtanie</b> — otvory presnejšie než plazmové, najmä malé priemery, ktoré plazmou nevyjdú pre dĺžku nábehu.',
            '<b>Rezanie závitov</b> — závitníkom priamo na stroji. Najkrehkejšia operácia.',
            '<b>Značenie</b> — ihlou alebo samotnou plazmou na zníženom prúde. Čísla dielcov, ohybové čiary.',
            '<b>Frézovanie úkosu</b> — mechanická alternatíva tepelného úkosu tam, kde treba vysokú kvalitu hrany.'] } ]},
        { n:'03', h2:'Dve čísla, ktoré rozhodujú o všetkom', blocks:[
          {type:'grid', cells:[
            {kv:'Rezná rýchlosť', h3:'Ako rýchlo sa pohybuje ostrie', p:'Dané materiálom a nástrojom. Priveľa — nástroj zhorí. Primálo — nalepovanie a zlý povrch.'},
            {kv:'Posuv na zub', h3:'Koľko odoberie každé ostrie', p:'Priveľa — zlom. Primálo — nástroj <b>trie namiesto rezania</b>, hreje sa a tupí rýchlejšie. Je to kontraintuitívne, preto sa to pýtajú.'} ]},
          {type:'note', html:'Klasická chyba začiatočníka: „zmenším posuv, aby som nezlomil". Príliš malý posuv ničí nástroj rýchlejšie než priveľký.'} ]} ]},

    common: { color:'var(--steel)', eyebrow:'Rovnako pre všetky technológie', h1:'Spoločné',
      lede:'Mechanika stroja, štruktúra programu a pravidlá poradia nezávisia od toho, čím sa reže.',
      sections: [
        { n:'01', h2:'Stavba stroja', blocks:[
          {type:'grid', cells:[
            {kv:'Portál', h3:'Most cez stôl', p:'Poháňaný servopohonmi <b>z oboch strán</b>, musia ísť synchrónne. Rozsynchronizovanie = šikmý portál, geometria ide dolu vodou.'},
            {kv:'Pohon', h3:'Hrebeň-pastorok alebo guľôčková skrutka', p:'Na dlhých dráhach hrebeň, na krátkych skrutka. Vôľa spôsobí hádzanie kontúry v rohoch.'},
            {kv:'Os Z', h3:'Nesie hlavu', p:'Takmer vždy s <b>ochranou proti kolízii</b> — pri náraze sa hlava odtrhne namiesto ohnutia osi.'},
            {kv:'Enkodéry', h3:'Spätná väzba polohy', p:'Chyba sledovania — pohon nestíha zadanie. Príčiny: mechanický odpor, opotrebenie, parametre.'},
            {kv:'Stôl', h3:'Lamely sú spotrebný materiál', p:'Postupne sa prerežú. Opotrebované prestanú držať dielec rovno a ten sa preklopí pod hlavu.'},
            {kv:'Odsávanie', h3:'Zónové alebo vodný stôl', p:'Otvára sa len zóna pod hlavou. Nefunkčné klapky = dym v hale.'} ]} ]},
        { n:'02', h2:'Štruktúra programu', blocks:[
          {type:'p', html:'Kostra je všade rovnaká: <b>hlavička</b> raz, <b>telo</b> na každý prvok, <b>záver</b> raz.'},
          {type:'table', head:['Pravidlo','Prečo'], rows:[
            ['Vnútorné kontúry pred vonkajšou','po odrezaní vonkajšej dielec prepadne — všetky ďalšie otvory idú do šrotu'],
            ['Prepich vždy v odpade','prepich nechá kráter; na hotovej hrane je to nepodarok'],
            ['Korekcia sa zapína na nábehu','zapnutá na kontúre urobí schod uprostred rezu'],
            ['Čo najmenej prepichov','prepich opotrebuje spotrebný materiál viac než metre rezu'],
            ['Mostíky pri drobných dielcoch','inak prepadnú do stola alebo sa preklopia pod hlavu'],
            ['Poradie rozvádza teplo','susedné dielce za sebou prehrejú plech (netýka sa vody)'] ]} ]},
        { n:'03', h2:'Riadenie výšky — tri rôzne princípy', blocks:[
          {type:'grid', cells:[
            {kv:'Plazma', h3:'Podľa napätia oblúka', p:'Prúd je stabilizovaný, napätie je úmerné dĺžke oblúka. Opotrebenie <b>toto meranie rozhodí</b>.'},
            {kv:'Laser', h3:'Kapacitný snímač', p:'Dýza ako doska kondenzátora. Rozstrek a prasknutá keramika pokazia meranie.'},
            {kv:'Voda a autogén', h3:'Mechanicky alebo kapacitne', p:'Pri vode je výška menej kritická. Pri autogéne sa výška predhrevu drží jednoduchšími prostriedkami.'} ]} ]},
        { n:'04', h2:'Diaľková diagnostika', blocks:[
          {type:'ul', items:[
            'Záloha parametrov stroja — <b>pred</b> akýmkoľvek zásahom.',
            'Denník alarmov a história — čo predchádzalo.',
            'Otázky obsluhe: <b>čo sa zmenilo od včera</b>; kedy to začalo; vždy alebo občas; aký materiál a hrúbka; čo sa naposledy menilo.',
            'Najdôležitejšie rozdelenie: <b>je to na každom programe alebo len na jednom.</b> Táto odpoveď rozdelí problém na polovicu ešte pred pripojením.'] } ]} ]}
  },

  faults: { eyebrow:'Príručka · príznak → príčina', h1:'Poruchy',
    lede:'Príznak nepomenuje príčinu, ale zúži ju na jedno-dve miesta. Vyhľadávanie a filtre fungujú súčasne.',
    ph:'Hľadať: troska, úkos, dýza, výška…', of:'z',
    head:['Technológia','Príznak','Pravdepodobná príčina','Kde hľadať'],
    filters:{ all:'všetky', plasma:'plazma', laser:'laser', water:'voda', oxy:'autogén', mill:'frézy' },
    tags:{ prog:'program', cons:'spotreba', set:'parametre', mach:'stroj', safe:'bezpečnosť' },
    names:{ plasma:'Plazma', laser:'Laser', water:'Voda', oxy:'Autogén', mill:'Frézy', thermal:'Tepelné', all:'Všetky' } }
};

/* ============================== ENGLISH ============================== */
CONTENT.en = {
  htmlLang: 'en',
  brand: 'Service technician cheat sheet',
  sub: 'personal notes · V. Kovba',
  foot: 'Personal study notes prepared for an interview · not official manufacturer documentation',
  tabs: { plasma:'Plasma', laser:'Laser', water:'Waterjet', oxy:'Oxy-fuel', mill:'Milling', common:'Common', faults:'Faults' },

  svg: {
    torch: { alt:'Plasma torch cross-section', gas:'GAS', swirl:'Swirl ring', swirlSub:'swirl → bevel on one side',
      electrode:'Electrode (cathode −)', electrodeSub:'copper', nozzle:'Nozzle', nozzleSub:'constricts the arc — the point of plasma',
      hafnium:'Hafnium insert', hafniumSub:'survives oxygen', shield:'Shield cap', shieldSub:'catches spatter',
      arc:'Constricted arc', work:'WORKPIECE (anode +)' },
    pilot: { alt:'Pilot and transferred arc', t1:'1 · PILOT — anode is the NOZZLE', c1:'current → nozzle', n1:'plate not in the circuit yet',
      t2:'2 · TRANSFERRED — anode is the PLATE', c2:'current → plate', n2:'nozzle drops out of the circuit' },
    thc: { alt:'Arc voltage versus torch height', low:'TOO LOW', ok:'CORRECT', high:'TOO HIGH',
      r1:'longer arc = higher voltage', r2:'the Z axis corrects height', r3:'until voltage matches the setpoint' },
    sparks: { alt:'Spark direction', fast:'TOO FAST', fast1:'sparks trail backwards', fast2:'dross below, bevel',
      good:'CORRECT', good1:'sparks almost vertical', slow:'TOO SLOW', slow1:'sparks spray upwards', slow2:'wide kerf, top dross' },
    laserhead: { alt:'Laser cutting head cross-section', fiber:'FIBRE', gas:'GAS', collim:'Collimating lens', collimSub:'makes the beam parallel',
      focus:'Focusing lens', focusSub:'spot under 0.3 mm', glass:'Protective glass', glassSub:'most common cause of complaints',
      nozzle:'Nozzle + ceramic ring', nozzleSub:'capacitive height sensor', fp:'Focal position', fpSub:'position relative to surface is critical' },
    waterhead: { alt:'Waterjet cutting head cross-section', press:'water at 4000 bar', abr:'ABRASIVE', abrSub:'garnet',
      orifice:'Orifice', orificeSub:'ruby / sapphire / diamond · 0.2–0.4 mm', mix:'Mixing chamber', mixSub:'jet draws in abrasive',
      tube:'Focusing tube', tubeSub:'carbide · wears to a bell', taper:'Taper', taperSub:'kerf is wider at the top' },
    oxy: { alt:'Oxy-fuel cutting principle', fuel:'FUEL GAS', o2:'OXYGEN', flame:'preheat flame',
      jet:'pure O₂ jet', blow:'oxide blown out', tip:'Cutting tip', tipSub:'preheat ring + central O₂ bore',
      burn:'Iron burns in oxygen', burnSub:'the reaction supplies ~70 % of the heat' }
  },

  pages: {
    plasma: { color:'var(--arc)', eyebrow:'Thermal cutting · electric arc', h1:'Plasma',
      lede:'The arc melts the metal and the swirled gas blows the melt out. Remove the gas and you are welding. Only the combination cuts.',
      sections: [
        { n:'01', h2:'Torch cross-section', blocks:[
          {type:'fig', svg:'torch', caption:'The section is symmetrical — both halves are shown.'} ]},
        { n:'02', h2:'Consumables', blocks:[
          {type:'note', html:'Consumable life is counted <b>in pierces, not in metres cut</b> — piercing wears them far harder than cutting does.'},
          {type:'grid', cells:[
            {kv:'Electrode', h3:'Hafnium insert in copper', p:'The cathode. Hafnium emits electrons and survives oxygen. It wears through <b>ion bombardment</b> — a pit forms, and pit depth is the replacement criterion.'},
            {kv:'Swirl ring', h3:'Ring with angled holes', p:'Spins the gas; the vortex constricts and centres the arc. It is the <b>source of the one-sided bevel</b>, which is where the contour direction rule comes from.'},
            {kv:'Nozzle', h3:'Constricts the arc', p:'Orifice diameter is tied to the current. It wears oval → wider kerf, more bevel, wandering arc.'},
            {kv:'Shield cap', h3:'Takes the spatter', p:'Shapes the secondary flow. Once it clogs, the flow skews and the cut drifts even with a good nozzle.'} ]} ]},
        { n:'03', h2:'Pilot → transferred arc', blocks:[
          {type:'p', html:'The arc is struck <b>once</b> and burns continuously. Only the anode changes: first the nozzle, then the workpiece.'},
          {type:'fig', svg:'pilot'},
          {type:'callout', hd:'What this means in service', p:'If transfer fails, the pilot keeps burning <b>into the nozzle and destroys it in seconds</b>. The customer reports that "nozzles do not last", but the real cause is IHS height, the work lead, or gas pressure.'} ]},
        { n:'04', h2:'THC — height from arc voltage', blocks:[
          {type:'p', html:'The power source regulates <b>current</b>, so voltage is free and tracks arc length directly. Measure the voltage and you know the height.'},
          {type:'fig', svg:'thc', caption:'Figures are indicative — real setpoints depend on current, gas and thickness.'},
          {type:'callout', hd:'The trap', p:'A THC that "goes mad" usually means <b>worn consumables</b> rather than a failed sensor: wear shifts the arc voltage at the same height.'} ]},
        { n:'05', h2:'Reading the sparks', blocks:[
          {type:'fig', svg:'sparks', caption:'The arrow shows travel direction. You are looking at sparks, but what you see is the shape of the arc: it lags and tilts.'} ]},
        { n:'06', h2:'Gases', blocks:[
          {type:'grid', cells:[
            {kv:'Air', p:'Cheap and universal. The edge becomes <b>nitrided</b> — harder to weld afterwards.'},
            {kv:'Oxygen', p:'Mild steel. Combustion adds energy — faster, cleaner edge. Requires a hafnium electrode.'},
            {kv:'Nitrogen', p:'Stainless and aluminium. No oxidation, clean edge.'},
            {kv:'H35 · 35 % H₂ + Ar', p:'Thick stainless and aluminium. Highest quality, highest cost.'} ]} ]} ]},

    laser: { color:'var(--beam)', eyebrow:'Thermal cutting · focused light', h1:'Laser',
      lede:'The beam is focused to a spot a fraction of a millimetre across, the metal melts or vaporises, and assist gas blows the melt out. What cuts is not heat in general but <b>power density at a point</b>.',
      sections: [
        { n:'01', h2:'Head cross-section', blocks:[
          {type:'fig', svg:'laserhead', caption:'Optical path: fibre → collimation → focusing → protective glass → nozzle.'} ]},
        { n:'02', h2:'Fibre versus CO₂', blocks:[
          {type:'grid', cells:[
            {kv:'Fibre', h3:'Wavelength ≈ 1.07 µm', p:'The beam travels in an <b>optical fibre</b> — no mirrors, no alignment. Metals absorb this wavelength far better, so it also cuts <b>copper and brass</b>, which CO₂ barely touches.'},
            {kv:'CO₂', h3:'Wavelength ≈ 10.6 µm', p:'The beam is steered by a <b>mirror train</b> that needs alignment and cleaning. In return it cuts <b>non-metals</b> well — acrylic, wood, leather.'} ]},
          {type:'note', html:'In metal, fibre is now almost universal. The difference is still worth knowing, because plenty of CO₂ machines remain in service at customers.'} ]},
        { n:'03', h2:'Assist gas — half the quality', blocks:[
          {type:'grid', cells:[
            {kv:'Oxygen · mild steel', p:'Enters an <b>exothermic reaction</b> with iron and adds energy itself — faster, and at lower power. The edge is left <b>oxidised</b>.'},
            {kv:'Nitrogen · stainless and aluminium', p:'Inert; it only blows the melt out. The edge is <b>clean and oxide-free</b>, ready to weld. The cost is high pressure and more power.'},
            {kv:'Air', p:'A compromise — cheap, quality in between. Demands very good preparation: dry and oil-free.'},
            {kv:'Focal position', p:'With oxygen, usually <b>at or above the surface</b>; with nitrogen, <b>deep in the material</b> to widen the kerf. Get it wrong and the cut does not go through.'} ]} ]},
        { n:'04', h2:'Height is capacitive, not voltage-based', blocks:[
          {type:'p', html:'This is the fundamental difference from plasma. There is no arc, so there is nothing to measure. Instead the <b>nozzle acts as a capacitor plate</b> against the sheet: the closer it sits, the higher the capacitance.'},
          {type:'callout', color:'var(--beam)', hd:'Consequence', p:'Spatter on the nozzle or a cracked <b>ceramic ring</b> breaks the measurement. The symptom looks like "the head is jumping", while the cause costs a few euros.'} ]},
        { n:'05', h2:'What wears out', blocks:[
          {type:'chips', items:['protective glass — consumable no. 1','nozzle','ceramic ring','lenses (rarely)','gas filters']},
          {type:'callout', color:'var(--beam)', hd:'The rule that saves a site visit', p:'Quality degrading <b>gradually</b> over a week is almost always <b>dirty protective glass</b>, not a dying source. The glass costs pennies; the source costs as much as a car.'} ]} ]},

    water: { color:'var(--water)', eyebrow:'Cold cutting · erosion', h1:'Waterjet',
      lede:'Water at roughly <b>4000 bar</b> accelerates into a supersonic jet, picks up abrasive and <b>erodes</b> the material away. The only technology without heat — and therefore without a heat-affected zone or distortion.',
      sections: [
        { n:'01', h2:'Cutting head', blocks:[
          {type:'fig', svg:'waterhead', caption:'Water makes the jet; abrasive does the cutting. Pure water is for soft materials only.'} ]},
        { n:'02', h2:'Two geometric quirks', blocks:[
          {type:'grid', cells:[
            {kv:'Taper', h3:'Kerf is wider at the top', p:'The jet loses energy on the way down, so it removes less at the bottom. Compensated by <b>tilting the head</b>. Cut faster and taper increases.'},
            {kv:'Jet lag', h3:'The bottom exits later than the top', p:'The jet is not instantaneous: the lower part trails. On <b>corners and small radii</b> this distorts the geometry. Cured by slowing down in corners.'} ]} ]},
        { n:'03', h2:'Pump and fluid path', blocks:[
          {type:'ul', items:[
            '<b>Intensifier pump</b> — hydraulics push a large piston against a small one, multiplying pressure. Or <b>direct drive</b> — simpler, but lower pressure.',
            '<b>High-pressure seals</b> — a scheduled consumable, replaced by running hours.',
            '<b>Check valves</b> — wear produces pressure pulsation, visible on the cut edge.',
            '<b>Water treatment</b> — softening and filtration. Hard water destroys the orifice and the seals.',
            '<b>Catcher tank</b> under the table absorbs the jet after it passes through.'] } ]},
        { n:'04', h2:'Why it is often the only option', blocks:[
          {type:'p', html:'A cold process means <b>no heat-affected zone</b>. The metal structure is unchanged, thin sheet does not distort, and already-hardened parts can be cut. It cuts almost anything: metal, stone, glass, composites, titanium.'},
          {type:'callout', color:'var(--water)', hd:'Piercing is the delicate part', p:'In layered and brittle materials the impact can <b>delaminate or chip</b> the workpiece. So piercing is done at <b>reduced pressure</b> or from a pre-drilled hole.'} ]} ]},

    oxy: { color:'var(--heat)', eyebrow:'Thermal cutting · chemical reaction', h1:'Oxy-fuel cutting',
      lede:'The only technology where the cutting is done by <b>chemistry</b> rather than by the machine. The flame only preheats; after that the metal <b>burns in oxygen</b> on its own.',
      sections: [
        { n:'01', h2:'How it works', blocks:[
          {type:'fig', svg:'oxy', caption:'Preheat brings the steel to around 900 °C, after which the oxygen jet sustains combustion.'},
          {type:'ul', items:[
            '<b>Step 1.</b> The preheat flame brings the steel to ignition temperature, around 900 °C.',
            '<b>Step 2.</b> The <b>pure oxygen</b> jet opens. The iron starts to burn — an exothermic reaction that supplies most of the heat itself.',
            '<b>Step 3.</b> Iron oxide melts lower than iron itself, and the jet blows it out of the kerf.'] } ]},
        { n:'02', h2:'Why mild steel only', blocks:[
          {type:'p', html:'The condition for the process: <b>the oxide must melt below the metal itself</b>, otherwise it cannot be blown away.'},
          {type:'grid', cells:[
            {kv:'Works', h3:'Mild and low-alloy steel', p:'Iron oxide melts below iron — it flows and blows out. Thicknesses of 300 mm and beyond.'},
            {kv:'Does not work', h3:'Stainless, aluminium', p:'Chromium oxide and alumina are <b>refractory</b> — they form a crust that smothers the process. Plasma, laser or waterjet is needed.'} ]} ]},
        { n:'03', h2:'What it is like in practice', blocks:[
          {type:'ul', items:[
            '<b>Oxygen purity is critical.</b> A drop of one per cent noticeably cuts speed and spoils the edge.',
            '<b>The edge is very square</b> — on thick material, better quality than plasma.',
            '<b>It is slow.</b> That is normal; it is the physics of the process.',
            '<b>Piercing is long and messy</b> — where possible, cutting starts from the plate edge.',
            '<b>Many torches at once</b> — typically cutting ten identical strips in parallel.'] },
          {type:'callout', color:'var(--bad)', hd:'Safety matters most here', p:'A <b>flashback</b> into the hose is a real accident with an explosion. Causes: wrong pressures, a fouled tip, and failed <b>check valves and flashback arrestors</b>.'} ]} ]},

    mill: { color:'var(--mech)', eyebrow:'Machining · chip removal', h1:'Milling, drilling, marking',
      lede:'On cutting machines these are add-on units. The only group where material is removed <b>mechanically</b> rather than melted or eroded away.',
      sections: [
        { n:'01', h2:'What makes it fundamentally different', blocks:[
          {type:'grid', cells:[
            {kv:'Force', h3:'Mechanical load appears', p:'Plasma and laser never touch the part. A drill <b>pushes</b> — which demands rigidity, solid sheet clamping and a strong Z axis.'},
            {kv:'Tool', h3:'Wears gradually and silently', p:'A blunt drill gives no warning — it simply heats up, snaps, or produces a bad thread.'},
            {kv:'Coolant', h3:'Without it the tool dies', p:'Cutting fluid or minimum-quantity lubrication. With no supply, a drill burns out within a few holes.'},
            {kv:'Chips', h3:'They have to go somewhere', p:'Wound-up swarf snaps drills and ruins threads. Hence peck cycles that retract the tool.'} ]} ]},
        { n:'02', h2:'What these units do', blocks:[
          {type:'ul', items:[
            '<b>Drilling</b> — holes more accurate than plasma can manage, especially small diameters that plasma cannot produce at all because of lead-in length.',
            '<b>Tapping</b> — threads cut on the machine itself. The most fragile operation there is.',
            '<b>Marking</b> — with a pin marker, or with the plasma itself at reduced current. Part numbers, bend lines.',
            '<b>Bevel milling</b> — a mechanical alternative to thermal bevelling where edge quality has to be high.'] } ]},
        { n:'03', h2:'Two numbers decide everything', blocks:[
          {type:'grid', cells:[
            {kv:'Cutting speed', h3:'How fast the edge travels', p:'Set by material and tool. Too much and the tool burns. Too little and you get built-up edge and a poor surface.'},
            {kv:'Feed per tooth', h3:'How much each edge removes', p:'Too much and it breaks. Too little and the tool <b>rubs instead of cutting</b>, heats up and blunts faster. It is counter-intuitive, which is exactly why it gets asked.'} ]},
          {type:'note', html:'The classic beginner mistake: "I will reduce the feed so I do not break it." Too low a feed kills the tool faster than too high a feed does.'} ]} ]},

    common: { color:'var(--steel)', eyebrow:'The same across every technology', h1:'Common ground',
      lede:'Machine mechanics, program structure and the ordering rules do not depend on what you are cutting with.',
      sections: [
        { n:'01', h2:'Machine construction', blocks:[
          {type:'grid', cells:[
            {kv:'Gantry', h3:'Bridge across the table', p:'Driven by servos <b>on both sides</b>, and they must stay synchronised. Loss of sync means a racked gantry and geometry gone.'},
            {kv:'Drive', h3:'Rack-and-pinion or ballscrew', p:'Rack over long travels, ballscrews over short ones. Backlash shows up as contour deviation in corners.'},
            {kv:'Z axis', h3:'Carries the head', p:'Almost always with <b>crash protection</b> — on impact the head breaks away instead of bending the axis.'},
            {kv:'Encoders', h3:'Position feedback', p:'Following error means the drive cannot keep up with the command. Causes: mechanical resistance, wear, parameters.'},
            {kv:'Table', h3:'Slats are a consumable', p:'They get cut up over time. Worn slats stop holding the part flat, and it tips under the head.'},
            {kv:'Extraction', h3:'Zoned downdraft or water table', p:'Only the zone under the head opens. Faulty dampers mean smoke in the workshop.'} ]} ]},
        { n:'02', h2:'Program structure', blocks:[
          {type:'p', html:'The skeleton is the same everywhere: <b>header</b> once, <b>body</b> per feature, <b>footer</b> once.'},
          {type:'table', head:['Rule','Why'], rows:[
            ['Inner contours before the outer one','once the outer contour is cut the part drops — every hole after that is scrap'],
            ['Always pierce in scrap','piercing leaves a crater; on a finished edge that is a reject'],
            ['Kerf compensation switches on during the lead-in','switched on along the contour it leaves a step mid-cut'],
            ['As few pierces as possible','piercing wears consumables harder than metres of cutting'],
            ['Microjoints for small parts','otherwise they drop into the table or tip up under the head'],
            ['Ordering distributes heat','cutting neighbouring parts back to back overheats the plate (not applicable to waterjet)'] ]} ]},
        { n:'03', h2:'Height control — three different principles', blocks:[
          {type:'grid', cells:[
            {kv:'Plasma', h3:'From arc voltage', p:'Current is regulated, so voltage is proportional to arc length. Consumable wear <b>corrupts that measurement</b>.'},
            {kv:'Laser', h3:'Capacitive sensor', p:'The nozzle acts as a capacitor plate. Spatter and cracked ceramics break the measurement.'},
            {kv:'Waterjet and oxy-fuel', h3:'Mechanical or capacitive', p:'On waterjet, height matters less. On oxy-fuel, preheat height is held by simpler means.'} ]} ]},
        { n:'04', h2:'Remote diagnosis', blocks:[
          {type:'ul', items:[
            'Back up the machine parameters — <b>before</b> touching anything.',
            'Alarm log and history — what happened beforehand.',
            'Questions for the operator: <b>what changed since yesterday</b>; when did it start; every time or intermittently; which material and thickness; what was last replaced.',
            'The most important split: <b>does it happen on every program or only on one.</b> That answer halves the problem before you even connect.'] } ]} ]}
  },

  faults: { eyebrow:'Reference · symptom → cause', h1:'Faults',
    lede:'A symptom does not name the cause, but it narrows it to one or two places. Search and filters work together.',
    ph:'Search: dross, bevel, nozzle, height…', of:'of',
    head:['Technology','Symptom','Likely cause','Where to look'],
    filters:{ all:'all', plasma:'plasma', laser:'laser', water:'waterjet', oxy:'oxy-fuel', mill:'milling' },
    tags:{ prog:'program', cons:'consumables', set:'parameters', mach:'machine', safe:'safety' },
    names:{ plasma:'Plasma', laser:'Laser', water:'Waterjet', oxy:'Oxy-fuel', mill:'Milling', thermal:'Thermal', all:'All' } }
};

/* ---- fault rows: [techKeys, nameKey, symptom, cause, tagKey] ---- */
var FAULTS = {
  uk: [
    ['plasma','plasma','Шлак знизу, важко відбити, іскри «хвостом»','швидкість зависока','set'],
    ['plasma','plasma','Широкий рез, шлак зверху','швидкість занизька','set'],
    ['plasma','plasma','Раптово погіршилось усе одразу','знос витратників — перевіряти першими','cons'],
    ['plasma','plasma','Скіс однаковий з обох боків','висота завелика','set'],
    ['plasma','plasma','Скіс не з того боку кромки','напрямок обходу контуру','prog'],
    ['plasma','plasma','Дуга не переноситься на деталь','висота IHS, контакт маси, зношені витратники','cons'],
    ['plasma','plasma','Сопла живуть дуже мало','невдалі підпали — пілот вигоряє в сопло','mach'],
    ['plasma','plasma','Збій контролера рівно в момент підпалу','наведення від ВЧ: заземлення, екранування','mach'],
    ['plasma','plasma','THC ганяє вісь вгору-вниз','знос витратників змінив напругу дуги','cons'],
    ['laser','laser','Якість падає поступово протягом тижня','забруднене захисне скло','cons'],
    ['laser','laser','Рез не наскрізь на звичній товщині','положення фокуса, брудна оптика, пошкоджене сопло','set'],
    ['laser','laser','Голова стрибає або б’ється в лист','тріснуте керамічне кільце, бризки на соплі','cons'],
    ['laser','laser','Кромка нержавійки з окисленням','азот замало тиску або підмішується повітря','set'],
    ['laser','laser','Підгорання на початку різу','параметри пробивання: потужність, наростання, затримка','prog'],
    ['laser','laser','Величезна витрата азоту','тиск вище потрібного або завелике сопло','set'],
    ['water','water','Конусність збільшилась','зношена фокусувальна трубка або зависока швидкість','cons'],
    ['water','water','Струмінь не проходить наскрізь','зношений сопло-отвір, падіння тиску, перерваний абразив','cons'],
    ['water','water','Абразив залипає й не подається','вологий абразив або забита подача','mach'],
    ['water','water','Пульсація тиску, смуги на кромці','ущільнення або зворотні клапани насоса','mach'],
    ['water','water','Кути «зрізані», малі радіуси спотворені','відставання струменя — немає сповільнення в кутах','prog'],
    ['water','water','Композит розшаровується на пробиванні','пробивання на повному тиску замість зниженого','prog'],
    ['oxy','oxy','Не пробиває, гасне','короткий підігрів, забиті отвори мундштука, тиск O₂','set'],
    ['oxy','oxy','Кромка груба, «риє»','чистота кисню, стан мундштука, швидкість','cons'],
    ['oxy','oxy','Хлопки, зворотний удар полум’я','розбаланс тисків, брудний мундштук, несправні зворотні клапани','safe'],
    ['oxy','oxy','Нержавійка взагалі не ріжеться','не несправність — тугоплавкий оксид, потрібна інша технологія','set'],
    ['mill','mill','Ламаються метчики й свердла','завелика подача, немає ЗОР, тупий інструмент, лист не притиснутий','set'],
    ['mill','mill','Інструмент тупиться надто швидко','часто <b>занизька</b> подача — тре замість різати','set'],
    ['mill','mill','Різьба рвана або не тримає','неправильний діаметр попереднього отвору, знос метчика','cons'],
    ['mill','mill','Вібрація, слід «хвилями»','жорсткість, поєднання обертів і подачі, виліт інструмента','set'],
    ['mill','mill','Маркування нерозбірливе','глибина, знос голки, лист не рівний','set'],
    ['plasma laser oxy','thermal','Лист повело, розміри пливуть','порядок різання не розводить тепло','prog'],
    ['plasma laser water oxy','all','Деталі стабільно менші або більші','ширина різу в CAM','prog'],
    ['plasma laser water oxy','all','Отвори зміщені відносно контуру','зовнішній контур відрізаний раніше за внутрішні','prog'],
    ['plasma laser water oxy','all','Сходинка посеред контуру','компенсація ввімкнена не на врізанні','prog'],
    ['plasma laser water oxy','all','Дрібні деталі перекидаються під голову','немає перемичок, зношені ламелі столу','prog'],
    ['plasma laser water oxy','all','Контур б’є в кутах, геометрія не сходиться','люфт приводу, розсинхрон порталу, помилка стеження','mach']
  ],
  sk: [
    ['plasma','plasma','Troska zdola, ťažko sa odbíja, iskry sa vlečú','príliš vysoká rýchlosť','set'],
    ['plasma','plasma','Široká škára, troska zhora','príliš nízka rýchlosť','set'],
    ['plasma','plasma','Zrazu sa zhoršilo všetko naraz','opotrebenie spotrebného materiálu — kontrolovať prvé','cons'],
    ['plasma','plasma','Úkos rovnaký na oboch stranách','príliš veľká výška','set'],
    ['plasma','plasma','Úkos na nesprávnej strane hrany','smer obchádzania kontúry','prog'],
    ['plasma','plasma','Oblúk sa neprenesie na dielec','výška IHS, ukostrenie, opotrebované diely','cons'],
    ['plasma','plasma','Dýzy vydržia veľmi krátko','neúspešné zapálenia — pilot vypaľuje dýzu','mach'],
    ['plasma','plasma','Výpadok riadenia presne pri zapálení','rušenie z VF: uzemnenie, tienenie','mach'],
    ['plasma','plasma','THC ženie os hore-dole','opotrebenie zmenilo napätie oblúka','cons'],
    ['laser','laser','Kvalita klesá postupne počas týždňa','znečistené ochranné sklo','cons'],
    ['laser','laser','Rez nejde naskrz pri bežnej hrúbke','poloha ohniska, špinavá optika, poškodená dýza','set'],
    ['laser','laser','Hlava skáče alebo naráža do plechu','prasknutý keramický krúžok, rozstrek na dýze','cons'],
    ['laser','laser','Hrana nerezu je oxidovaná','málo tlaku dusíka alebo prisáva vzduch','set'],
    ['laser','laser','Prepálenie na začiatku rezu','parametre prepichu: výkon, nábeh, prestoj','prog'],
    ['laser','laser','Obrovská spotreba dusíka','tlak nad potrebu alebo priveľká dýza','set'],
    ['water','water','Kužeľovitosť sa zväčšila','opotrebovaná zaostrovacia trubica alebo vysoká rýchlosť','cons'],
    ['water','water','Lúč neprejde naskrz','opotrebovaná tryska, pokles tlaku, prerušené abrazívo','cons'],
    ['water','water','Abrazívo sa lepí a nepodáva','vlhké abrazívo alebo upchatý prívod','mach'],
    ['water','water','Pulzácia tlaku, pásy na hrane','tesnenia alebo spätné ventily čerpadla','mach'],
    ['water','water','Rohy „zrezané", malé polomery deformované','zaostávanie lúča — chýba spomalenie v rohoch','prog'],
    ['water','water','Kompozit sa pri prepichu rozvrství','prepich plným tlakom namiesto zníženého','prog'],
    ['oxy','oxy','Neprepichne, zhasína','krátky predhrev, upchatá hubica, tlak O₂','set'],
    ['oxy','oxy','Hrana je hrubá, „ryje"','čistota kyslíka, stav hubice, rýchlosť','cons'],
    ['oxy','oxy','Prásknutia, spätný šľah plameňa','nevyvážené tlaky, špinavá hubica, chybné spätné ventily','safe'],
    ['oxy','oxy','Nerez sa vôbec nedá rezať','nie je to porucha — žiaruvzdorný oxid, treba inú technológiu','set'],
    ['mill','mill','Lámu sa závitníky a vrtáky','veľký posuv, chýba chladivo, tupý nástroj, neupnutý plech','set'],
    ['mill','mill','Nástroj sa tupí príliš rýchlo','často <b>primalý</b> posuv — trie namiesto rezania','set'],
    ['mill','mill','Závit je roztrhaný alebo nedrží','nesprávny priemer predvŕtania, opotrebený závitník','cons'],
    ['mill','mill','Vibrácie, stopa „vlnami"','tuhosť, kombinácia otáčok a posuvu, vyloženie nástroja','set'],
    ['mill','mill','Značenie je nečitateľné','hĺbka, opotrebená ihla, plech nie je rovný','set'],
    ['plasma laser oxy','thermal','Plech sa zdeformoval, rozmery unikajú','poradie rezania nerozvádza teplo','prog'],
    ['plasma laser water oxy','all','Dielce sú trvalo menšie alebo väčšie','šírka rezu v CAM','prog'],
    ['plasma laser water oxy','all','Otvory sú posunuté voči kontúre','vonkajšia kontúra odrezaná pred vnútornými','prog'],
    ['plasma laser water oxy','all','Schod uprostred kontúry','korekcia zapnutá inde než na nábehu','prog'],
    ['plasma laser water oxy','all','Drobné dielce sa preklápajú pod hlavu','chýbajú mostíky, opotrebované lamely stola','prog'],
    ['plasma laser water oxy','all','Kontúra hádže v rohoch, geometria nesedí','vôľa pohonu, rozsynchronizovaný portál, chyba sledovania','mach']
  ],
  en: [
    ['plasma','plasma','Dross underneath, hard to knock off, sparks trailing','cutting speed too high','set'],
    ['plasma','plasma','Wide kerf, dross on top','cutting speed too low','set'],
    ['plasma','plasma','Everything got worse at once','consumable wear — check these first','cons'],
    ['plasma','plasma','Bevel equal on both sides','torch height too great','set'],
    ['plasma','plasma','Bevel on the wrong side of the edge','contour travel direction','prog'],
    ['plasma','plasma','Arc will not transfer to the plate','IHS height, work lead contact, worn consumables','cons'],
    ['plasma','plasma','Nozzles last almost no time','failed starts — the pilot burns into the nozzle','mach'],
    ['plasma','plasma','Controller glitches exactly at ignition','HF interference: grounding, shielding, cable routing','mach'],
    ['plasma','plasma','THC drives the axis up and down','wear has shifted the arc voltage','cons'],
    ['laser','laser','Quality declines gradually over a week','dirty protective glass','cons'],
    ['laser','laser','No longer cutting through at the usual thickness','focal position, dirty optics, damaged nozzle','set'],
    ['laser','laser','Head jumps or crashes into the sheet','cracked ceramic ring, spatter on the nozzle','cons'],
    ['laser','laser','Stainless edge comes out oxidised','nitrogen pressure too low or air being drawn in','set'],
    ['laser','laser','Burning at the start of the cut','pierce parameters: power, ramp, dwell','prog'],
    ['laser','laser','Enormous nitrogen consumption','pressure above what is needed, or oversized nozzle','set'],
    ['water','water','Taper has increased','worn focusing tube or excessive speed','cons'],
    ['water','water','Jet no longer cuts through','worn orifice, pressure loss, abrasive interrupted','cons'],
    ['water','water','Abrasive clumps and will not feed','damp abrasive or a blocked feed line','mach'],
    ['water','water','Pressure pulsation, banding on the edge','pump seals or check valves','mach'],
    ['water','water','Corners cut short, small radii distorted','jet lag — no deceleration in corners','prog'],
    ['water','water','Composite delaminates at the pierce','piercing at full pressure instead of reduced','prog'],
    ['oxy','oxy','Will not pierce, keeps going out','preheat too short, fouled tip, O₂ pressure','set'],
    ['oxy','oxy','Rough edge, gouging','oxygen purity, tip condition, speed','cons'],
    ['oxy','oxy','Popping, flashback into the hose','unbalanced pressures, dirty tip, failed check valves','safe'],
    ['oxy','oxy','Stainless will not cut at all','not a fault — refractory oxide, another technology is needed','set'],
    ['mill','mill','Taps and drills keep breaking','feed too high, no coolant, blunt tool, sheet not clamped','set'],
    ['mill','mill','Tool blunts far too quickly','often the feed is <b>too low</b> — it rubs instead of cutting','set'],
    ['mill','mill','Thread is torn or will not hold','wrong pre-drill diameter, worn tap','cons'],
    ['mill','mill','Chatter, wavy tool marks','rigidity, speed and feed combination, tool overhang','set'],
    ['mill','mill','Marking is illegible','depth, worn pin, sheet not flat','set'],
    ['plasma laser oxy','thermal','Plate has distorted, dimensions drifting','cut order does not distribute heat','prog'],
    ['plasma laser water oxy','all','Parts consistently undersized or oversized','kerf width in CAM','prog'],
    ['plasma laser water oxy','all','Holes offset relative to the contour','outer contour cut before the inner ones','prog'],
    ['plasma laser water oxy','all','Step in the middle of a contour','compensation switched on somewhere other than the lead-in','prog'],
    ['plasma laser water oxy','all','Small parts tip up under the head','no microjoints, worn table slats','prog'],
    ['plasma laser water oxy','all','Contour deviates in corners, geometry does not close','drive backlash, racked gantry, following error','mach']
  ]
};
