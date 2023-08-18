

import { BrowserRouter } from 'react-router-dom';
import Header from './page/layout/header';

import Routing from './route/routings';

import {BrowserRouter as Router} from 'react-router-dom'
 function App() {
  return (
    <Router>
    <Header>
      <Routing/>
    </Header>
    </Router>
  );
}

export default App;
