import { formatResult, getPercentChange } from "./functions";

const CryptoCurrencyData = class {
  constructor(data) {
    this.data = [data];
    this.currentPrice = Object.values(data)[0];
  }

  complement = (newData) => {
    this.data.push(...newData);
  };

  format = (text, referenceCoin) => {
    const x = formatResult(
      this.data,
      text,
      this.currentPrice,
      getPercentChange,
      referenceCoin
    );
    this.data = x;
  };

  get getData() {
    return this.data;
  }
};

export default CryptoCurrencyData;
