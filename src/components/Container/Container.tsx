import React from 'react';
import Grid from "../Grid/Grid";
import {handleClickOnFinish} from "../../store/reducers/gridReducer/ActionCreators";
import { GridState } from "../../types/types";
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import styles from "./Container.module.scss"
import MemoButton from "../../UI/buttons/MemoButton/MemoButton";

const Container = () => {
    const dispatch = useAppDispatch()
    const currentState = useAppSelector((state) => state.grid.currentState)
    const currentStep = useAppSelector(state => state.grid.step)

    return (
        <div className={currentState === GridState.NOT_STARTED ? styles.MenuContainer : styles.GameContainer }>
            <div className={styles.countBlock}>
                <h2>STEPS COUNT: {currentStep}</h2>
            </div>
            <Grid />
            <button className={styles.exitButton} onClick={() => handleClickOnFinish(currentState, dispatch)}>
                <span>EXIT</span>
            </button>
        </div>
    );
};

export default Container;