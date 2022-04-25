import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import contextAll from './context/contextAll';
import ResearchPlanet from './components/researchPlanet';
import fetchListPlanet from './api/fetchApi';
import './App.css';
import FilterNumber from './components/FilterNumber';

function App() {
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [listOfPlanets, setListOfPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterByNumber, setFilterByNumber] = useState([]);

  useEffect(() => {
    const getListPlanet = async () => {
      const data = await fetchListPlanet();
      // console.log(data);
      setListOfPlanets(data);
      setFilteredPlanets(data);
    };

    getListPlanet();
  }, []);

  useEffect(() => {
    const filter = () => {
      const newListOfPlanets = listOfPlanets.filter(({ name: searchPlanetName }) => (
        searchPlanetName.toLowerCase().includes(filterByName.name.toLowerCase())));

      setFilteredPlanets(newListOfPlanets);
    };

    filter();
  }, [filterByName, listOfPlanets]);

  useEffect(() => {
    const filterNumbers = () => {
      const handleNumbersFilter = (planetValue, comparison, inputValue) => {
        const options = {
          'maior que': () => Number(planetValue) > Number(inputValue),
          'menor que': () => Number(planetValue) < Number(inputValue),
          'igual a': () => Number(planetValue) === Number(inputValue),
        };
        return options[comparison](planetValue, inputValue);
      };

      const result = filterByNumber.reduce(
        (acc, { column, comparison, value }) => (
          acc.filter((planet) => (
            handleNumbersFilter(planet[column], comparison, value)
          ))
        ), listOfPlanets,
      );

      setFilteredPlanets(result);
    };
    filterNumbers();
  }, [filterByNumber, listOfPlanets]);

  const data = {
    filterByName,
    setFilterByName,
    listOfPlanets,
    setListOfPlanets,
    filteredPlanets,
    setFilteredPlanets,
    filterByNumber,
    setFilterByNumber,
  };

  return (
    <contextAll.Provider value={ data }>
      <div className="body">
        <div className="App-header">
          <p className="fade">A long time ago in a galaxy far, far away…</p>
          <header className="perspective">
            <img
              className="fade-image"
              src="https://d33wubrfki0l68.cloudfront.net/a76aecd7cc6b5dc9ff5a29fa1b4432a6bf292955/ba163/images/star-wars.png"
              alt="star wars logo"
            />
          </header>
        </div>
        <div className="filters-buttons glassEffect">
          <ResearchPlanet />
          {' '}
          <FilterNumber />
        </div>
        <Table />
      </div>
    </contextAll.Provider>

  );
}

export default App;
