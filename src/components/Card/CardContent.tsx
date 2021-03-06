import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  flex: 3;
  padding: 1.2rem 0;
  height: 100%;
  width: 100%;
`;

interface Props {
  children: ReactNode;
}

const CardContent = ({ children }: Props) => <ContentWrapper>{children}</ContentWrapper>;

CardContent.defaultProps = {
  component: 'div',
};

export default CardContent;
