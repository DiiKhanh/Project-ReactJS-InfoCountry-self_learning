import styled from "styled-components";
import SwitchMode from "./SwitchMode";
import { ThemeContext } from "../ThemeContext/ThemeContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
  const themeContext = useContext(ThemeContext);

  return (
    <HeaderPane className={themeContext.theme}>
      <Link to={"/"}>
        <span>Where in the world?</span>
      </Link>
      <SwitchMode />
    </HeaderPane>
  );
}

export default Header;

const HeaderPane = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  padding: 18px 14%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);

  span {
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease;
    color: black;
    &:hover {
      color: #c3c3c3;
    }
  }
`;
