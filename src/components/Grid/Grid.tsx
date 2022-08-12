import React from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Card from "../Card/Card";
import styles from './Grid.module.scss'

const Grid = () => {

	const cards = useAppSelector(state => state.grid.cards);
	return (
		<ul className={styles.Grid}>
			{cards.map(card => <Card id={card.id} color={card.color} state={card.state}/>)}
		</ul>
	);
};

export default Grid;