import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import Page from './Components/Page';
import { useSelector } from 'react-redux';
import Details from './Components/Details';
import CreateActivity from './Components/CreateActivity';
// import Filter from './Components/Filter';



function App() {



  const info = useSelector(state => state.details)

  // const asd = `/home/${info.id}`




  return (
    <div className="App">


      <Switch>

        <Route path='/' exact>
          <Page />





        </Route>


        <Route path='/home' exact>

          <Home />



        </Route>


        <Route path="/home/:id" component={Details} />




        <Route path='/activities' >

          <CreateActivity />
        </Route>


      </Switch>



    </div >
  );
}

export default App;
