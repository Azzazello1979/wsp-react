import classes from './App.module.css';
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className={`wrapper ${classes.appWrapper}`}>
      <h2 className={classes.h2}>Hello</h2>
    </div>
  );
}

export default App;
