import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CryptoCurrencyGeneralInfo from "./CryptoCurrencyGeneralInfo";
import InvestButton from "./InvestButton";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { CryptoCurrencyContainer, Button } from "../details";
import CryptoCurrencyCurrentPrice from "./CryptoCurrencyCurrentPrice";
import CryptoCurrencyHistoricalPrices from "./CryptoCurrencyHistoricalPrices";
import Grow from "@material-ui/core/Grow";

//import PropTypes from 'prop-types';

const Controls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 40vh;
`;

const CryptoCurrencyPricesContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
    & :nth-child(5) {
      border-left: none;
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    & :nth-child(odd) {
      border-left: none;
    }
  }

  & :first-child {
    @media (max-width: 1000px) {
      border-left: none;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
    & * {
      border-left: none;
    }
  }
`;

const prepareResults = (props) => {
  const { content, clearLoop } = props;

  return content ? (
    <React.Fragment>
      <Controls>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button onClick={clearLoop}>Powrót do wyboru</Button>
        </Link>
      </Controls>
      <CryptoCurrencyContainer>
        <Grow in={true} timeout={1000}>
          <div className="DataContainer">
            <CryptoCurrencyGeneralInfo />
            <CryptoCurrencyPricesContainer>
              <CryptoCurrencyCurrentPrice />
              <CryptoCurrencyHistoricalPrices />
              <InvestButton />
            </CryptoCurrencyPricesContainer>
          </div>
        </Grow>
      </CryptoCurrencyContainer>
    </React.Fragment>
  ) : null;
};

const mapStateToProps = (state) => ({
  content: state.content,
  cryptoID: state.currentCryptoID,
  clearLoop: state.clear,
});

const Results = withRouter(connect(mapStateToProps, null)(prepareResults));
export default Results;
