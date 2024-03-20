import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Faq from "./components/faqs/Faqs";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import ServiceOne from "./components/pages/ServiceOne";
import Services from "./components/services/ServicesHome";
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
          <Route exact path="/ServiceOne" component={ServiceOne} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
