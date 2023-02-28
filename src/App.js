import {Route, Switch} from 'react-router-dom'

import Login from './Components/Login'
import Home from './Components/Home'
import Jobs from './Components/Jobs'
import './App.css'
import NotFound from './Components/NotFound'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Jobs} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
