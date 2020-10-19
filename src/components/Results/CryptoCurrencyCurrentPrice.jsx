import { connect } from "react-redux";
import styled from "styled-components";
import { PriceTableCell } from "./PriceTableCell";
import * as React from "react";
import PropTypes from 'prop-types';

const CurrentPriceValue = styled.div`
  font-size: 1.25rem;
  color: rgb(216, 53, 80);
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
const CurrentPriceName = styled.div`
  font-size: 10px;
`;

const prepareCryptoCurrencyCurrentPrice = (props) => {
  const { currentPrice } = props;
  return currentPrice ? (
    <PriceTableCell>
      <CurrentPriceValue>{Object.values(currentPrice)[0]}</CurrentPriceValue>
      <CurrentPriceName>{Object.keys(currentPrice)[0]}</CurrentPriceName>
    </PriceTableCell>
  ) : null;
};

const mapStateToProps = (state) => ({
  currentPrice: state.currentPrice,
});

const CryptoCurrencyCurrentPrice = connect(
  mapStateToProps,
  null
)(prepareCryptoCurrencyCurrentPrice);
export default CryptoCurrencyCurrentPrice;

prepareCryptoCurrencyCurrentPrice.propTypes ={
  currentPrice:PropTypes.object,
}
