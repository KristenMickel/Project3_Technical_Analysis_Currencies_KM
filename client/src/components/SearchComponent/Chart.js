import React, { useMemo } from 'react';
import Plot from 'react-plotly.js';

function generateRandomNumber (startingPoint, variance) {
  return startingPoint + Math.random()*variance;
}

function Chart(props) {

  //Place functions to handle the input data for plotly here.
console.log(props)
//console.log(props.results.rates)

  const resultRates = props.results.rates;
  const currency = props.currency
  console.log(resultRates, currency);
  if (!resultRates || !currency) {
    return null
  }
  //const res_array = [[], []]; // two arrays
  //const dates = useMemo(() => Object.keys(resultRates), [resultRates])
  const dates = [];
  const rates = [];
  for (const [key, value] of Object.entries(resultRates)) {
    console.log(key, value);
    dates.push(key);
    rates.push(value[currency]);
  }
  // const rates = useMemo(() => {
  //   const rates = [];
  //   for (const [key, value] of Object.entries(resultRates)) {
  //     rates.push(value[currency]);
  //   }
  //   return rates;
  // }, [resultRates, currency])
  //console.log(res_array);
  console.log(dates);
  console.log(rates);
  //console.log(currency);

  const high = rates.map(rate => generateRandomNumber(rate, 0.05));
  const low = rates.map(rate => generateRandomNumber(rate, -0.05));
  const open = rates.map((rate, i) => generateRandomNumber(low[i], high[i] - low[i]));
  const close = rates;
  // const high = rates.map(rate => rate + 0.05);
  // const low = rates.map(rate => rate - 0.02);
  // const open = rates.map(rate => rate + 0.03);
  // const close = rates;
  // function func(){
  //   const res_array = [[], []]; // two arrays
  //   for (let i of resultRates) {
  //     res_array[0].push(i);
  //     res_array[1].push(resultRates[i]);
  //   };
  //   console.log(res_array);
  // };
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
      //layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      layout={ { title: 'Candlestick Chart'} }
    />
  );
}

export default Chart;