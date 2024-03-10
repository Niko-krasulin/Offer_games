import {Game} from './components/Game/game.components.js'
import {addEventListener} from "./data/data.js";

function renderUi() {
    const gameEl = Game()

    const appEl =document.getElementById('app')
    appEl.innerHTML = ''

    appEl.append(gameEl)
}

renderUi()

addEventListener(renderUi)