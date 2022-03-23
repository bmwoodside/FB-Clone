import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import ViewOne from './views/ViewOne';
import { UserContext } from './components/UserContext';
import { useContext, useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {

  const [user, setUser] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  let history = useHistory();


  return (
    <BrowserRouter>
      
      <Switch>

        <UserContext.Provider value={{user, setUser}}>
        
          {/* <Route exact path="/">
            <Main />
          </Route> */}

          <Route exact path="/">
            {
              user
              ? <Main />
              : <LoginForm />
            }
          </Route>

          <Route exact path="/:_id">
            <ViewOne />
          </Route>

        </UserContext.Provider>

      </Switch>

    </BrowserRouter>
  );
}

export default App;