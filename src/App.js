import { Outlet, Link } from 'react-router-dom';
import NavBar from './components/Nav';
import './css/App.css';
import { useContext } from 'react';
import AuthContext from './context/AuthProvider';


function App() {

  const { auth } = useContext(AuthContext);
  console.log(auth);

  return (
    <>
      <NavBar />
      <h1 style={{textAlign: 'center', paddingTop: '20px'}}>Babylon Boxing</h1>
      <div style={{height: '800px', textAlign: 'center'}}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
