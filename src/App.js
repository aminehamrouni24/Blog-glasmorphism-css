import Home from './Components/Home';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './Components/BlogDetails';
//for styling , i used the index.css directly

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <div className="content">
    <Switch>
    <Route path ="/" exact>
    <Home/>
    </Route>
    <Route path ="/createblog">
    <Create/>
    </Route>
    <Route path ="/blogs/:id">
    <BlogDetails/>
    </Route>
    </Switch>
    </div>
     
    </div></Router>
  );
}

export default App;
