import * as React from 'react';
import {lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import {Spinner} from './components/details';
// import {Search} from './components/search';
// import {Error} from './components/error';
import EmptyLoader from './components/emptyloader';

const DisplayData = lazy(() => import('./components/data'));
const Error = lazy(()=>import('./components/error'));
const Search = lazy(()=>import('./components/search'));
const Spinner = lazy(()=>import('./components/spinner'));

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
    <Switch>
      <Route exact  path = "/">
        <Suspense fallback={EmptyLoader()}>
          <Search />
        </Suspense>
      </Route>
      <Route path = "/results">
        <Suspense fallback={EmptyLoader()}>
          <DisplayData /> 
        </Suspense>  
      </Route>
      <Route path = "/connecting">
        <Suspense fallback={EmptyLoader()}> 
          <Spinner />
        </Suspense>   
      </Route>
      <Route path = "/error">
        <Suspense fallback={EmptyLoader()}> 
          <Error />
        </Suspense>
      </Route>
    </Switch>
</Router> 
  );
}


export default App;
