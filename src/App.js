import './App.css';
import AddTask from './Component/AddTask';
//import EditTask from './Component/EditTask';
import Header from './Component/Header';
import TaskInfor from './Component/Taskinfor';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {


  return (
    <div className='wrapper'>

      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<AddTask />} />
          <Route  path='/taskinfor' element={<TaskInfor /> } />
        </Routes>
      </Router>
      
  
         
    </div>
  )
}

export default App



