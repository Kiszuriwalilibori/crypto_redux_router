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
import useDebounce from '../../js/FUNCTIONS/useDebounce';
import PropTypes from 'prop-types';

import {
 
  clear_search_results,
} from "../../js/ACTIONS/actions";

var Loop;

//////////////////////////////////////////////////////////////////////////////

const UnconnectedSearchSection = (props) => {
  const {
    searchResults,
    clearSearchResults,
    validateAndGetHistoricals,
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

  function returnGetCurrentPrice() {
    return getCurrentCryptoPrice(searchResults, redirect);
  }
  
const debouncedValidate = useDebounce((()=>validateAndGetHistoricals(redirect, clearLoop)),500);


  useEffect(() => {
    if (searchResults && searchResults.length) {
      redirect.connecting();
      console.log(Loop);
      clearLoop();
      returnGetCurrentPrice();
      Loop = setInterval(returnGetCurrentPrice, 5000);
    }
  }, [searchResults]);

  useEffect(() => {
    getListOfAvailableCryptos(redirect);
  }, []);

  return (
    <Container>
      <Button ID="Button" onClick={debouncedValidate}>
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
  
  clearSearchResults: () => dispatch(clear_search_results()),
  validateAndGetHistoricals: (a, b) =>
    dispatch(validate_and_get_historical_data(a, b)),
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
