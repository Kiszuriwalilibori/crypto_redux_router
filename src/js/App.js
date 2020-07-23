import * as React from 'react';
import {lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import EmptyLoader from '../components/EmptyLoader';

const Results = lazy(() => import('../components/Results/Results'));
const Error = lazy(()=>import('../components/ErrorMessage'));
const SearchSection = lazy(()=>import('../components/Choice/SearchSection'));
const Loader = lazy(()=>import('../components/Loader'));

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
    <Switch>
      <Route exact  path = "/">
        <Suspense fallback={EmptyLoader()}>
          <SearchSection />
        </Suspense>
      </Route>
      <Route path = "/results">
        <Suspense fallback={EmptyLoader()}>
          <Results /> 
        </Suspense>  
      </Route>
      <Route path = "/connecting">
        <Suspense fallback={EmptyLoader()}> 
          <Loader />
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
