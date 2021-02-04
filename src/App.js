import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import useSticky from "./hooks/useSticky";
import Homepage from "./pages/Homepage";
import Schemes from "./sections/Schemes";
import SchemeDisplay from "./components/displayScheme";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./css/App.css";
import Team from "./pages/Team";
import AboutTeam from "./pages/AboutTeam";
import FaqDispaly from "./pages/Faq";
import AnnualReports from "./pages/AnnualReports";
import About from "./pages/About";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <Router>
      <Navigation sticky={isSticky} />
      {/* for github pages */}
      <Route exact path="/ngo-website/" render={() => <Homepage element={element} />} />

      <Route exact path="/" render={() => <Homepage element={element} />} />

      <Route exact path="/About" render={() => <About element={element} />} />

      <Route
        exact
        path="/Schemes"
        render={(match) => <Schemes match={match} element={element} />}
      />
      <Route
        exact
        path="/Team"
        render={(match) => <Team match={match} element={element} />}
      />
      <Route
        exact
        path="/Faq"
        render={() => <FaqDispaly element={element} />}
      />
      <Route
        exact
        path="/AnnualReports"
        render={() => <AnnualReports element={element} />}
      />

      {/* Scheme Routes */}
      <Route
        path="/Schemes/:schemeId"
        render={() => <SchemeDisplay element={element} />}
      />
      {/* Team Routes */}
      <Route
        path="/Team/:TeamId"
        render={() => <AboutTeam element={element} />}
      />
      <Footer />
    </Router>
  );
}

export default App;
