
import './App.css';
import CompA from './components/ClassComponents/CompA/compA';
import CompB from './components/ClassComponents/CompB/compB';
import CompC from './components/ClassComponents/CompC/compc';
import FCompA from "./components/FunctionalComponents/FcompA/fcompA";
import FCompB from "./components/FunctionalComponents/FcompB/fcompB";
//import FCompC from "./components/FunctionalComponents/FcompC/fcompC";
function App() {
  return (
    <div className="App">
      <h2>Class components</h2>
      <CompA />
      <CompB />
      <CompC />
      <h2>functional Components</h2>
      <FCompA />
      <FCompB />
      
    </div>
  );
}

export default App;
