import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "linear-gradient(to left, #7f00ff, #e100ff)",
  primaryBright: "#FF00FF",
  primaryDark: "#da22ff",
  secondary: "linear-gradient(to right, #da22ff, #9733ee)",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  title: "#000000",
  navBar: "#FFFFFF",
  sideBar: "#FFFFFF",
  heading:"#7f00ff",
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  minibg:"/images/darkbg.png",
  lotterybg:"/images/whitelottery.png",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "linear-gradient(to right, #e0eafc, #cfdef3)",
  tertiary: "#EFF4F5",
  text: "linear-gradient(to right, #7f00ff, #e100ff)",
  textDisabled: "#BDC2C4",
  textSubtle: "#000",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  title: "#FFFFFF",
  navBar: "#27262c",
  sideBar: "#27262c",
  secondary: "#9A6AFF",
  background: "#000000",
  minibg:"/images/whitebg.png",
  lotterybg:"/images/blacklottery.png",
  heading:"linear-gradient(to right, #7f00ff, #e100ff)",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
