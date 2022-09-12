import { useRef, useState, useEffect, useContext } from "react";
import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../ThemeContext/ThemeContext.js";

import styles from "./SwitchStyles.module.scss";

function SwitchMode() {
  const themeContext = useContext(ThemeContext);

  const refInput = useRef();
  const refCircle = useRef();
  const refToggle = useRef();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    refInput.current.checked = isDark;
  }, [isDark]);

  const handleToggle = () => {
    refInput.current.checked = !refInput.current.checked;
    setIsDark(refInput.current.checked);
    themeContext.toggleTheme();
  };

  useEffect(() => {
    const changeColor = () => {
      if (isDark) {
        refCircle.current.style.background = "#222";
        refToggle.current.style.background = "#fff";
      } else {
        refCircle.current.style.background = "#fff";
        refToggle.current.style.background = "var(--btn-background)";
      }
    };

    changeColor();
    document.addEventListener("resize", changeColor);
    return () => {
      document.removeEventListener("resize", changeColor);
    };
  }, [isDark]);

  return (
    <div className={styles.toggleButton} ref={refToggle} onClick={handleToggle}>
      <input type="checkbox" className={styles.Input} ref={refInput} />
      <div className={styles.Icon}>
        {isDark ? <RiMoonFill /> : <BsFillSunFill />}
      </div>
      <div className={styles.Circle} ref={refCircle}></div>
    </div>
  );
}

export default SwitchMode;
