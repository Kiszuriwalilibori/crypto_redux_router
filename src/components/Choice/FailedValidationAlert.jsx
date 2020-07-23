import * as React from 'react';
import {connect} from'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const StyledAlert = withStyles({
    root: {
      background: '#FADC53',
      color: '#f44336',
      margin: '40px auto',
      fontWeight: 'bold',
      maxWidth: '300px',
      boxShadow: 'inset 0 0 5px #1E1F26, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
    },
},)(Alert);
 
const MyAlert = ({visible, message})=> {
    
  return (visible? <StyledAlert severity="error"><AlertTitle>Uwaga!!!</AlertTitle>{message}</ StyledAlert>:null);
}
  
let mapStateToProps = (state) => ({  
  visible: state.validation_alert_visibility,
  message:'Nie wybrano waluty, kryptowaluty albo obu',
});

const FailedValidationAlert = connect(mapStateToProps, null)(MyAlert);
export default FailedValidationAlert;
  