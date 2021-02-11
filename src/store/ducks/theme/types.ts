export const Types = {
  SET_THEME: '@theme/SET_THEME',
};

export interface TypesTheme {
  theme: {
    bar: string;
    bg: string;
    text: string;
    subtext: string;
    header: string;
    primary: string;
  };
}
