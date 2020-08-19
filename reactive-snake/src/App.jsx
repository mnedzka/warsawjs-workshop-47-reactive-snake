import React, { useReducer } from 'react';
import GameContext from './GameContext';
import Game from './Game';
import gameContextStateReducer from './gameContextStateReducer';

const GridSize = 10;
const SpeedIncreaseMultiplier = 0.8;
const InitialGameContextState = { speed: 500, paused: true };

function initGameContextState() {
  return InitialGameContextState;
}

function App() {
  const [gameContextState, dispatchGameContextAction] = useReducer(
    gameContextStateReducer,
    InitialGameContextState,
    initGameContextState,
  );
  const { paused, speed } = gameContextState;
  const gameContextValue = { speed, gridSize: GridSize, paused, increaseSpeed, pauseGame, unpauseGame };

  function increaseSpeed() {
    dispatchGameContextAction({ type: 'increaseSpeed', payload: SpeedIncreaseMultiplier });
  }

  function pauseGame() {
    dispatchGameContextAction({ type: 'pauseGame' });
  }

  function unpauseGame() {
    dispatchGameContextAction({ type: 'unpauseGame' });
  }

  return (
    <GameContext.Provider value={gameContextValue}>
      <Game />
    </GameContext.Provider>
  );
}

export default App;
