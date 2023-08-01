
import './App.css';
import Sidebar from './Component/Sidebar';
import Topnavbar from './Topnavbar/Topnavbar'

function App() {
  return (
    
    <div className="App">

  <div className="navbarr">
<div className="container">
  <Sidebar />
  </div>
  <div className="content">
   
  <Topnavbar />
  </div>
</div></div>    



  );
}

export default App;
