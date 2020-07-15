
import {send_error, send_list_of_all_cryptos, hide_loaded_coins_msg } from '../actions';

const linkToListOfAllCryptos = 'https://min-api.cryptocompare.com/data/all/coinlist';

var toPairs = require('lodash/toPairs');

const extractListOfCryptos = (obj)=>{
    let data = obj.data.Data; 
    for(var item in data){if (data.hasOwnProperty(item)){data[item] = (data[item]).CoinName;}}; 
    return toPairs(data);};
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function getListOfAvailableCryptos(redirect) {
  return async (dispatch, getState, Axios) => {
    
    const {list_of_all_cryptos_is_loaded} = getState();
    if (!list_of_all_cryptos_is_loaded){
      const response = await Axios.get(linkToListOfAllCryptos).catch((error) => {
        const err = {
          text: 'Podczas próby pobrania listy dostępnych kryptowalut wystąpił błąd',
          code: error.message
        };
        dispatch(send_error(err));
        redirect.error();
      });
    response && (dispatch(send_list_of_all_cryptos(extractListOfCryptos(response))));
    } 
    else{dispatch(hide_loaded_coins_msg())}
  };
}
