import hop from './assets/brewbox-list-hop.svg'

const has = x => !!x && x.length > 0

const Speaker = s => `
  <li class="speaker">
    <span class="speaker__name">${s.name}</span>
    <span class="speaker__surname">${s.surname}</span>
    ${s.twitter && `
      <span class="twitter">
        (<a href="https://twitter.com/${s.twitter}">@${s.twitter}</a>)
      </span>
    `}
  </li>
`

const Activity = a =>`
  <li class="schedule-entry">
    <img class="schedule-entry__img" src="${hop}" />
    <span class="schedule-entry__start">${a.start}</span>
    <span class="schedule-entry__end">${a.end}</span>
    <span class="schedule-entry__activity">${a.activity}</span>
  </li>
`

const Tag = t => `
  <li class="tags__tag">${t}</li>
`

const Title = t => t ? `
  <h3 class="event__title">${t}</h3>
` : ''

const Subtitle = s => s ? `
  <h4 class="event__subtitle">${s}</h4>
` : ''

const Speakers = s => has(s) ? `
  <div class="event__speakers">
    <span>by</span>
    <ul class="speakers__list">
      ${s.map(Speaker)}
    </ul>
  </div>
`: ''

const Abstract = a => a ? `
  <div class="event__abstract">${a}</div>
` : ''

const Schedule = s => has(s) ? `
  <div class="event__schedule">
    <h4 class="event__section-title">Programma della serata</h4>
    <ul class="event__schedule-list">
      ${s.map(Activity).join('')}
    </ul>
  </div>
` : ''

const Tags = t => has(t) ? `
  <div class="event__tags">
    <h4 class="event__section-title">Temi</h4>
    <ul class="event__tags">
      ${t.map(Tag).join('')}
    </ul>
  </div>
` : ''

const Hashtag = h => has(h) ? `
  <div class="event__hashtag">
    <h4 class="event__section-title">Hashtag dell'evento</h4>
    <div class="event__hashtag">#${h}</div>
  </div>
` : ''

const Eventbrite = e => has(e) ? `
  <div class="event__eventbrite">
    <h4 class="event__section-title">Prenota il tuo posto</h4>
    <a class="eventbrite__link" href="${e}">Eventbrite</a>
  </div>
` : ''

const Facebook = f => has(f) ? `
  <div class="event__facebook">
    <h4 class="event__section-title">Fai girare la voce</h4>
    <a class="facebook__link" href="${f}">Facebook</a>
  </div>
` : ''

const Event = e => `
  <div class="event event--${e.status}">
    ${Title(e.title)}
    ${Subtitle(e.subtitle)}
    ${Speakers(e.speakers)}
    ${Abstract(e.abstract)}
    ${Schedule(e.schedule)}
    ${Tags(e.tags)}
    ${Hashtag(e.hashtag)}
    ${Eventbrite(e.eventbrite)}
    ${Facebook(e.facebook)}
  </div>
`

export { Event }
