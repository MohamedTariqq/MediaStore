import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Faq from "./components/faqs/Faqs";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Services from "./components/services/ServicesHome";
import Advertising from "./components/pages/Advertising&Marketing";
import OrganizingEvents from "./components/pages/OrganizingEvents";
import DesignProduction from "./components/pages/Design&Production";
import PromotionalGifts from "./components/pages/PromotionalGifts";
import InteriorDesign from "./components/pages/InteriorDesign";
import DigitalSolution from "./components/pages/DigitalSolution";
import DigitalOffsetPrinting from "./components/pages/DigitalOffsetPrinting";
import BillboardManufacturing from "./components/pages/BillboardManufacturing";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/faqs" component={Faq} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Advertising&Marketing" component={Advertising} />
          <Route exact path="/Organizing-Events" component={OrganizingEvents} />
          <Route exact path="/Design&Production" component={DesignProduction} />
          <Route exact path="/Promotional-Gifts" component={PromotionalGifts} />
          <Route exact path="/Interior-Design" component={InteriorDesign} />
          <Route exact path="/Digital-Solution" component={DigitalSolution} />
          <Route
            exact
            path="/Digital-Offset-Printing"
            component={DigitalOffsetPrinting}
          />
          <Route
            exact
            path="/Billboard-Manufacturing"
            component={BillboardManufacturing}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
