import React from 'react'

export default function Edu_exp_sec() {
    return (
        <div style={{padding:"5%"}}>
            <h4><b>Step 2 : Education and Experience </b></h4>
            <br/>
            
            
            <form className="row"style={{padding:"3%"}}>
                <div className="col">
                    <h5><b>Qualification</b></h5>
                    <br/>
                    <div className="form-group">
                        <label for="Institute"><b>Institute Name</b></label>
                        <input type="text" className="form-control" id="Inst" placeholder="Enter Institute name"/>
                    </div>
                    <div className="form-group">
                        <label for="Degree"><b>Degree</b></label>
                        <input type="text" className="form-control" id="Degree" placeholder="Enter Degree name"/>
                    </div>
                    <div className="form-group">
                        <label for="Speciliazation"><b>Specialization</b></label>
                        <input type="text" className="form-control" id="Speciliazation" placeholder="Enter Specialization"/>
                    </div>
                    <div className="form-group">
                        <label for="passed out"><b>Year of passed out</b></label>
                        <input type="text" className="form-control" id="passed out" placeholder="Enter year passed out"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add more</button>
                </div>
                <div className="col">
                    <h5><b>Experience</b></h5>
                    <br/>
                    <div className="form-group">
                        <label for="company"><b>Company Name</b></label>
                        <input type="text" className="form-control" id="company" placeholder="Enter company name"/>
                    </div>
                    <div className="form-group">
                        <label for="role"><b>Role</b></label>
                        <input type="text" className="form-control" id="role" placeholder="Enter job role"/>
                    </div>
                        <div className="form-group">
                        <label for="working"><b>Currently working on this company?(Yes or No)</b></label>
                        <input type="text" className="form-control" id="working" placeholder="Enter Yes or No"/>
                    </div>
                    <div className="form-group">
                        <label for="experience"><b>Year of experience</b></label>
                        <input type="text" className="form-control" id="experience" placeholder="Enter years of experience"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add more</button>
                </div>
                
            </form>
        </div>
    )
}
