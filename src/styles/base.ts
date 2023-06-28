import { createGlobalStyle } from 'styled-components'

import MontserratThin from '@/assets/fonts/Montserrat-Thin.ttf'
import MontserratThinItalic from '@/assets/fonts/Montserrat-ThinItalic.ttf'
import MontserratExtraLight from '@/assets/fonts/Montserrat-ExtraLight.ttf'
import MontserratExtraLightItalic from '@/assets/fonts/Montserrat-ExtraLightItalic.ttf'
import MontserratLight from '@/assets/fonts/Montserrat-Light.ttf'
import MontserratLightItalic from '@/assets/fonts/Montserrat-LightItalic.ttf'
import MontserratRegular from '@/assets/fonts/Montserrat-Regular.ttf'
import MontserratItalic from '@/assets/fonts/Montserrat-Italic.ttf'
import MontserratMedium from '@/assets/fonts/Montserrat-Medium.ttf'
import MontserratMediumItalic from '@/assets/fonts/Montserrat-MediumItalic.ttf'
import MontserratSemiBold from '@/assets/fonts/Montserrat-SemiBold.ttf'
import MontserratSemiBoldItalic from '@/assets/fonts/Montserrat-SemiBoldItalic.ttf'
import MontserratBold from '@/assets/fonts/Montserrat-Bold.ttf'
import MontserratBoldItalic from '@/assets/fonts/Montserrat-BoldItalic.ttf'
import MontserratExtraBold from '@/assets/fonts/Montserrat-ExtraBold.ttf'
import MontserratExtraBoldItalic from '@/assets/fonts/Montserrat-ExtraBoldItalic.ttf'
import MontserratBlack from '@/assets/fonts/Montserrat-Black.ttf'
import MontserratBlackItalic from '@/assets/fonts/Montserrat-BlackItalic.ttf'

import {
  FONTS,
  PALETTE,
  THEME
} from './constants'

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    font-family: ${THEME.body.family};
    font-size: ${THEME.body.size};
    color: ${THEME.body.color};
    background-color: ${THEME.bg};
    overflow-x: hidden;
  }

  .h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2
  }

  .h1,h1 {
    font-size: calc(1.328125rem + .9375vw)
  }

  @media (min-width: 1200px) {
    .h1,h1 {
      font-size:2.03125rem
    }
  }

  .h2,h2 {
    font-size: calc(1.2875rem + .45vw)
  }

  @media (min-width: 1200px) {
    .h2,h2 {
      font-size:1.625rem
    }
  }

  .h3,h3 {
    font-size: calc(1.2671875rem + .20625vw)
  }

  @media (min-width: 1200px) {
    .h3,h3 {
      font-size:1.421875rem
    }
  }

  .h4,h4 {
    font-size: 1.21875rem
  }

  .h5,h5 {
    font-size: 1.015625rem
  }

  .h6,h6 {
    font-size: .8125rem
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem
  }

  [ant-click-animating-without-extra-node]::after {
    animation: 0s !important;
  }

  /* browser Chrome */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-internal-autofill-selected,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    background-color: #FFFFFF !important;
  }

  /* scroll */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: ${THEME.scroll.thumb};
    border: 0 none ${THEME.scroll.thumb};
    border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
    background: ${THEME.scroll.track};
    border: 0 none ${THEME.scroll.track};
    border-radius: 50px;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${THEME.scroll.thumb};
    cursor: pointer;
  }

  ::-webkit-scrollbar-track:hover {
    background: ${THEME.scroll.track};
    cursor: pointer;
  }

  /* input number hide arraows */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  /* styled ant design global */

  /* message */
  .ant-message {
    .ant-message-notice-content {
      cursor: pointer;

      .ant-message-custom-content {
        font-size: 20px;
        display: flex;
        align-items: center;

        .anticon {
          font-size: 20px;
        }
      }
    }
  }

  /* select */
  .ant-select-dropdown {
    box-shadow: ${THEME.form.select.dropdown.shadow};
    border-radius: ${THEME.form.select.dropdown.border.radius};
    padding: ${THEME.form.select.dropdown.padding};

    .ant-select-item-option {
      padding: ${THEME.form.select.dropdown.item.padding};
      font-family: ${THEME.form.select.font.family};
      font-size: ${THEME.form.select.font.size};
      color: ${THEME.form.select.font.color};
      border-radius: ${THEME.form.select.dropdown.item.border.radius};

      &.ant-select-item-option-selected{
        background-color: ${THEME.form.select.dropdown.item.hover};
      }

      &:hover {
        background-color: ${THEME.form.select.dropdown.item.hover};
      }
    }
  }

  /* dropdown */
  .ant-dropdown {
    .ant-dropdown-menu {
      min-width: 10rem;
      padding: .5rem 0;
      box-shadow: ${THEME.shadow};
      border-radius: .3rem;

      .ant-dropdown-menu-item {
        padding: .35rem 1.2rem;

        .ant-dropdown-menu-title-content {
          display: flex;
          align-items: center;
          font-size: ${THEME.body.size};
          font-family: ${THEME.body.family};

          > svg {
            width: 16px;
            height: 16px;
            margin-right: .7rem;
          }
        }
      }
    }
  }

  /* notification  */
  .ant-notification .ant-notification-notice {
    border-radius: ${THEME.card.border.radius};

    .ant-notification-notice-with-icon {

      .ant-notification-notice-message, .ant-notification-notice-description {
        font-family: ${THEME.card.font.family};
      }
    }
  }

  /* import fronts */
  @font-face {
    font-family: 'MontserratThin';
    font-style: normal;
    font-weight: 100;
    src: local('MontserratThin'), url(${MontserratThin}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratThinItalic';
    font-style: italic;
    font-weight: 100;
    src: local('MontserratThinItalic'), url(${MontserratThinItalic}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratExtraLight';
    font-style: normal;
    font-weight: 200;
    src: local('MontserratExtraLight'), url(${MontserratExtraLight}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratExtraLightItalic';
    font-style: italic;
    font-weight: 200;
    src: local('MontserratExtraLightItalic'), url(${MontserratExtraLightItalic}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratLight';
    font-style: normal;
    font-weight: 300;
    src: local('MontserratLight'), url(${MontserratLight}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratLightItalic';
    font-style: italic;
    font-weight: 300;
    src: local('MontserratLightItalic'), url(${MontserratLightItalic}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratRegular';
    font-style: normal;
    font-weight: 400;
    src: local('MontserratRegular'), url(${MontserratRegular}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratItalic';
    font-style: italic;
    font-weight: 400;
    src: local('MontserratItalic'), url(${MontserratItalic}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratMedium';
    font-style: normal;
    font-weight: 500;
    src: local('MontserratMedium'), url(${MontserratMedium}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratMediumItalic';
    font-style: italic;
    font-weight: 500;
    src: local('MontserratMediumItalic'), url(${MontserratMediumItalic}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratSemiBold';
    font-style: normal;
    font-weight: 600;
    src: local('MontserratSemiBold'), url(${MontserratSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratSemiBoldItalic';
    font-style: italic;
    font-weight: 600;
    src: local('MontserratSemiBoldItalic'), url(${MontserratSemiBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratBold';
    font-style: normal;
    font-weight: 700;
    src: local('MontserratBold'), url(${MontserratBold}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratBoldItalic';
    font-style: italic;
    font-weight: 700;
    src: local('MontserratBoldItalic'), url(${MontserratBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratExtraBold';
    font-style: normal;
    font-weight: 800;
    src: local('MontserratExtraBold'), url(${MontserratExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratExtraBoldItalic';
    font-style: italic;
    font-weight: 800;
    src: local('MontserratExtraBoldItalic'), url(${MontserratExtraBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratBlack';
    font-style: normal;
    font-weight: 900;
    src: local('MontserratBlack'), url(${MontserratBlack}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratBlackItalic';
    font-style: italic;
    font-weight: 900;
    src: local('MontserratBlackItalic'), url(${MontserratBlackItalic}) format('truetype');
  }
`
