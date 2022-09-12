import "./App.css";
import { useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import styled from "styled-components";
import { ThemeContext } from "./components/ThemeContext/ThemeContext.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetail from "./components/MainContent/CountryDetail";

function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <AppContainer className={themeContext.theme}>
      <Router>
        <Header />
        <ContentContainer>
          <Routes>
            <Route exact path="/" element={<MainContent />} />
            <Route path="/region/:regionName" element={<MainContent />} />
            <Route path="/country/:countryName" element={<CountryDetail />} />
            <Route path="/search/:name" element={<MainContent />} />
          </Routes>
        </ContentContainer>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const ContentContainer = styled.div`
  padding: 80px 14% 40px;
`;
