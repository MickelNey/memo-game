import React from 'react';
import './App.css';
import Container from "./components/Container/Container";
import {
    handleClickOnLowerButton,
    handleClickOnStart,
    handleClickOnUpButton
} from "./store/reducers/gridReducer/ActionCreators";


import {useAppDispatch, useAppSelector} from "./store/hooks";
import MemoButton from "./UI/buttons/MemoButton/MemoButton";

function App() {
    const dispatch = useAppDispatch()
    const currentState = useAppSelector((state) => state.grid.currentState)

    return (
        <div className="App">
            <div className="menu">
                <button className="startButton" onClick={() => handleClickOnStart(currentState, dispatch)}>
                    START
                </button>
            </div>
            <Container/>
            <div className="sizeButtons">
                <MemoButton onClick={() => handleClickOnUpButton(currentState, dispatch)} > MORE CARDS </MemoButton>
                <MemoButton onClick={() => handleClickOnLowerButton(currentState, dispatch)}> FEWER CARDS </MemoButton>
            </div>

        </div>
    );
}

export default App;
