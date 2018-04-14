/* REACT */
import React from 'react';

/* STYLES */
import './styles.js';

// export default (props) => (
//   <label>
//     <input
//       type="checkbox"
//       name="checked"
//       value={props.value}
//       onChange={props.onChange}
//       {...props}
//     />
//     <span></span>
//   </label>
// )

// const Checkbox = (props) => (
//   <label>
//     <input
//       type="checkbox"
//       name="checked"
//       value={props.value}
//       onChange={props.onChange}
//       {...props}
//     />
//     <span></span>
//   </label>
// );

const Checkbox = ({ value, onChange }) => (
  <label>
    <inputCheckbocks
      type="checkbox"
      name="checked"
      value={value}
      onChange={onChange}
    />
    <inputIcon />
  </label>
);

export default Checkbox;