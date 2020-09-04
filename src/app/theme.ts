import { createMuiTheme } from "@material-ui/core/styles";

/**
 * theme
 * @see
 */
const theme = createMuiTheme({
  typography: {
    fontSize: 16,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Hiragino Sans",
      "Hiragino Kaku Gothic ProN",
      "segoe ui",
      "Meiryo UI",
      "メイリオ",
      "游ゴシック  Medium",
      "ＭＳ Ｐゴシック",
      "MS PGothic",
      "sans-serif",
      // "Roboto",
      // "Helvetica",
      // "Arial"
    ].join(","),
  },
  palette: {
    type: "light",
  },
});

export default theme;
