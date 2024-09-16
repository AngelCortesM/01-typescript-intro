import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import './Topics/02-object-interface.ts'
// import './Topics/01-basic-types.ts'
// import './Topics/03-functions.ts';
// import './Topics/04-homework-types.ts';
// import './Topics/05-basic-destructuring.ts';
// import './Topics/06-function.destructuring.ts'
// import './Topics/07-import-export.ts'
import './Topics/08-classes.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />

    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
         <h1>Hibrid Bussiness Solutions</h1> 
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
console.log('Hola NG');

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
