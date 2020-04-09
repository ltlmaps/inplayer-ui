import React from 'react';
import colors from 'theme/colors';
import { lighten } from 'polished';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';

// Types
import TextEditor from '../components/TextEditor';
import Branding from '../types/branding';

// Components
import { StyledPaywallDescription } from '../components/SharedComponents';
import {
  StyledPreviewBox,
  ImageWrapper,
  Overlay,
  BuyButtonHolder,
  BuyButtonBorder,
  StyledBuyButton,
  ItemDetails,
  StyledIcon,
  PaywallDescriptionSpan,
  TitleHolder,
  DescriptionHolder,
} from './styled';

type OwnProps = {
  branding: Branding;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
};

const Preview5 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = lighten(0.01, colors.green),
    preview_buttons_text_color: buttonTextColor = colors.black,
    inplayer_protected_label: protectedLabel = true,
  },
  width,
  height,
  minHeight,
  minWidth,
  handleOpenModal,
  isRestrictedAsset,
}: OwnProps) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox minHeight={minHeight} minWidth={minWidth} width={width} height={height}>
      <ImageWrapper height={height} backgroundImage={image}>
        <Overlay />
        <BuyButtonHolder>
          <BuyButtonBorder>
            <StyledBuyButton
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonTextColor}
              onClick={handleOpenModal}
            >
              {previewButtonLabel}
            </StyledBuyButton>
          </BuyButtonBorder>
        </BuyButtonHolder>
      </ImageWrapper>
      <ItemDetails height={height}>
        <StyledPaywallDescription
          color={lighten(0.01, buttonBgColor)}
          displayProtectedLabel={protectedLabel}
        >
          <StyledIcon />
          <PaywallDescriptionSpan>Premium content</PaywallDescriptionSpan>
        </StyledPaywallDescription>
        <TitleHolder>
          <TextEditor value={previewTitle} readOnly />
        </TitleHolder>
        <DescriptionHolder>
          <TextEditor value={previewDescription} readOnly />
        </DescriptionHolder>
      </ItemDetails>
    </StyledPreviewBox>
  );
};

Preview5.defaultProps = {
  branding: {},
  minWidth: '250px',
  minHeight: '420px',
  height: undefined,
  width: undefined,
  handleOpenModal: () => {},
  isRestrictedAsset: false,
};

export default Preview5;
