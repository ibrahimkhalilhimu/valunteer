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
        <div className="card-deck">
  <div onClick={()=>handleClick(id)} className="card text-center w-50">
    <img className="card-img-top mx-auto d-block" src={img} alt="Card image cap"/>
    <div style={{backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`}} className="card-footer">
    <small className="text-white">{title}</small>
    </div>
    </div>
        </div>
        </div>
    );
};

export default HomeDetails;