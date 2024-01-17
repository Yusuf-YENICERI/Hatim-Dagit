import logo from './logo.svg';
import './App.css';
import {Home} from './pages';
import {Cuz} from './pages/cuz';
import {CuzV2} from './pages/cuzV2';
import {Ramazan} from './pages/ramazan';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Message from './components/common/Message';
import { UcAylarHerGun1Cuz } from 'pages/ucaylarhergun1cuz';
import { CizelgelerimPage } from 'pages/cizelgelerim';
import { Yillik } from 'pages/yillik';


function App() {
  return (
    <>
    {/* <Message /> */}
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cuz" component={Cuz} />
        <Route path="/cuzv2" component={CuzV2} />
        <Route path="/ramazan" component={Ramazan} />
        <Route path="/ucaylarhergun1cuz" component={UcAylarHerGun1Cuz} />
        <Route path="/cizelgelerim" component={CizelgelerimPage} exact />
        <Route path="/yillik" component={Yillik} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
