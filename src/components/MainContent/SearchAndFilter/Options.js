import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext.js";
import styled from "styled-components";
import {
  FaGlobeAfrica,
  FaGlobeAmericas,
  FaGlobeAsia,
  FaGlobeEurope,
} from "react-icons/fa";
import { GiWorld, GiEarthAsiaOceania } from "react-icons/gi";
import Option from "./Option.js";

const regionList = [
  {
    icon: GiWorld,
    value: "All",
  },
  {
    icon: FaGlobeAfrica,
    value: "Africa",
  },
  {
    icon: FaGlobeAmericas,
    value: "Americas",
  },
  {
    icon: FaGlobeAsia,
    value: "Asia",
  },
  {
    icon: FaGlobeEurope,
    value: "Europe",
  },
  {
    icon: GiEarthAsiaOceania,
    value: "Oceania",
  },
];

function Options(props) {
  const { isShowOptions } = props;
  const themeContext = useContext(ThemeContext);
  const refOptions = useRef(null);

  useEffect(() => {
    const showOptions = () => {
      if (isShowOptions) {
        refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`;
        refOptions.current.style.transform = "scaleY(1)";
      } else {
        refOptions.current.style.maxHeight = "0";
        refOptions.current.style.transform = "scaleY(0)";
      }
    };

    showOptions();
    document.addEventListener("resize", showOptions);

    return () => {
      document.removeEventListener("resize", showOptions);
    };
  }, [isShowOptions]);

  return (
    <OptionPane className={themeContext.theme} ref={refOptions}>
      {regionList.map((region, index) => (
        <Option region={region} key={index} />
      ))}
    </OptionPane>
  );
}

export default Options;

const OptionPane = styled.ul`
  position: absolute;
  margin-top: 2px;
  width: 100%;
  border-radius: 5px;
  z-index: 10;
  overflow: hidden;
`;
