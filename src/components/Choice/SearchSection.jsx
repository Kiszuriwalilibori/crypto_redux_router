import React from "react";
import CryptoCurrencyChoice from "./CryptoCurrencyChoice";
import { validate_and_get_historical_data } from "../../js/FUNCTIONS/validateAndGetHistoricalData";
import getListOfAvailableCryptos from "../../js/FUNCTIONS/getListOfAvailableCryptos";
import getCurrentCryptoPrice from "../../js/FUNCTIONS/getCurrentCryptoPrice";
import { Container, Button } from "../details";
import FailedValidationAlert from "./FailedValidationAlert";
import { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { BaseCurrencyChoice } from "./BaseCurrencyChoice";
import { useHistory } from "react-router-dom";
import LoadedCoinsMessage from "../LoadedCoinsMessage";

import {
  reportError,
  setCurrentPrice,
  clearSearchResults,
} from "../../js/ACTIONS/actions";

var Loop;
//do rozważenia przenieść mniej więcej wszystk z clearloop do tego co się wykonuje po mount
//////////////////////////////////////////////////////////////////////////////

const _SearchSection = (props) => {
  const {
    search_results,
    clearSearchResults,
    validate_and_get_historical_data,
    getCurrentCryptoPrice,
    getListOfAvailableCryptos,
  } = props;

  const clearLoop = () => {
    clearSearchResults();
    clearInterval(Loop);
  };

  const history = useHistory();

  const redirect = React.useMemo(
    () => ({
      not_found: () => {
        history.push("/not_found");
      },
      error: () => {
        history.push("/error");
      },
      data: () => {
        history.push("/results");
      },
      connecting: () => {
        history.push("/connecting");
      },
      search: () => {
        history.push("/");
      },
    }),
    []
  );

  function return_get_current_price() {
    return getCurrentCryptoPrice(search_results, redirect);
  }
  function proceed_validate() {
    return validate_and_get_historical_data(redirect, clearLoop);
  }

  useEffect(() => {
    if (search_results && search_results.length) {
      redirect.connecting();
      clearLoop();
      return_get_current_price();
      Loop = setInterval(return_get_current_price, 5000);
    }
  }, [search_results]);

  useEffect(() => {
    getListOfAvailableCryptos(redirect);
  }, []);

  return (
    <Container>
      <Button ID="Button" onClick={proceed_validate}>
        Pokaż dane
      </Button>
      <BaseCurrencyChoice />
      <CryptoCurrencyChoice />
      <FailedValidationAlert />
      <LoadedCoinsMessage />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  reportError: (data) => dispatch(reportError(data)),
  setCurrentPrice: (data) => dispatch(setCurrentPrice(data)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  validate_and_get_historical_data: (a, b) =>
    dispatch(validate_and_get_historical_data(a, b)),
  getListOfAvailableCryptos: (x) => dispatch(getListOfAvailableCryptos(x)),
  getCurrentCryptoPrice: (x, y) => dispatch(getCurrentCryptoPrice(x, y)),
});

const mapStateToProps = (state) => ({
  search_results: state.search_results,
});

const SearchSection = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(_SearchSection)
);
export default SearchSection;
