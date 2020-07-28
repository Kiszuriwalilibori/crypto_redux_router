import { connect } from "react-redux";
import styled from "styled-components";
import { PriceTableCell } from "./PriceTableCell";
import * as React from "react";

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
  const { current_price } = props;

  return current_price ? (
    <PriceTableCell>
      <CurrentPriceValue>{Object.values(current_price)[0]}</CurrentPriceValue>
      <CurrentPriceName>{Object.keys(current_price)[0]}</CurrentPriceName>
    </PriceTableCell>
  ) : null;
};

const mapStateToProps = (state) => ({
  current_price: state.first_content,
});

const CryptoCurrencyCurrentPrice = connect(
  mapStateToProps,
  null
)(prepareCryptoCurrencyCurrentPrice);
export default CryptoCurrencyCurrentPrice;
