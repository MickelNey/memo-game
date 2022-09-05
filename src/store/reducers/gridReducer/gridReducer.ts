import { CardStates, Grid, GridStates } from '../../../types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createCards } from '../../../data/createCards'

const cardCount = 8
const initialData = {
    cards: createCards(),
    chosenCardsId: [],
    step: 0,
    foundPairs: 0,
    errors: '',
}

const initialState: Grid = {
    currentState: GridStates.BLOCKED,
    ...initialData,
}

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        startGame: () => {
            return { ...initialState, currentState: GridStates.WAITING_FIRST_CLICK};
        },
        finishGame: (state) => {
            state.currentState = GridStates.BLOCKED;
        },
        chooseFirstCard: (state, action: PayloadAction<number>) => {
            const cardId: number = action.payload
            state.cards[cardId].state = CardStates.OPENED
            state.chosenCardsId.push(cardId)
            state.currentState = GridStates.WAITING_SECOND_CLICK
        },
        chooseSecondCard: (state, action: PayloadAction<number>) => {
            const cardId: number = action.payload

            state.cards[cardId].state = CardStates.OPENED
            state.chosenCardsId.push(cardId)
            state.currentState = GridStates.CHECKING_TWO_CARDS
        },
        checkCards: (state) => {
            if (state.cards[state.chosenCardsId[0]].color !== state.cards[state.chosenCardsId[1]].color) {
                state.cards[state.chosenCardsId[0]].state = CardStates.CLOSED
                state.cards[state.chosenCardsId[1]].state = CardStates.CLOSED
            }
            // TO DO
            else {
                state.foundPairs++
            }

            state.step++
            state.chosenCardsId = []

            if (state.foundPairs === cardCount) {
                state.currentState = GridStates.WIN_GAME
            }
            else {
                state.currentState = GridStates.WAITING_FIRST_CLICK
            }
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
    },
})

export const { checkCards, chooseSecondCard, chooseFirstCard } = gridSlice.actions

export default gridSlice.reducer
