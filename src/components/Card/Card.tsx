import React from 'react'
import { CardState, CardType, GridState } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import './Card.scss'
import { handleClickOnCard } from '../../store/reducers/GridReducer/ActionCreators'

const Card: React.FC<CardType> = ({ id, idImage, state }) => {
    const dispatch = useAppDispatch()
    const currentState = useAppSelector((state) => state.grid.currentState)

    function handleOnClick() {
        if (state !== CardState.OPENED) {
            handleClickOnCard(id, currentState, dispatch)
        }
    }

    function getCardClassName() {
        let className = 'Card '
        if (currentState === GridState.NOT_STARTED) {
            className += 'Card__blocked'
        }
        else {
            className += (state === CardState.CLOSED)
                ? 'Card__closed'
                : `Card__open__${idImage}`
        }
        return className;
    }

    return (
        <li className={getCardClassName()} onClick={handleOnClick}/>
    )
}

export default Card
