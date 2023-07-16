import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './Pages/Home/Home'

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
