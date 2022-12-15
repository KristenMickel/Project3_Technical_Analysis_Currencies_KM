import React from "react";
import CandlestickContainer from './index'; //This may be the wrong thing to import - need to figure out index.js file.

var json_data = {"2013-01-21":1,"2013-01-22":7};
var result = [];

for(var i in json_data)
    result.push([i, json_data [i]]);

//---------------------------------------------------------------------------------------------------

var data = [
    {
      x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
      y: [1, 3, 6],
      type: 'scatter'
    }
  ];
  
  Plotly.newPlot('myDiv', data);

//-----------------------------------------------------------------------------------------------------
//From Plotly - how to use with React


import React from 'react';
import Plot from 'react-plotly.js';

class App extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
    );
  }
}