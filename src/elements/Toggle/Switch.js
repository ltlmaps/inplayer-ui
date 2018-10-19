// @flow
import React from 'react';
// import styled from 'styled-components';
// import { uiColors } from 'utils';
// import { applyStyleModifiers } from 'styled-components-modifiers';

// import colors from 'config/colors';
import Switch from 'react-switch';

// const modifiers = {
//   hoverDisabled: () => `
//     &:hover {
//       background: ${colors.lightGray};
//       border: 1px solid ${colors.gray};
//       pointer-events: none;
//     }
//   `,
// };

// const Toggle = styled.input`
//   width: 34px;
//   background: ${colors.lightGray};
//   border: 1px solid ${colors.gray};
//   border-radius: 50px;
//   padding: 9px;
//   margin: 12px 0;
//   transition: all ease 500ms;
//   overflow: visible;

//   &:checked {
//     border: 1px solid ${uiColors('primary.main')};
//     background: ${uiColors('primary.main')};
//   }

//   &:hover,
//   &:checked:hover {
//     background: ${uiColors('primary.light')};
//     border: 1px solid ${uiColors('primary.main')};
//   }

//   &::after {
//     content: '';
//     display: block;
//     position: absolute;
//     border: 1px solid ${colors.gray};
//     top: -2px;
//     left: -2px;
//     width: 20px;
//     height: 20px;
//     z-index: 2;
//     background: #fff;
//     border-radius: 50px;
//     transition: all ease 300ms;
//   }

//   &:hover::after {
//     border: 1px solid ${uiColors('primary.main')};
//   }

//   &:checked::after {
//     left: 13px;
//   }

//   ${applyStyleModifiers(modifiers)};
// `;

const Switcher = (checked, onToggleChange) => (
  <Switch
    checked={checked}
    className="react-switch"
    id="material-switch"
    onColor="#00aae6"
    offColor="#f0f3f6"
    offHandleColor="#fff"
    onHandleColor="#fff"
    uncheckedIcon={false}
    checkedIcon={false}
    handleDiameter={22}
    height={20}
    width={34}
    onChange={() => onToggleChange}
  />
);

/** @component */
export default Switcher;
