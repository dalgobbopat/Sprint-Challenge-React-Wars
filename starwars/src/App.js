import React from 'react';
import './App.css';
import StarwarsPeople from "./components/starwarsPeople";
import styled from 'styled-components';

const Scroll = styled.div`
  height: 100vh;
  overflow: hidden;
`
const Heading = styled.h1`
  font-size: 90 rem;


`
const App = () => {

  return (
     <Scroll>
      <div className="App">
        <Heading>
          <h1 className="Header">React Wars</h1>
        </Heading>
          <StarwarsPeople />
      </div>
    </Scroll>
  );
}
export default App;