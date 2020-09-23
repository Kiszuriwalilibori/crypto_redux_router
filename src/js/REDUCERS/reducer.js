import * as actions from "../ACTIONS/actions";
import CryptoCurrencyData from "../FUNCTIONS/CryptoCurrencyData";
import { link, createObject } from "../FUNCTIONS/functions";
const initialState = {
  list_of_all_cryptos: [],
  isLoadedListOfAllCryptos: false,
  lenghtOfListOfAllCryptos: 0,
  error: null,
  alert_visible: false,
  alert_message: "",
  choice: "",
  currentCryptoName: null,
  currentCryptoValue: null,
  content: [],
  isHistoricalDataReceived: false,
  base_currency: null,
  selected_crypto: null,
  search_results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEND_LIST_OF_ALL_CRYPTOS:
      return {
        ...state,
        list_of_all_cryptos: action.payload,
        isLoadedListOfAllCryptos: true,
        lenghtOfListOfAllCryptos: action.payload.length,
      };
    case actions.TOGGLE_VALIDATION_ALERT_VISIBILITY:
      return {
        ...state,
        validation_alert_visibility: action.payload,
      };

    case actions.SEND_BASE_CURRENCY:
      return {
        ...state,
        base_currency: action.payload,
      };
    case actions.SEND_SELECTED_CRYPTO:
      return {
        ...state,
        selected_crypto: action.payload,
      };

    case actions.SET_SEARCH_RESULTS:
      return {
        ...state,
        search_results: [...action.payload],
      };

    case actions.CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        search_results: null,
      };

    case actions.SEND_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actions.HIDE_LOADED_COINS_MSG:
      return {
        ...state,
        isLoadedListOfAllCryptos: action.payload,
      };
    case actions.SEND_HISTORICAL:
      const clear = action.payload.pop();
      
      return {
        ...state,
        historical: action.payload,
        clear: clear,
        isHistoricalDataReceived: true,
      };

    case actions.CLEAR_HISTORICAL:
      return {
        ...state,
        isHistoricalDataReceived: false,
        historical: null,
      };

    case actions.SEND_CURRENT:
      if (
        state.currentCryptoValue === null ||
        state.currentCryptoValue !== action.payload[1]
      ) {
        const cryptoData = new CryptoCurrencyData(
          createObject(link.currentPriceText, action.payload[1])
        );

        cryptoData.complement([...state.historical]);

        cryptoData.format(link.currentPriceText, action.payload[0]);

        const content = cryptoData.getData;
        const first_content = content.shift();

        return {
          ...state,
          currentCryptoValue: action.payload[1],
          currentCryptoID: action.payload[0],
          content: content,
          currentCryptoName: action.payload[2],
          first_content: first_content,
        };
      }
    
    default:
      return state;
  }
};

export default reducer;
