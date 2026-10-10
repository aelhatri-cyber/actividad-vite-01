import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1>¡Hola, mundo!</h1>
  <p>Mi primera web con Vite.</p>
  <button id="counter" type="button">Contador: 0</button>
`

setupCounter(document.querySelector('#counter'))