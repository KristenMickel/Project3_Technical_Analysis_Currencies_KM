// //import React from "react";
// // import CandlestickContainer from './index'; //This may be the wrong thing to import - need to figure out index.js file.

// // var json_data = {"2013-01-21":1,"2013-01-22":7};
// // var result = [];

// // for(var i in json_data)
// //     result.push([i, json_data [i]]);

// // //---------------------------------------------------------------------------------------------------

// // var data = [
// //     {
// //       x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
// //       y: [1, 3, 6],
// //       type: 'scatter'
// //     }
// //   ];
  
// //   Plotly.newPlot('myDiv', data);

// //-----------------------------------------------------------------------------------------------------
// //From Plotly - how to use with React


// import React from 'react';
// // import Plot from 'react-plotly.js';

// // class App extends React.Component {
// //   render() {
// //     return (
// //       <Plot
// //         data={[
// //           {
// //             x: [1, 2, 3],
// //             y: [2, 6, 3],
// //             type: 'scatter',
// //             mode: 'lines+markers',
// //             marker: {color: 'red'},
// //           },
// //           {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
// //         ]}
// //         layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
// //       />
// //     );
// //   }
// // }

// export default Chart;


import React from 'react';
//Previously, we were using JS ES5 whereas we are using JS ES6 now - hence no module.export or require needed here.

//This is a functional component. In your function, you must return something and that something must be JSX. Can only return one single element (which can have multiple things inside of it). But, for instance, you cannot return two <div>s. But you can return a div inside of a div. You can only return a single element.
//Can do export function Welcome1() and then export faunction Welcome2() instead of this export default function Welcom()...(?) Not sure this is what Firmin meant. Alternative at 44:26.
//Can only have one default.

export default function Chart() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  //You are giving it a class. However, typically, you would do "<div class="">". But, here, you have to give it "className". Class is already a word in JS that has meaning, so you have to use className.
  //Don't need <div>, could just do <> </>

  return (
    <div className="container">
      <h1>Hello students!</h1>
      <p>Today we will be learning about the following:</p>
      <ul className="parent">
        <li>React</li>
        <li>Components</li>
        <li>Props</li>
        <li>Babel</li>
      </ul>
    </div>
  );
}