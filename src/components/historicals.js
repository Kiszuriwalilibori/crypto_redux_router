import {connect} from'react-redux';
import {Cell} from './cell';
import * as React from 'react';
import styled from 'styled-components';

const HistoricalValue = styled.div`
    font-size: 20px;
    padding: 0 3px;`
const HistoricalName = styled.div`
    font-size: 10px;`

const _HistoricalPrices =(props)=>{

const {historicals} = props;

return(

historicals.map((element,index)=>
    <Cell key ={index}>
        <HistoricalValue key ={index} >{Object.values(element)[0]}</HistoricalValue>
        <HistoricalName key ={index+ 'x'}>{Object.keys(element)[0]}</HistoricalName>
    </Cell>
  )
)

}

const mapStateToProps = (state) => ({
    historicals:state.content,
});

const HistoricalPrices = connect(mapStateToProps, null)(_HistoricalPrices);
export default HistoricalPrices;
  
  
