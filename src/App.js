import React, { Suspense }from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Spinner} from './components/details';
import {Search} from './components/search';
import {Error} from './components/error';
//import DisplayData from './components/data';

const DisplayData = React.lazy(() => import('./components/data'));


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
    <Switch>
      <Route exact  path = "/">
      <Search />
      </Route>
      <Route path = "/results">
      <Suspense fallback={<Spinner />}>
        <DisplayData /> 
      </Suspense>  
      </Route>
      <Route path = "/connecting">
        <Spinner />
      </Route>
      <Route path = "/error">
        <Error />
      </Route>
    </Switch>
</Router> 
  );
}



export default App;
