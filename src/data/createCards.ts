import {CardState, CardType, CardContainer} from "../types/types";

const getImagesId = (cardCount: number): CardContainer[] => {
	let images: CardContainer[] = [];
	for (let i = 0; i < cardCount ; i++) {
		images.push( { idImage: i, availableCells: 2 });
	}
	return images
}

const createCardsTest = (images: CardContainer[]): CardType[] => {
	const cards: CardType[] = [];
	// random
	for (let i = 0; i < images.length * 2; i++) {
		let index = 0;
		do {
			index = Math.floor(Math.random() * images.length)
		} while (images[index].availableCells === 0)

		images[index].availableCells--
		cards.push({id: i, state: CardState.CLOSED, idImage: index})
	}
	return cards
}

export const getCardsTest = (cardCount: number): CardType[] => {
	return createCardsTest(getImagesId(cardCount))
}