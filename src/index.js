import './style.styl'
import { mount, el } from 'redom'
import { Event } from './components'
import { events } from './events' 
import logo from './assets/brewbox-logo.svg'

console.log(logo)

const app = el('main.wrapper', [
  el('.logo',
    el('img.logo__image', { 
      src: logo, 
      alt: 'BrewBox\'s logo' 
    })
  ),
  el('ul.events', events.map(Event))
])

mount(document.body, app)
