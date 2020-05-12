import *as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert} from '@material-ui/lab';
import { withStyles} from '@material-ui/core/styles';
import {connect} from'react-redux';
import {hide_loaded_coins_msg} from '../actions';


const MyAlert = withStyles({
  root: {
    background: 'rgba(122, 194, 33, 0.8);',
    background: '#688B69;',
    color: '#F5F2AA',
    fontSize: '1.25rem',
    border: '1px solid 4d684d',
    boxShadow: 'inset 0 0 5px #298B01',
    boxShadow: 'inset 0 0 5px #4d684d, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
  },
})(Alert);



export const _LoadedCoinsMessage =(props) =>{

    const {open, close, count} = props;
    
return(
<Snackbar open={open} autoHideDuration={6000} onClose={close} >
        <MyAlert  severity="success" variant="filled" >
          Poprawnie pobrano tablicę z dostępnymi kryptowalutami.<br />
          Łącznie znaleziono dane dla {count} kryptowalut.<br />
        </MyAlert>
</Snackbar>)}



const  mapDispatchToProps = (dispatch) => ({
   
    close:()=> dispatch(hide_loaded_coins_msg()),
    
  });
  

const mapStateToProps = (state) => ({
    open: state.list_of_all_cryptos_is_loaded,
    count:[...state.list_of_all_cryptos].length,

  });

const LoadedCoinsMessage = (connect(mapStateToProps, mapDispatchToProps)(_LoadedCoinsMessage)); 

export default LoadedCoinsMessage;
