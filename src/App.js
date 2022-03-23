import logo from './logo.svg';
import './App.css';
import {Home} from './pages';
import {Cuz} from './pages/cuz';
import {Ramazan} from './pages/ramazan';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cuz" component={Cuz} />
        <Route path="/ramazan" component={Ramazan} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
