import './App.css';
import Recipe from './components/RecipeCard';
import Newrecipe from './components/Newrecipe';

function App() {
  return (
    <div className="App">
        <Newrecipe/>
        <Recipe/>
    </div>
  );
}

export default App;
