import { el, text } from 'redom'

const Speaker = s =>
  el('li.speaker', [
    el('span.name', s.name),
    el('span.surname', s.surname),
    s.twitter && el('span.twitter', [
      text('('),
      el('a', { href: `https://twitter.com/${s.twitter}` }, `@${s.twitter}`),
      text(')'),
    ]),
  ])

const Activity = a =>
  el('li.schedule-entry', [
    el('span.start', a.start),
    el('span.end', a.end),
    el('span.activity', a.activity),
  ])

const Tag = t => el('li.tag', t)

const Eventbrite = id => el('iframe', {
  src: `//eventbrite.com/tickets-external?eid=${id}&amp;ref=etckt`
})

const Event = e =>
  el('.event', [
    e.title && el(`h3.title`, e.title),
    e.schedule && el('.speakers', [
      el('h5', 'by'),
      el('ul.speakers', e.speakers.map(Speaker)),
    ]),
    e.subtitle && el(`h4.subtitle`, e.subtitle),
    e.abstract && el(`.abstract`, e.abstract),
    e.schedule && el('.schedule', [
      el('h5', 'Programma della serata'),
      el('ul.schedule', e.schedule.map(Activity)),
    ]),
    e.tags && el('.tags', [
      el('h5', 'Temi'),
      el('ul.tags', e.tags.map(Tag)),
    ]),
    e.hashtag && el(`.hashtag`, e.hashtag),
    e.eventbrite && el('.eventbrite', [
      el('h5', 'Prenota il tuo posto!'),
      Eventbrite(e.eventbrite),
    ]),
    e.facebook && el(`.facebook`, e.facebook),
    e.slides && el(`.slides`, e.slides),
  ])

export { Event }
