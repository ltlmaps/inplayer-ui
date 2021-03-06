import styled from 'styled-components';

import colors from 'theme/colors';
import Label from '../Label';

const StyledLabel = styled(Label)<{ active: boolean }>`
  display: block;
  font-size: ${({ theme }) => theme.font.sizes.small};
  transition: ease 200ms color;
  cursor: pointer;
  padding: 0.4375rem;
  font-weight: ${({ active, theme: { font } }) =>
    active ? font.weights.normal : font.weights.light};
  color: ${({ active }) => (active ? colors.navy : colors.fontGray)};
  &:hover {
    color: ${colors.navy} !important;
  }
`;

const DatePresetWrapper = styled.div`
  width: 96px;
  padding: 3.75rem 1.25rem 0.625rem;
`;

export const Styled = {
  StyledLabel,
  DatePresetWrapper,
};
