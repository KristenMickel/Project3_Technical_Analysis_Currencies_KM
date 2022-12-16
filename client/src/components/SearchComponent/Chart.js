// //import React from "react";
// // import CandlestickContainer from './index'; //This may be the wrong thing to import - need to figure out index.js file.

// // var json_data = {"2013-01-21":1,"2013-01-22":7};
// // var result = [];

// // for(var i in json_data)
// //     result.push([i, json_data [i]]);

// //---------------------------------------------------------------------------------------------------From Plotly Live site

// var data = [
//     {
//       x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
//       y: [1, 3, 6],
//       type: 'scatter'
//     }
//   ];
  
//   Plotly.newPlot('myDiv', data);

// //-----------------------------------------------------------------------------------------------------From Plotly documentation - how to use with React

// import React from 'react';
// import Plot from 'react-plotly.js';

// class App extends React.Component {
//   render() {
//     return (
//       <Plot
//         data={[
//           {
//             x: [1, 2, 3],
//             y: [2, 6, 3],
//             type: 'scatter',
//             mode: 'lines+markers',
//             marker: {color: 'red'},
//           },
//           {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
//         ]}
//         layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
//       />
//     );
//   }
// }

// export default Chart;

// //---------------------------------------------------------------------------Mapping option

// import React from 'react';

// function Chart(props) {

//   return (
//     <ul>
//       {props.results.map((result) => (
//         <li key={result.rates}>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default Chart;



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