import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './Layout/MainLayout';

import Followers from './views/Followers/Followers';
import Home from './views/Home/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch> 
      <MainLayout>
      <Route path ="/" exact>
        <Home/>
      </Route>
      <Route path ="/followers/:data" exact>
        <Followers/>
      </Route>
      </MainLayout>
    </Switch> 
    <Switch>
    <Route path ="*">
      </Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
