import * as React from 'react';
import {setSelectedCrypto} from '../../js/ACTIONS/actions';
import "react-virtualized-select/styles.css";
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import VirtualizedSelect from 'react-virtualized-select'
import {connect} from'react-redux';

const createOption =(ary)=>{const result = {}; result.value = ary[0];result.label = ary[1]; return result;}

const prepareCryptoCurrencyChoice = (props)=>{
    
    const {cryptos, selected_crypto, setSelectedCrypto} = props;
    const select_options = cryptos.map(createOption);
    
    return(

        (cryptos && cryptos.length)?<VirtualizedSelect 
        value ={selected_crypto}
        closeMenuOnSelect ={false}
        className="selector-item virtualized"
        placeholder = "Wybierz kryptowalutę"
        isClearable = {true}
        isSearchable ={true}
        onChange ={(selectValue)=>{setSelectedCrypto(selectValue)}}
        options = {select_options} />:null
    )
}

const mapStateToProps = (state) => ({
    cryptos: state.list_of_all_cryptos,
    selected_crypto: state.selected_crypto,

  });

const  mapDispatchToProps = (dispatch) => ({
    setSelectedCrypto: (data) => dispatch(setSelectedCrypto(data)),
});

const CryptoCurrencyChoice = connect(mapStateToProps, mapDispatchToProps)(prepareCryptoCurrencyChoice);
export default CryptoCurrencyChoice;