import React from "react";
import CryptoCurrencyChoice from "./CryptoCurrencyChoice";
import {getCurrentCryptoPrice, getListOfAvailableCryptos, validateAndGetHistoricalData} from "../../redux/reducer&actions";
import { Container, Button } from "../details";
import FailedValidationAlert from "./FailedValidationAlert";
import { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { BaseCurrencyChoice } from "./BaseCurrencyChoice";
import { useHistory } from "react-router-dom";
import LoadedCoinsMessage from "../LoadedCoinsMessage";
import useDebounce from '../../js/useDebounce';
import PropTypes from 'prop-types';

import {
 
  clearSearchResults, clearSelections,
} from "../../redux/reducer&actions";

var Loop;

//////////////////////////////////////////////////////////////////////////////

const UnconnectedSearchSection = (props) => {
  const {
    searchResults,
    clearSearchResults,
    clearSelections,
    validateAndGetHistoricals,
    getCurrentCryptoPrice,
    getListOfAvailableCryptos,
  } = props;

  const clearLoop = () => {

    clearSearchResults();
    clearSelections();
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
    return getCurrentCryptoPrice(searchResults, redirect, clearLoop);
  }
  
  const debouncedValidate = useDebounce((()=>validateAndGetHistoricals(redirect, clearLoop)),500);

  useEffect(() => {
    if (searchResults && searchResults.length) {
      redirect.connecting();
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
  
  clearSearchResults: () => dispatch(clearSearchResults()),
  clearSelections: () => dispatch(clearSelections()),
  validateAndGetHistoricals: (a, b) => dispatch(validateAndGetHistoricalData(a, b)),
  getListOfAvailableCryptos: (x) => dispatch(getListOfAvailableCryptos(x)),
  getCurrentCryptoPrice: (x, y,z ) => dispatch(getCurrentCryptoPrice(x, y,z)),
});

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
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
