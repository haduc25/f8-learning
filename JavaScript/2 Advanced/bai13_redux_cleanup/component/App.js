import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

const App = ({cars}) => {
    return html`
        <ul>
            ${cars.map(car=> `<li>${car}</li>`)}
        </ul>

        <button
            onclick="dispatch('ADD', 'Bentley ' + Math.floor(Math.random() * 10))"    
        >Add a new car</button>
    `
}

export default connector(App)