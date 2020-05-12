import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import GeneralInfo from'./generalinfo';
import Invest from './invest';
import { withRouter } from "react-router";
import {connect} from'react-redux';
import {CryptoContainer, Button} from './details';
import CurrentPrice from './currentprice';
import HistoricalPrices from './historicals';
import Grow from '@material-ui/core/Grow';

//import PropTypes from 'prop-types';

const Controls = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  min-height:40vh`;

const PricesContainer= styled.div` 
  
  display:grid;
  width:100%;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  @media (max-width:850px) {grid-template-columns: repeat(4, 1fr);
  & :nth-child(5){border-left:none;}
  }
  @media (max-width:600px) {grid-template-columns: repeat(2, 1fr);
    & :nth-child(odd){border-left:none;}
    }
  
  & :first-child{ @media (max-width:1000px) {border-left:none;}}

  @media(max-width: 400px) {
  width:100%;
  }
  @media (max-width:300px) {grid-template-columns: repeat(1, 1fr);
    & *{border-left:none;}
    }

`

const  _Data = (props)=>  {
   
    const {content,clearLoop} = props;
   
return(
content ?<React.Fragment>
<Controls>
  <Link to='/'style={{ textDecoration: 'none' }} >   
    <Button onClick ={clearLoop} >Powrót do wyboru</Button>
  </Link>
</Controls>
<CryptoContainer>
  <Grow in={true} timeout ={1000}>
    <div className ='DataContainer'>
      <GeneralInfo />
      <PricesContainer>  
        <CurrentPrice />
        <HistoricalPrices />
        <Invest />
      </PricesContainer>
    </div>
  </Grow>
</CryptoContainer>
</React.Fragment>:null    
)}

const mapStateToProps = (state) => ({
    content: state.content,
    cryptoID:state.currentCryptoID,
    clearLoop: state.clear,
  });
  
const DisplayData = withRouter(connect(mapStateToProps, null)(_Data));
export default DisplayData;
