/* REACT */
import React from 'react';

/* MODULES */
import classNames from 'classnames';

/* STYLES */
import {
  Button
}
import './styles.js';

const SimpleButton = ({ onClick, label, disabled, btnClose, btnSubmit }) => {

  const btnStyle = classNames({
    'btn': true,
    'btn__disabled': disabled,
    'btnClose': btnClose,
      'btnSubmit': btnSubmit
  });

  return (
    <Button
      className={btnStyle}
      onClick={onClick}
      disabled={disabled}
      
    >
      {label}
    </Button>
  )
}

export default SimpleButton;