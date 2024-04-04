import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

export const ThemeContext = createContext(null);

export default function Layout() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <main>
            <Outlet />
          </main>
        </div>
      </ThemeContext.Provider>
    </>
  );
}