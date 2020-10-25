import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';


const Events = () => {
    const [registerData,setRegisterData]=useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
      fetch('https://polar-atoll-99868.herokuapp.com/register?email='+loggedInUser.email)
      .then(res => res.json())
      .then(data=>{
        console.log(data);
        setRegisterData(data)
      })
    },[])
    
    const handleDelete =(id)=>{
       
      fetch(`https://polar-atoll-99868.herokuapp.com/delete/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(result=>{
        console.log('delete success')
      
     
    })
  }
    return (
      <div style={{backgroundColor:"#E5E5E5",width:"100%",height:"879px"}} className="bg">
        <div style={{width:"100%"}} className="container">
            <Header/>
            <div className="row pt-5 mt-4">
            
           {
              registerData.map(data=>
              
                  <div className="col-md-6 ">
               
                  <div class="card mb-3" style={{maxWidth:"540px"}}>
  <div class="row no-gutters">
    <div class="col-md-2">
      <img src={data.dataText.img} class="card-img-center img-fluid w-100 pl-3" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
              <h5 class="card-title">{data.data.Organize}</h5>
              <h6 class="card-text">{data.data.date}</h6>
              <div className="pl-5 ml-5">
              <button onClick={()=>handleDelete(data._id)} className="btn btn-primary ">Cancel</button>
              </div>
      </div>
    </div>
  </div>
</div>
                </div>

            

              
               
               
               )
            }

             </div>
             </div>        
  </div>
    );
};

export default Events;


{/* <div className="card" style={{width:"100%"}} >
                <div className="d-flex align-items-center">
            <img style={{width:"80px"}} className="card-img-top" src={data.dataText.img}alt=""/>
            
            <div className="card-body">
            <h5 className="card-title">{data.data.Organize}</h5>
          <p className="card-text">{data.data.date}</p>
              <button onClick={()=>handleDelete(data._id)} className="btn btn-primary">Cancel</button>
            </div>
            </div>
              </div> */}