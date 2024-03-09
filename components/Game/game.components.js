import {Settings} from '../Settings/settings.component.js'
import {Scores} from "../Scores/scores.components.js";
import {Grid} from "../Grid/grid.components.js";


export function Game() {
    const container = document.createElement('div')

    const settingsEL = Settings()
    const scoresEl = Scores()
    const gridEl = Grid()


    container.append(settingsEL, scoresEl, gridEl )

    return container
}
