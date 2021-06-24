import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import TicTacToeComputeWinner from './TicTacToeComputeWinner';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

const generateSquares = () => {
  const squares = [];
  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  // This starts state off as a 2D array of JS objects with empty value and unique ids.
  //initialize the state for squares, players and winner and message
  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(PLAYER_1);
  const [statusMessage, setStatusMessage] = useState('');
  const [winner, setWinner] = useState('');

  // Wave 2
  // You will need to create a method to change the square When it is clicked on.
  // Then pass it into the squares as a callback
  const onClickCallback = (id, e) => {
    //console.log('square button pressed: ', id);
    if (winner !== '')
    {
      return;
    }

    const rowNum = Math.floor(id / squares.length);
    const colNum = id % squares.length;

    //console.log('Sq value:', squares[rowNum][colNum]);
    // check if square is already filled with an x or o, if so dont change its value
    const currentSquare = squares[rowNum][colNum]; 
    if (currentSquare.value === PLAYER_1 || currentSquare.value === PLAYER_2)
    {
      return;
    }

    //console.log('row_num', rowNum);
    //console.log('col_num', colNum);

    // set the value of the square on square button click
    squares[rowNum][colNum] = {id:id, value:player};

    let nextPlayer = '';
    // toggle player
    if (player === PLAYER_1){
      nextPlayer = PLAYER_2;
    }
    else {
      nextPlayer = PLAYER_1;
    }

    setPlayer(nextPlayer);

    setStatusMessage(`Current Player ${nextPlayer}`);

    const computedWinner = checkForWinner();
    //console.log('computed winner:', computedWinner);

    if (computedWinner === PLAYER_1 || computedWinner === PLAYER_2){
      setWinner(computedWinner);
      setStatusMessage(`Winner is ${computedWinner}`);
    }
  };

  const checkForWinner = () => {
    // Complete in Wave 3
    return TicTacToeComputeWinner(squares);

  }

  const resetGame = () => {
      setSquares(generateSquares());
      const initialPlayer = PLAYER_1; // I decided initial player is 1
      setPlayer(initialPlayer);
      setWinner('');
      setStatusMessage(`Current player ${initialPlayer}`);
    };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{statusMessage}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );

};

export default App;
