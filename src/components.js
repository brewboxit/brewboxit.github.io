import { el, text } from 'redom'
import hop from './assets/brewbox-list-hop.svg'

const Speaker = s =>
  el('li.speaker', [
    el('span.speaker__name', s.name),
    el('span.speaker__surname', s.surname),
    s.twitter && el('span.twitter', [
      text('('),
      el('a', { href: `https://twitter.com/${s.twitter}` }, `@${s.twitter}`),
      text(')'),
    ]),
  ])

const Activity = a =>
  el('li.schedule-entry', [
    el('img.schedule-entry__img', {
      src: hop
    }),
    el('span.schedule-entry__start', a.start),
    el('span.schedule-entry__end', a.end),
    el('span.schedule-entry__activity', a.activity),
  ])

const Tag = t => el('li.tags__tag', t)

const Eventbrite = id => el('iframe', {
  src: `//eventbrite.com/tickets-external?eid=${id}&amp;ref=etckt`
})

const Facebook = id => el('a.facebook__link', {
  src: `https://www.facebook.com/events/${id}`
})

const Event = e =>
  el(`.event.event--${e.status}`, [
    e.title && el(`h3.event__title`, e.title),
    e.subtitle && el(`h4.event__subtitle`, e.subtitle),
    e.schedule && el('.event__speakers', [
      el('span', 'by'),
      el('ul.speakers__list', e.speakers.map(Speaker)),
    ]),
    e.abstract && el(`.event__abstract`, e.abstract),
    e.schedule && el('.event__schedule', [
      el('h4.event__section-title', 'Programma della serata'),
      el('ul.event__schedule-list', e.schedule.map(Activity)),
    ]),
    e.tags && el('.event__tags', [
      el('h4.event__section-title', 'Temi'),
      el('ul.event__tags', e.tags.map(Tag)),
    ]),
    e.hashtag && el(`.hashtag`, e.hashtag),
    e.eventbrite && el('.event__eventbrite', [
      el('h4.event__section-title', 'Prenota il tuo posto!'),
      Eventbrite(e.eventbrite),
    ]),
    e.facebook && el(`.event__facebook`, Facebook(e.facebook)),
    e.slides && el(`.event__slides`, e.slides),
  ])

export { Event }
