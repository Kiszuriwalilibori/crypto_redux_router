import * as React from 'react';
//import {sendSelectedCrypto} from '../../js/ACTIONS/actions';
import {sendSelectedCrypto} from '../../redux/reducer&actions';
import "react-virtualized-select/styles.css";
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import VirtualizedSelect from 'react-virtualized-select'
import {connect} from'react-redux';
import PropTypes from 'prop-types';

const createOption =(ary)=>{const result = {}; result.value = ary[0];result.label = ary[1]; return result;}

const prepareCryptoCurrencyChoice = (props)=>{
    
    const {cryptos, selectedCrypto, sendSelectedCrypto} = props;
    const selectOptions = cryptos.map(createOption);
    
    return(

        (cryptos && cryptos.length)?<VirtualizedSelect 
        
        value ={selectedCrypto}
        closeMenuOnSelect ={false}
        className="selector-item virtualized"
        placeholder = "Wybierz kryptowalutę"
        isClearable = {true}
        isSearchable ={true}
        onChange ={(selectValue)=>{sendSelectedCrypto(selectValue)}}
        options = {selectOptions} />:null
    )
}

const mapStateToProps = (state) => ({
    cryptos: state.listOfAllCryptos,
    selectedCrypto: state.selectedCrypto,

  });

const  mapDispatchToProps = (dispatch) => ({
    sendSelectedCrypto: (data) => dispatch(sendSelectedCrypto(data)),
});

const CryptoCurrencyChoice = connect(mapStateToProps, mapDispatchToProps)(prepareCryptoCurrencyChoice);
export default CryptoCurrencyChoice;


prepareCryptoCurrencyChoice.propTypes ={
    cryptos:PropTypes.array,
    selectedCrypto:PropTypes.object,
    sendSelectedCrypto:PropTypes.func
}