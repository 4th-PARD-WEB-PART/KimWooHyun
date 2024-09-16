import './Form.css';
import styled from "styled-components";

function Form(){
  return(
    <div>
     <p className="object">Name:</p>
     <input type="text" className='btn'></input>
     <p className="object">Email:</p>
     <input type="text" className='btn'></input>
     <p className="object"> Message:</p>
     <textarea className="textarea"></textarea><br/>
     <button className="submit">Submit</button>
    </div>
  )
}


export default Form;
