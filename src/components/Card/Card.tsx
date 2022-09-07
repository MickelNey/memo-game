import React from 'react'
import { CardStates, CardTypeTest } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import './Card.scss'
import { handleClickOnCard } from '../../store/reducers/gridReducer/ActionCreators'

const Card: React.FC<CardTypeTest> = ({ id, idImage, state }) => {
    const dispatch = useAppDispatch()
    const currentState = useAppSelector((state) => state.grid.currentState)

    function handleOnClick() {
        if (state !== CardStates.OPENED) {
            handleClickOnCard(id, currentState, dispatch)
        }
    }

    // console.log('render ' + state + ' ' + id)
    return (
        <li className={state === CardStates.CLOSED ? 'Card__closed' : `Card__open__${idImage}`} onClick={handleOnClick}/>
        // <li
        //     className={state === CardStates.CLOSED ? 'Card__closed' : `Card__open__${color}`}
        //      />
    )
}

export default Card
