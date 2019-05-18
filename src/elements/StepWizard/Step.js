// @flow
import React, { ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';

/** fadeInRight */
const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

/** fadeInLeft */
const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;
/** fadeOutRight */
const fadeOutRight = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;

/** fadeOutLeft */
const fadeOutLeft = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;

const StepWrapper = styled.div`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;

  ${ifProp(
    'active',
    css`
      opacity: 1;
      pointer-events: inherit;
      position: relative;
      z-index: 1;
    `
  )};
  ${switchProp('transition', {
    fadeInRight: css`
      animation: ${fadeInRight};
      animation-duration: 0.8192s;
      animation-fill-mode: backwards;
    `,
    fadeInLeft: css`
      animation: ${fadeInLeft};
      animation-duration: 0.8192s;
      animation-fill-mode: backwards;
    `,
    fadeOutRight: css`
      animation-name: ${fadeOutRight};
      animation-duration: 0.8192s;
      animation-fill-mode: backwards;
    `,
    fadeOutLeft: css`
      animation-name: ${fadeOutLeft};
      animation-duration: 0.8192s;
      animation-fill-mode: backwards;
    `,
  })};
`;

type Props = {
  children?: ReactNode,
  isActive?: boolean,
  transition?: string,
};

const Step = ({ children, isActive, transition }: Props) => (
    <StepWrapper isActive={isActive} transition={transition}>
      {children}
    </StepWrapper>
  );
);

Step.defaultProps = {
  children: [],
  isActive: false,
  transition: '',
};

export default Step;
