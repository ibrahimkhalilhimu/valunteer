import React from 'react';
import FakeData from '../../FakeData/FakeData';

const Admin = () => {
    const handleAdd=()=>{
        // fetch('http://localhost:5000/addValunteer',{
        //     method:'POST',
        //     headers:{ 
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(FakeData)
        // })
     }
    
    return (
        <div className="container py-5">
            <button onClick={handleAdd}>Add valunteer</button>
        </div>
    );
    };

    
export default Admin;