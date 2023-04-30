import { createContext, useState, FC, ReactNode } from "react";

type TThemeContext = {
  theme: string;
  toggleTheme(): void;
};

export const themes = {
  default: "light",
  secondary: "dark",
};

const ThemeContext = createContext<TThemeContext>({
  theme: themes.default,
  toggleTheme: () => {},
});

export const ThemeContextProvider: FC<{
  children: ReactNode;
}> = (props) => {
  const [theme, setTheme] = useState(themes.default);

  const toggleTheme = () => {
    setTheme((prev) =>
      theme === themes.default ? themes.secondary : themes.default
    );
  };

  const contextValues = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValues}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
