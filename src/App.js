import './App.css';
import Post from './containers/Post';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddPost from './containers/AddPost';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Post} />
        <Route path="/add" component={AddPost}/>
        <Route path="/edit/:id" component={AddPost} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
