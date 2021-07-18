import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '@/pages/home/Home.jsx'
import Search from '@/pages/search/Search.jsx'
import Detail from '@/pages/detail/Detail.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={Search}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
