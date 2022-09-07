import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Card from "./components/Card/Card";
// import Grid from "./components/Grid/Grid";
import Container from "./components/Container/Container";
import {
    handleClickOnLowerButton,
    handleClickOnStart,
    handleClickOnUpButton
} from "./store/reducers/gridReducer/ActionCreators";
import {useAppDispatch, useAppSelector} from "./store/hooks";

function App() {
    const dispatch = useAppDispatch()
    const currentState = useAppSelector((state) => state.grid.currentState)
    // const currentStep = useAppSelector(state => state.grid.step)
    return (
        <div className="App">
            <button className="AppButton" onClick={() => handleClickOnStart(currentState, dispatch)}>
                START
            </button>
            <Container/>

            <button className="AppButton" onClick={() => handleClickOnUpButton(currentState, dispatch)} > UP </button>
            <button className="AppButton" onClick={() => handleClickOnLowerButton(currentState, dispatch)}> DOWN </button>
        </div>
    );
}

export default App;
