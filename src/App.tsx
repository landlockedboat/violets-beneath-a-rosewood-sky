import { Provider } from 'react-redux';
import './App.css';
import Counter from './Counter';
import store from './store';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
