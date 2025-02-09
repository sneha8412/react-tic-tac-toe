import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  // Component to alert a parent 
  // component when it's clicked on.
  //console.log('Square class: value', props.value);
  //console.log('Square class: id', props.id);
  //console.log('Square class: onClickCallback', props.onClickCallback);

  return <button id={props.id} className="square" onClick={(e) => props.onClickCallback(props.id, e)}>
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
