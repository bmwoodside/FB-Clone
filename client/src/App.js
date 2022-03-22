import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import LoginForm from './components/LoginForm';


function App() {

  return (
    <BrowserRouter>
      
      <Switch>
        
        <Route exact path="/">
          <Main />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;