export enum CardState {
    OPENED,
    CLOSED,
}

export type CardContainer = {
    idImage: number,
    availableCells: number
}

export type CardType = {
    id: number,
    idImage: number,
    state: CardState
}

export enum GridState {
    NOT_STARTED,
    WAITING_FIRST_CLICK,
    WAITING_SECOND_CLICK,
    CHECKING_TWO_CARDS,
    WIN_GAME,
}

export enum cardsCount {
    FOUR = 2,
    SIXTEEN = 8,
    THIRTY_SIX = 18
}

export interface GridData {
    currentState: GridState,
    foundPairs: number,
    cards: CardType[],
    chosenCardsId: number[],
    step: number,
    errors: string,
    cardCount: number
}
