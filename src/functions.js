import subMonths from 'date-fns/subMonths';
import getUnixTime from 'date-fns/getUnixTime';
import endOfYesterday from 'date-fns/endOfYesterday';
import startOfYear from 'date-fns/startOfYear';
var toPairs = require('lodash/toPairs');

//źle - pokazuje jedenastą sylwestra


export const timestamps ={
content:[
  ['1D',()=> getUnixTime(endOfYesterday())],
  ['1M',()=> getUnixTime(subMonths(new Date(), 1))],
  ['5M',()=> getUnixTime(subMonths(new Date(), 3))],
  ['12M',()=> getUnixTime(subMonths(new Date(), 12))],
  ['30M',()=> getUnixTime(subMonths(new Date(), 30))],
  ['YTD',()=> getUnixTime(startOfYear(new Date()))],
],
reducedLength: function(){return this.content.length -1;},
getValue: function(i){return (this.content[i][1])();},
getKey: function(i){return this.content[i][0]},
}

export function getPercentChange (current, historical){

if (arguments[0] && arguments[1] && (typeof arguments[1] === 'number') && (typeof arguments[0] === 'number')){
let result;

let change = 100*(current-historical)/historical;
const change_string = change.toLocaleString('pl-PL',{ 
    useGrouping:'true', 
    minimumFractionDigits:"2", 
    maximumFractionDigits:'2',

  });
 
  if (change === 0) result = 'no change';
  else if (change > 0) result = `+${change_string}%`;
  else if (change < 0) result = `${change_string}%`;
return result;
}
else return 'n/a';
}

export const link ={

extractCoinList: (obj)=>{let data = obj.data.Data; 
for(var item in data){if (data.hasOwnProperty(item)){data[item] = (data[item]).CoinName;}}; return toPairs(data);},
currentPrice:(coin, reference)=>"https://min-api.cryptocompare.com/data/price?fsym="+coin+"&tsyms="+reference,
header: { Apikey: 'feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e' },
historicalPrice:(coin,reference,timestamp)=>'https://min-api.cryptocompare.com/data/dayAvg?fsym='+coin+'&tsym='+reference+'&toTs='+timestamp+'&avgType=MidHighLow&tryConversion=true&extraParams=your_app_name',
currentPriceText: 'Aktualna Cena',
}

export function formatResult(output, testValue, current, callback, referenceCoin) {

  const result = output.map(element => {
    if (Object.keys(element)[0] !== testValue) {
      const key = Object.keys(element)[0];
      let value = Object.values(element)[0];
      element = createObject(key, callback(current, value));

      return element;
    } else {
      
      const value = current.toString()+ ' '+ referenceCoin;
      element =createObject(testValue, value);
      return element;
    }
  });
  
  return result;
}

export const Counter = class {
  constructor(){this.counter = 0;} 
  increase(){this.counter +=1 };
  notGreater(x){return (this.counter <=x)};
  get get(){return this.counter;}; 
  }

export function createObject  (key, value){
  const pair ={};
  pair[key] = value;
  return pair;
}

export const linkToListOfAllCryptos = 'https://min-api.cryptocompare.com/data/all/coinlist';


export const createOption =(ary)=>{const result = {}; result.value = ary[0];result.label = ary[1]; return result;}

export const extractListOfCryptos = (obj)=>{let data = obj.data.Data; 
  for(var item in data){if (data.hasOwnProperty(item)){data[item] = (data[item]).CoinName;}}; return toPairs(data);};

export const addCurrencySymbol = function (price, symbol){const x = (Object.values(price)[0]).toString() +" "+ symbol; Object.values(price)[0] = x;}



export const CryptoData = class {

  constructor (data){
  this.data = [data];
  this.currentPrice = Object.values(data)[0];
  }

  
  complement = (newData)=>{
    this.data.push(...newData);
  }

  format =(text, referenceCoin)=>{ 
    const x = formatResult(
      this.data, 
      text, 
      this.currentPrice, 
      getPercentChange, 
      referenceCoin);
    this.data = x;

    
    }

    get getData (){return this.data};

}

export const EnquiryForNewerPriceResponse = class {

  constructor (content){
    this.content = content;
   }

  isValid =()=>this.content.hasOwnProperty('data') && Object.getOwnPropertyNames(this.content.data).length === 1;
  receivedNewerPrice =(oldPrice)=>{return(oldPrice !== Object.values(this.content.data)[0])? true: false};
  get getNewestPrice () {return Object.values(this.content.data)[0]};

}