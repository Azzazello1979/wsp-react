import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './pageComponents/Login';
import UserDash from './pageComponents/UserDash';
import AdminDash from './pageComponents/AdminDash';
import About from './pageComponents/About';
import NotFound from './pageComponents/NotFound';
import MainHeader from './reusableComponents/MainHeader';

import Footer from './reusableComponents/Footer';
import classes from './App.module.css';

import ContextMenu from './reusableComponents/ContextMenu';

import { useState, useRef } from 'react';

function App() {

  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mainDiv = useRef();

  const handleMobileNaviClick = e => {
    e.preventDefault();
    const rect = mainDiv.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setX(x);
    setY(y);

    setContextMenuVisible(!contextMenuVisible);
  };

  return (
    <div onContextMenu={handleMobileNaviClick} className={classes['app-wrapper']} ref={mainDiv}>

      <ContextMenu visible={contextMenuVisible} x={x} y={y}></ContextMenu>

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
