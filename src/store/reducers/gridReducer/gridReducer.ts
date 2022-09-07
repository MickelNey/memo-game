import {cardsCounts, CardStates, Grid, GridStates} from '../../../types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCardsTest } from '../../../data/createCards'

const initialData = {
    cards: getCardsTest(2),
    chosenCardsId: [],
    step: 0,
    foundPairs: 0,
    cardCount: cardsCounts.FOUR,
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
        startGame: (state) => {
            return { ...initialData, cardCount: state.cardCount, cards: getCardsTest(state.cardCount), currentState: GridStates.WAITING_FIRST_CLICK};
        },
        finishGame: (state) => {
            state.currentState = GridStates.BLOCKED;
        },
        upGridSize: (state) => {
            switch (state.cardCount) {
                case cardsCounts.FOUR: {
                    state.cardCount = cardsCounts.SIXTEEN;
                    break;
                }
                case cardsCounts.SIXTEEN: {
                    state.cardCount = cardsCounts.THIRTY_SIX;
                    break;
                }
                case cardsCounts.THIRTY_SIX: {
                    break;
                }
            }
            state.cards = getCardsTest(state.cardCount);
        },
        lowerGridSize: (state) => {
            switch (state.cardCount) {
                case cardsCounts.THIRTY_SIX: {
                    state.cardCount = cardsCounts.SIXTEEN;
                    break;
                }
                case cardsCounts.SIXTEEN: {
                    state.cardCount = cardsCounts.FOUR;
                    break;
                }
                case cardsCounts.FOUR: {
                    break;
                }
            }
            state.cards = getCardsTest(state.cardCount);
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
            if (state.cards[state.chosenCardsId[0]].idImage!== state.cards[state.chosenCardsId[1]].idImage) {
                state.cards[state.chosenCardsId[0]].state = CardStates.CLOSED
                state.cards[state.chosenCardsId[1]].state = CardStates.CLOSED
            }
            else {
                state.foundPairs++
            }
            state.step++
            state.chosenCardsId = []
            if (state.foundPairs === state.cardCount) {
                state.currentState = GridStates.WIN_GAME
            }
            else {
                state.currentState = GridStates.WAITING_FIRST_CLICK
            }
        },
    },
})

// export const { checkCards, chooseSecondCard, chooseFirstCard } = gridSlice.actions

export default gridSlice.reducer
