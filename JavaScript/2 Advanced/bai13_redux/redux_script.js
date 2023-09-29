import { attach } from "./store.js";


// attach
/** Component: `View` (Element root ở index.html)
 *  root: document.querySelector('#redux-root')
 */
attach(()=> '<h2>I loved Porsche 781</h2>', document.querySelector('#redux-root'))
