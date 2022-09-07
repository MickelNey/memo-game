export enum CardStates {
    OPENED,
    CLOSED,
}

export type cardContainer = {
    idImage: number,
    availableCells: number
}

export type CardTypeTest = {
    id: number,
    idImage: number,
    state: CardStates
}

export enum GridStates {
    BLOCKED,
    WAITING_FIRST_CLICK,
    WAITING_SECOND_CLICK,
    CHECKING_TWO_CARDS,
    WIN_GAME,
}

export enum cardsCounts {
    FOUR = 2,
    SIXTEEN = 8,
    THIRTY_SIX = 18
}

export interface Grid {
    currentState: GridStates,
    foundPairs: number,
    cards: CardTypeTest[],
    chosenCardsId: number[],
    step: number,
    errors: string,
    cardCount: number
}

// export enum Color {
//     RED = 'RED',
//     BLUE = 'BLUE',
//     GREEN = 'GREEN',
//     YELLOW = 'YELLOW',
//     VIOLET = 'VIOLET',
//     PINK = 'PINK',
//     TEAL = 'TEAL',
//     ORANGE = 'ORANGE',
// }
// export type CardType = {
//     id: number
//     color: Color
//     state: CardStates
// }