import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import Page from './Components/Page';
import Details from './Components/Details';
import CreateActivity from './Components/CreateActivity';

function App() {
  return (
    <div className="App">
     
{/* 
        <Route path='/' exact>
          <Page />





        </Route>


        <Route path='/home' exact> */}

          <Home />


{/* 
        </Route>


        <Route path="/home/:id" component={Details} />




        <Route path='/activities' >

          <CreateActivity />
        </Route> */}





   


    </div>
  );
}

export default App;
