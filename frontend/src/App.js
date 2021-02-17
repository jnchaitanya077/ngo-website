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
import DonarDetails from "./pages/DonarDetails";
import CashAwards from "./pages/CashAwards";
import StudentScholarships from "./pages/StudentScholarships"
import Medals from "./pages/Medals"
import Gallery from "./pages/Gallery"

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

      <Route
        exact
        path="/DonarDetails"
        render={() => <DonarDetails element={element} />}
      />

      {/* Scholorships */}

      <Route
        exact
        path="/CashAwards"
        render={() => <CashAwards element={element} />}
      />
      <Route
        exact
        path="/StudentScholarship"
        render={() => <StudentScholarships element={element} />}
      />
      <Route
        exact
        path="/Medals"
        render={() => <Medals element={element} />}
      />

      {/* Gallery Routes */}
      <Route
        exact
        path="/Gallery"
        render={() => <Gallery element={element} />}
      />
      <Route
        path="/Gallery/:galleryId"
        render={() => <Gallery element={element} />}
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
