import React from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const darkModeAtom = atomWithStorage("darkMode", false);

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const handleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <button onClick={handleTheme} className=" font-bold text-2xl ">
        {darkMode ? (
          <BsFillSunFill className="text-[#FDB813]" />
        ) : (
          <BsMoonStarsFill />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
