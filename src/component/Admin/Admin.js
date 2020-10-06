import {React,useEffect,useState} from 'react';
import FakeData from '../../FakeData/FakeData';
import Header from '../Header/Header';

const Admin = () => {
    const handleAdd=()=>{
        // fetch('https://polar-atoll-99868.herokuapp.com/addValunteer',{
        //     method:'POST',
        //     headers:{ 
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(FakeData)
        // })
     }
   
    
    return (
        <div className="container py-5">
            <Header></Header>
          
        </div>
    );
    };

    
export default Admin;