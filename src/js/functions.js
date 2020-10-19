
// export const Counter = class {
//   constructor(){this.counter = 0;} 
//   increase(){this.counter +=1 };
//   notGreater(x){return (this.counter <=x)};
//   get get(){return this.counter;}; 
//   }

// export const createOption =(ary)=>{const result = {}; result.value = ary[0];result.label = ary[1]; return result;}

// export const extractListOfCryptos = (obj)=>{let data = obj.data.Data; 
//   for(var item in data){if (data.hasOwnProperty(item)){data[item] = (data[item]).CoinName;}}; return toPairs(data);};

// export const addCurrencySymbol = function (price, symbol){const x = (Object.values(price)[0]).toString() +" "+ symbol; Object.values(price)[0] = x;}

// export const EnquiryForNewerPriceResponse = class {

//   constructor (content){
//     this.content = content;
//    }

//   isValid =()=>this.content.hasOwnProperty('data') && Object.getOwnPropertyNames(this.content.data).length === 1;
//   receivedNewerPrice =(oldPrice)=>{return(oldPrice !== Object.values(this.content.data)[0])? true: false};
//   get getNewestPrice () {return Object.values(this.content.data)[0]};

// }