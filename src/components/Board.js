import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but you need to return a 1D array of square components
  let oneDSquares = [];

  for (const sqrow of squares){
    //console.log('sq-row:', sqrow);
    for (const sqcol of sqrow){
      //console.log('sq-col:', sqcol);
      oneDSquares.push(sqcol);
    }
  }
  //console.log('1d squares:', oneDSquares);
  return oneDSquares;
}

const Board = ({ squares, onClickCallback }) => {
  //console.log('squares:', squares);
  //squares = SAMPLE_BOARD;

  const squareList = generateSquareComponents(squares, onClickCallback);
  //console.log('1-d square list', squareList);
  
  const squareItems = squareList.map((sq) => {
    //console.log('sq-value:', sq.value);
    //console.log('sq-id:', sq.id);
    return (
       <Square id={sq.id} value={sq.value} onClickCallback={onClickCallback}></Square>
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
