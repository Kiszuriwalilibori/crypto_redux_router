import * as React from "react";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

import styled from "styled-components";

export const Container = withStyles({
  root: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    alignItems: "center",
    background: "transparent",
    paddingTop: "10vh",
  },
})(Box);

export const ContainerVerticallyCentered = withStyles({
  root: {
    justifyContent: "center",
  },
})(Container);

export const CryptoCurrencyContainer = withStyles({
  root: {
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
})(Box);

const ColorCircularProgress = withStyles({
  root: {
    color: "rgba(122, 194, 33, 0.8);",
  },
})(CircularProgress);

const _Spinner = React.memo(() => {
  return (
    <ContainerVerticallyCentered>
      <ColorCircularProgress thickness={5} size={100} />
    </ContainerVerticallyCentered>
  );
});

export const Spinner = withRouter(_Spinner);

export const Button = styled.button`
    display:block;
    animation: fade_in 1s ease-in-out forwards;
    background-color: #759ae9;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #759ae9), color-stop(50%, #376fe0), color-stop(50%, #1a5ad9), color-stop(100%, #2463de));
    background-image: -webkit-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
    background-image: -moz-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
    background-image: -ms-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
    background-image: -o-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
    background-image: linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
    border-top: 1px solid #1f58cc;
    border-right: 1px solid #1b4db3;
    border-bottom: 1px solid #174299;
    border-left: 1px solid #1b4db3;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);
    box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);
    color: #fff;
//     font: bold 12px/1 "helvetica neue", helvetica, arial, sans-serif;
    padding: 7px 0;
    text-shadow: 0 -1px 1px #1a5ad9;
    margin 2vh auto 1vh auto;
    height: 40px;
    font-size:1rem;
    width: 150px; }
    &:hover,&:focus {
      background-color: #5d89e8;
      background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #5d89e8), color-stop(50%, #2261e0), color-stop(50%, #044bd9), color-stop(100%, #0d53de));
      background-image: -webkit-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
      background-image: -moz-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
      background-image: -ms-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
      background-image: -o-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
      background-image: linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
      cursor: pointer; }
    &:active {
      border-top: 1px solid #1b4db3;
      border-right: 1px solid #174299;
      border-bottom: 1px solid #133780;
      border-left: 1px solid #174299;
      
      -webkit-box-shadow: inset 0 0 5px 2px #1a47a0, 0 1px 0 #eeeeee;
      box-shadow: inset 0 0 5px 2px #1a47a0, 0 1px 0 #eeeeee; }
    &:focus {outline:none;}
  
`;







const MyTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: '#F5C200',
      border: '1px solid #EE760A',
      boxShadow: 'inset 0 0 5px #EE760A',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: 11, 
    },
  }))(Tooltip);

export default MyTooltip;