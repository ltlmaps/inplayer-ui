import React from 'react';
import { transparentize } from 'polished';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Components
import colors from 'theme/colors';
import { FaLock } from 'react-icons/fa';
import StyledContainer from '../components/StyledContainer';
import TextEditor from '../components/TextEditor';
import { OverlayLabel } from '../components/SharedComponents';
import {
  StyledPreviewBox,
  StyledButton,
  ImageWrapper,
  StyledIconWrapper,
  Icon,
  StyledPreviewImage,
  StyledTextWrapper,
  TextElement,
} from './styled';

// Types
import Branding from '../types/branding';

type Props = {
  branding: Branding;
  displayBuyButton?: boolean;
  previewUnavailable?: boolean;
  width?: string | number;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
};

const removeTags = (str: string) => str.replace(/<.*?>/g, ' ').replace(/ +/g, ' ').trim();

const Preview4 = ({
  branding: {
    inplayer_protected_label: protectedLabel = true,
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
    preview_top_border: previewTopBorder = true,
  },
  displayBuyButton,
  previewUnavailable,
  minWidth,
  minHeight,
  height,
  width,
  isRestrictedAsset,
  handleOpenModal,
}: Props) => {
  const previewTitleText = removeTags(previewTitle);
  const previewDescriptionText = removeTags(previewDescription);
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      minWidth={minWidth}
      minHeight={minHeight}
      topBorderColor={previewTopBorder ? buttonBgColor : colors.white}
      width={width}
      height={height}
    >
      {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <StyledContainer columns="1fr">
        {displayBuyButton && (
          <StyledButton
            buttonBgColor={buttonBgColor}
            buttonTextColor={buttonTextColor}
            onClick={handleOpenModal}
          >
            {previewButtonLabel}
          </StyledButton>
        )}
      </StyledContainer>
      <ImageWrapper>
        <StyledIconWrapper backgroundColor={buttonBgColor} protectedLabel={protectedLabel}>
          <Icon>
            <FaLock />
          </Icon>
        </StyledIconWrapper>
        <StyledPreviewImage src={image} />
        <StyledTextWrapper>
          <TextElement width={width}>
            <TextEditor
              value={previewTitle}
              displayToolbar={false}
              textBackground={previewTitleText ? transparentize(0.3, colors.black) : 'none'}
              textColor={buttonBgColor}
              padding="0.5rem"
              readOnly
            />
          </TextElement>
          <TextElement width={width}>
            <TextEditor
              value={previewDescription}
              displayToolbar={false}
              textBackground={previewDescriptionText ? transparentize(0.3, colors.black) : 'none'}
              textColor={colors.white}
              lineHeight={1.5}
              padding="0.5rem"
              readOnly
            />
          </TextElement>
        </StyledTextWrapper>
      </ImageWrapper>
    </StyledPreviewBox>
  );
};

Preview4.defaultProps = {
  branding: {},
  displayBuyButton: true,
  previewUnavailable: false,
  minWidth: '250px',
  minHeight: '390px',
  height: undefined,
  width: undefined,
  handleOpenModal: () => {},
  isRestrictedAsset: false,
};

export default Preview4;
