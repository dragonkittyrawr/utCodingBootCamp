// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

var curLowIndex = 0;

var curHighIndex = 0;

var lowIndex = 0;

var highIndex = 0;


// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought) {

    for (var i = 0; i < stockPrices.length; i++) {

        if (stockArray[curHighIndex] < stockArray[i]) {
            curHighIndex = i;
        }

        if (stockArray[curLowIndex] > stockArray[i]) {
            curLowIndex = i;
            curHighIndex = stockArray.length - 1;
        }

        if (stockArray[curHighIndex] - stockArray[curLowIndex] > stockArray[highIndex] - stockArray[lowIndex]) {
            lowIndex = curLowIndex;
            highIndex = curHighIndex;
        }
	}


    console.log(lowIndex + " : " + highIndex);

    max = stockArray[highIndex] - stockArray[lowIndex];

    result = max * sharesBought;

    console.log("Max: " + max + "\nResult: " + result);

};

// A Call to your Biggest Profit function.
biggestProfit(stockPrices, 10000);

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.
