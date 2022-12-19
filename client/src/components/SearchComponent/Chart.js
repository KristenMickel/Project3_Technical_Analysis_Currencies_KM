import React, { useMemo } from 'react';
import Plot from 'react-plotly.js';

function generateRandomNumber (startingPoint, variance) {
  return startingPoint + Math.random()*variance;
}

function Chart(props) {
console.log(props)

  const resultRates = props.results.rates;
  const currency = props.currency
  console.log(resultRates, currency);
  if (!resultRates || !currency) {
    return null
  }

  const dates = [];
  const rates = [];
  for (const [key, value] of Object.entries(resultRates)) {
    console.log(key, value);
    dates.push(key);
    rates.push(value[currency]);
  }

  console.log(dates);
  console.log(rates);

  const high = rates.map(rate => generateRandomNumber(rate, 0.05));
  const low = rates.map(rate => generateRandomNumber(rate, -0.05));
  const open = rates.map((rate, i) => generateRandomNumber(low[i], high[i] - low[i]));
  const close = rates;

  return (
    <Plot
      data={[
        {
          x: dates,
          close,
          high,
          low,
          open,
          type: 'candlestick',
          xaxis: 'x', 
          yaxis: 'y'
        },
      ]}

      layout={ { title: 'Candlestick Chart'} }
    />
  );
}

export default Chart;