import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

  // Sample input to the Board component
  const SAMPLE_BOARD = [
    [
      {
        value: 'X',
        id: 0,
      },
      {
        value: 'X',
        id: 1,
      },
      {
        value: 'O',
        id: 2,
      },
    ],
    [
      {
        value: 'X',
        id: 3,
      },
      {
        value: 'X',
        id: 4,
      },
      {
        value: 'O',
        id: 5,
      },
    ],
    [
      {
        value: 'O',
        id: 6,
      },
      {
        value: 'O',
        id: 7,
      },
      {
        value: 'X',
        id: 8,
      },
    ],    
  ];


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  let oneDSquares = [];

  for (const sqrow of squares){
    console.log('sq-row:', sqrow);
    for (const sqcol of sqrow){
      console.log('sq-col:', sqcol);
      oneDSquares.push(sqcol);
    }
  }
  console.log('1d squares:', oneDSquares);

  return oneDSquares;
}

const Board = ({ squares, onClickCallback }) => {
  
  console.log('squares:', squares);
  
  squares = SAMPLE_BOARD;

  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  
  const squareItems = squareList.map((sq) => {
    //console.log('sq-value:', sq.value);
    //console.log('sq-id:', sq.id);

    return (
       <div key={sq.id}><Square id={sq.id} value={sq.value} onClickCallback={() => {}}></Square></div>
     );
    });


  return <div className="grid" >
    {squareItems}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
