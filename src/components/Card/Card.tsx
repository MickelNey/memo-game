import React from 'react'
import { CardState, CardType, GridState } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import './Card.scss'
import { handleClickOnCard } from '../../store/reducers/gridReducer/ActionCreators'

const Card: React.FC<CardType> = ({ id, idImage, state }) => {
    const dispatch = useAppDispatch()
    const currentState = useAppSelector((state) => state.grid.currentState)

    function handleOnClick() {
        if (state !== CardState.OPENED) {
            handleClickOnCard(id, currentState, dispatch)
        }
    }

    function getCardClassName() {
        let className = ''
        if (currentState === GridState.NOT_STARTED) {
            className = 'Card Card__blocked'
        }
        else {
            className = (state === CardState.CLOSED)
                ? 'Card Card__closed'
                : `Card Card__open__${idImage}`
        }
        return className;
    }

    return (
        <li className={getCardClassName()} onClick={handleOnClick}/>
    )
}

export default Card
