import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {updateUser} from '../Redux/Reducer'
//import { useNavigate, useParams } from 'react-router-dom'
//import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EditTask = ({handleDelete, user, text, date, time, selected }) => {

  const dispatch = useDispatch();
  
    //options value
    const options = [
      {value: '', text: '--Choose an option--'},
      {value: 'John smart', text: 'John smart'},
      {value: 'Henry Obi', text: 'Henry Obi'},
      {value: 'Mount key', text: 'Mount key'},
      {value: 'Stephen yakubu', text: 'Stephen yakubu'},
    ]

  //creating state for inputs
  const [Edittext, setEditText] = useState("");
  const [Editdate, setEditDate] = useState("");
  const [Edittime, setEditTime] = useState("");
  const [Editselected, setEditSelected] = useState(options[0].value);


  return (
    <div className='edittask_container'>

    <div className='add_input_wrapper'>
        <h3>Update a Task </h3>
        <div className='add_inputdata'>
        <input type='text' 
          value={Edittext}
          placeholder='Enter description...' 
          onChange={(e)=>setEditText(e.target.value)}
          className='addinput' />
        </div>
      </div>

      <div className='add_date_wrapper'>
      <h3>Date</h3>
      <input type='date' 
        value={Editdate}
        onChange={(e)=>setEditDate(e.target.value)}
      /> 
      <h3>Time</h3>
      <input type='time' 
       value={Edittime}
       onChange={(e)=>setEditTime(e.target.value)}
      /> 
      </div>

      <div className='add_options' >
        <h3>Assign User</h3>
        <select className='add_select' value={Editselected} onChange={(e)=> setEditSelected(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
        </select>
      </div>

       <div className='editbtn'>
       <button className='edit_save' 
       onClick={()=> 
       dispatch(updateUser({id: user.id, text: Edittext, date: Editdate, time: Edittime, selected: Editselected })) }> Update </button>
       <button onClick={()=> handleDelete({id: user.id})}> <DeleteIcon/> </button>
       </div>
      

    </div>
  )
}

export default EditTask
