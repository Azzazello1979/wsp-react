import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './pageComponents/Login';
import UserDash from './pageComponents/UserDash';
import AdminDash from './pageComponents/AdminDash';
import NotFound from './pageComponents/NotFound';
import MainHeader from './reusableComponents/MainHeader';

import Footer from './reusableComponents/Footer';

function App() {

  return (
    <div>
      <header><MainHeader></MainHeader></header>
      <main>
        <Switch>
          <Route exact path="/" >
            <Redirect to="login" />
          </Route>
          <Route path="/login" >
            <Login></Login>
          </Route>
          <Route path="/dashboard" >
            <UserDash></UserDash>
          </Route>
          <Route path="/admin" >
            <AdminDash></AdminDash>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </main>
      <footer><Footer></Footer></footer>
    </div>
  );

}

export default App;
