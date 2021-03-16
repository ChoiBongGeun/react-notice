import React from 'react';
import AppRouter from './Routers/Routers';
import NavBar from "./Components/Navbar";


import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
