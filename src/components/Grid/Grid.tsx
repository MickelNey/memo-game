import React from 'react';
import { useAppSelector} from '../../store/hooks';
import Card from "../Card/Card";
import './Grid.scss'
import {GridStates} from "../../types/types";

const Grid = () => {

	const cards = useAppSelector(state => state.grid.cards);
	const gridState = useAppSelector(state => state.grid.currentState)
	const gridSize = useAppSelector(state => state.grid.cardCount)
	// const steps = useAppSelector(state => state.grid.step)

	if (gridState === GridStates.WIN_GAME) {
		console.log("YEAH")
	}

	const setGridStyle = () => {
		if (gridSize === 2) {
			return "GridFour"
		}
		if (gridSize === 8) {
			return "GridSixteen"
		}
		if (gridSize === 18) {
			return "GridThirtySix"
		}

	}


	return (
		<ul className={setGridStyle()}>
			{cards.map(card => <Card key={card.id} id={card.id} idImage={card.idImage} state={card.state}/>)}
		</ul>
	);
};

export default Grid;
