import React from 'react';
import { useAppSelector} from '../../store/hooks';
import Card from "../Card/Card";
import styles from './Grid.module.scss'
import {GridStates} from "../../types/types";

const Grid = () => {

	const cards = useAppSelector(state => state.grid.cards);
	const gridState = useAppSelector(state => state.grid.currentState)
	const steps = useAppSelector(state => state.grid.step)

	if (gridState === GridStates.WIN_GAME) {
		console.log("YEAH")
	}

	return (
		<ul className={styles.Grid}>
			{cards.map(card => <Card key={card.id} id={card.id} color={card.color} state={card.state}/>)}
		</ul>
	);
};

export default Grid;