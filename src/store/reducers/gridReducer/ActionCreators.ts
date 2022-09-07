import {AppDispatch} from '../../store'
import {GridStates} from '../../../types/types'
import {gridSlice} from './gridReducer'

export const handleClickOnCard = (id: number, currentState: GridStates, dispatch: AppDispatch) => {
    if (currentState === GridStates.WAITING_FIRST_CLICK) {
        dispatch(gridSlice.actions.chooseFirstCard(id))
    }
    if (currentState === GridStates.WAITING_SECOND_CLICK) {
        dispatch(gridSlice.actions.chooseSecondCard(id))
        setTimeout(() => dispatch(gridSlice.actions.checkCards()), 500)
    }
}

export const handleClickOnStart = (currentState: GridStates, dispatch: AppDispatch) => {
    if (currentState === GridStates.BLOCKED) {
        dispatch(gridSlice.actions.startGame());
    }
}

export const handleClickOnFinish = (currentState: GridStates, dispatch: AppDispatch) => {
    dispatch(gridSlice.actions.finishGame())
}

export const handleClickOnUpButton = (currentState: GridStates, dispatch: AppDispatch) => {
    dispatch(gridSlice.actions.upGridSize())
}

export const handleClickOnLowerButton = (currentState: GridStates, dispatch: AppDispatch) => {
    dispatch(gridSlice.actions.lowerGridSize())
}