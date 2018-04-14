/* REACT */
import React from 'react';

/* STYLES */
import {
  Button
} from './styles';

const SimpleButton = (props) => (
  <Button {...props} >
    {props.label}
  </Button>
);

// const SimpleButton = (props) => {
//   const { onClick, label } = props;
//   return (
//     <button onClick={onClick}>
//       {label}
//     </button>
//   )
// }

export default SimpleButton;