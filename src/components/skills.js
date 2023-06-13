
import { useState } from 'react';

export default function Skills() {
    const [inputFields, setInputFields] = useState([
        { name: '', age: '' }
      ])
      const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;

        setInputFields(data);
     }  
     const addFields = (event) => {
        event.preventDefault();
        let newfield = { name: '', age: '' }
    
        setInputFields([...inputFields, newfield])

    }
    return (
    
        <div className="App" style={{padding:"5%"}}>
            <h4><b>Step 4 : Add Skills</b></h4>
            <br/>
            <br/>
            <form>
            {inputFields.map((input, index) => {
                return (
                <>
                <hr/>
                <div  key={index}>
                    <input
                    style={{marginLeft:"3%", padding:"5px",boxRadious:"5px"}}
                    name='name'
                    placeholder='Skill Name'
                    value={input.name}
                    onChange={event => handleFormChange(index, event)}
                    />
                    
                    <input
                    style={{marginLeft:"3%", padding:"5px",boxRadious:"5px"}}
                    name='age'
                    placeholder='Rate of your skill out of 5'
                    value={input.age}
                    onChange={event => handleFormChange(index, event)}
                    />
                    
                </div>
                
                
                </>
            )
            })}
            <br/>
            <button style={{marginLeft:"3%"}} className="btn btn-primary" onClick={addFields}>Add More..</button>
            </form>
            {/* Add genarate resume button */}

    <br/>
    <br/>
    <hr/>
    <br/>
    <br/>
    <button  className="btn btn-success">Genarate Resume</button>

    </div>
            
    
    )
}
