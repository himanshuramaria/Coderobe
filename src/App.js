import logo from './logo.svg';
import Home from './components/home.jsx'
import './App.css';
import DataProvider from './context/DataProvider.jsx';


function App() {
  return (
    <DataProvider>
       <Home />
    </DataProvider>
  );
}

export default App;
