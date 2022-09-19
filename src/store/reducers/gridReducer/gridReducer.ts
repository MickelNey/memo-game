import {cardsCount, CardState, GridData, GridState} from '../../../types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCardsTest } from '../../../data/createCards'

const initialData = {
    cards: getCardsTest(cardsCount.SIXTEEN),
    chosenCardsId: [],
    step: 0,
    foundPairs: 0,
    cardCount: cardsCount.SIXTEEN,
    errors: '',
}

const initialState: GridData = {
    currentState: GridState.NOT_STARTED,
    ...initialData,
}

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        startGame: (state) => {
            return { ...initialData, cardCount: state.cardCount, cards: getCardsTest(state.cardCount), currentState: GridState.WAITING_FIRST_CLICK};
        },
        finishGame: (state) => {
            state.currentState = GridState.NOT_STARTED;
        },
        upGridSize: (state) => {
            switch (state.cardCount) {
                case cardsCount.FOUR: {
                    state.cardCount = cardsCount.SIXTEEN;
                    break;
                }
                case cardsCount.SIXTEEN: {
                    state.cardCount = cardsCount.THIRTY_SIX;
                    break;
                }
                case cardsCount.THIRTY_SIX: {
                    break;
                }
            }
            state.cards = getCardsTest(state.cardCount);
        },
        lowerGridSize: (state) => {
            switch (state.cardCount) {
                case cardsCount.THIRTY_SIX: {
                    state.cardCount = cardsCount.SIXTEEN;
                    break;
                }
                case cardsCount.SIXTEEN: {
                    state.cardCount = cardsCount.FOUR;
                    break;
                }
                case cardsCount.FOUR: {
                    break;
                }
            }
            state.cards = getCardsTest(state.cardCount);
        },
        chooseFirstCard: (state, action: PayloadAction<number>) => {
            const cardId: number = action.payload
            state.cards[cardId].state = CardState.OPENED
            state.chosenCardsId.push(cardId)
            state.currentState = GridState.WAITING_SECOND_CLICK
        },
        chooseSecondCard: (state, action: PayloadAction<number>) => {
            const cardId: number = action.payload

            state.cards[cardId].state = CardState.OPENED
            state.chosenCardsId.push(cardId)
            state.currentState = GridState.CHECKING_TWO_CARDS
        },
        checkCards: (state) => {
            if (state.cards[state.chosenCardsId[0]].idImage!== state.cards[state.chosenCardsId[1]].idImage) {
                state.cards[state.chosenCardsId[0]].state = CardState.CLOSED
                state.cards[state.chosenCardsId[1]].state = CardState.CLOSED
            }
            else {
                state.foundPairs++
            }
            state.step++
            state.chosenCardsId = []
            if (state.foundPairs === state.cardCount) {
                state.currentState = GridState.WIN_GAME
            }
            else {
                state.currentState = GridState.WAITING_FIRST_CLICK
            }
        },
    },
})


export default gridSlice.reducer
