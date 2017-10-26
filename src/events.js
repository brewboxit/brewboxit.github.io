const events = [{
  status: 'current',
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
  video: '',
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
  video: '',
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
  video: '',
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
  video: '',
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
  video: '',
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
  video: '',
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
  video: '',
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
  video: '',
  slides: '',
}]

export { events }
