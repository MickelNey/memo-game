export enum Color {
    RED = 'RED',
    BLUE = 'BLUE',
    GREEN = 'GREEN',
    YELLOW = 'YELLOW',
    VIOLET = 'VIOLET',
    PINK = 'PINK',
    TEAL = 'TEAL',
    ORANGE = 'ORANGE',
}

export enum CardStates {
    OPENED,
    CLOSED,
}

export type CardType = {
    id: number
    color: Color
    state: CardStates
}

export enum GridStates {
    BLOCKED,
    WAITING_FIRST_CLICK,
    WAITING_SECOND_CLICK,
    CHECKING_TWO_CARDS,
    WIN_GAME,
}

export interface Grid {
    currentState: GridStates
    foundPairs: number
    cards: CardType[]
    chosenCardsId: number[]
    step: number
    errors: string
}
