import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Main from './views/Main';
import ViewOneUser from './views/ViewOneUser';
import { UserContext } from './components/UserContext';
import { useContext, useEffect, useState } from 'react';
import LoginForm from './components/LoginForms/LoginForm';

function App() {

  const [user, setUser] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  useEffect(() => {
    // console.log("use effect ran in App.js")
    axios.get("http://localhost:8000/api/users/getLoggedInUser", {withCredentials: true})
      .then(res => {
          if (res.data.results) {
            // console.log(res.data.results);
            setUser(res.data.results);
          }
      })
      .catch(err => console.log("Error checking userToken in App.js", err))
  }, [])

  


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

          {/* <Route exact path="/:_id">
            <ViewOne />
          </Route> */}

          <Route exact path ="/:_id">
            {
              user
              ? <ViewOneUser />
              : <LoginForm />
            }
          </Route>

        </UserContext.Provider>

      </Switch>

    </BrowserRouter>
  );
}

export default App;