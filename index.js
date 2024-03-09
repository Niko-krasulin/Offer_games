import {Game} from './components/Game/game.components.js'

function renderUi() {
    const gameEl = Game()

    const appEl =document.getElementById('app')
    appEl.append(gameEl)
}

renderUi()