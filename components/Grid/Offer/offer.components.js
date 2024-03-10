import {catchOffer} from "../../../data/data.js";


export function Offer() {
    const element = document.createElement('img')

    element.src = 'assets/img/offer.png'
    element.addEventListener("click", () => {
        catchOffer()
    })

    return element
}
