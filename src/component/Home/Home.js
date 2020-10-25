import React, { useState,useEffect } from 'react';
import './Home.css'
import Header from '../Header/Header';
import HomeDetails from './HomeDetails';


const Home = () => {
    const [data,setData] = useState([])
    // const [filter,setFilter]= useState('')
    // useEffect(()=>{
    //     fetch('http://localhost:5000/tasks?filter'+filter)
    //     .then(res => res.json())
    //     .then(data=> setFilter(data))
    // },[filter])

    useEffect(()=>{
        fetch('https://polar-atoll-99868.herokuapp.com/valunteers')
        .then(res => res.json())
        .then(data=> setData(data))
    },[])

    return (
        
        < div >
            <div className="background">
             
            
            <Header></Header>
           
            
            <div className="pt-5 text-center">
            <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
            <form className="py-4">
             <input className="inputText" type="text" placeholder="Search.."/>
             <input className="inputBtn" type="submit" value="Search"/>
             </form>
             </div>
             
            <div className="container">
             <div className="row pt-5">
                 <div className="card-deck">
        {
            data.map(data=> <HomeDetails data={data} key={data.id}></HomeDetails>)
        }
        </div>
        </div>
        </div> 
        </div>
        </div>
       
    );
};

export default Home;