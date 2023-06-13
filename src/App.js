import React from 'react';

import ResumeBuilder from './components/resumeBuilder.js'

function App() {
  return (
    <div className="App">
      <div className="heading bg-primary"style={{textAlign:"center",padding:"10px"}}>
        <h1 className="">Resume Builder Application</h1>

      </div>
      
      <ResumeBuilder/>
      
    </div>
  );
}

export default App;
