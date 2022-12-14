import React from 'react';
import { useState, useEffect } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import SearchForm from './SearchForm';
import Chart from './Chart'; 
import API from '../../utils/API';

//Make sure to import in the client folder: npm install react-plotly.js plotly.js

const SearchCurrencyContainer = () => {   
  const [results, setResults] = useState({});
  const [search, setSearch] = useState('');
  const [currency, setCurrency] = useState('');

  const searchCurrency = (query) =>
    API.searchCurrency(query)
      .then((res) => { 
        setResults(res.data);
         setCurrency(query);
         console.log({query})
        })
      .catch((err) => console.log(err));

  useEffect(() => {
    API.searchCurrency('INR');
  }, []);

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchCurrency(search);
  };

return (
  <Container>
    <Row>
      <Col size="md-12">
        <Card heading="Search">
          <SearchForm
            value={search}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </Card>
        <Card heading="Chart">
          <Chart
            results={results}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            currency={currency}
          />
        </Card>
      </Col>
    </Row>
  </Container>
);
};

export default SearchCurrencyContainer;