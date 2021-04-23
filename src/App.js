import { 
  EuiPage,
  EuiPageBody
} from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css'
import React from 'react'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home';

function App() {
  return (
    <div className="App" style={{minHeight:"100vh", display:"flex"}}>
      <BrowserRouter>
      <Header />
      <EuiPage restrictWidth style={{paddingTop:"50px"}}>
        <EuiPageBody>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </EuiPageBody>
      </EuiPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
