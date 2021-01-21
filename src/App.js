import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './scenes/Home'
import ProductDetail from './scenes/ProductDetail'
const App = () => {
  
  return (
    <div style={styles.container}>
      <div style={styles.fixView}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products/:id">
                    <ProductDetail />
                </Route>
            </Switch>
        </Router>  
      </div>
    </div>
  );
};

const styles = {
  container : {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  fixView: {
    flex: 1,
    alignSelf: 'center',
    maxWidth: 512,
    width: '100%'
  }
}

export default App;
