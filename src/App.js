import './App.css';
import { MenuProvider } from './context/MenuContext';
import Menu from './components/Menu';

function App() {
  return (
    <MenuProvider>
      <Menu/>
    </MenuProvider>
    
  );
}

export default App;
