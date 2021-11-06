import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home';
import Page from './Components/Page';
import { useSelector } from 'react-redux';
import Info from './Components/Info';
import CreateActivity from './Components/CreateActivity';
// import Filter from './Components/Filter';



function App() {
  return (
    <div className="App">





      <Route path='/' exact>
        <Page />

      </Route>






      <Route path='/home' >

        <Home />


      </Route>

      <Route path='/activities' >

        <CreateActivity />
      </Route>


      {/* <Route path='/home/:id'>

        <Info />

      </Route> */}



    </div>
  );
}

export default App;
