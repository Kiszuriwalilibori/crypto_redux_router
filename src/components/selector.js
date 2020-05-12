// import "react-virtualized-select/styles.css";
// import React, {Component}from 'react';
// import Select from 'react-select-virtualized';
// import styled from 'styled-components';
// //import {createOption} from '../functions';
// import {RadioGroup, Radio} from 'react-radio-group';
// //import {Button} from './styles';

// const createOption =(ary)=>{const result = {}; result.value = ary[0];result.label = ary[1]; return result;}

// const Button = styled.button`
//     display:block;
//     background-color: #759ae9;
//     background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #759ae9), color-stop(50%, #376fe0), color-stop(50%, #1a5ad9), color-stop(100%, #2463de));
//     background-image: -webkit-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
//     background-image: -moz-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
//     background-image: -ms-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
//     background-image: -o-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
//     background-image: linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
//     border-top: 1px solid #1f58cc;
//     border-right: 1px solid #1b4db3;
//     border-bottom: 1px solid #174299;
//     border-left: 1px solid #1b4db3;
//     border-radius: 4px;
//     -webkit-box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);
//     box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);
//     color: #fff;
// //     font: bold 12px/1 "helvetica neue", helvetica, arial, sans-serif;
//     padding: 7px 0;
//     text-shadow: 0 -1px 1px #1a5ad9;
//     margin 2vh auto 1vh auto;
//     height: 40px;
//     width: 150px; }
//     &:hover {
//       background-color: #5d89e8;
//       background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #5d89e8), color-stop(50%, #2261e0), color-stop(50%, #044bd9), color-stop(100%, #0d53de));
//       background-image: -webkit-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
//       background-image: -moz-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
//       background-image: -ms-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
//       background-image: -o-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
//       background-image: linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
//       cursor: pointer; }
//     &:active {
//       border-top: 1px solid #1b4db3;
//       border-right: 1px solid #174299;
//       border-bottom: 1px solid #133780;
//       border-left: 1px solid #174299;
      
//       -webkit-box-shadow: inset 0 0 5px 2px #1a47a0, 0 1px 0 #eeeeee;
//       box-shadow: inset 0 0 5px 2px #1a47a0, 0 1px 0 #eeeeee; }
//     &:focus {outline:none;}
  
// `







// const ErrorMessage = styled.p`
// color: red;
// text-align: center;
// height: 5vh;
// padding: 0.5vh 0;

// animation: blinker 1s linear infinite;
// @keyframes blinker {
//     50% {
//       opacity: 0;
//     }
//   }
// `


// const SelectorWrapper = styled.div`
// z-index: 1000;
// margin: 0 auto;
// animation: slow-appear 1s;
// animation-fill-mode: forwards;
// @keyframes slow-appear {
//   0% {
//       opacity:0
//   }
//   100% {
//       opacity: 1
//   }
// }

// `

// export default class Selector extends Component {

//     constructor(props){      
//         super(props);
//         this.state ={
//             selectedOption: null,
//             selectedCoin: null,
//             selectedValue: null,
//             errorMsgVisible: false,
//         }
//     }
//     isSelected =()=> (this.state.selectedOption && this.state.selectedValue)? true: false;
    
//     handleChangeSelect = selectedOption => {
//         this.setState(
//             { selectedOption } 
//         );
//     };
    
//     handleChangeRadios = value =>{
//         this.setState({selectedValue: value})
//     }
 
//     showErrorMessage = ()=>{
//         this.setState({errorMsgVisible:true});
//         setTimeout(()=>{ this.setState({errorMsgVisible: false}); }, 5000);

// }

//     render() {
//         const {handleSelectionDone, options} = this.props;
//         const {
//             selectedOption,
//             selectedCoin,
//             selectedValue,
//             errorMsgVisible
//         } = this.state;
//         // const options = this.props.options.map(createOption);
//         const getState = ()=>{
           
//             // if(this.isSelected()){
//             //     handleSelectionDone([selectedOption.value, selectedValue, selectedOption.label])
//             //     }
//             // else{this.showErrorMessage()}
//             this.isSelected()? handleSelectionDone([selectedOption.value, selectedValue, selectedOption.label]) : this.showErrorMessage()
//         }

//         return(
//     <SelectorWrapper ID ='Selector'>
     
//     <Button ID = 'Button' onClick ={getState}>Pokaż dane</Button>
//     <ErrorMessage>{errorMsgVisible? 'Nie wybrano opcji':'  ' }</ErrorMessage>   
//     <RadioGroup 
//         className="selector-item selector-item__coin" 
//         name = "coins" 
//         selectedValue={this.state.selectedValue} 
//         onChange={this.handleChangeRadios}>
//             <Radio value="PLN" />PLN
//             <Radio value="USD" />USD
//             <Radio value="EUR" />Euro
//     </RadioGroup>
        
//     <Select 
//         value = {selectedOption}
//         closeMenuOnSelect ={false}
//         className="selector-item"
//         placeholder = "Szukaj..."
//         isClearable = {true}
//         isSearchable ={true}
//         onChange={this.handleChangeSelect}
//         // options = {options}/>
//         options = {options.map(createOption)}/>
    
//     </SelectorWrapper>
//         )   
//       }

// }
    
  
 




// // //import "react-virtualized-select/styles.css";
// // import React, {Component}from 'react';
// // // import Select from 'react-select-virtualized';
// // import SSelect from './select';
// // import styled from 'styled-components';
// // //import {createOption} from '../functions';
// // import {RadioGroup, Radio} from 'react-radio-group';
// // //import {Button} from './styles';

// // const createOption =(ary)=>{const result = {}; result.value = ary[0];result.label = ary[1]; return result;}

// // const Button = styled.button`
// //     display:block;
// //     background-color: #759ae9;
// //     background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #759ae9), color-stop(50%, #376fe0), color-stop(50%, #1a5ad9), color-stop(100%, #2463de));
// //     background-image: -webkit-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
// //     background-image: -moz-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
// //     background-image: -ms-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
// //     background-image: -o-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
// //     background-image: linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);
// //     border-top: 1px solid #1f58cc;
// //     border-right: 1px solid #1b4db3;
// //     border-bottom: 1px solid #174299;
// //     border-left: 1px solid #1b4db3;
// //     border-radius: 4px;
// //     -webkit-box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);
// //     box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);
// //     color: #fff;
// //     font: bold 12px/1 "helvetica neue", helvetica, arial, sans-serif;
// //     padding: 7px 0;
// //     text-shadow: 0 -1px 1px #1a5ad9;
// //     margin 2vh auto 1vh auto;
// //     height: 40px;
// //     width: 150px; }
// //     &:hover {
// //       background-color: #5d89e8;
// //       background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #5d89e8), color-stop(50%, #2261e0), color-stop(50%, #044bd9), color-stop(100%, #0d53de));
// //       background-image: -webkit-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
// //       background-image: -moz-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
// //       background-image: -ms-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
// //       background-image: -o-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
// //       background-image: linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);
// //       cursor: pointer; }
// //     &:active {
// //       border-top: 1px solid #1b4db3;
// //       border-right: 1px solid #174299;
// //       border-bottom: 1px solid #133780;
// //       border-left: 1px solid #174299;
      
// //       -webkit-box-shadow: inset 0 0 5px 2px #1a47a0, 0 1px 0 #eeeeee;
// //       box-shadow: inset 0 0 5px 2px #1a47a0, 0 1px 0 #eeeeee; }
// //     &:focus {outline:none;}
  
// // `







// // const ErrorMessage = styled.p`
// // color: red;
// // text-align: center;
// // height: 5vh;
// // padding: 0.5vh 0;

// // animation: blinker 1s linear infinite;
// // @keyframes blinker {
// //     50% {
// //       opacity: 0;
// //     }
// //   }
// // `


// // const SelectorWrapper = styled.div`
// // z-index: 1000;
// // margin: 0 auto;
// // animation: slow-appear 1s;
// // animation-fill-mode: forwards;
// // @keyframes slow-appear {
// //   0% {
// //       opacity:0
// //   }
// //   100% {
// //       opacity: 1
// //   }
// // }

// // `

// // // export default class Selector extends Component {
// // export const Selector = (props)=> {
// //     // constructor(props){      
// //     //     super(props);
// //     //     this.state ={
// //     //         selectedOption: null,
// //     //         selectedCoin: null,
// //     //         selectedValue: null,
// //     //         errorMsgVisible: false,
// //     //     }
// //     // }

// //     const [selectedOption, setSelectedOption] = React.useState(null);
// //     // const [selectedValue, setSelectedValue] = React.useState(null);
// //     // const [selectedCoin, setSelectedCoin] = React.useState(null);


// //     // isSelected =()=> (this.state.selectedOption && this.state.selectedValue)? true: false;
    
// //     const handleChangeSelect = option => {
// //         setSelectedOption(option);
// //         console.log(`Option selected:`, selectedOption);   
// //     };
    
// //     // handleChangeRadios = value =>{
// //     //     this.setState({selectedValue: value})
// //     // }
 
// // //     showErrorMessage = ()=>{
// // //         this.setState({errorMsgVisible:true});
// // //         setTimeout(()=>{ this.setState({errorMsgVisible: false}); }, 5000);

// // // }

// //     // render() {
// //     //     // const {handleSelectionDone, options} = this.props;
// //     //     const {
// //     //         selectedOption,
// //     //         selectedCoin,
// //     //         selectedValue,
// //     //         errorMsgVisible
// //     //     } = this.state;
// //         // const options = this.props.options.map(createOption);
// //         // const getState = ()=>{
           
// //         //     // if(this.isSelected()){
// //         //     //     handleSelectionDone([selectedOption.value, selectedValue, selectedOption.label])
// //         //     //     }
// //         //     // else{this.showErrorMessage()}
// //         //     this.isSelected()? handleSelectionDone([selectedOption.value, selectedValue, selectedOption.label]) : this.showErrorMessage()
// //         // }

// //         return(
// //     <SelectorWrapper ID ='Selector'>
     
// //     {/* <Button ID = 'Button' onClick ={getState}>Pokaż dane</Button>
// //     <ErrorMessage>{errorMsgVisible? 'Nie wybrano opcji':'  ' }</ErrorMessage>   
// //     <RadioGroup 
// //         className="selector-item selector-item__coin" 
// //         name = "coins" 
// //         selectedValue={this.state.selectedValue} 
// //         onChange={this.handleChangeRadios}>
// //             <Radio value="PLN" />PLN
// //             <Radio value="USD" />USD
// //             <Radio value="EUR" />Euro
// //     </RadioGroup> */}
        
// //     {/* <Select 
// //         value = {selectedOption}
// //         closeMenuOnSelect ={false}
// //         className="selector-item"
// //         placeholder = "Szukaj..."
// //         isClearable = {true}
// //         isSearchable ={true}
// //         onChange={this.handleChangeSelect}
// //         // options = {options}/>
// //         options = {options.map(createOption)}/> */}

// //         <SSelect selectedOption ={selectedOption} handleChangeSelect ={handleChangeSelect}/>
    
// //     </SelectorWrapper>
// //         )   
// //       }


    
  
  





