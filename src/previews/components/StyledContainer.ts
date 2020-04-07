import styled from 'styled-components';
import Grid from 'blocks';
import { HTMLAttributes } from 'react';

const { Container } = Grid;

type Props = HTMLAttributes<HTMLDivElement> & {
  margin?: string;
  padding?: string;
  maxHeight?: string;
  overflow?: string;
  borderTop?: string;
  backgroundColor?: string;
  height?: string;
  columns?: string;
};
// Problem: line 74 Preview4.tsx

const StyledContainer = styled(Container)<any>`
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  ${({ overflow }) => overflow && `overflow: ${overflow}`};
  ${({ borderTop }) => borderTop && `border-top: ${borderTop}`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
  ${({ height }) => height && `height: ${height}`};
`;

export default StyledContainer;
