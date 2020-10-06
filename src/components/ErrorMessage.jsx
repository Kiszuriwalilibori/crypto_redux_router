import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grow from "@material-ui/core/Grow";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const MyDialog = withStyles({
  root: {
    "& .MuiPaper-root": {
      padding: "50px",
      border: "4px solid #A51D20",
      borderRadius: "4px",
      color: "#A51D20",
      textAlign: "center",
      boxShadow:
        "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
    },
    "& span": { padding: "10px 0" },
    "& #simple-dialog-title": { textAlign: "center" },
  },
})(Dialog);

const prepareErrorMessage = (props) =>{
const {error} = props;

 return error ? (
    <Link to="/" style={{ textDecoration: "none" }}>
      <MyDialog open={true}>
        <DialogTitle id="simple-dialog-title">UWAGA !!!</DialogTitle>
        <Grow in={true} timeout={1000}>
          <span>{error.text}</span>
        </Grow>
        <br />
        <Grow in={true} timeout={1000}>
          <span>{error.code}</span>
        </Grow>
      </MyDialog>
    </Link>
  ) : <div>Error component called with falsey argument</div>;
  }
const mapStateToProps = (state) => ({
  error: state.error,
});

 const ErrorMessage = withRouter(
  connect(mapStateToProps, null)(prepareErrorMessage)
);
export default ErrorMessage;

prepareErrorMessage.propTypes ={
  error: PropTypes.object
}
