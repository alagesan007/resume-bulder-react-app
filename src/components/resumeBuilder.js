import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Edu_exp_sec from './edu_exp_sec.js'
import Skills from './skills.js'
let ResumeBuilder= props => {
  const  handleSubmit  = (values)=>{
      console.log(values)
  }
  return (
    <div class="main"> 
    

    {/* // Add personal infirmations */}
    <form style={{padding:"5%"}}>
        <h4 ><b>Step 1 : Enter a personal info</b></h4>
        <div className="form-group">
            <label for="Name"><b>Name : </b></label>
            <input type="text" className="form-control" id="Name" placeholder="Enter name"/>
        </div>
        <div className="form-group">
            <label for="exampleInputEmail1"><b>Email adress</b></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
        </div>
            <div className="form-group">
            <label for="Adress"><b>Adress</b></label>
            <input type="text" className="form-control" id="Adress" placeholder="Enter adress"/>
        </div>
        <div className="form-group">
            <label for="phone"><b>Phone number</b></label>
            <input type="text" className="form-control" id="phone" placeholder="Enter Phone number"/>
        </div>
  
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>



    {/* Add education and experience fields */}

    <Edu_exp_sec/>

    {/* Add Skills Component */}

    <Skills/>

    
</div>
  )
}

export default ResumeBuilder
    

