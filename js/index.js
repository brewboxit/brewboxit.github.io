const formatAsCurrent = ({
  speakers, date, title, subtitle, abstract, schedule,
  hashtag, eventbrite, facebook, video, slides,
}) => document.createRange().createContextualFragment(`
  <h4>${title}</h4>
  <div>${date}</div>
  ${subtitle ? `<h5>${subtitle}</h5>` : ''}
  <p>${abstract}</p>
  <h6>Programma della serata</h6>
  <ul>
  ${schedule.map(({ activity, start, end }) => `
    <li>${activity} | ${start} - ${end}</li>
  `).join('')}
  </ul>
`)

const formatAsPast = ({
  speakers, date, title, subtitle, abstract, schedule,
  hashtag, eventbrite, facebook, video, slides,
}) => document.createRange().createContextualFragment(`
  <li>
    <h4>${title}</h4>
    <div>${date}</div>
  </li>
`)

const formatAsFuture = ({
  speakers, date, title, subtitle, abstract, schedule,
  hashtag, eventbrite, facebook, video, slides,
}) => document.createRange().createContextualFragment(`
  <li>
    <h4>${title}</h4>
    <div>${date}</div>
  </li>
`)

const getCurrentEvent = events =>
  events.find(e => new Date(e.date).getMonth() === new Date().getMonth())

const getPastEvents = events =>
  events.filter(e => new Date(e.date).getMonth() < new Date().getMonth())

const getFutureEvents = events =>
  events.filter(e => e.date === 'TBD').concat(
    events.filter(e => new Date(e.date).getMonth() > new Date().getMonth())
  )

window.addEventListener('load', () => {
  const events = window.events
  
  const currentContainer = document.getElementById('current')
  const currentEvt = getCurrentEvent(events)
  currentContainer.appendChild(formatAsCurrent(currentEvt))

  const pastContainer = document.getElementById('past')
  const pastEvts = getPastEvents(events)
  pastEvts.map(evt => pastContainer.appendChild(formatAsPast(evt)))

  const futureContainer = document.getElementById('future')
  const futureEvts = getFutureEvents(events)
  futureEvts.map(evt => futureContainer.appendChild(formatAsFuture(evt)))
})
