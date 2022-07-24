import  { useState } from 'react'
import { addUser } from '../Redux/Reducer'
import { useSelector, useDispatch } from "react-redux";
//import { useNavigate } from 'react-router-dom'
import TaskInfor from './Taskinfor';


const AddTask = () => {

// const userList = useSelector((state)=> state.users.value);

  const dispatch = useDispatch();
  //const navigate = useNavigate();

  //options value
  const options = [
    {value: '', text: '--Choose an option--'},
    {value: 'John smart', text: 'John smart'},
    {value: 'Henry Obi', text: 'Henry Obi'},
    {value: 'Mount key', text: 'Mount key'},
    {value: 'Stephen yakubu', text: 'Stephen yakubu'},
  ];
 
  //creating state for inputs
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selected, setSelected] = useState(options[0].value);

    //handle a submit form
    const handleAddEvent = (e)=>{
      e.preventDefault();
      
      dispatch(
        addUser({
          id: Math.floor(Math.random()* 10000),
          text,
          date,
          time,
          selected
        })
      )
      setText("");
      setDate("");
      setTime("");
      setSelected("");
    }


  return (

    <div>
    <div className='addtaskContainer'>

     <form onSubmit={handleAddEvent}>
     <div className='add_input_wrapper'>
     <h3>Task Description </h3>
        <div className='add_inputdata'>
        <input type='text'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder='Enter your description'
        className='addinput'/>
        </div>
     </div>

      <div className='add_date_wrapper'>
        
      <h3>Date</h3>
      <input type='date' 
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      /> 
      
      <h3>Time</h3>
      <input type='time'
      value={time}
      onChange={(e)=>setTime(e.target.value)}
      /> 
     
      </div>

      <div className='add_options'>
        <h3>Assign User</h3>
        <select className='add_select' value={selected} onChange={(e)=> setSelected(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
        </select>
      </div>

       <div className='add_save'>
       <button className='add_span'>Save</button>
       </div>
     </form>
     
    </div>

    <TaskInfor text={text}  date={date} time={time} selected={selected}/>
    </div>
  )
}

export default AddTask
