import './App.scss';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Onboard from './routes/Onboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/">
            <Onboard/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
