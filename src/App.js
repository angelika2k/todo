import './App.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <div className="bubbles">
        <span className="o"></span>
        <span className="t"></span>
        <span className="th"></span>
        <span className="f"></span>
        <span className="fi"></span>
        <span className="s"></span>
        <span className="se"></span>
      </div>
      <Todos/>
      <DisplayTodos/>
    </div>
  );
}

export default App;
