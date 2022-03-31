import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer item="itemList1" />
    </>
  );
}

export default App;
