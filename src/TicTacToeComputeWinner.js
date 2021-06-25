// This file implements the logic to compute the winner for a tic tac matrix of size N x N (n rows and n columns)
// The code is fully generalized to handle any value of N and does not hard code based on a fixed value of N

const x = 'x';
const o = 'o';
const e = '';

  const TicTacToeComputeWinner = (matrix) => {

    //console.log(`TicTacToeWinner called`);

    let winner = getWinner(matrix);
    return winner;
  };
  
  const getWinner = (matrix) => {
    let winner = e;
    let rowCounts = [];
    let colCounts = [];
    let emptySquareCounts = matrix.length * matrix.length;

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) 
    {
      if (!(rowIndex in rowCounts))
      {
        rowCounts[rowIndex] = {x:0, o:0};
      }

      for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++)
      {      
        let sqValue = matrix[rowIndex][colIndex];

        if (sqValue !== null)
        { 
          incrementCount(rowCounts[rowIndex], sqValue);
  
          if (! (colIndex in colCounts))
          {
            colCounts[colIndex] = {x:0, o:0};
          }
  
          incrementCount(colCounts[colIndex], sqValue);

          //console.log(`rowCounts`, rowCounts);
          //console.log(`colCounts`, colCounts);
          if (sqValue.value != e){
            emptySquareCounts -= 1;
          }
          console.log('empty square counts:', emptySquareCounts);
        }
      }
    }
  
    winner = getWinningRowCol(rowCounts);
  
    if (winner === e){
      winner = getWinningRowCol(colCounts)};
  
    if (winner === e){
      winner = getWinningDiag(matrix, false)};
  
    if (winner === e){
      winner = getWinningDiag(matrix, true)};

    if (winner == e && emptySquareCounts === 0){
      winner = 'tie';  
    }

    return winner;
  };
  
  const getWinningRowCol = (rcCounts) => {
    let winner = e;
  
    for (let rcIndex in rcCounts)
    {
      if (rcCounts[rcIndex].x === rcCounts.length)
      {
          winner = x;
      }
      else if (rcCounts[rcIndex].o === rcCounts.length) 
      {
        winner = o;
      }
    }

    //console.log('getWinningRowCol = ', winner);
  
    return winner;
  };
  
  const getWinningDiag = (matrix, revDiag=false) => {
  
    let winner = '';
    const counts = { x:0, o:0 };
    const n = matrix.length;
  
    for (let index = 0; index < n; index++)
    {
  
      let value = null;
      if (revDiag === true)
      {
        value = matrix[index][n - index - 1];
      }
      else
      {
        value = matrix[index][index];
      }

      incrementCount(counts, value);   
    }
  
    if (counts.x === n)
    {
       winner = x;
    }
    else if (counts.o === n)
    {
       winner = o;
    }
  
    return winner;
  };

  const incrementCount = (counts, entry) =>
  {
      // console.log('incrementCount: value', entry);

      if (entry.value === x)
      {
        counts.x +=1
      }
      else if (entry.value === o)
      {
        counts.o +=1
      }
  };

  export default TicTacToeComputeWinner;