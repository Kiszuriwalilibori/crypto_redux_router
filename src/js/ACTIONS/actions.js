export const SEND_LIST_OF_ALL_CRYPTOS ='SEND_LIST_OF_ALL_CRYPTOS';
export const SEND_ERROR ='SEND_ERROR';
export const TRIGGER_ALERT ='TRIGGER_ALERT';
export const SEND_HISTORICAL ='SEND_HISTORICAL';
export const SEND_CURRENT ='SEND_CURRENT';
export const HIDE_LOADED_COINS_MSG ='HIDE_LOADED_COINS_MSG';
export const TOGGLE_VALIDATION_ALERT_VISIBILITY ='TOGGLE_VALIDATION_ALERT_VISIBILITY';
export const CLEAR_HISTORICAL ='CLEAR_HISTORICAL';
export const SEND_BASE_CURRENCY ='SEND CURRENCY';
export const SEND_SELECTED_CRYPTO ='SEND_SELECTED_CRYPTO';
export const SET_SEARCH_RESULTS ='SET_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export function send_list_of_all_cryptos(data){

    return {
        type: SEND_LIST_OF_ALL_CRYPTOS,
        payload: data,
    };  
}

export function send_error(data){

    return {
        type: SEND_ERROR,
        payload: data,
    };  
}


export function send_base_currency(data){

    return {
        type: SEND_BASE_CURRENCY,
        payload: data,
    };  
}

export function send_selected_crypto(data){

    return {
        type: SEND_SELECTED_CRYPTO,
        payload: data,
    };  
}

export function validate (x){return (dispatch, getState)=>{ 
    
        const { selected_crypto, base_currency } = getState();
        
        if(selected_crypto && base_currency){console.log('validated'); 
            dispatch(toggle_validation_alert_visibility(false));
            dispatch(set_search_results([selected_crypto.value, base_currency, selected_crypto.label]));
           
            } 
        else{
            
            dispatch(toggle_validation_alert_visibility(true))} 
        }
    }
    


    











export function clear_search_results(){
    return{type: CLEAR_SEARCH_RESULTS}
}

export function send_historical(data){

    return {
        type: SEND_HISTORICAL,
        payload: data,
    };  
}

export function clear_historical(){

    return {
        type: CLEAR_HISTORICAL, 
    };  
}


export function send_current(data){

    return {
        type: SEND_CURRENT,
        payload: data,
    };  
}

export function set_search_results(data){
    return {
        type: SET_SEARCH_RESULTS,
        payload: data,
    }; 
}

export function hide_loaded_coins_msg(){

    return {
        type: HIDE_LOADED_COINS_MSG,
    };  
}


export function toggle_validation_alert_visibility(data){

    return {
        type: TOGGLE_VALIDATION_ALERT_VISIBILITY,
        payload: data,
    };
}