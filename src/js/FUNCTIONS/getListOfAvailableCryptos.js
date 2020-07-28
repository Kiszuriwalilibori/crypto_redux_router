
import {reportError, setListOfAllCryptos, hideLoadedCoinsMessage } from '../ACTIONS/actions';

const linkToListOfAllCryptos = 'https://min-api.cryptocompare.com/data/all/coinlist';

var toPairs = require('lodash/toPairs');

const extractListOfCryptos = (obj)=>{
    let data = obj.data.Data; 
    for(var item in data){if (data.hasOwnProperty(item)){data[item] = (data[item]).CoinName;}}; 
    return toPairs(data);};
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function getListOfAvailableCryptos(redirect) {
  return async (dispatch, getState, Axios) => {
    
    const {isLoadedListOfAllCryptos} = getState();
    if (!isLoadedListOfAllCryptos){
      const response = await Axios.get(linkToListOfAllCryptos).catch((error) => {
        const err = {
          text: 'Podczas próby pobrania listy dostępnych kryptowalut wystąpił błąd',
          code: error.message
        };
        dispatch(reportError(err));
        redirect.error();
      });
    response && (dispatch(setListOfAllCryptos(extractListOfCryptos(response))));
    } 
    else{dispatch(hideLoadedCoinsMessage())}
  };
}
