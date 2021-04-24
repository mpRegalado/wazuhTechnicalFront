import { 
  EuiPage,
  EuiPageBody
} from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css'
import React from 'react'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Agents from './pages/agents';
import Alerts from './pages/alerts';
import Home from './pages/home';
import Rules from './pages/rules';

function App() {
  return (
    <div className="App" style={{minHeight:"100vh", display:"flex"}}>
      <BrowserRouter>
      <Header />
      <EuiPage style={{paddingTop:"50px"}}>
        <EuiPageBody>
          <Switch>
            <Route path="/alerts" component={Alerts} />
            <Route path="/agents" component={Agents} />
            <Route path="/rules" component={Rules} />
            <Route path="/" exact component={Home} />
          </Switch>
        </EuiPageBody>
      </EuiPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
