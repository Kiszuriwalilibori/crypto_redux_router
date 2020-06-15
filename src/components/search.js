
import React from 'react';
import MySelect from './select';
import {validate_and_get_historical_data} from '../complexfunctions/validatehistorical';
import getListOfAvailableCryptos from '../complexfunctions/getlistofcoins';
import getCurrentCryptoPrice from '../complexfunctions/getcurrentprice';
import {Container, Button, ValidationAlert} from './details';
import {useEffect } from 'react';
import { withRouter } from "react-router";
import {connect} from'react-redux';
import {RadioButtonsGroup}from './radiogroup';
import { useHistory } from 'react-router-dom';
import LoadedCoinsMessage from './loadedcoinmessage';

import {
  send_error, 
  send_current,  
  clear_search_results,
} from '../actions';

var Loop;
//do rozważenia przenieść mniej więcej wszystk z clearloop do tego co się wykonuje po mount
//////////////////////////////////////////////////////////////////////////////

const _Search =(props) =>{

  const {
    search_results, 
    clear_search_results, 
    validate_and_get_historical_data,
    getCurrentCryptoPrice, 
    getListOfAvailableCryptos} = props;  

  const clearLoop =()=>{clear_search_results(); clearInterval(Loop)}

  const history = useHistory();

  const redirect = React.useMemo(
     () => ({
      not_found: ()=>{history.push('/not_found')},
      error:()=>{history.push('/error')},
      data: ()=>{history.push('/results')},
      connecting:()=>{history.push('/connecting')},
      search:()=>{history.push('/')}
    }),[],
  )



  function return_get_current_price(){return getCurrentCryptoPrice(search_results, redirect)};
  function proceed_validate(){return validate_and_get_historical_data(redirect, clearLoop)};

  useEffect(()=>{
    
    if (search_results && search_results.length) {
      redirect.connecting();
      clearLoop();
      return_get_current_price();
      Loop = setInterval(return_get_current_price, 5000);
    }
  },[search_results]);

  
  useEffect(() => {  
    getListOfAvailableCryptos(redirect);
  },[]);
 
  return(  
  <Container>
    <Button ID = 'Button' onClick ={proceed_validate}>Pokaż dane</Button>
    <RadioButtonsGroup />
    <MySelect />
    <ValidationAlert />
    <LoadedCoinsMessage />
  </Container>);

}

const  mapDispatchToProps = (dispatch) => ({
  send_error:(data)=> dispatch(send_error(data)),
  send_current: (data)=> dispatch(send_current(data)),
  clear_search_results:()=>dispatch(clear_search_results()),
  validate_and_get_historical_data:(a,b)=>dispatch(validate_and_get_historical_data(a,b)),
  getListOfAvailableCryptos:(x)=>dispatch(getListOfAvailableCryptos(x)),
  getCurrentCryptoPrice:(x,y)=>dispatch(getCurrentCryptoPrice(x,y)),
});

const mapStateToProps = (state) => ({  
  search_results: state.search_results,
});

const Search = withRouter(connect(mapStateToProps, mapDispatchToProps)(_Search));
export default Search;
