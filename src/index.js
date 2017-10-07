import './style.styl'
import { mount, el } from 'redom'
import { Event } from './components'
import { events } from './events' 

const app = el('div', [
  el('h1', 'BrewBox Community'),
  el('ul.events', events.map(Event)),
])

mount(document.body, app)
