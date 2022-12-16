import React from 'react';

function Chart(props) {

  //Place functions to handle the input data for plotly here.
console.log(props)
//console.log(props.results.rates)

  const resultRates = props.results.rates;
  const currency = props.currency

  if (!resultRates) {
    return null
  }
  const res_array = [[], []]; // two arrays
  for (const [key, value] of Object.entries(resultRates)) {
    console.log(`${key}: ${value}`);
    res_array[0].push(key);
    res_array[1].push(value[currency]);
  }
  console.log(res_array);


  function func(){
    const res_array = [[], []]; // two arrays
    for (let i of resultRates) {
      res_array[0].push(i);
      res_array[1].push(resultRates[i]);
    };
    console.log(res_array);
  };
  return (
    <form>
      <div id='myDiv'></div>
    </form>
  );
}

export default Chart;