import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    primary: "#285095",
    secondary: "#093A4B",
    tertiary: "#06D59F",
    body: "#EFF1E9",
  },
  fontSize: {
    xxl: "40px",
    xl: "24px",
    l: "17px",
    m: "12px",
    s: "11px",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#285095",
    secondary: "#093A4B",
    tertiary: "#06D59F",
    body: "#293B4C",
  },
  fontSize: {
    xxl: "40px",
    xl: "24px",
    l: "17px",
    m: "12px",
    s: "11px",
  },
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      body: string;
    };
    fontSize: {
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
    };
  }
}
