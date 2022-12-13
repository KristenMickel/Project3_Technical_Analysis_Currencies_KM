import React from 'react';
import { useState, useEffect } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import SearchForm from './SearchForm';
import Chart from './Chart';
import API from '../utils/API';

const CandlestickContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');

  const searchCurrency = (query) =>
    API.searchCurrency(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));

  useEffect(() => {
    searchCurrency('');
  }, []);

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchCurrency(search);
  };

  const {
    Title = '',
  } = result;

  return (
    <Container>
      <Row>
        <Chart size="md-8">
        </Chart>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CandlestickContainer;