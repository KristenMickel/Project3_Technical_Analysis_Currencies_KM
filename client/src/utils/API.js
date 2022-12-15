import axios from 'axios';

const searchCurrency = async (query) =>
  //axios.get(`https://api.exchangeratesapi.io/v1/latest/?access_key=hSFSi8hYrqgxvqE8EnRxKf5INcgMth8w&base=USD&symbols=GBP`);
  axios.get('https://api.apilayer.com/exchangerates_data/timeseries?start_date=2022-10-01&end_date=2022-11-01&base=USD&symbols=' + query, {headers: {apikey: "hSFSi8hYrqgxvqE8EnRxKf5INcgMth8w"}});

export default { searchCurrency };

//From apilayer:

// var myHeaders = new Headers();
// myHeaders.append("apikey", "hSFSi8hYrqgxvqE8EnRxKf5INcgMth8w");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/exchangerates_data/timeseries?start_date=2022-10-01&end_date=2022-11-01", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



// var myHeaders = new Headers();
// myHeaders.append("apikey", "hSFSi8hYrqgxvqE8EnRxKf5INcgMth8w");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));