export const BREAKPOINTS = {
  small: '420px',
  medium: '768px',
  large: '1024px'
}

export const Z_INDEX = {
  overlay: 1000,
  loader: 1050
}

export const PALETTE = {
  white: '#FFFFFF',
  black: '#000000',
  bg: '#F3F3F6',
  primary: '#405189',
  heading: '#495057',
  overlay: '#21252959',
  text: '#212529',
  red: '#DD584D',
  green: '#219653',
  grey: '#F7F7F8',
  icon: '#8496A8',
  note: '#8496A8',
  border: '#E9EBEC',
  hover: '#F3F6F9'
}

const fontsCommon = '\'Source Sans Pro\', Helvetica, sans-serif'
export const FONTS = {
  light: `'MontserratLight', ${fontsCommon}`,
  lightItalic: `'MontserratLightItalic', ${fontsCommon}`,
  regular: `'MontserratRegular', ${fontsCommon}`,
  medium: `'MontserratMedium', ${fontsCommon}`,
  bold: `'MontserratBold', ${fontsCommon}`,
  semiBold: `'MontserratSemiBold', ${fontsCommon}`
}

export const THEME = {
  bg: PALETTE.bg,
  shadow: '0 1px 2px #38414A26',
  text: {
    main: PALETTE.text,
    sub: '#878A99'
  },
  body: {
    size: '16px',
    family: FONTS.regular,
    color: PALETTE.text,
    padding: '0 .25rem'
  },
  button: {
    bg: PALETTE.grey,
    disabled: '#fff',
    padding: '.56rem 1rem',
    font: {
      size: '1rem',
      color: PALETTE.primary,
      family: FONTS.medium
    },
    border: {
      radius: '50rem'
    },
    primary: {
      bg: PALETTE.primary,
      font: {
        color: PALETTE.white
      }
    },
    text: {
      bg: 'transparent',
      padding: 0,
      font: {
        color: PALETTE.black
      }
    },
    link: {
      bg: 'transparent',
      padding: 0,
      font: {
        color: PALETTE.primary
      }
    }
  },
  slider: {
    bg: PALETTE.bg
  },
  card: {
    bg: PALETTE.white,
    shadow: '0 1px 2px #38414A26',
    margin: '0 0 1.5rem',
    font: {
      size: '1.1rem',
      color: PALETTE.black,
      family: FONTS.medium
    },
    border: {
      radius: '.25rem',
      color: '#00000020'
    },
    header: {
      padding: '1rem',
      border: {
        color: PALETTE.border
      }
    },
    container: {
      padding: '1rem'
    }
  },
  form: {
    item: {
      margin: '0 0 1rem'
    },
    label: {
      padding: '0 0 .5rem',
      font: {
        size: '.8rem',
        color: PALETTE.text
      }
    },
    input: {
      bg: PALETTE.white,
      padding: '.48rem .9rem',
      placeholder: PALETTE.grey,
      border: {
        radius: '.25rem',
        color: PALETTE.grey,
        focus: '#A0A8C4'
      },
      font: {
        size: '.8rem',
        family: FONTS.medium,
        color: PALETTE.black
      }
    },
    select: {
      padding: '0.171rem 3.6rem 0.171rem 0.5rem',
      border: {
        radius: '.25rem',
        color: PALETTE.grey,
        focus: '#A0A8C4'
      },
      font: {
        size: '.8rem',
        family: FONTS.medium,
        color: PALETTE.black
      },
      dropdown: {
        padding: '.5rem 0',
        shadow: '0 5px 10px rgba(30,32,37,.12)',
        border: {
          radius: 0
        },
        item: {
          padding: '.35rem 1.2rem .35rem 16px',
          hover: PALETTE.hover,
          border: {
            radius: 0
          }
        }
      }
    },
    font: {
      size: '.8rem',
      color: PALETTE.black,
      family: FONTS.semiBold
    }
  },
  scroll: {
    track: '#BDBDBD',
    thumb: '#828282'
  },
  collapse: {
    bg: PALETTE.white,
    active: {
      bg: '#4051890d'
    },
    font: {
      size: '0.85rem',
      color: PALETTE.black,
      family: FONTS.regular
    }
  },
  checkbox: {
    bg: PALETTE.bg,
    font: {
      size: '0.85rem',
      color: PALETTE.black,
      family: FONTS.regular
    }
  },
  table: {
    bg: '#F3F6F9',
    border: {
      radius: 0,
      color: PALETTE.border
    },
    thead: {
      padding: '0.75rem 0.6rem',
      font: {
        family: FONTS.medium,
        size: '0.8125rem'
      }
    },
    tbody: {
      padding: '0.75rem 0.6rem',
      font: {
        family: FONTS.regular,
        size: '0.8125rem'
      }
    }
  }
}
