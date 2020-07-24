import {set_search_results, toggle_validation_alert_visibility, send_historical, send_error, clear_historical } from '../ACTIONS/actions';
import {timestamps, link, createObject} from './functions';

export function validate_and_get_historical_data (redirect, clear){return (dispatch, getState, Axios)=>{ 
  
    const { selected_crypto, base_currency } = getState();
    if(selected_crypto && base_currency){
       
        dispatch(toggle_validation_alert_visibility(false));
        dispatch(clear_historical());
        redirect.connecting();
        const ary =[];
        for(let i= 0; i<= timestamps.reducedLength(); i++){
            ary.push( Axios.get(link.historicalPrice(selected_crypto.value, base_currency, timestamps.getValue(i)), link.header))
        }
        const result =[]
        Axios.all(ary).then(responseArr => { 
            responseArr.forEach((item, index)=>{
                let partial = item.data[base_currency]? item.data[base_currency]: 'n/a';
                result.push(createObject(timestamps.getKey(index),partial) )
            });
            result.push(clear);
            dispatch(send_historical(result));
            const new_selected_crypto = selected_crypto;
            const new_base_currency = base_currency;
            redirect.search();
            dispatch(set_search_results([new_selected_crypto.value, new_base_currency, new_selected_crypto.label]));
      
        }).catch(error=>{
            redirect.error();
            dispatch(send_error({text: 'Podczas pobierania historycznych danych dla ' + selected_crypto.label + ' wystąpił błąd:', code: error.message}))
        });
  
    } 
        else{dispatch(toggle_validation_alert_visibility(true))} 
        }
}
    
