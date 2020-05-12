import {connect} from'react-redux';
import styled from 'styled-components';
import {Cell} from './cell';
import * as React from 'react';

const CurrentPriceValue =styled.div`
  font-size: 1.25rem;
  color:rgb(216, 53, 80);
  @media (max-width: 400px) {
    font-size: 1rem;}
`;
const CurrentPriceName =styled.div`
  font-size: 10px;`;


const _CurrentPrice =(props)=>{
    const {current_price} =props;

    return(
    current_price?<Cell>
                    <CurrentPriceValue>{Object.values(current_price)[0]}</CurrentPriceValue>
                    <CurrentPriceName>{Object.keys(current_price)[0]}</CurrentPriceName>
                  </Cell>:null
    )
}

const mapStateToProps = (state) => ({
    current_price:state.first_content,
  });

const CurrentPrice = connect(mapStateToProps, null)(_CurrentPrice);
export default CurrentPrice;
  
  

