// Create web server
// Usage: node comments.js
// Note: You need to add your own API key in the code
//       Get it from: https://www.alphavantage.co/support/#api-key

// Import modules
const express = require('express');
const axios = require('axios');

// Create express application
const app = express();

// Define port number
const port = 3000;

// Define API key
const apiKey = 'YOUR_API_KEY';

// Define API base URL
const apiBaseUrl = 'https://www.alphavantage.co/query?';

// Define API query parameters
const apiQueryParams = {
  function: 'TIME_SERIES_DAILY',
  symbol: 'MSFT',
  apikey: apiKey,
};

// Define API URL
const apiUrl = apiBaseUrl + new URLSearchParams(apiQueryParams);

// Define route
app.get('/', function (req, res) {
  // Make API request
  axios
    .get(apiUrl)
    .then(function (response) {
      // Get data from response
      const data = response.data;

      // Get metadata from data
      const metaData = data['Meta Data'];

      // Get time series data from data
      const timeSeriesData = data['Time Series (Daily)'];

      // Get last refresh date
      const lastRefreshDate = metaData['3. Last Refreshed'];

      // Get last refresh data
      const lastRefreshData = timeSeriesData[lastRefreshDate];

      // Get open price from last refresh data
      const openPrice = lastRefreshData['1. open'];

      // Get high price from last refresh data
      const highPrice = lastRefreshData['2. high'];

      // Get low price from last refresh data
      const lowPrice = lastRefreshData['3. low'];

      // Get close price from last refresh data
      const closePrice = lastRefreshData['4. close'];

      // Get volume from last refresh data
      const volume = lastRefreshData['5. volume'];

      // Create response object
      const responseObject = {
        'Last Refresh Date': lastRefreshDate,
        'Open Price': openPrice,
        'High Price': highPrice,
        'Low Price': lowPrice,
        'Close Price': closePrice,
        Volume: volume,
      };

      // Send response
      res.send(responseObject);
    })
    .catch(function (error) {
      // Send error
        