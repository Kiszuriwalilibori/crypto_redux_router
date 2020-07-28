import {
  setSearchResults,
  toggleValidationAlertVisibility,
  setHistoricalPrices,
  reportError,
  clearHistoricalPrices,
} from "../ACTIONS/actions";
import { timestamps, link, createObject } from "./functions";

export function validate_and_get_historical_data(redirect, clear) {
  return (dispatch, getState, Axios) => {
    const { selected_crypto, baseCurrency } = getState();
    if (selected_crypto && baseCurrency) {
      dispatch(toggleValidationAlertVisibility(false));
      dispatch(clearHistoricalPrices());
      redirect.connecting();
      const ary = [];
      for (let i = 0; i <= timestamps.reducedLength(); i++) {
        ary.push(
          Axios.get(
            link.historicalPrice(
              selected_crypto.value,
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
          dispatch(setHistoricalPrices(result));
          const new_selected_crypto = selected_crypto;
          const new_baseCurrency = baseCurrency;
          redirect.search();
          dispatch(
            setSearchResults([
              new_selected_crypto.value,
              new_baseCurrency,
              new_selected_crypto.label,
            ])
          );
        })
        .catch((error) => {
          redirect.error();
          dispatch(
            reportError({
              text:
                "Podczas pobierania historycznych danych dla " +
                selected_crypto.label +
                " wystąpił błąd:",
              code: error.message,
            })
          );
        });
    } else {
      dispatch(toggleValidationAlertVisibility(true));
    }
  };
}
