import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home';
import Page from './Components/Page';
import NavBar from './Components/NavBar';
import Filter from './Components/Filter';



function App() {
  return (
    <div className="App">
      {/*  <Route path='/' >
        <NavBar />
      </Route> */}

      <Route path='/' exact>
        <Page />

      </Route>
{/* 
      <Route path='/countries' >

        <NavBar />

      </Route>
 */}
      <Route path='/countries' exact>

        <Home />


      </Route>
    </div>
  );
}

export default App;
