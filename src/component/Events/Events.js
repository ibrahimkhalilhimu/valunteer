import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const Events = () => {
    const [registerData,setRegisterData]=useState([])
    useEffect(()=>{
      fetch('http://localhost:5000/register')
      .then(res => res.json())
      .then(data=>{
        console.log(data);
        setRegisterData(data)
      })
    },[])
      const handleDelete =(id)=>{
       
        fetch(`http://localhost:5000/delete/${id}`,{
          method:'DELETE'
      })
      .then(res=>res.json())
      .then(result=>{
          console.log('delete success')
        
       
      })
    }
    return (
        <div className="container">
            <Header/>
            {
              registerData.map(data=>
                <div className="row py-5 d-flex justify-content-center">
                  <div className="col-md-6">

              <div className="card " >
            <img className="card-img-top" src={data.dataText.img}alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{data.data.Organize}</h5>
          <p className="card-text">{data.data.date}</p>
              <button onClick={()=>handleDelete(data._id)} className="btn btn-primary">Cancel</button>
            </div>
              </div>

               </div>
               </div>
               
               )
            }
                 
  </div>
    );
};

export default Events;