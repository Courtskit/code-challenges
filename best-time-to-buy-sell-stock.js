//  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// BUY LOW, SELL HIGH .. Maximize the profit.

var maxProfit = function(prices) {

  let buy = 0;
  let sell = 1;  
  let maxP = 0;

  while sell < prices.length() {
    if (prices[buy] < prices[sell]){
      profit = prices[sell] - prices[buy];
      maxP = max(maxP, profit);
    }
    else {
      
    }
  }

};

console.log(maxProfit([7,1,5,3,6,4]) == 5);

console.log(maxProfit([7,6,4,3,1]) == 0);

