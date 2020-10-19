import subMonths from 'date-fns/subMonths';
import getUnixTime from 'date-fns/getUnixTime';
import endOfYesterday from 'date-fns/endOfYesterday';
import startOfYear from 'date-fns/startOfYear';
import { createAction, createReducer } from "@reduxjs/toolkit";
import { linkToListOfAllCryptos } from '../js/fixtures';

// UTILS ///////////////////////////////////////////////////////////////////////////////////////////////

var toPairs = require("lodash/toPairs");

function getPercentChange (current, historical){

  if (arguments[0] && arguments[1] && (typeof arguments[1] === 'number') && (typeof arguments[0] === 'number')){
  let result;
  
  let change = 100*(current-historical)/historical;
  const change_string = change.toLocaleString('pl-PL',{ 
      useGrouping:'true', 
      minimumFractionDigits:"2", 
      maximumFractionDigits:'2',
  
    });
   
    if (change === 0) result = 'no change';
    else if (change > 0) result = `+${change_string}%`;
    else if (change < 0) result = `${change_string}%`;
  return result;
  }
  else return 'n/a';
}
  


function formatResult(output, testValue, current, callback, referenceCoin) {

  const result = output.map(element => {
    if (Object.keys(element)[0] !== testValue) {
      const key = Object.keys(element)[0];
      let value = Object.values(element)[0];
      element = createObject(key, callback(current, value));

      return element;
    } else {
      const formattedCurrent =  (current.toString().length > 10)? current.toExponential(2): current.toString();
      const value = formattedCurrent+ ' '+ referenceCoin;
      element =createObject(testValue, value);
      return element;
    }
  });
  return result;
}

const CryptoCurrencyData = class {
  constructor(data) {
    this.data = [data];
    this.currentPrice = Object.values(data)[0];
  }

  complement = (newData) => {
    this.data.push(...newData);
  };

  format = (text, referenceCoin) => {
    const x = formatResult(
      this.data,
      text,
      this.currentPrice,
      getPercentChange,
      referenceCoin
    );
    this.data = x;
  };

  get getData() {
    return this.data;
  }
};

export const link = {
  extractCoinList: obj => {
    let data = obj.data.Data;
    for (var item in data) {
      if (data.hasOwnProperty(item)) {
        data[item] = data[item].CoinName;
      }
    }
    return toPairs(data);
  },
  currentPrice: (coin, reference) => "https://min-api.cryptocompare.com/data/price?fsym=" + coin + "&tsyms=" + reference,
  header: { Apikey: "feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e" },
  historicalPrice: (coin, reference, timestamp) => "https://min-api.cryptocompare.com/data/dayAvg?fsym=" + coin + "&tsym=" + reference + "&toTs=" + timestamp + "&avgType=MidHighLow&tryConversion=true&extraParams=your_app_name",
  currentPriceText: "Aktualna Cena",
};

function createObject(key, value) {
  const pair = {};
  pair[key] = value;
  return pair;
}

const timestamps ={
  content:[
    ['1D',()=> getUnixTime(endOfYesterday())],
    ['1M',()=> getUnixTime(subMonths(new Date(), 1))],
    ['5M',()=> getUnixTime(subMonths(new Date(), 3))],
    ['12M',()=> getUnixTime(subMonths(new Date(), 12))],
    ['30M',()=> getUnixTime(subMonths(new Date(), 30))],
    ['YTD',()=> getUnixTime(startOfYear(new Date()))],
  ],
  reducedLength: function(){return this.content.length -1;},
  getValue: function(i){return (this.content[i][1])();},
  getKey: function(i){return this.content[i][0]},
  }


  const extractListOfCryptos = (obj)=>{
    let data = obj.data.Data; 
    for(var item in data){if (data.hasOwnProperty(item)){data[item] = (data[item]).CoinName;}}; 
    return toPairs(data);};
    

// ACTIONS //////////////////////////////////////////////////////////////////////////////////////

export const sendListOfAllCryptos = createAction("SEND_LIST_OF_ALL_CRYPTOS");
export const sendError = createAction("SEND_ERROR");
export const sendBaseCurrency = createAction("SEND_BASE_CURRENCY");
export const sendSelectedCrypto = createAction("SEND_SELECTED_CRYPTO");
export const clearSelections = createAction("CLEAR_SELECTIONS");
export const clearHistorical = createAction("CLEAR_HISTORICAL");
export const sendCurrent = createAction("SEND_CURRENT");
export const setSearchResults = createAction("SET_SEARCH_RESULTS");
export const hideLoadedCoinMessage = createAction("HIDE_LOADED_COINS_MSG");
export const toggleValidationAlert = createAction("TOGGLE_VALIDATION_ALERT_VISIBILITY");
export const clearSearchResults = createAction("CLEAR_SEARCH_RESULTS");
export const sendHistorical = createAction("SEND_HISTORICAL");
export const hidePriceHasChangedSnackbar = createAction("HIDE_PRICE_HAS_CHANGED_SNACKBAR");

// REDUCER ////////////////////////////////////////////////////////////////////////////////////////

const initialState = {
  listOfAllCryptos: [],
  isLoadedListOfAllCryptos: false,
  lenghtOfListOfAllCryptos: 0,
  error: null,
  isValidationAlertVisibile: false,
  alert_message: "",
  choice: "",
  currentCryptoName: null,
  currentCryptoValue: null,
  content: [],
  isHistoricalDataReceived: false,
  baseCurrency: null,
  selectedCrypto: null,
  searchResults: [],
  priceHasChanged:false,
  isVisiblePriceChangedSnackbar:false,

};

export const reducer = createReducer(initialState, builder => {
  builder
    .addCase(sendListOfAllCryptos, (state, action) => {
      state.listOfAllCryptos = action.payload;
      state.isLoadedListOfAllCryptos = true;
      state.lenghtOfListOfAllCryptos = action.payload.length;
    })
    .addCase(sendError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(sendBaseCurrency, (state, action) => {
      state.baseCurrency = action.payload;
    })
    .addCase(sendSelectedCrypto, (state, action) => {
      state.selectedCrypto = action.payload;
    })
    .addCase(clearSelections, state => {
      state.selectedCrypto = null;
      state.baseCurrency = null;
    })
    .addCase(clearHistorical, state => {
      state.isHistoricalDataReceived = false;
      state.historical = null;
    })
    .addCase(sendCurrent, (state, action) => {
      state.isVisiblePriceChangedSnackbar = true;
      if (state.currentCryptoValue === null || state.currentCryptoValue !== action.payload[1]) 
      {
        const cryptoData = new CryptoCurrencyData(createObject(link.currentPriceText, action.payload[1]));
        cryptoData.complement([...state.historical]);
        cryptoData.format(link.currentPriceText, action.payload[0]);
        const content = cryptoData.getData;
        const currentPrice = content.shift();
        state.currentCryptoValue = action.payload[1];
        state.currentCryptoID = action.payload[0];
        state.content = content;
        state.currentCryptoName = action.payload[2];
        state.currentPrice = currentPrice;
        state.priceHasChanged = true;
      } else {
        state.priceHasChanged = false;
      }
    })
    .addCase(setSearchResults, (state, action) => {
      state.searchResults = [...action.payload];
    })
    .addCase(hideLoadedCoinMessage, (state, action) => {
      state.isLoadedListOfAllCryptos = action.payload;
    })
    .addCase(toggleValidationAlert, (state, action) => {
      state.isValidationAlertVisibile = action.payload;
    })
    .addCase(clearSearchResults, (state, action) => {
      state.searchResults = null;
    })
    .addCase(sendHistorical, (state, action) => {
      const clear = action.payload.pop();
      state.historical = action.payload;
      state.clear = clear;
      state.isHistoricalDataReceived = true;
    })
    .addCase(hidePriceHasChangedSnackbar,(state, action)=>{
      state.isVisiblePriceChangedSnackbar = false;
    })
    .addDefaultCase(() => {});
});

export default reducer;

// THUNKS /////////////////////////////////////////////////////////////////////////

export function validateAndGetHistoricalData(redirect, clear) {
  return (dispatch, getState, Axios) => {
    const { selectedCrypto, baseCurrency } = getState();
    if (selectedCrypto && baseCurrency) {
     
      dispatch(toggleValidationAlert(false));
      dispatch(clearHistorical());
      redirect.connecting();
      const ary = [];
      for (let i = 0; i <= timestamps.reducedLength(); i++) {
        ary.push(
          Axios.get(
            link.historicalPrice(
              selectedCrypto.value,
              baseCurrency,
              timestamps.getValue(i)
            ),
            link.header
          )
        );
      }
      const result = [];
      Axios.all(ary)
        .then((responseArr) => {
          responseArr.forEach((item, index) => {
            let partial = item.data[baseCurrency]
              ? item.data[baseCurrency]
              : "n/a";
            result.push(createObject(timestamps.getKey(index), partial));
          });
          result.push(clear);
          dispatch(sendHistorical(result));
        
          const newSelectedCrypto = selectedCrypto;
          const newBaseCurrency = baseCurrency;
          redirect.search();
          dispatch(
            setSearchResults([
              newSelectedCrypto.value,
              newBaseCurrency,
              newSelectedCrypto.label,
            ])
          );
        })
        .catch((error) => {
          
          redirect.error();
          dispatch(
            sendError({
              text:
                "Podczas pobierania historycznych danych dla " +
                selectedCrypto.label +
                " wystąpił błąd:",
              code: error.message,
            })
          );
        });
    } else {
      dispatch(toggleValidationAlert(true));
    }
  };
}
////////////////////////////////////////////////////////////////////////////////////////////

export function getCurrentCryptoPrice(results, redirect, clear) {
  return async (dispatch, getState, Axios) => {
    const [cryptoID, referenceCoin, text] = results;
    const resp = await Axios.get(
      link.currentPrice(cryptoID, referenceCoin),
      link.header
    ).catch((error) => {
     
      redirect.error();
      dispatch(
        sendError({
          text:
            "Podczas pobierania aktualnej wartości  dla " +
            cryptoID +
            "wystapił błąd:",
          code: error.message,
        })
      );

      return;
    });

    if (resp && resp.data.Response !== "Error") {
     
      const data = [
        Object.keys(resp.data)[0],
        Object.values(resp.data)[0],
        text,
      ];
      dispatch(sendCurrent(data));
      redirect.data();
    } else {
      redirect.error();
      clear();
      dispatch(
        sendError({
          text:
            "Aktualnie pobierana wartość dla " +
            cryptoID +
            " jest nieprawidłowa",
          code: resp.data.Message,
        })
      );
    } 
  };
}
/////////////////////////////////////////////////////////////////////////////////////////

export function getListOfAvailableCryptos(redirect) {
  return async (dispatch, getState, Axios) => {
   
    const {isLoadedListOfAllCryptos} = getState();
    if (!isLoadedListOfAllCryptos){
      const response = await Axios.get(linkToListOfAllCryptos).catch((error) => {
        const err = {
          text: 'Podczas próby pobrania listy dostępnych kryptowalut wystąpił błąd',
          code: error.message
        };
        dispatch(sendError(err));
        redirect.error();
      });
    response && (dispatch(sendListOfAllCryptos(extractListOfCryptos(response))));
    } 
    else{dispatch(hideLoadedCoinMessage())}
  };
}



