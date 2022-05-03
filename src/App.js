import './index.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
   <>
   <NavBar/>
   <br/>
   <div className="bg-yellow-500 h-screen">
     <ItemListContainer titulo="catalogo"/>
   </div>
   </>
  );
}

export default App;
