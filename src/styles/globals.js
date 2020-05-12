import { createGlobalStyle } from 'styled-components';
import background from '../graphics/background.jpg';
const GlobalStyle = createGlobalStyle`


body {
    overflow-y: scroll;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root{min-height: 100vh; 
    display:flex; 
    align-items: center;
    flex-direction: column;
    background-image: url(${background}); 
    background-size: cover; 
    background-repeat: no-repeat;
    color:white;
    & *{box-sizing: border-box;}
  }
  
  @keyframes fade_in {
    0%   {opacity: 0;}
    70%  {opacity: 0;}
    100% {opacity: 1;}
  }

.selector-item__coin {
    color: #1A86DB;
    width:300px;
    margin-bottom: 8px;
    background-color:white; 
    border-radius: 2px; 
    border: 2px solid #1A86DB;
    display: flex; 
    align-items: center; 
    justify-content: space-around; 
    padding: 7px 2px; }
 
 .selector-item {width: 300px;}
     
 .virtualized {
   background-color: #2C303A;
   animation: fade_in 1s ease-in-out forwards;
   box-shadow: inset 0 0 5px #1E1F26 , 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
   color: white;
   padding: 20px;
   font-size:1rem;
   border: 2px solid #1E1F26;
   border-radius: 2px;
   margin: 2vh 0;
   cursor:pointer;
   &:hover{border: 2px solid #EE760A;} 
 
   & .Select-placeholder{color: white; margin-bottom:15px; font-family: 'Lato', sans-serif; };
   
   & input {
     width: 90%;
     margin: 0 auto;
     display: block;
     border: 1px solid white;
     border-radius:1px;
     background:transparent;
     color: $mycolor;
     font-size: 1rem;
     padding: 0 2px;
     box-shadow: inset 0px 0px 2px 1px rgba(255,255,255,0.54);
   };
   & .Select-menu-outer span:hover{background-color: white;  }
 }
 




 .DataContainer {///aktualny
    margin: 0 auto;
    height: 110px;
    width: 100%;
    max-width:1200px;
    position:relative;
    padding-top: 15px;
    padding-bottom:15px;
    margin-top:5px;
    margin-bottom:5px;
    background-color: transparent;
    background:mintcream;
    border-top: 2px solid  #4B7DE6;
    border-right: 2px solid  #4B7DE6;
    border-bottom: 2px solid  #4B7DE6;
    color:#726B68 ;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: space-between;
    border-radius: 0.25rem;
    align-items: center;
    
  
    @include mobile {
        height: 245px;
        width: 100%;
    }
   
  
  }
  
  .DataContainer::before {
    min-width: 110px;
    content: 'ALTCOINS';
  
    @include mobile {
        min-width: 246px;
    }
    height: 20px;
    background-color: #2692C3;
    background-color:#4B7DE6;
    border-radius: 0.25rem 0.25rem 0 0;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    position:absolute;
    left: -45px;
    @include mobile {
        left: -112.5px;
    }
    color: white;
    font-size: 10px;
    transform: rotate(270deg);
  }
    
  @media (max-width:1000px) {
  .DataContainer{ 
    border:none;
    flex-direction: column;
    height:unset;
    border-radius: 0 0 0.25rem 0.25rem;
  };  
    .DataContainer::before {
      width: inherit;
      left: 0;
      top: -20px;
      transform:none;
    }
  }
  






















`

export default GlobalStyle;