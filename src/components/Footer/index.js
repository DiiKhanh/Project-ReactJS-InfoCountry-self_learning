import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
function Footer() {
  const themeContext = useContext(ThemeContext);
  return (
    <FooterContainer className={themeContext.theme}>
      <h4>ReBuild Project &copy; DiiKhanh</h4>
    </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;
