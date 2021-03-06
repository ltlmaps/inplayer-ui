import React from 'react';
import colors from 'theme/colors';
import styled from 'styled-components';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';
import restrictedAssetImg from 'assets/images/restricted-asset.png';
import logo from 'assets/images/ip-icon-blue.svg';

// Types
import Branding from '../types/branding';

// Components
import TextEditor from '../shared/TextEditor';
import { OverlayLabel, PreviewImage, FooterLink } from '../shared/PreviewComponents';
import {
  StyledPreviewBox,
  StyledImageHolder,
  StyledPaywallDescription,
  PremiumContent,
  LockIcon,
  PaywallDescriptionSpan,
  Protected,
  Logo,
  ItemDetails,
  Title,
  BuyButtonWrapper,
  StyledBuyButton,
  StyledPreviewFooter,
} from './styled';

type Props = {
  /**
   * Branding type
   */
  branding?: Branding;
  /**
   * Whether to show the button or not
   */
  displayBuyButton?: boolean;
  /**
   * Preview unavailable
   */
  previewUnavailable?: boolean;
  /**
   * Minimum width
   */
  minWidth?: string;
  /**
   * Preview height
   */
  height?: string;
  /**
   * Preview width
   */
  width?: string;
  /**
   * Login footer label
   */
  loginFooterLabel?: string;
  /**
   * Whether the asset is restricted or not
   */
  isRestrictedAsset?: boolean;
  /**
   * Function which handles the modal state changes
   */
  handleOpenModal?: (e: any) => any;
};

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Preview1 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h3>Asset title</h3>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_top_border: hasPreviewTopBorder = true,
    inplayer_protected_label: hasProtectedByLabel = true,
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
  } = {},
  displayBuyButton = true,
  previewUnavailable = false,
  width = '',
  minWidth = '',
  height = '',
  isRestrictedAsset = false,
  loginFooterLabel = 'Already have access? Login with your InPlayer account',
  handleOpenModal,
}: Props) => {
  const image = isRestrictedAsset ? restrictedAssetImg : imageUrl;
  return (
    <StyledPreviewBox
      minWidth={minWidth}
      width={width}
      height={height}
      hasPreviewTopBorder={hasPreviewTopBorder}
      className="inplayer-preview-box"
    >
      {previewUnavailable && <OverlayLabel variant="h5">Preview not available yet</OverlayLabel>}
      <StyledImageHolder className="inplayer-imageholder">
        <PreviewImage src={image} />
        <StyledPaywallDescription
          className="inplayer-paywallexplain"
          hasProtectedByLabel={hasProtectedByLabel}
          color={colors.white}
        >
          <PremiumContent>
            <LockIcon name="lock" />
            <PaywallDescriptionSpan>
              This premium content requires an account to access.
            </PaywallDescriptionSpan>
          </PremiumContent>
          <PremiumContent>
            <Protected>Protected by InPlayer</Protected>
            <a href="https://inplayer.com" target="_blank" rel="noopener noreferrer">
              <Logo src={logo} alt="logo" />
            </a>
          </PremiumContent>
        </StyledPaywallDescription>
      </StyledImageHolder>
      <FlexContainer>
        <ItemDetails className="inplayer-itemdetails">
          <Title variant="h3" className="inplayer-title">
            <TextEditor value={previewTitle} readOnly />
          </Title>
          <TextEditor value={previewDescription} readOnly />
        </ItemDetails>
        {displayBuyButton && (
          <BuyButtonWrapper className="inplayer-buybutton">
            <StyledBuyButton
              className="inplayer-button"
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonTextColor}
              onClick={handleOpenModal}
            >
              {previewButtonLabel}
            </StyledBuyButton>
          </BuyButtonWrapper>
        )}
      </FlexContainer>
      <StyledPreviewFooter className="inplayer-preview-footer" color={colors.fontGray}>
        <FooterLink href="#login" onClick={handleOpenModal}>
          {loginFooterLabel}
        </FooterLink>
      </StyledPreviewFooter>
    </StyledPreviewBox>
  );
};

export default Preview1;
