import {data} from "../../data/data.js";
import {Offer} from './Offer/offer.components.js'

export function Grid() {
    const container = document.createElement('table')

    for (let y = 0; y < data.settings.gridSize.rowsCount; y++) {

        const rowEl = document.createElement('tr')

        for (let x = 0; x < data.settings.gridSize.columnsCount; x++) {

            const cellEl = document.createElement('td')

            if (x === data.coords.x && y === data.coords.y) {
                cellEl.append(Offer())
            }
                rowEl.append(cellEl)

        }

        container.append(rowEl)

    }


    return container
}