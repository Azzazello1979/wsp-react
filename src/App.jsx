import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './pageComponents/Login/Login';
import UserDash from './pageComponents/UserDash/UserDash';
import AdminDash from './pageComponents/AdminDash/AdminDash';
import About from './pageComponents/About/About';
import NotFound from './pageComponents/NotFound/NotFound';
import MainHeader from './reusableComponents/MainHeader/MainHeader';

import Footer from './reusableComponents/Footer/Footer';
import classes from './App.module.css';

import ContextMenu from './reusableComponents/ContextMenu/ContextMenu';

import { useState, useRef } from 'react';

import { DEV_API_BASE, PROD_API_BASE } from './constants/constants';

import { useDispatch } from 'react-redux';
import { userActions } from './store/usersSlice';
import axios from 'axios';

function App() {

  const dispatch = useDispatch();

  // get all users
  const getUsers = () => {
    axios.get(`${DEV_API_BASE}/users`)
      .then(response => {
        console.log(response);
        dispatch(userActions.setAllUsers(response.data));

      })
      .catch(err => alert(err))
  };

  getUsers();


  // Context Menu ...
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const appWrapperRef = useRef();

  const handleMobileNaviClick = (e) => {
    //e.preventDefault();
    const rect = appWrapperRef.current.getBoundingClientRect();

    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    setX(x);
    setY(y);

    setContextMenuVisible(!contextMenuVisible);
  };

  return (
    <div onContextMenu={handleMobileNaviClick} className={classes['app-wrapper']} ref={appWrapperRef}>

      <ContextMenu visible={contextMenuVisible} x={x} y={y}></ContextMenu>

      <header className={classes['app-header']}><MainHeader></MainHeader></header>
      <main className={classes['app-main']}>
        <Switch>
          <Route exact path="/" >
            <Redirect to="login" />
          </Route>
          <Route path="/login" > {/* <--- handles registration too */}
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
