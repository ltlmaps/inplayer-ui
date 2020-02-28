// @flow
import styled from 'styled-components';
import { InPlayerIcon } from 'elements';
import colors from 'config/colors';
import { transparentize } from 'polished';
import { ifProp } from 'styled-tools';

// Components
import {
  PreviewFooter,
  PreviewBox,
  DescriptionSpan,
  ImageHolder,
  TextWrapper,
} from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  height: ${({ height }) => height ?? '350px'};
  border-top: 3px solid ${({ color }) => color};
  background: ${colors.white};
  display: block;
  padding: 1% 3% 2% 3%;
  box-sizing: border-box;
  color: ${colors.fontDarkGray};
  border-radius: 3px 3px 0 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledImageHolder = styled(ImageHolder)`
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: linear-gradient(
      45deg,
      ${transparentize(0.2, colors.black)} 0%,
      ${transparentize(0.5, colors.black)} 100%
    ),
    url(${({ backgroundImage }) => backgroundImage});
`;

export const PaywallDescriptionSpan = styled(DescriptionSpan)`
  padding-bottom: 13px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const StyledTextWrapper = styled(TextWrapper)`
  position: relative;
  justify-content: flex-end;
  height: 350px;
  width: 50%;
  padding: 0 2%;
`;

export const Header = styled(PreviewFooter)`
  border-bottom: 1px solid ${transparentize(0.6, colors.darkGray)};
  margin: 3%;
  text-align: right;
  padding-bottom: 1%;
`;

export const StyledIcon = styled(InPlayerIcon)`
  font-size: ${({ theme }) => theme.font.sizes.extraLarge};
  color: ${({ color }) => color};

  :hover {
    outline: none;
    font-size: 60px;
    margin: -5px;
  }
`;

export const TitleBorder = styled.div`
  margin-bottom: 2%;
  width: 300px;
  background: linear-gradient(${({ color }) => `${color},${color}`}) bottom left no-repeat;
  background-size: 35% 4px;
`;
