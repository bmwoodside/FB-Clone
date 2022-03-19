import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import Nav from './views/Nav';
import LoginForm from './components/LoginForm';


function App() {

  return (
    <BrowserRouter>

      {/* <Nav /> */}
      
      <Switch>
        
        <Route exact path="/">
          {/* if user cookie logged in display content, else display register/login */}
          <Main />
        </Route>


        <Route exact path="/test">
          <LoginForm />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;