import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import useSticky from "./hooks/useSticky";
import Homepage from "./pages/Homepage";
import Schemes from "./sections/Schemes";
import SchemeDisplay from "./components/displayScheme";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./css/App.css";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <Router>
      <Navigation sticky={isSticky} />
      <Route exact path="/" render={() => <Homepage element={element} />} />
      <Route
        exact
        path="/Schemes"
        render={(match) => <Schemes match={match} element={element} />}
      />

      {/* Scheme Routes */}
      <Route
        path="/Schemes/:schemeId"
        render={() => <SchemeDisplay element={element} />}
      />
      <Footer />
    </Router>
  );
}

export default App;
