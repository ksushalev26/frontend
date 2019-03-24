
var Converter = function (baseCurrencyUS) {
    this.baseCurrencyUS = baseCurrencyUS;
    this.roundTwoDecimal = function (amount) {
        return Math.round(amount * 1000) / 100;
    }

    this.convertToUa = function (currency) {
        return this.roundTwoDecimal(currency * this.baseCurrencyUS)
    }

    this.convertToUs = function (currency) {
        return this.roundTwoDecimal(currency / this.baseCurrencyUS)
    }
};

module.exports = Converter;

