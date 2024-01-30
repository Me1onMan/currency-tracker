const baseTheme = {
  sizes: {
    screenSize: {
      mobileL: "420px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
    },

    px: {
      px1: "1px",
      px2: "2px",
      px14: "14px",
      px26: "26px",
    },

    rem: {
      rem0_25: "0.25rem",
      rem0_5: "0.5rem",
      rem0_75: "0.75rem",
      rem1: "1rem",
      rem1_25: "1.25rem",
      rem1_5: "1.5rem",
      rem2: "2rem",
      rem2_25: "2.25rem",
      rem2_5: "2.5rem",
      rem3: "3rem",
      rem3_25: "3.25rem",
      rem4: "4rem",
      rem6: "6rem",
      rem8: "8rem",
      rem10: "10rem",
      rem12: "12rem",
      rem15: "15rem",
      rem18: "18rem",
      rem20: "20rem",
      rem25: "25rem",
      rem30: "30rem",
    },

    percents: {
      p5: "5%",
      p40: "40%",
      p50: "50%",
      p80: "80%",
      p90: "90%",
      p94: "94%",
      p100: "100%",
      vw80: "80vw",
      vw100: "100vw",
      vh10: "10vh",
      vh80: "80vh",
      vh90: "90vh",
      vh100: "100vh",
    },

    zero: "0",
  },

  borders: {
    card: "1px solid #474747",
  },

  colors: {
    black: "#000",
    bgModalWrapper: "rgba(0, 0, 0, 0.5)",
    bgToast: "#0f0",
    flickerOn: "rgba(0, 188, 79, 1)",
    flickerOff: "rgba(0, 188, 79, 0.2)",
    grayBorder: "#474747",
    linkHover: "#00c459",
  },
};

export const lightTheme = {
  ...baseTheme,
  borders: {
    ...baseTheme.borders,
    borderToggler: "1px solid #000",
  },
  colors: {
    ...baseTheme.colors,
    bgColorPrimary: "#cbdeca",
    bgColorSecondary: "#afcbad",
    bgColorInput: "#c3ffc1",
    bgColorHeader: "#cbdeca",
    textColorPrimary: "#000",
    textColorSecondary: "#5b5b5b",
    textColorCardPrimary: "#161816",
    textColorCardSecondary: "#292c28",
    borderColorInput: "#909090",
    dropdownItemHover: "#9fcba0",
  },
};

export const darkTheme = {
  ...baseTheme,
  borders: {
    ...baseTheme.borders,
    borderToggler: "1px solid #fff",
  },
  colors: {
    ...baseTheme.colors,
    bgColorPrimary: "#030304",
    bgColorSecondary: "#202025",
    bgColorInput: "#1b2028",
    bgColorHeader:
      "linear-gradient(45deg, #121212 0%, #0d2417 50%, #121212 100%)",
    textColorPrimary: "#fff",
    textColorSecondary: "#898989",
    textColorCardPrimary: "#d9d9d9",
    textColorCardSecondary: "#a7b2c3",
    borderColorInput: "#909090",
    dropdownItemHover: "#393939",
  },
};
