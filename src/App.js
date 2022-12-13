// import CandlestickContainer from './components/CandlestickContainer';

// // import fetch, {
// //   Headers
// // } from "node-fetch";


// export default function App() {
//   var myHeaders = new Headers();

//   myHeaders.append("apikey", "hSFSi8hYrqgxvqE8EnRxKf5INcgMth8w");
  
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
//   };
  
//   fetch("https://api.apilayer.com/exchangerates_data/timeseries?start_date=2022-10-01&end_date=2022-11-01&base=USD&symbols=GBP", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
//   return <CandlestickContainer />;
// }

import CandlestickContainer from './components/CandlestickContainer';

export default function App() {
  // var myHeaders = new Headers();

  // var query = 'GBP';

  // var apiUrl = 'https://api.apilayer.com/exchangerates_data/timeseries?start_date=2022-10-01&end_date=2022-11-01&base=USD&symbols=' + query;

  // myHeaders.append("apikey", "hSFSi8hYrqgxvqE8EnRxKf5INcgMth8w");
  
  // var requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow',
  //   headers: myHeaders
  // };
  
  // fetch(apiUrl, requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
    // .catch(error => console.log('error', error));
  return <CandlestickContainer />;
}

