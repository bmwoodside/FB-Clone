import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import ViewOne from './views/ViewOne';

function App() {

  return (
    <BrowserRouter>
      
      <Switch>
        
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/:_id">
          <ViewOne />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;