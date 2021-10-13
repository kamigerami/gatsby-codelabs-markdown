module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          dark: "#202020",
          darkest: "#151515",
        },
        grey: {
          normal: "#565656",
          dark: "#18191F",
          lightest: "#E4E4E4",
          blue: "#00A6FB",
          bluish: "#1C2C40"
        },
      },
      fontFamily: {
        'title': ['barlow']
      }
      // backgroundImg: {
      //   background: url("./public/images/CoverImage.svg"),
      // },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
