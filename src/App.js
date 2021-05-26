import './css/main.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';
import { motion } from "framer-motion"

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
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >Todo App</motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration:1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
