import React from 'react';
import './App.scss';
import Container from "./components/Container/Container";
import {
  handleClickOnFinish,
  handleClickOnLowerButton,
  handleClickOnStart,
  handleClickOnUpButton
} from "./store/reducers/GridReducer/ActionCreators";

import {useAppDispatch, useAppSelector} from "./store/hooks";
import MemoButton from "./UI/MemoButton/MemoButton";
import { GridState } from "./types/types";

function App() {
    const dispatch = useAppDispatch()
    const currentState = useAppSelector((state) => state.grid.currentState)
    if (currentState === GridState.WIN_GAME) {
      alert("Wow! You won!")
    }
    return (
      <div className="App">
        <div className="App">
            <div className="menu">
                <button className={`gameButton gameButton_start ${currentState !== GridState.NOT_STARTED ? 'gameButton_active' : ''}`}
                        onClick={() => handleClickOnStart(currentState, dispatch)}>
                    <div className='img-start'></div>
                    <div className='text'>START</div>
                </button>
                <button className={`gameButton gameButton_start ${currentState === GridState.NOT_STARTED ? 'gameButton_active' : ''}`}
                        onClick={() => handleClickOnFinish(currentState, dispatch)}>
                  <div className='img-exit'></div>
                  <div className='text'>EXIT</div>
                </button>
            </div>
            <div className='right'>
              <Container/>
              <div className={`sizeButtons ${currentState !== GridState.NOT_STARTED ? 'sizeButtons_active' : ''}`}>
                <MemoButton onClick={() => handleClickOnUpButton(currentState, dispatch)} > MORE CARDS </MemoButton>
                <MemoButton onClick={() => handleClickOnLowerButton(currentState, dispatch)}> FEWER CARDS </MemoButton>
              </div>
            </div>
        </div>
      </div>
    );
}

export default App;
