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

const Event = e => `
  <div class="event event--${e.status}">
    ${e.title ? `
      <h3 class="event__title">${e.title}</h3>
    ` : ''}
    ${e.subtitle ? `
      <h4 class="event__subtitle">${e.subtitle}</h4>
    ` : ''}
    ${has(e.speakers) ? `
      <div class="event__speakers">
        <span>by</span>
        <ul class="speakers__list">
          ${e.speakers.map(Speaker)}
        </ul>
      </div>
    `: ''}
    ${e.abstract ? `
      <div class="event__abstract">${e.abstract}</div>
    ` : ''}
    ${has(e.schedule) ? `
      <div class="event__schedule">
        <h4 class="event__section-title">Programma della serata</h4>
        <ul class="event__schedule-list">
          ${e.schedule.map(Activity).join('')}
        </ul>
      </div>
    ` : ''}
    ${has(e.tags) ? `
      <div class="event__tags">
        <h4 class="event__section-title">Temi</h4>
        <ul class="event__tags">
          ${e.tags.map(Tag).join('')}
        </ul>
      </div>
    ` : ''}
    ${has(e.hashtag) ? `
      <div class="event__hashtag">
        <h4 class="event__section-title">Hashtag dell'evento</h4>
        <div class="event__hashtag">#${e.hashtag}</div>
      </div>
    ` : ''}
    ${has(e.eventbrite) ? `
      <div class="event__eventbrite">
        <h4 class="event__section-title">Prenota il tuo posto</h4>
        <a class="eventbrite__link" href="${e.eventbrite}">Eventbrite</a>
      </div>
    ` : ''}
    ${has(e.facebook) ? `
      <div class="event__facebook">
        <h4 class="event__section-title">Fai girare la voce</h4>
        <a class="facebook__link" href="${e.facebook}">Facebook</a>
      </div>
    ` : ''}
  </div>
`

export { Event }
