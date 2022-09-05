import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/Card";
import Grid from "./components/Grid/Grid";
import Container from "./components/Container/Container";
import styles from "./components/Container/Container.module.scss";
import {handleClickOnStart} from "./store/reducers/gridReducer/ActionCreators";
import {useAppDispatch, useAppSelector} from "./store/hooks";

function App() {
    const dispatch = useAppDispatch()
    const currentState = useAppSelector((state) => state.grid.currentState)
    const currentStep = useAppSelector(state => state.grid.step)
    return (
        <div className="App">
            <button className={styles.containerButton} onClick={() => handleClickOnStart(currentState, dispatch)}>
                START
            </button>
            <Container/>
        </div>
    );
}

export default App;
