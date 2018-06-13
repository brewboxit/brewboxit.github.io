const events = [{
  status: 'current',
  speakers: [{ name: 'Paolo', surname: 'Ferretti', email: '', twitter: 'paoferretti', github: 'https://github.com/pferretti' }],
  date: '2018-06-28',
  title: 'API data stubbing, done right.',
  abstract: `Sicuramente avete sentito parlare di big data, ma avete mai sentito parlare di fake data?

  Capita frequentemente di dover sviluppare o testare i vostri software senza avere immediatamente a disposizione le API che vi forniscono i dati. Oppure avete a disposizione le API, ma non sono aggiornate o non vi forniscono tutti i casi d'uso di cui avete bisogno. Altre volte, invece, il vostro project manager ha bisogno di definire nuove strutture dati ma non ha uno strumento semplice per poterlo fare.
  
  Probabilmente non lo sapevate, ma avete un disperato bisogno di fake data!
  
  Paolo vi introdurrà nel fantastico mondo dei fake data e vi spiegherà come è nata l'esigenza di strutturare un flusso di lavoro per la gestione dei data mock, mostrandovi come ha cercato di risolvere questo problema con l'aiuto dei suoi colleghi.
  
  Il tutto cross-language e cross-platform. 😎`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  tags: [ 'API', 'stubbing', 'mock', 'fake-data', 'fixture' ],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-api-data-stubbing-done-right-46915377156?aff=ehomecard#tickets',
  facebook: 'https://www.facebook.com/events/390449758129432/',
  evensi: 'https://www.evensi.it/api-data-stubbing-cobox/260125926',
  video: '',
  slides: '',
},{
  status: 'past',
  speakers: [{ name: 'Iacopo', surname: 'Spalletti', email: '', twitter: 'yakkys', linkedin: 'https://www.linkedin.com/in/iacopospalletti/' }],
  date: '2018-05-29',
  title: 'Creare applicazioni realtime con Django',
  abstract: `Con l'introduzione di Channels, creare applicazioni real time con Django è diventato molto più semplice.

  E' infatti possibile concentrarsi sulla costruzione della propria applicazione anziché dover risolvere il problema della gestione real-time, e si hanno tutte le "batterie incluse" di Django a disposizione.

  Dopo un'introduzione a Django, vedremo alcuni dettagli su Channels ed esamineremo una semplice applicazione demo che ci permetterà di vedere in pratica come costruire la propria prima applicazione.

  Ad una prima parte teoria, seguirà una breve sessione di live coding per costruire un modulo aggiuntivo dell'applicazione demo.`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  tags: [ 'python', 'development', 'django', 'channels', 'real-time' ],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-creare-applicazioni-realtime-con-django-46036033014#tickets',
  facebook: 'https://www.facebook.com/events/367589597085424/',
  evensi: '',
  video: '',
  slides: '',
}, {
  status: 'past',
  speakers: [{ name: 'Michele', surname: 'Mazzucco', email: '', twitter: 'michelemazzucco', linkedin: 'https://www.linkedin.com/in/michele-mazzucco-89214053/', blog: 'https://www.michelemazzucco.it' }],
  date: '2018-04-26',
  title: 'Prototyping',
  subtitle: 'Explore ideas, improve your product!',
  abstract: `Ogni giorno aumenta nel mercato la necessità di progettare, produrre e rilasciare prodotti digitali in modo veloce, efficace e a basso costo. Per essere competitivi sul mercato questi prodotti devono però rispettare le esigenze, i bisogni e le aspettative degli utenti. In questo contesto la prototipazione svolge il fondamentale compito di poter rendere facilmente testabile, comunicanicabile e valutabile un’idea all’interno di un processo di design.

In questo talk Michele ci racconterà la sua visione dei prototipi digitali, delle caratteristiche che questi hanno e di come questi possano essere integrati all’interno di flusso di progettazione al fine di migliorare il proprio prodotto (o la propria azienda).`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  tags: [ 'prototyping', 'development', 'design', 'interfaces' ],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-prototyping-explore-ideas-improve-your-product-45148435185?aff=ehomecard#tickets',
  facebook: 'https://www.facebook.com/events/1670618842986026/',
  evensi: 'https://www.evensi.it/prototyping-explore-ideas-improve-product-cobox/255400448#',
  video: '',
  slides: 'https://speakerdeck.com/michelemazzucco/prototyping-explore-ideas-improve-your-product',
}, {
  status: 'past',
  speakers: [{ name: 'Alessandro', surname: 'Colla', email: '', twitter: 'collaalessandro', linkedin: 'https://www.linkedin.com/in/alessandrocolla', blog: 'http://www.alessandrocolla.com' }],
  date: '2018-03-29',
  title: 'Assistant, the conversational side of Google',
  abstract: `Dobbiamo realizzare un bot conversazionale, quali sono gli strumenti a disposizione per prototipizzare e sviluppare? Che maturità hanno le piattaforme attualmente utilizzabili? Cosa è bene tenere presente prima, durante e dopo lo sviluppo? Questo talk cercherà di fare un po' di chiarezza e dare dei consigli pratici, dal concepimento alla pubblicazione, sulla base di ciò che Alessandro ha imparato dopo un anno e mezzo di sviluppo, usando DialogFlow, Google Assistant e Alexa.

  Se siete interessati ad altri lavori di Alessandro, andate a curiosare di cosa si occupa [Evoluzione Telematica](http://www.evoluzionetelematica.it/)!

  Ok Google, non voglio perdermelo!
`,
  bio: `Attualmente sono socio di Evoluzione Telematica, una web agency che si occupa principalmente di eCommerce. Come molti della mia generazione mi sono avvicinato alla programmazione quando mi regalarono un Commodore64: da li il passaggio dal giocare a cercare di fare un gioco fu breve e ho iniziato ad appassionarmi ai linguaggi. A 16 anni passai a un 8086 per poi seguire tutte le evoluzioni hardware, dei sistemi operativi e dei linguaggi di programmazione negli anni successivi. Nel corso di ormai più di venti anni, passati nel settore IT, ho sviluppato verticalizzazioni per gestionali e sviluppato da zero per i più disparati ambiti. Nel 2009 mi sono avvicinato al DDD e alle pratiche agili e da allora sono sempre "alla ricerca della verità". Negli ultimi tempi, oltre a occuparmi di eCommerce, ho anche realizzato applicazioni di realtà aumentata, chatbot e utilizzato strumenti come kinect, oculus rift e droni. Mi piacciono le lingue straniere e sono appassionato di arti marziali, pratico Krav Maga e nel tempo libero rimanente studio e rimango aggiornato sulla mia passione principale: la programmazione.`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  tags: [ 'chatbot', 'development', 'ok google', 'code' ],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-assistant-the-conversational-side-of-google-44163390891',
  facebook: 'https://www.facebook.com/events/187179488727300/',
  video: '',
  slides: 'https://www.slideshare.net/AlessandroColla/assistant-the-conversational-side-of-google-93644328',
}, {
  status: 'past',
  speakers: [{ name: 'Luca', surname: 'Bravo', email: '', twitter: 'hz', }],
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
  speakers: [{ name: 'Roberto', surname: 'Albertini', email: '', twitter: 'robalbertini', }],
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
  slides: 'https://www.slideshare.net/RobertoAlbertini/2018-0129-brewbox-refactoring-sempre-senza-piet-88167873',
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
  speakers: [{ name: 'Lino', surname: 'Telera', email: '', twitter: 'linotelera', }],
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
  slides: 'https://www.slideshare.net/acqualiofilizzata/experience-matters-90489140',
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
  eventbrite: 'https://www.eventbrite.it/e/biglietti-devsecops-and-the-hunter-farmer-model-37873199760',
  facebook: 'https://www.facebook.com/events/271940556656971',
  video: 'https://www.youtube.com/watch?v=31g0aX6uG0k',
  slides: 'https://www.slideshare.net/Codemotion/fabrizio-cornelli-antropologia-di-un-devsecops-secondo-il-modello-hunter-farmer-codemotion-milan-2017',
}, {
  status: 'past',
  speakers: [{ name: 'Daniele', surname: 'Crespi', email: '', twitter: 'CrespiDaniele', },
             { name: 'Andrea', surname: 'Nelson Mauro', email: '', twitter: 'nelsonmau', }],
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
  eventbrite: 'https://www.eventbrite.it/e/biglietti-gli-open-data-in-lombardia-tra-regione-ed-enti-locali-35514840845',
  facebook: 'https://www.facebook.com/events/110215022926639/',
  video: 'https://www.youtube.com/watch?v=9ov5uz2hd5Y',
  slides: '',
}, {
  status: 'past',
  speakers: [{ name: 'Sergio', surname: 'Cigoli', email: '', twitter: 'cigucigu', }],
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
  eventbrite: 'https://www.eventbrite.it/e/biglietti-from-online-training-courses-to-mooc-34607159947',
  facebook: 'https://www.facebook.com/events/118230102085591',
  video: 'https://www.youtube.com/watch?v=RuR6epdvSaI',
  slides: 'https://www.slideshare.net/cigucigu/online-learning-platforms',
}, {
  status: 'past',
  speakers: [{ name: 'Daniele', surname: 'Giussani', email: '', twitter: '', },
    { name: 'Corrado', surname: 'Ignoti', email: '', twitter: 'corradoignoti', }],
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
  eventbrite: 'https://www.eventbrite.it/e/biglietti-e-lora-delliot-33410414449',
  facebook: 'https://www.facebook.com/events/1290590447690596',
  video: 'https://www.youtube.com/watch?v=_Po_Sza_qtw',
  slides: '',
}, {
  status: 'past',
  speakers: [{ name: 'Roberto', surname: 'Albertini', email: '', twitter: 'robalbertini', }],
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
  eventbrite: 'https://www.eventbrite.it/e/biglietti-pianificazione-adattiva-32947991329',
  facebook: 'https://www.facebook.com/events/1116991255095909',
  video: 'https://www.youtube.com/watch?v=PAoJdRWcNzE',
  slides: 'https://www.slideshare.net/RobertoAlbertini/pianificazione-adattiva-brewbox-201703',
}, {
  status: 'past',
  date: '2017-03-14',
  title: 'Marubino Night',
  subtitle: 'Ovvero festeggiamo insieme il primo compleanno di Brewbox!', 
  abstract: `Ebbene sì! E’ già passato un anno! Sembra ieri che armeggiavamo in Cobox con proiettori, amplificatori e chitarre, chiedendoci (sinceramente) se avremmo riempito la sala con più di dieci persone. Beh. E’ andata meglio di ogni nostra aspettativa! Per questo abbiamo deciso di festeggiare il primo anno della nostra Community Cremonese, passando una serata insieme, attorno ad un tavolo, con dell’ottimo cibo per concederci un momento di chiacchiera, rigorosamente nerd.

L’appuntamento è per martedì 14 Marzo, ore 19:30 al Bar Sport di Costa Sant’Abramo.

Per cosa è famoso il Bar Sport? Ma ovviamente per i Marubini!

Il costo della cena è di 30€, e prevede antipasti, marubini in brodo, un secondo di lessi e arrosti, dolce, vino, acqua, caffè, amaro. 
Se non sei mai stato al Bar Sport, preparati psicologicamente e soprattutto… non mangiare troppo a pranzo ;)

Se sei vegetariano: avvisaci! Ci accorderemo per un menu ad-hoc.

Come funziona:
Tramite Eventbrite (solo tramite Eventbrite) , prenoti il tuo posto a tavola. Il pagamento si farà direttamente al ristorante. Se prenoti e decidi di non venire, ti chiediamo la cortesia di disdire per tempo, altrimenti la tua quota dovrà essere divisa fra i presenti (che in qualche maniera ti odieranno).

I posti sono 30, quindi, affrettati a prenotare!

Che il marubino sia con te!
`,
  schedule: [ ],
  tags: [ ],
  eventbrite: 'https://www.eventbrite.it/e/biglietti-marubino-night-32462567413#',
  facebook: 'https://www.facebook.com/events/398606743849285/',
}, {
  status: 'past',
  speakers: [{ name: 'Lino', surname: 'Telera', email: '', twitter: 'linotelera', }],
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
  eventbrite: 'https://www.eventbrite.it/e/biglietti-321-code-in-container-31872896692#',
  facebook: 'https://www.facebook.com/events/447420418922408',
  video: 'https://www.youtube.com/watch?v=foFsQqIxEv4',
  slides: '',
}, {
  status: 'past',
  speakers: [{ name: 'Michele', surname: 'Capra', email: '', twitter: 'piccoloaiutante', }],
  date: '2017-01-31',
  title: 'Microservices in practice with Seneca.js',
  subtitle: '',
  abstract: `Le architetture a microservices stanno cambiando rapidamente il modo in cui sviluppiamo le nostre applicazioni. L'aspetto fondamentale di queste architetture è il fatto di essere composte da componenti piccoli e fortemente disaccoppiati. Ma questa è la teoria, come possiamo veramente applicare questo pattern al nostro lavoro quotidiano? Come possiamo strutturare la nostra applicazione per ottenere il massimo dalle architetture a microservices? In questo talk, insieme a Michele Capra, cercheremo di dare una risposta a queste e altre domande con una introduzione al toolkit Seneca.js. Usando plugins, commands e altre funzionalità di Seneca.js vedremo come realizzare facilmente una applicazione Node.js che sfrutti i microservices.`,
  schedule: [
    { activity: 'Aperitivo', start: '18:30', end: '19:30' },
    { activity: 'Talk', start: '19:30', end: '20:30' },
    { activity: 'Cena (per chi vuole)', start: '20:30', end: '22:00' },
  ],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-microservice-in-practice-with-senecajs-31346962609#',
  facebook: 'https://www.facebook.com/events/1089020151227317/',
  video: 'https://www.youtube.com/watch?v=yZxyVJEgxVg&t=8s',
  slides: '',
}, {
  status: 'past',
  date: '2016-12-22',
  title: 'Beerettone 2016',
  abstract: `I have a beer...
I have a panettone...
Uh!
Beerettone!!!

Natale è alle porte e impazzano le cene e le feste! BrewBox non e' da meno e vuole invitarvi giovedì 22 dicembre in Cobox per fare quattro chiacchiere, scambiarci gli auguri, mangiare una fetta di panettone e brindare, ovviamente con della birra!

I nostri elfi, noleggiati da Babbo Natale, hanno preparato una piccola sorpresa per tutti i partecipanti, quindi non mancate!
`,
  schedule: [ ],
  tags: [ ],
  eventbrite: '',
  facebook: 'https://www.facebook.com/events/433354340386183/',
}, {
  status: 'past',
  speakers: [{name: 'Paolo', surname: 'Camozzi', email: '', twitter: 'pcamoz' }],
  date: '2016-11-24',
  title: 'Internet killed the radio stars',
  subtitle: 'realizzare una web radio in casa con 1 PC, 1 linea ADSL e abbondante colla vinilica',
  abstract: `Il talk ha l’obiettivo di mostrare come utilizzare tecnologia a basso costo per realizzare una web radio casalinga/amatoriale. Verranno presentati gli elementi funzionali di una radio, i meccanismi di programmazione e rotazione musicale, l’hardware e software utilizzabili per un setup economico e funzionale. Ovviamente non mancheranno esempi e potremo vedere il setup in produzione a Radio Nero Carta Oro, web radio amatoriale indipendente.

Per partecipare all'evento non è richiesto alcun prerequisito tecnico, se vi piace la musica vi divertirete un sacco! :D
`,
  schedule: [],
  tags: [],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-internet-killed-the-radio-stars-29309842528',
  facebook: 'https://www.facebook.com/events/1713978812262675/',
  video: 'https://www.youtube.com/watch?v=obRtH6_zMBg',
  slides: 'http://slides.com/paolocamozzi/deck',
}, {
  status: 'past',
  speakers: [{name: 'Fabio', surname: 'Sangiovanni', email: '', twitter: 'sanjioh' }],
  date: '2016-10-26',
  title: 'Introduzione alla programmazione asincrona con Python e Twisted',
  subtitle: '',
  abstract: `Il modello d'esecuzione asincrono, sebbene non costituisca una tecnica di sviluppo di recente diffusione, negli ultimi anni ha raggiunto livelli di popolarità estremamente interessanti. Di cosa si tratta? In cosa si differenzia da modelli più tradizionali? Quali problemi risolve e quali difficoltà comporta? Utilizzando il framework Twisted, il talk introdurrà alla programmazione asincrona nel mondo Python, analizzando punti di forza e limiti di questa tecnologia e dando uno sguardo a cosa riserva il futuro.

Per seguire al meglio l'intervento è necessaria una conoscenza base di concetti di sistemi operativi e del linguaggio Python.
`,
  schedule: [],
  tags: [],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-introduzione-alla-programmazione-asincrona-con-python-e-twisted-28572557288#',
  facebook: '',
  video: 'https://www.youtube.com/watch?v=0hVKkZRKF8E',
  slides: 'http://slides.com/sanjioh/python-twisted',
}, {
  status: 'past',
  speakers: [{name: 'Samuele', surname: 'Verzi', email: '', twitter: 'samu_' },
             {name: 'Michele', surname: 'Mazzucco', email: '', twitter: 'michelemazzucco' }],
  date: '2016-09-27',
  title: 'YES we CSS! Awesome workflows with PostCSS',
  subtitle: '',
  abstract: `Il CSS non è altro che una “cascata” di regole che ci consentono di applicare stile ad una pagina o ad un’applicazione web, ma non solo! Negli ultimi anni abbiamo assistito a una rivoluzione, dall’uso di animazioni alla miriade di tools che ci hanno aiutato a semplificare la scrittura e il riuso.

In questa caotica evoluzione nascono i preprocessori, ovvero degli “strumenti” in grado di semplificare queste operazioni. Ci siamo però ritrovati a dover dipendere da questi senza avere la possibilità di estenderli ed è proprio qui che entra in campo PostCSS, un “postprocessore” in grado di manipolare il CSS attraverso dei plugins Javascript. Questo fantastico ecosistema di plugins vi permetterà di controllare i vostri fogli di stile, scrivere con gli standard del futuro (CSS4) fin da subito e, perché no, abbandonare completamente il vostro preprocessore preferito.
`,
  schedule: [],
  tags: [],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-yes-we-css-awesome-workflows-with-postcss-27623055302',
  facebook: 'https://www.facebook.com/events/180146709076081/',
  video: 'https://www.youtube.com/watch?v=G0ABVENNogI',
  slides: 'https://www.slideshare.net/MicheleMazzucco/postcss-brewbox-slides',
}, {
  status: 'past',
  speakers: [{name: 'Gianni Bortolo', surname: 'Bossini', email: '', twitter: 'bossinigianni' }],
  date: '2016-06-28',
  title: 'Qual è il colmo per un dev? avere ATTORI come amici!',
  subtitle: '',
  abstract: `All'inizio degli anni 70, Carl Hewitt introdusse un nuovo modello matematico di calcolo denominato Actor Model.
L'Actor Model ha influenzato lo sviluppo di diversi linguaggi di programmazione, tra cui Erlang, Elixir e Scala.

Ma perchè dedicare una delle migliori serate della Primavera/Estate 2016 all'Actor Model? Insieme cercheremo di capire cosa è l'Actor Model e perchè può essere un'arma in più nella vita quotidiana di ogni sviluppatore, indipendentemente dal linguaggio di programmazione.

Durante la serata saranno presentati esempi di codice in C# sfruttando la libreria Akka.NET (porting del più famoso tool per Java), ma non è necessario conoscere il linguaggio per poter apprezzare i vantaggi di questo meraviglioso strumento.

Può l'ennesima teoria degli anni 70 migliorare lo sviluppo di applicazioni nell'era del cloud computing? La risposta è... lo vedremo insieme!

Argomenti:
- Actor Model;
- Concurrent programming;
- Parallel programming;
- Microservices;
- Reactive application;
- Enterprise Distributed Application;
- Akka.net.

Prerequisiti:
- nozioni di programmazione (in qualsiasi linguaggio).
`,
  schedule: [],
  tags: [],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-qual-e-il-colmo-per-un-dev-avere-attori-come-amici-26031687478#',
  facebook: '',
  video: 'https://www.youtube.com/watch?v=SjrdntZvBBs',
  slides: 'https://docs.google.com/presentation/d/1PIo6xKv7Q2GmMBLIedVPz6ljvLuDSm8YdCCnvtPKde4/edit?usp=sharing',
}, {
  status: 'past',
  speakers: [{name: 'Emanuele', surname: 'Conti', email: '', twitter: 'emanuele_conti' }],
  date: '2016-05-24',
  title: 'Dati, dati, dati ovunque: come sopravvivere alla moda delle infografiche',
  subtitle: '',
  abstract: `La presentazione grafica è lo strumento attraverso il quale l’uomo,da sempre, ha cercato di analizzare e comprendere la complessità dei fenomeni che lo circondano.
L’avvento di tecnologie in grado di registrare e archiviare grandissime quantità di dati ha trovato nell’analisi e nella visualizzazione dei dati il “medium” capace di rielaborare e tradurre le informazioni numeriche in forma visiva universalmente comprensibile.

Emanuele Conti, grafico, docente e co-founder di Tuxtax (@thetuxtax) (laboratorio di analisi e visualizzazione di dati con base Milano e Losanna) ci racconterà, attraverso una serie di esempi (case histories) il processo creativo e gli strumenti utilizzati nella creazione di un’infografica, disciplina progettuale che abbraccia trasversalmente l’analisi statistica e il graphic design, convergendo sempre più spesso in forme interattive di data journalism.

Programma dell'incontro:

1- che cos’è un'infografica: progettare l’architettura dell’informazione;
2- nascita ed evoluzione dell’infografica: cenni storici, dalle prime carte geografiche al data journalism;
3- l’infografica in Italia: gli studi grafici ed i laboratori di ricerca italiani che si occupano di infografica;
4- strumenti digitali per l’infografica: dal foglio di calcolo alle librerie di D3.js;
5- case histories: esempi di visualizzazione di dati, dall’Inferno dantesco ai samples musicali utilizzati dei produttori di musica hip-hop;
6- Infographics Lab: realizzazione di un’infografica in tempo reale.
`,
  schedule: [],
  tags: [],
  hashtag: '',
  eventbrite: 'https://www.eventbrite.it/e/biglietti-dati-dati-dati-ovunque-come-sopravvivere-alla-moda-delle-infografiche-25227822095#',
  facebook: '',
  video: 'https://www.youtube.com/watch?v=1JpyIb9z9tc',
  slides: 'https://www.dropbox.com/s/h215obe52vjrq0x/DatiOvunque_Cobox_24Maggio2016.pdf?dl=0',
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
  resources: ['https://github.com/fgandellini/lets-play-with-angularjs', 'https://github.com/fgandellini/angularjs-pedalboard'],
}]

export { events }
