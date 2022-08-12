import { CardStates, Color, Grid, GridStates } from "../../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: Grid = {
	step: GridStates.WAITING_FIRST_CLICK,
	cards: [{id: 0, state: CardStates.CLOSED, color: Color.RED},
		{id: 1, state: CardStates.CLOSED, color: Color.BLUE},
		{id: 2, state: CardStates.CLOSED, color: Color.BLUE},
		{id: 3, state: CardStates.CLOSED, color: Color.RED},
		{id: 4, state: CardStates.CLOSED, color: Color.GREEN},
		{id: 5, state: CardStates.CLOSED, color: Color.PINK},
		{id: 6, state: CardStates.CLOSED, color: Color.TEAL},
		{id: 7, state: CardStates.CLOSED, color: Color.GREEN},
		{id: 8, state: CardStates.CLOSED, color: Color.PINK},
		{id: 9, state: CardStates.CLOSED, color: Color.TEAL},
		{id: 10, state: CardStates.CLOSED, color: Color.ORANGE},
		{id: 11, state: CardStates.CLOSED, color: Color.VIOLET},
		{id: 12, state: CardStates.CLOSED, color: Color.YELLOW},
		{id: 13, state: CardStates.CLOSED, color: Color.ORANGE},
		{id: 14, state: CardStates.CLOSED, color: Color.VIOLET},
		{id: 15, state: CardStates.CLOSED, color: Color.YELLOW}],
	chosenCardsId: [],
	errors: ''
}

export const gridSlice = createSlice({
	name: 'grid',
	initialState,
	reducers: {
		chooseFirstCard: (state, action:PayloadAction<number>) => {
			const cardId: number = action.payload

			state.cards[cardId].state = CardStates.OPENED
			state.chosenCardsId.push(cardId);
			state.step = GridStates.WAITING_SECOND_CLICK
		},
		chooseSecondCard: (state, action:PayloadAction<number>) => {
			const cardId: number = action.payload

			state.cards[cardId].state = CardStates.OPENED
			state.chosenCardsId.push(cardId)
			state.step = GridStates.CHECKINHG_TWO_CARDS

		},
		checkCards: (state) => {
			if (state.cards[state.chosenCardsId[0]].color !== state.cards[state.chosenCardsId[1]].color)
			{
				state.cards[state.chosenCardsId[0]].state = CardStates.CLOSED
				state.cards[state.chosenCardsId[1]].state = CardStates.CLOSED
			}
			state.chosenCardsId = [];
			state.step = GridStates.WAITING_FIRST_CLICK
		},
		// clickOnCard: (state, action: PayloadAction<number>) => {
		// 	const cardId: number = action.payload
		//
		// 	switch (state.step) {
		// 		case GridStates.WAITING_FIRST_CLICK: {
		// 			state.cards[cardId].state = CardStates.OPENED
		// 			state.chosenCardsId.push(cardId);
		// 			state.step = GridStates.WAITING_SECOND_CLICK
		// 			break;
		// 		}
		// 			;
		// 		case GridStates.WAITING_SECOND_CLICK: {
		// 			state.cards[cardId].state = CardStates.OPENED
		// 			state.chosenCardsId.push(cardId)
		// 			state.step = GridStates.CHECKINHG_TWO_CARDS
		// 			break;
		// 		}
		// 			;
		// 		case GridStates.CHECKINHG_TWO_CARDS: {
		// 			if (state.cards[state.chosenCardsId[0]].color !== state.cards[state.chosenCardsId[1]].color) {
		// 				state.cards[state.chosenCardsId[0]].state = CardStates.CLOSED
		// 				state.cards[state.chosenCardsId[1]].state = CardStates.CLOSED
		// 			}
		// 			state.chosenCardsId = [];
		// 			state.step = GridStates.WAITING_FIRST_CLICK
		// 		}
		// 	}
		// }

	}
})


export const {checkCards, chooseSecondCard, chooseFirstCard} = gridSlice.actions;

export default gridSlice.reducer