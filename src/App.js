import { Route, Switch } from 'react-router-dom';

import Login from './pageComponents/Login';
import UserDash from './pageComponents/UserDash';
import AdminDash from './pageComponents/AdminDash';

function App() {

  return (
    <div>
      <Switch>
        <Route path="/login" >
          <Login></Login>
        </Route>
        <Route path="/dashboard" >
          <UserDash></UserDash>
        </Route>
        <Route path="/admin" >
          <AdminDash></AdminDash>
        </Route>
      </Switch>
    </div>
  );

}

export default App;
