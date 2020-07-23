import {connect} from'react-redux';
import {PriceTableCell} from './PriceTableCell';
import * as React from 'react';
import styled from 'styled-components';

const HistoricalValue = styled.div`
    font-size: 20px;
    padding: 0 3px;`
const HistoricalName = styled.div`
    font-size: 10px;`

const _CryptoCurrencyHistoricalPrices =(props)=>{

const {historicals} = props;

return(

historicals.map((element,index)=>
    <PriceTableCell key ={index}>
        <HistoricalValue key ={index} >{Object.values(element)[0]}</HistoricalValue>
        <HistoricalName key ={index+ 'x'}>{Object.keys(element)[0]}</HistoricalName>
    </PriceTableCell>
  )
)

}

const mapStateToProps = (state) => ({
    historicals:state.content,
});

const 

CryptoCurrencyHistoricalPrices = connect(mapStateToProps, null)(_CryptoCurrencyHistoricalPrices);
export default CryptoCurrencyHistoricalPrices;
  
  