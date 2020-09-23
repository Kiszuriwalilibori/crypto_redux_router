import React from 'react';
import styled from 'styled-components';
import {connect} from'react-redux';
import parasol from '../../graphics/parasol.png';
import PropTypes from 'prop-types';

const GeneralInfoTitle = styled.div`
  
  font-size: 1.25rem;
  white-space: pre-wrap;
  text-align: center;
  color: rgb(216,53,80);
  // @media (max-width: 767px) {
  //     display: block;
  //     position: absolute;
  //     top: -10px;
  // }
  // @media (min-width: 768px) and (max-width:1200px) {
  //     line-height: 1;
  // }
}
`
const GeneralInfoWrapper = styled.div` 
  position: relative;
  height: 75px;
  width: 20%;
  padding-left: 23px;
  display:flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content:center;
  @media (max-width:1000px) {
    width:100%;
    display: flex;
    padding:7px 0 12px 0;
    height:unset;
    flex-direction:row;
    justify-content: space-evenly;
    align-items:center;
}
@media (max-width:400px) {
  width:100%;
  display: flex;
  padding:7px 0 12px 0;
  height:unset;
  flex-direction:column;
  justify-content: space-evenly;
  align-items:center;
}
 
  `

const altcoins_growth = 'Altcoins - hightest growth';


const GeneralInfoAlt = styled.div`
  font-size: 10px;
  display: block;
  
  &::before {
  content: "";
  display: block;
  width: 7px;
  height: 7px;
  border-radius:100%;
  margin: 4px 5px 0 0;
  float: left;
  background-color: #FFBE33}`

  const GeneralInfoFnd =styled.div`
    font-size: 10px;
    display: block;
    &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 0 5px 0 -3px;
    float: left;
    background: url(${parasol});
  }`
  
const prepareCryptoCurrencyGeneralInfo = React.memo((props)=> {
  const {value} = props;
    
  return(
          <GeneralInfoWrapper>
              <GeneralInfoTitle>
                {value} 
              </GeneralInfoTitle> 
              <GeneralInfoFnd>{value +' foundation'}</GeneralInfoFnd>
              <GeneralInfoAlt>{altcoins_growth}</GeneralInfoAlt>
          </GeneralInfoWrapper>
        )
}
)

const mapStateToProps = (state) => ({  
  value: state.currentCryptoName,
});
     
const CryptoCurrencyGeneralInfo = connect(mapStateToProps, null)(prepareCryptoCurrencyGeneralInfo);
export default CryptoCurrencyGeneralInfo;
  
   
prepareCryptoCurrencyGeneralInfo.propTypes = {
  value: PropTypes.string
}
   
  