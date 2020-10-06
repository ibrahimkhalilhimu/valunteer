import React, { useState,useEffect } from 'react';
import './Home.css'
import Header from '../Header/Header';
import HomeDetails from './HomeDetails';


const Home = () => {
    const [data,setData] = useState([])
    

    useEffect(()=>{
        fetch('https://polar-atoll-99868.herokuapp.com/valunteers')
        .then(res => res.json())
        .then(data=> setData(data))
    },[])

    return (
        < div className="container">
            <Header></Header>
            <div className="py-5 text-center">
            <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
            <form className="py-4">
             <input className="inputText" type="text" placeholder="Search.."/>
             <input className="inputBtn" type="submit" value="Search"/>
             </form>
             </div>
             <div className="row">
        {
            data.map(data=> <HomeDetails data={data} key={data.id}></HomeDetails>)
        }
        </div>
       
            
        </div>
    );
};

export default Home;