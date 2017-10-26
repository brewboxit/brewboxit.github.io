import hop from './assets/brewbox-list-hop.svg'
import Remarkable from 'remarkable'

const md = new Remarkable({
  breaks: true // Convert '\n' in paragraphs into <br>
})

const has = x => !!x && (x.length > 0)
const optional = template => data => has(data) ? template(data) : ''

const list = classNames => itemRenderer => optional(items => `
  <ul class="${classNames}">
    ${items.map(itemRenderer).join('')}
  </ul>
`)

const SpeakerList = list('speakers__list')(s => `
  <li class="speaker">
    <span class="speaker__name">${s.name}</span>
    <span class="speaker__surname">${s.surname}</span>
    ${s.twitter && `
      <span class="twitter">
        (<a href="https://twitter.com/${s.twitter}">@${s.twitter}</a>)
      </span>
    `}
  </li>
`)

const ScheduleList = list('event__schedule-list')(a => `
  <li class="schedule-entry">
    <img class="schedule-entry__img" src="${hop}" />
    <span class="schedule-entry__start">${a.start}</span>
    <span class="schedule-entry__end">${a.end}</span>
    <span class="schedule-entry__activity">${a.activity}</span>
  </li>
`)

const TagList = list('event__tags')(t => `
  <li class="tags__tag">${t}</li>
`)

const Title = optional(t => `
  <h3 class="event__title">${t}</h3>
`)

const Subtitle = optional(s => `
  <h4 class="event__subtitle">${s}</h4>
`)

const Speakers = optional(s => `
  <div class="event__speakers">
    <span>by</span>
    ${SpeakerList(s)}
  </div>
`)

const Abstract = optional(a => `
  <div class="event__abstract">${md.render(a)}</div>
`)

const Schedule = optional(s => `
  <div class="event__schedule">
    <h4 class="event__section-title">Programma della serata</h4>
    ${ScheduleList(s)}
  </div>
`)

const Tags = optional(t => `
  <div class="event__tags">
    <h4 class="event__section-title">Temi</h4>
    ${TagList(t)}
  </div>
`)

const Hashtag = optional(h => `
  <div class="event__hashtag">
    <h4 class="event__section-title">Hashtag dell'evento</h4>
    <div class="event__hashtag">#${h}</div>
  </div>
`)

const Eventbrite = optional(e => `
  <div class="event__eventbrite">
    <h4 class="event__section-title">Prenota il tuo posto</h4>
    <a class="eventbrite__link" href="${e}">Eventbrite</a>
  </div>
`)

const Facebook = optional(f => `
  <div class="event__facebook">
    <h4 class="event__section-title">Fai girare la voce</h4>
    <a class="facebook__link" href="${f}">Facebook</a>
  </div>
`)

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
