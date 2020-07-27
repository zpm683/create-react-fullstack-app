/**
 *全局皮肤
 */

import { createMuiTheme } from "@material-ui/core/styles";
// Material-UIテーマを上書きする
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
    ].join(",")
  },
  // カラーパレット
  palette: {
    type: "light"
  }
});

export default theme;
