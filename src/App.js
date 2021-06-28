import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './pageComponents/Login';
import UserDash from './pageComponents/UserDash';
import AdminDash from './pageComponents/AdminDash';
import About from './pageComponents/About';
import NotFound from './pageComponents/NotFound';
import MainHeader from './reusableComponents/MainHeader';

import Footer from './reusableComponents/Footer';
import classes from './App.module.css';

function App() {

  return (
    <div>
      <header className={classes['app-header']}><MainHeader></MainHeader></header>
      <main className={classes['app-main']}>
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
          <Route path="/about" >
            <About></About>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </main>
      <footer className={classes['app-footer']}><Footer></Footer></footer>
    </div>
  );

}

export default App;
