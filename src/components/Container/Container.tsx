import React from 'react';
import Grid from "../Grid/Grid";
import {handleClickOnFinish, handleClickOnStart} from "../../store/reducers/gridReducer/ActionCreators";
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import styles from "./Container.module.scss"

const Container = () => {
    const dispatch = useAppDispatch()
    const currentState = useAppSelector((state) => state.grid.currentState)
    const currentStep = useAppSelector(state => state.grid.step)
    return (
        <div>
            <h2>Количество шагов: {currentStep}</h2>

            <Grid/>
            <button className={styles.containerButton} onClick={() => handleClickOnFinish(currentState, dispatch)}>
                EXIT
            </button>
        </div>
    );
};

export default Container;