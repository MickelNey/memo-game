import {CardStates, CardType, Color} from "../types/types";

export const createCards = () => {

	type createContainer = {
		color: Color;
		availableCells: number;
	}
	const cards: CardType[] = [];

	const colors: createContainer[] = [
		{ color: Color.RED, availableCells: 2},
		{ color: Color.BLUE, availableCells: 2},
		{ color: Color.YELLOW, availableCells: 2},
		{ color: Color.TEAL, availableCells: 2},
		{ color: Color.PINK, availableCells: 2},
		{ color: Color.VIOLET, availableCells: 2},
		{ color: Color.ORANGE, availableCells: 2},
		{ color: Color.GREEN, availableCells: 2},
	]

	// colors.map((item) => {
	// 	item.avaliableSeats = 2
	// 	return item
	// })


	for (let i = 0; i < colors.length * 2; i++) {
		let index = 0;

		do {
			index = Math.floor(Math.random() * colors.length)
		} while (colors[index].availableCells === 0)

		const currentColor: Color = colors[index].color;
		colors[index].availableCells--

		cards.push({id: i, state: CardStates.CLOSED, color: currentColor})
	}

	return cards
}