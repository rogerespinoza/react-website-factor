import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar, Footer} from './components/index';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home'
import Products from './pages/Products/Products'
import Services from './pages/Services/Services'
import SignUp from './pages/SignUp/SignUp'

export default function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop />
      <Navbar /> 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  )
}

