import React from 'react';
import './HomeDetails.css'
import { useHistory } from "react-router-dom";


const HomeDetails = (props) => {
    const {title,img,id} = props.data

    const history = useHistory()

    const handleClick =(id)=>{
       history.push(`/${id}`)
    }
    return (
        <div className="col-md-3">
      
     
      <div onClick={()=>handleClick(id)} className="card text-center w-100">
    <img className="card-img-top img-fluid" src={img} alt=""/>
    <div style={{backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`}} className="card-footer">
    <small className="text-white">{title}</small>
    </div>
    </div> 
       
        </div>
    );
};

export default HomeDetails;



 