import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import { hidePriceHasChangedSnackbar } from '../../redux/reducer&actions';
import { connect } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function MySnackbar(props) {
  const {open, priceHasChanged, handleClose } = props;
    
  return (
    <Snackbar anchorOrigin={{horizontal:'right',vertical:'top'}} open={open} onClose={handleClose} autoHideDuration={1000}>
      {priceHasChanged? <Alert severity="warning">Change</Alert> : <Alert severity="info">NoChange</Alert>}
    </Snackbar>
  );
}

const mapStateToProps = state => ({
  priceHasChanged: state.priceHasChanged,
  open: state.isVisiblePriceChangedSnackbar,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => dispatch(hidePriceHasChangedSnackbar())
});
const PriceChangeSnackbar = connect(mapStateToProps, mapDispatchToProps)(MySnackbar);

export default PriceChangeSnackbar;
