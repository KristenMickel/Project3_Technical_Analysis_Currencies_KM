import axios from 'axios';

const searchCurrency = async (query) =>

  axios.get('https://api.apilayer.com/exchangerates_data/timeseries?start_date=2022-10-01&end_date=2022-11-01&base=USD&symbols=' + query, {headers: {apikey: "hSFSi8hYrqgxvqE8EnRxKf5INcgMth8w"}});

export default { searchCurrency };
