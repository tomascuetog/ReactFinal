import './components/styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer  from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  
  return (
    <div >
        <header className="App-header">
          <NavBar/>
        <ItemListContainer/> 
        <ItemDetailContainer />
        </header>
      </div>
    );
}
export default App;