export const data = {
    scores: {
        catchesCount: 0,
        missesCount: 0
    },
    coords: {
        x: 0,
        y: 0
    },
    settings: {
        gridSize: {
            columnsCount: 3,
            rowsCount: 3
        },
    }
}

let subscriber = () => {}

export function addEventListener(observer) {
    subscriber = observer
}

function jumpOfferToRandomPosition() {
    let newX, newY
    do {
        newX = generateRandomInt(data.settings.gridSize.columnsCount)
        newY = generateRandomInt(data.settings.gridSize.rowsCount)
    } while (data.coords.x === newX && data.coords.y === newY)

    data.coords.x = newX
    data.coords.y = newY

}

function generateRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export function catchOffer() {
    data.scores.catchesCount++
    jumpOfferToRandomPosition()
    subscriber()
}


setInterval(()=> {
    jumpOfferToRandomPosition()
    subscriber()
}, 2000)