import React from 'react';
import {CardStates, CardType} from "../../types/types";
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import "./Card.scss";
import {handleClickOnCard} from "../../store/reducers/gridReducer/ActionCreators";

const Card: React.FC<CardType> = ({ id, color, state}) => {
	const dispatch = useAppDispatch();
	const step = useAppSelector(state => state.grid.step)
	const handleOnClick = () => {
		if (state !== CardStates.OPENED) {
			handleClickOnCard(id, step, dispatch)
		}
	}

	return (
		<li className={state === CardStates.CLOSED ? 'Card__closed' : `Card__${color}`} onClick={handleOnClick}>
		</li>
	);
};

export default Card;

