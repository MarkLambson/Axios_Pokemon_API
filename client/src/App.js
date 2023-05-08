import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AxiosAPI from './components/AxiosAPI';

function App() {
  return (
    <div className="App">
      <h1>Pokemon Api</h1>
      <AxiosAPI />
    </div>
  );
}

export default App;
