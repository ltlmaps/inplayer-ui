import styled from 'styled-components';
import FA from 'react-fontawesome';
import { statusColorWarning, statusColorInfo, statusColorSuccess } from 'modifiers';
import { fontSizes, uiColors } from 'utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifiers = {
  statusColorWarning,
  statusColorInfo,
  statusColorSuccess,
};

const Icon = styled(FA)`
  color: ${uiColors('text.light')};
  display: inline-block;
  font-size: ${fontSizes('medium')};
  ${applyStyleModifiers(modifiers)};
`;

/** @component */
export default Icon;
