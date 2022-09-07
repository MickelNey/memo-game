import {CardStates, CardTypeTest, cardContainer} from "../types/types";


const getImagesId = (cardCount: number): cardContainer[] => {
	let images: cardContainer[] = [];
	for (let i = 0; i < cardCount ; i++) {
		images.push( { idImage: i, availableCells: 2 });
	}
	return images
}

const createCardsTest = (images: cardContainer[]): CardTypeTest[] => {
	const cards: CardTypeTest[] = [];
	// random
	for (let i = 0; i < images.length * 2; i++) {
		let index = 0;
		do {
			index = Math.floor(Math.random() * images.length)
		} while (images[index].availableCells === 0)

		images[index].availableCells--
		cards.push({id: i, state: CardStates.CLOSED, idImage: index})
	}
	return cards
}

export const getCardsTest = (cardCount: number): CardTypeTest[] => {
	return createCardsTest(getImagesId(cardCount))
}

// export const createCards = (): CardType[] => {
//
// 	type createContainer = {
// 		color: Color;
// 		availableCells: number;
// 	}
// 	const cards: CardType[] = [];
// 	const colors: createContainer[] = [
// 		{ color: Color.RED, availableCells: 2},
// 		{ color: Color.BLUE, availableCells: 2},
// 		{ color: Color.YELLOW, availableCells: 2},
// 		{ color: Color.TEAL, availableCells: 2},
// 		{ color: Color.PINK, availableCells: 2},
// 		{ color: Color.VIOLET, availableCells: 2},
// 		{ color: Color.ORANGE, availableCells: 2},
// 		{ color: Color.GREEN, availableCells: 2},
// 	]
//
// 	for (let i = 0; i < colors.length * 2; i++) {
// 		let index = 0;
// 		do {
// 			index = Math.floor(Math.random() * colors.length)
// 		} while (colors[index].availableCells === 0)
//
// 		const currentColor: Color = colors[index].color;
// 		colors[index].availableCells--
// 		cards.push({id: i, state: CardStates.CLOSED, color: currentColor})
// 	}
//
// 	return cards
// }