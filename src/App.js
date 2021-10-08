import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {Home, About, SingleProduct, Products, Error, Checkout,  Cart, PrivateRoute, AuthWrapper} from "./pages"

function App() {


  return (
    <AuthWrapper>
    <Router>
    <Navbar />
    <Sidebar />

        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route  path="/cart">
            <Cart />
          </Route>

          <Route exact path='/products'>
            <Products />
          </Route>
          
          <Route path='/products/:id' children={<SingleProduct />} />
       
          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>

          <Route path="/">
            <Error />
          </Route>

        </Switch>

    <Footer />
    </Router>
    </AuthWrapper>
  )
}

export default App
