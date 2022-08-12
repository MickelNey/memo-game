import { CardStates, Grid, GridStates } from "../../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createCards} from "../../../data/createCards";

const initialState: Grid = {
	step: GridStates.WAITING_FIRST_CLICK,
	cards: createCards(),
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