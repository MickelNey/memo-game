import React from 'react';
import Grid from "../Grid/Grid";
import { GridState } from "../../types/types";
import { useAppSelector} from '../../store/hooks'
import styles from "./Container.module.scss"

const Container = () => {
    const currentState = useAppSelector((state) => state.grid.currentState)
    const currentStep = useAppSelector(state => state.grid.step)

    return (
        <div className={currentState === GridState.NOT_STARTED ? styles.MenuContainer : styles.GameContainer }>
            <div className={styles.countBlock}>
                <h2>STEPS COUNT: {currentStep}</h2>
            </div>
            <Grid />
        </div>
    );
};

export default Container;