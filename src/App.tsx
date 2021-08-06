import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Layout from './pages/Layout';
import NewTask from './pages/NewTask'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   
      <>
    
      <Header/>
   
      <Router>
    
    
    
        <Switch>
          <Route path="/newtask">
          <NewTask />
          </Route>

<Route path ="/">
          <Layout />
          </Route>

          </Switch>
          </Router>

        <GlobalStyles />
</>      
  
  );
}

export default App;
