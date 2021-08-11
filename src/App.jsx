import React from "react";
import { Switch, Redirect,Route } from "react-router-dom";
import Home from './Home';
// import About from './About';

// import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
// import Video from './Video';
import Gallery from './Gallery';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./App.css";
import "./Res.css";




const App = () => {
  return (
      <>
      <Navbar />
      <a class="goToTop" href="#top"><i class="fa fa-arrow-up"></i></a>
     
      
      <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/about" component={About} /> */}
      {/* <Route exact path="/service" component={Services} /> */}
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/gallery" component={Gallery} />
      {/* <Route exact path="/video" component={Video} /> */}
      <Redirect to="/" />

      </Switch>
      <Footer/>
      </>

  );
};
export default App;
