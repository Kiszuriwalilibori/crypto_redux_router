
import {
    send_error, 
    send_current,  
  } from '../ACTIONS/actions';

  import {link} from'./functions'; 

export default function getCurrentCryptoPrice(search_results,redirect) {
    return async (dispatch, getState, Axios)=>{
    const [cryptoID, referenceCoin, text] = search_results;
    const resp = await Axios.get(link.currentPrice(cryptoID, referenceCoin), link.header).catch((error => {
  
      redirect.error();
      dispatch(send_error({
        text: 'Podczas pobierania aktualnej wartości  dla ' + cryptoID + 'wystapił błąd:',
        code: error.message,
      }))
  
      return;
    }));
  
    if (resp && resp.data.Response !== 'Error') {
      const data = [Object.keys(resp.data)[0], Object.values(resp.data)[0], text];
      dispatch(send_current(data));
      redirect.data();
    } else {
      redirect.error();
      dispatch(send_error({
        text: 'Aktualnie pobierana wartość dla ' + cryptoID + ' jest nieprawidłowa',
        code: resp.data.Message
      }))
    }; // w zasadzie to powinno zamykać pętlę, powinien iść duży reset w tym miejscu czyszczący wszystko
  }
} 