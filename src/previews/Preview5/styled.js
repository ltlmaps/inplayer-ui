// @flow
import styled from 'styled-components';
import InPlayerIcon from 'elements/InPlayerIcon';
import colors from 'config/colors';
import { transparentize } from 'polished';

// Components
import {
  PreviewBox,
  DescriptionSpan,
  ImageHolder,
  TemplatesButton,
} from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  box-sizing: border-box;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  border: none;
  background: transparent;
  border-radius: 0;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  line-height: 1.6em;
  font-weight: ${({ theme }) => theme.font.weights.light};
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled(ImageHolder)`
  height: ${({ height }) => (height < 75 ? '45%' : '65%')};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  margin: 0;
`;

export const Overlay = styled.div`
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent 50%,
    ${transparentize(0.7, colors.black)} 100%
  );
  padding: 28.5% 50%;
  height: 100%;
`;

export const BuyButtonHolder = styled.div`
  text-align: center;
  position: absolute;
  display: block;
  width: 100%;
  top: calc(50% - 25px);
`;

export const BuyButtonBorder = styled.div`
  margin: -8px;
  display: inline-block;
  border: 8px solid ${transparentize(0.9, colors.black)};
  border-radius: 300px;
  overflow: hidden;
`;

export const BuyButton = styled(TemplatesButton)`
  background-color: ${({ buttonBgColor }) => transparentize(0.1, buttonBgColor)};
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.font.sizes.large};
  padding: 10px 60px;
  height: 2rem;
  vertical-align: middle;
  display: table-cell;

  &:hover {
    outline: none;
  }

  @media screen and (max-width: 700px) {
    padding: 10px 30px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: ${({ height }) => (height < 75 ? '55%' : '35%')};
  padding: 1rem 3%;
  box-sizing: border-box;
  position: relative;
  background: ${transparentize(0.1, colors.gray)};
`;

export const PaywallDescriptionSpan = styled(DescriptionSpan)`
  padding: 0;
  font-size: ${({ theme }) => theme.font.sizes.small};
  text-transform: uppercase;
`;

export const StyledIcon = styled(InPlayerIcon)`
  line-height: 15px;
  font-size: ${({ theme }) => theme.font.sizes.large};
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  margin: 0 0.4em 0 0;
  position: relative;
`;

export const TitleHolder = styled.div`
  display: inline-block;
  margin: 0.3em 0;
`;

export const DescriptionHolder = styled.div`
  margin-bottom: 0.6em;
`;
