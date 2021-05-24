import './App.css';
import Recipe from './components/RecipeCard';
import Newrecipe from './components/Newrecipe';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Newrecipe/>
        <Recipe/>
    </div>
  );
}

export default App;
