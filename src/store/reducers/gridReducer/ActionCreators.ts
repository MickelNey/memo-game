import {AppDispatch} from '../../store'
import {GridState} from '../../../types/types'
import {gridSlice} from './gridReducer'

export const handleClickOnCard = (id: number, currentState: GridState, dispatch: AppDispatch) => {
    if (currentState === GridState.WAITING_FIRST_CLICK) {
        dispatch(gridSlice.actions.chooseFirstCard(id))
    }
    if (currentState === GridState.WAITING_SECOND_CLICK) {
        dispatch(gridSlice.actions.chooseSecondCard(id))
        setTimeout(() => dispatch(gridSlice.actions.checkCards()), 1000)
    }
}

export const handleClickOnStart = (currentState: GridState, dispatch: AppDispatch) => {
    if (currentState === GridState.NOT_STARTED || currentState === GridState.WIN_GAME) {
        dispatch(gridSlice.actions.startGame());
    }
}

export const handleClickOnFinish = (currentState: GridState, dispatch: AppDispatch) => {
    if (currentState !== GridState.NOT_STARTED && currentState !== GridState.CHECKING_TWO_CARDS) {
        dispatch(gridSlice.actions.finishGame())
    }
}

export const handleClickOnUpButton = (currentState: GridState, dispatch: AppDispatch) => {
    if (currentState === GridState.NOT_STARTED || currentState === GridState.WIN_GAME) {
        dispatch(gridSlice.actions.upGridSize())
    }
}

export const handleClickOnLowerButton = (currentState: GridState, dispatch: AppDispatch) => {
    if (currentState === GridState.NOT_STARTED || currentState === GridState.WIN_GAME) {
        dispatch(gridSlice.actions.lowerGridSize())
    }
}