const events = [{
  status: 'current',
  speakers: [{
    name: 'Luca',
    surname: 'Bravo',
    email: '',
    twitter: 'hz',
  }],
  date: '2018-02-27',
  title: 'Explore the Basics of Color Grading',
  abstract: `Cosa si intende per color correction e color grading? Il primo passo per rispondere a questa domanda è comprendere come il colore possa definire le nostre esperienze sensoriali, descrivere ambienti, esprimere emozioni, evocare sensazioni e atmosfere. Il colore è alla base della nostra visione e curare questo aspetto nelle nostre foto può cambiarne completamente la percezione.

  In questo talk Luca Bravo ci parlerà del suo personale workflow digitale e di come questo gli ha permesso di diventare uno dei "Photographer of the year", promossi dalla piattaforma [Unsplash](https://unsplash.com/), ottenendo così milioni di visualizzazioni e pubblicazioni in alcune grandi testate di fama internazionale.
  
  Se vi siete mai chiesti come migliorare le vostre fotografie, _anche fatte con lo smartphone [n.d.r.]_, o semplicemente siete sempre stati curiosi di come nasca "una bella fotografia" non potete mancare a questo talk! 📸`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  tags: [ 'photography', 'color correction', 'color grading', 'unsplash', 'instagram' ],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-explore-the-basics-of-color-grading-43119859661?aff=erelexpmlt#tickets',
  facebook: 'https://www.facebook.com/events/2014092938808713/',
  video: '',
  slides: '',
}, {
  status: 'past',
  speakers: [{
    name: 'Roberto',
    surname: 'Albertini',
    email: '',
    twitter: 'robalbertini',
  }],
  date: '2018-01-29',
  title: 'Refactoring: sempre, senza pietà!',
  abstract: `La qualità del codice che maneggiamo tutti i giorni è molto importante ma difficile da ottenere. Non si tratta di un traguardo da raggiungere ma di un processo di continuo miglioramento.

  Nel talk vedremo quali sono le più comuni debolezze del codice, vedremo come sia possibile manipolarlo senza paura e come approfittare di ogni occasione per migliorarlo seguendo alcuni principi di design.
  
  Alzi la mano chi non ha a che fare con del codice legacy ogni giorno! ...se l'avete alzata, non potete mancare a questo talk! ;)`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  tags: [ 'refactoring', 'development', 'legacy', 'code' ],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-refactoring-sempre-senza-pieta-42101280062?aff=es2#tickets',
  facebook: 'https://www.facebook.com/events/1673978505997779',
  video: 'https://www.youtube.com/watch?v=aQQWrQZYliU',
  slides: '',
}, {
  status: 'past',
  date: '2017-12-11',
  title: '🎅 Beerettone 2017!',
  abstract: `Per il Beerettone 2017 ci siamo inventati un evento particolare, per realizzarlo ci serve il **tuo** aiuto! :)
  
  La formula è la **TalkAnarchy**. Avete presente quando, solitamente dopo qualche birra, si creano gruppetti di persone che in maniera informale e casuale parlano di argomenti nerd, nuovi linguaggi, fanta-idee e proof-of-concept? Ecco. Questo è il regalo che abbiamo chiesto a Babbo Natale.
   
  ## Come funziona
  Niente sala, niente proiettore, ma ovviamente sì alla birra! Si svolgerà tutto al [Cookies bar & lunch](https://www.facebook.com/cookiesbarlunch/).
  
  Ci saranno diverse **TopicArea** ovvero piccole postazioni curate da una persona o da un gruppo, in cui si parlerà di un argomento. I partecipanti potranno spostarsi da una TopicArea all'altra (aperitivo alla mano) e ascoltare i diversi argomenti nella più totale anarchia!
   
  ## Ok, ora è il tuo momento!
  In cosa consiste una TopicArea? Semplice: ci piacerebbe che tu condividessi con noi una tua esperienza, qualcosa su cui hai lavorato, un libro che hai letto, uno strumento che hai trovato utile, o semplicemente un’idea che ti gira per la testa da tempo, purché abbia a che fare con la tecnologia!
  
  Immagina un mini discorso di massimo 15 minuti per raccontare il tuo argomento e porta con te quello di cui hai bisogno. Hai delle slide? Porta un portatile attorno al quale chi si fermerà alla tua Topic Area si fermerà ad ascoltare. Hai moddato un furby? Non aspettiamo altro che poterci giocare!
   
  L'evento sarà molto informale, puoi gestire la chiacchierata assolutamente come vuoi, niente paura!

  Compila il modulo che trovi al link qui sotto e proponi l'idea della tua TopicArea!

  [Proposta TopicArea Beerettone 2017](https://goo.gl/forms/Cx4IGpvMIIUIZnjI3)

  ## La cena di Natale
  Una volta terminati gli interventi alle TopicAreas ci sarà venuta una fame da lupi, per cena il bar ci preparerà **risotto con stinco alla birra** e l'immancabile...**panettone**!

  Dovendo gestire la cena, per questo evento sono particolarmente importanti le **prenotazioni** su Eventbrite, non mancate!
  `,
  schedule: [
    { activity: 'Aperitivo e TopicAreas', start: '19:00', end: '20:00' },
    { activity: 'Cena (per chi vuole)', start: '20:00', end: '22:00' },
  ],
  tags: [ 'beer', 'panettone', 'christmas', 'babbo', 'natale', 'talkanarchy' ],
  eventbrite: 'https://www.eventbrite.it/e/biglietti-beerettone-2017-40801258663',
  facebook: 'https://www.facebook.com/events/490027781390617',
}, {
  status: 'past',
  speakers: [{
    name: 'Lino',
    surname: 'Telera',
    email: '',
    twitter: 'linotelera',
  }],
  date: '2017-11-23',
  title: 'Deep Dive into Serverless',
  abstract: `Lino is a Software developer and system integrator since 2001, system administrator and virtualization specialist since 2008. He's now working as Cloud specialist and Cloud integrator in an Italian service provider. Lino is also a VMUG.it board member and TechFieldDay delegate. He loves blogging, mentoring and coaching for Cloud Native Applications, you can find his blog posts [here](http://blog.linoproject.net).
  
  In questo talk Lino ci introdurrà i metodi e le tecniche per lo sviluppo in ambiente serverless.
  
  Strumenti, codice, device e tanto cloud saranno gli ingredienti principali per costruire applicazioni e integrazioni software di ultima generazione.
  
  In altre parole... dove vai se il cloud non ce l'hai? :D`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  tags: [ 'serverless', 'cloud', 'development' ],
  hashtag: 'bboxsl',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-deep-dive-into-serverless-39723504070?aff=es2#tickets',
  facebook: 'https://www.facebook.com/events/1618103634879278',
  video: 'https://www.youtube.com/watch?v=NM6fIvqWocw',
  slides: '',
}, {
  status: 'past',
  speakers: [{ name: 'Mariachiara', surname: 'Pezzotti', email: '', twitter: 'merissimissima' }],
  date: '2017-10-30',
  title: 'Experience Matters!',
  subtitle: 'Ovvero la diplomazia quotidiana della UX',
  abstract: `UX: tutti la cercano, tutti ne parlano. Ma in quanti coinvolgono realmente gli utenti nei processi di design?
  E come si sopravvive a budget ridotti, tempi stretti, e scontri a fuoco tra developer, digital guru, designer, clienti, product owner e marketing?
  
  In questo talk, Mariachiara ([@merissimissima](https://twitter.com/merissimissima)) ci racconterà la sua esperienza su come, concretamente, si possono integrare valori, attività, e strumenti di user experience design per la piccola e media impresa.`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  tags: [ 'ux', 'pmi', 'design', 'interfaces' ],
  hashtag: 'bboxux',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-experience-matters-38679232626?aff=es2#tickets',
  facebook: 'https://www.facebook.com/events/334984146965938',
  video: 'https://www.youtube.com/watch?v=HA-vTSoYcDQ',
  slides: '',
}, {
  status: 'past',
  speakers: [{ name: 'Fabrizio', surname: 'Cornelli', email: '', twitter: 'fabrizi0' }],
  date: '2017-09-27',
  title: 'DevSecOps and the hunter-farmer model',
  subtitle: 'Aka anthropology of a schizophrenic job.',
  abstract: `Da qualche tempo è buona prassi accorpare sviluppo e operazioni.
    Che dire invece della sicurezza?
    Ha senso incorporare nei processi di sviluppo metodologie che si pongano l'obiettivo di instillare il dubbio,
    e che richiedano che sia fornito l'onere della falsificabilità fin dai primi momenti della produzione?
    Come si può garantire un equilibrio efficace all'interno del team, tra le tensioni in gioco,
    alcune ciecamente costruttive, altre patologicamente distruttive?
    Non è facile, si entra in uno spazio schizofrenico che corre il rischio di annichilire le forze in gioco.
    Nel mondo business c'è un modello interessante che descrive due diversi atteggiamenti nei confronti degli obiettivi da raggiungere: Hunter e Farmer,
    uno più aggressivo e orientato alla novità, uno più sociale, orientato al consolidamento.
    In questo incontro fornirò un'interpretazione di questo modello calato nella realtà dei DevOps,
    dei DevSecOps e dei team leader, atto alla convivenza agile ed efficace di metodologie antropologicamente diverse.`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  tags: [ 'devsecops', 'security', 'devops', 'hunter', 'farmer', 'hacker', 'developer' ],
  hashtag: 'bboxdevsecops',
  eventbrite: '37873199760',
  facebook: 'https://www.facebook.com/events/271940556656971',
  video: 'https://www.youtube.com/watch?v=31g0aX6uG0k',
  slides: '',
}, {
  status: 'past',
  speakers: [{
    name: 'Daniele', surname: 'Crespi', email: '', twitter: 'CrespiDaniele',
  }, {
    name: 'Andrea', surname: 'Nelson Mauro', email: '', twitter: 'nelsonmau',
  }],
  date: '2017-06-27',
  title: 'Gli Open Data in Lombardia, tra Regione ed Enti Locali',
  subtitle: '',
  abstract: `Daniele Crespi e Andrea Nelson Mauro saranno i nostri relatori e ci parleranno dei dati aperti della pubblica amministrazione, con particolare attenzione agli aspetti di trasparenza e possibilità di creare nuovi servizi che sfruttino proprio gli Open Data.
  Scopriremo anche quali sono Open Data pubblicati da Regione Lombardia e dagli enti locali del territorio e come possono essere utilizzati, dalle licenze alle API. Una panoramica sul catalogo http://dati.lombardia.it`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  hashtag: '',
  eventbrite: '',
  facebook: '',
  video: 'https://www.youtube.com/watch?v=9ov5uz2hd5Y',
  slides: '',
}, {
  status: 'past',
  speakers: [{
    name: 'Sergio', surname: 'Cigoli', email: '', twitter: 'cigucigu',
  }],
  date: '2017-05-30',
  title: 'From online training courses to MOOC',
  subtitle: 'Formazione permanente per programmatori e non solo!',
  abstract: `Mantenersi aggiornati sulle nuove tecnologie e/o imparare qualcosa di nuovo è sempre difficile. 
  Abbiamo bisogno di soluzioni che siano adatte a noi e al tempo che abbiamo a disposizione, oltre che ad essere economicamente sostenibili. 
  Negli ultimi anni si è moltiplicata l’offerta di corsi di formazione online, non solo raccolte di video tutorial, ma anche di materiale più interattivo, fino ad arrivare ai “Massive Open Online Courses” (MOOC) spesso erogati in collaborazione con alcune prestigiose università. Sergio Cigoli (@cigucigu) ha testato parecchie delle soluzioni disponibili, nel tentativo di irrobustire le sue basi di programmazione full-stack. Alcune sono state molto efficaci ed altre decisamente meno. Nel complesso però i risultati sono stati, a suo modo di vedere, molto soddisfacenti e gli piacerebbe condividerli.`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  hashtag: '',
  eventbrite: '',
  facebook: 'https://www.facebook.com/events/118230102085591',
  video: 'https://www.youtube.com/watch?v=RuR6epdvSaI',
  slides: '',
}, {
  status: 'past',
  speakers: [{
    name: 'Daniele', surname: 'Giussani', email: '', twitter: '',
  },{
    name: 'Corrado', surname: 'Ignoti', email: '', twitter: 'corradoignoti',
  }],
  date: '2017-04-27',
  title: 'È LoRa dell\'IoT',
  subtitle: '',
  abstract: `In questo evento BrewBox Daniele e Corrado ci raccontano il loro viaggio nel mondo dei dispositivi connessi ad internet!
  Dato il crescente uso dell'IoT in molti settori, le tecnologie ad essa legate stanno proliferando. Vi presentiamo LoRaWAN una tecnologia per l'IoT pensata per apparati alimentati a batteria. Cosa serve per partire? Un sensore, un gateway e.... tanta fantasia.
  Vi aspettiamo (senza saldatore però... :P)!`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  hashtag: '',
  eventbrite: '',
  facebook: 'https://www.facebook.com/events/1290590447690596',
  video: 'https://www.youtube.com/watch?v=_Po_Sza_qtw',
  slides: '',
}, {
  status: 'past',
  speakers: [{
    name: 'Roberto', surname: 'Albertini', email: '', twitter: 'robalbertini',
  }],
  date: '2017-03-28',
  title: 'Pianificazione Adattiva',
  subtitle: '',
  abstract: `In questo talk Roberto Albertini (@robalbertini) ci mostrerà alcuni strumenti per controllare lo sviluppo software!
  Tradizionalmente la pianificazione è vista come uno strumento per prevedere l’andamento di un progetto e congelare una promessa in un piano.
  Questa promessa viene spesso smontata da cambiamenti ed imprevisti durante la vita del progetto.
  Esiste un diverso approccio, che considera il cambiamento come una componente inevitabile.
  Si rinuncia al desiderio di prevedere il progetto e ci si concentra su come controllarlo e adattarlo per ottenere il miglior risultato possibile.
  Nel talk, tramite simulazioni di progetti dove accadono i tipici imprevisti, verranno presentati gli strumenti e le pratiche che permettono di controllare al meglio il progetto.
  Se volete che il vostro prossimo progetto sia un successo...non mancate! :D`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  hashtag: '',
  eventbrite: '',
  facebook: 'https://www.facebook.com/events/1116991255095909',
  video: 'https://www.youtube.com/watch?v=PAoJdRWcNzE',
  slides: '',
}, {
  status: 'past',
  speakers: [{
    name: 'Lino', surname: 'Telera', email: '', twitter: 'linotelera',
  }],
  date: '2017-02-21',
  title: '3,2,1 code in container',
  subtitle: '',
  abstract: `Partendo da semplici routine scritte in diversi linguaggi, Lino Telera (@linotelera) ci spiegherà come costruire un applicazione cloud native partendo dal proprio PC, fino al delivery in sistemi cloud.
  L'evento è pensato principalmente per devops e system integrator. I curiosi sono comunque benvenuti! :D
  I principali argomenti che verranno toccati nel corso della serata sono: container management systems, VMware Photon, Cloud Native Applications
  `,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  hashtag: '',
  eventbrite: '',
  facebook: 'https://www.facebook.com/events/447420418922408',
  video: 'https://www.youtube.com/watch?v=foFsQqIxEv4',
  slides: '',
}, {
  status: 'past',
  speakers: [{
    name: 'Michele', surname: 'Capra', email: '', twitter: 'piccoloaiutante',
  }],
  date: '2017-02-21',
  title: 'Microservices in practice with Seneca.js',
  subtitle: '',
  abstract: `Le architetture a microservices stanno cambiando rapidamente il modo in cui sviluppiamo le nostre applicazioni. L'aspetto fondamentale di queste architetture è il fatto di essere composte da componenti piccoli e fortemente disaccoppiati. Ma questa è la teoria, come possiamo veramente applicare questo pattern al nostro lavoro quotidiano? Come possiamo strutturare la nostra applicazione per ottenere il massimo dalle architetture a microservices? In questo talk, insieme a Michele Capra, cercheremo di dare una risposta a queste e altre domande con una introduzione al toolkit Seneca.js. Usando plugins, commands e altre funzionalità di Seneca.js vedremo come realizzare facilmente una applicazione Node.js che sfrutti i microservices.`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  hashtag: '',
  eventbrite: '',
  facebook: 'https://www.facebook.com/events/447420418922408',
  video: 'https://www.youtube.com/watch?v=yZxyVJEgxVg',
  slides: '',
}, {
  status: 'past',
  speakers: [{name: 'Gilberto', surname: 'Girardi', email: '', twitter: 'gimbomix' }],
  date: '2016-04-27',
  title: 'La musica elettronica',
  subtitle: 'il caso e tutto quanto',
  abstract: `Durante questo incontro Gilberto Girardi (@gimbomix) ci accompagnerà alla scoperta dell'evoluzione della musica elettronica e delle tecnologie che hanno accompagnato questa trasformazione.
Dai primi sintetizzatori fino a Garage band. Breve viaggio tra le tecnologie che hanno influenzato in modo diretto ed indiretto l'evoluzione del più trasversale dei generi musicali.

Gli argomenti che verranno trattati:

1- le origini della musica elettronica:i Block party di New York e il Krautrock della Germania Est;
2- i due mondi si fondono in uno: Planet Rock;
3- breve viaggio tra le tre colonne portanti della musica elettronica: i sintetizzatori, i campionatori e le batterie elettroniche;
4- l'elettronica invade tutti i generi musicali;
5- laboratorio: dal sintetizzatore monofonico passando alla drum machine analogica fino a Garage Band.
`,
  schedule: [],
  tags: [],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-brewbox-presenta-la-musica-elettronica-il-caso-e-tutto-quanto-24808236102',
  facebook: '',
  video: '',
  slides: '',
}, {
  status: 'past',
  speakers: [{name: 'Federico', surname: 'Gandellini', email: '', twitter: 'gandellinux' },
             {name: 'Samuele', surname: 'Verzi', email: '', twitter: 'samu_' } ],
  date: '2016-03-09',
  title: 'Let\'s play with AngularJS',
  subtitle: '',
  abstract: `In questo primo appuntamento di BrewBox vogliamo parlare di AngularJS.

AngularJS è un framework JavaScript per lo sviluppo del frontend di applicazioni Web.
Questa libreria copre quasi tutti gli aspetti della realizzazione di SPA (Single Page Application), presenta, infatti, strutture per la getione dei componenti, l'organizzazione delle viste, l'interazione con l'utente e l'interfacciamento con API esterne.

A raccontarci questo framework saranno Samuele (@samu_) e Federico (@gandellinux) che stanno lavorando con AngularJS da più di un anno in una applicazione di medie dimensioni.
Nel primo appuntamento BrewBox faranno una veloce carrellata sui concetti base con il supporto di codice live.
`,
  schedule: [],
  tags: [],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-brewbox-presenta-angularjs-22411410131',
  facebook: '',
  video: '',
  slides: 'http://slides.com/samueleverzi/letsplaywithangularjs',
}]

export { events }
