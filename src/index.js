import './style.styl'
import { Event } from './components'
import { events } from './events' 
import logo from './assets/brewbox-logo.svg'

const app = `
  <main class="wrapper">
    <div class="logo">
      <img class="logo__image" src="${logo}" alt="BrewBox"/>
    </div>
    <ul class="events">
      ${events.map(Event).join('')}
    </ul>
  </main>
`

document.body.innerHTML = app
