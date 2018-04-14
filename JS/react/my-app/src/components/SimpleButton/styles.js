import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: green;
  color: #fff;
  ${props => props.disabled && css`
    background-color: gray;
    color: #000;
    opacity: 0.5;
  `}
  ${props => props.btnClose && css`
    background-color: transparent;
    color: #333;
  `}
  ${props => props.btnSubmit && css`
    background-color: steelblue;
  `}
`;