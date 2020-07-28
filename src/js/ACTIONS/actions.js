export const SEND_LIST_OF_ALL_CRYPTOS = "SEND_LIST_OF_ALL_CRYPTOS";
export const REPORT_ERROR = "REPORT_ERROR";
export const TRIGGER_ALERT = "TRIGGER_ALERT";
export const SET_HISTORICAL_PRICES = "SET_HISTORICAL_PRICES";
export const SET_CURRENT_PRICE = "SET_CURRENT_PRICE";
export const HIDE_LOADED_COINS_MESSAGE = "HIDE_LOADED_COINS_MESSAGE";
export const TOGGLE_VALIDATION_ALERT_VISIBILITY = "TOGGLE_VALIDATION_ALERT_VISIBILITY";
export const CLEAR_HISTORICAL_PRICES = "CLEAR_HISTORICAL_PRICES";
export const SET_BASE_CURRENCY = "SEND BASE CURRENCY";
export const SET_SELECTED_CRYPTO = "SET_SELECTED_CRYPTO";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export function setListOfAllCryptos(data) {
  return {
    type: SEND_LIST_OF_ALL_CRYPTOS,
    payload: data,
  };
}

export function reportError(data) {
  return {
    type: REPORT_ERROR,
    payload: data,
  };
}

export function setBaseCurrency(data) {
  return {
    type: SET_BASE_CURRENCY,
    payload: data,
  };
}

export function setSelectedCrypto(data) {
  return {
    type: SET_SELECTED_CRYPTO,
    payload: data,
  };
}

export function validate(x) {
  return (dispatch, getState) => {
    const { selected_crypto, baseCurrency } = getState();

    if (selected_crypto && baseCurrency) {
      console.log("validated");
      dispatch(toggleValidationAlertVisibility(false));
      dispatch(setSearchResults([selected_crypto.value, baseCurrency, selected_crypto.label]));
    } else {
      dispatch(toggleValidationAlertVisibility(true));
    }
  };
}

export function clearSearchResults() {
  return { type: CLEAR_SEARCH_RESULTS };
}

export function setHistoricalPrices(data) {
  return {
    type: SET_HISTORICAL_PRICES,
    payload: data,
  };
}

export function clearHistoricalPrices() {
  return {
    type: CLEAR_HISTORICAL_PRICES,
  };
}

export function setCurrentPrice(data) {
  return {
    type: SET_CURRENT_PRICE,
    payload: data,
  };
}

export function setSearchResults(data) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: data,
  };
}

export function hideLoadedCoinsMessage() {
  return {
    type: HIDE_LOADED_COINS_MESSAGE,
  };
}

export function toggleValidationAlertVisibility(data) {
  return {
    type: TOGGLE_VALIDATION_ALERT_VISIBILITY,
    payload: data,
  };
}
