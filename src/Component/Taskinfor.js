import React from 'react'
//import EditIcon from '@mui/icons-material/Edit';
//import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from "react-redux";
//import { Link } from "react-router-dom";
import {deleteUser} from '../Redux/Reducer';
import { useNavigate } from 'react-router-dom';
import EditTask from './EditTask'


const Taskinfor = ({text, date, time, selected}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state)=> state.users.value);

  //
  const handleDelete = (id) => { 
    if (window.confirm("Are you sure you want to delete this task ?")) {
      dispatch(deleteUser(id));
      //navigate('/');
    }
  }

  return (
    <div>

      {userList.map((user)=>{
        return(
          <div key={user.id}> 
          <div className='taskinfor_wrapper'>
            <h1 className='taskinfor_h1'> {user.text} </h1>
            <p>{user.date}</p>
          </div>
          
             <EditTask 
             user={user} 
             handleDelete={handleDelete}
             text={text}
             date={date}
             time={time}
             selected={selected}
             />
          </div>
          
        )
      })}
      
    </div>
  )
}

export default Taskinfor


