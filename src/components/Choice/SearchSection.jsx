import React from "react";
import CryptoCurrencyChoice from "./CryptoCurrencyChoice";
import { validateAndGetHistoricalData } from "../../js/FUNCTIONS/validateAndGetHistoricalData";
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
import PropTypes from 'prop-types';

import {
  reportError,
  setCurrentPrice,
  clearSearchResults,
} from "../../js/ACTIONS/actions";

var Loop;
//do rozważenia przenieść mniej więcej wszystk z clearloop do tego co się wykonuje po mount
//////////////////////////////////////////////////////////////////////////////

const UnconnectedSearchSection = (props) => {
  const {
    searchResults,
    clearSearchResults,
    validateAndGetHistoricalData,
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

  function currentPrice() {
    return getCurrentCryptoPrice(searchResults, redirect);
  }
     

  function validateAndStartReadingHistoricalValues() {
    return validateAndGetHistoricalData(redirect, clearLoop);
  }

  useEffect(() => {
    if (searchResults && searchResults.length) {
      redirect.connecting();
      clearLoop();
      currentPrice()
      Loop = setInterval(currentPrice, 5000);
    }
  }, [searchResults]);

  useEffect(() => {
    getListOfAvailableCryptos(redirect);
  }, []);

  return (
    <Container>
      <Button ID="Button" onClick={validateAndStartReadingHistoricalValues}>
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
  validateAndGetHistoricalData: (a, b) => dispatch(validateAndGetHistoricalData(a, b)),
  getListOfAvailableCryptos: (x) => dispatch(getListOfAvailableCryptos(x)),
  getCurrentCryptoPrice: (x, y) => dispatch(getCurrentCryptoPrice(x, y)),
});

const mapStateToProps = (state) => ({
  searchResults: state.search_results,
});

const SearchSection = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UnconnectedSearchSection)
);
export default SearchSection;

UnconnectedSearchSection.propTypes = {
  searchResults:PropTypes.array,
  clearSearchResults:PropTypes.func,
  validateAndGetHistoricalData:PropTypes.func,
  getCurrentCryptoPrice:PropTypes.func,
  getListOfAvailableCryptos:PropTypes.func
}
