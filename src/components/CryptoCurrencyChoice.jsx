import * as React from 'react';
import {send_selected_crypto} from '../js/actions';
import "react-virtualized-select/styles.css";
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import VirtualizedSelect from 'react-virtualized-select'
import {connect} from'react-redux';

const createOption =(ary)=>{const result = {}; result.value = ary[0];result.label = ary[1]; return result;}

const _CryptoCurrencyChoice = (props)=>{
    
    const {cryptos, selected_crypto, send_selected_crypto} = props;
    const select_options = cryptos.map(createOption);
    
    return(

        (cryptos && cryptos.length)?<VirtualizedSelect 
        value ={selected_crypto}
        closeMenuOnSelect ={false}
        className="selector-item virtualized"
        placeholder = "Wybierz kryptowalutę"
        isClearable = {true}
        isSearchable ={true}
        onChange ={(selectValue)=>{send_selected_crypto(selectValue)}}
        options = {select_options} />:null
    )
}

const mapStateToProps = (state) => ({
    cryptos: state.list_of_all_cryptos,
    selected_crypto: state.selected_crypto,

  });

const  mapDispatchToProps = (dispatch) => ({
    send_selected_crypto: (data) => dispatch(send_selected_crypto(data)),
});

const CryptoCurrencyChoice = connect(mapStateToProps, mapDispatchToProps)(_CryptoCurrencyChoice);
export default CryptoCurrencyChoice;