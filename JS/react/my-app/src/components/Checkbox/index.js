/* REACT */
import React from 'react';

/* STYLES */
import {
  Label,
  InputCheckbox,
  InputIcon
} from './styles';

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
  <Label>
    <InputCheckbox
      type="checkbox"
      name="checked"
      value={value}
      onChange={onChange}
    />
    <InputIcon />
  </Label>
);

export default Checkbox;