import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <p onClick={toggleTheme} className="text-2xl ">
        {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
      </p>
    </>
  );
};

export default ToggleTheme;
