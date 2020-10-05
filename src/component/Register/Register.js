import React, { useContext,useState, useEffect } from 'react';
import logo from '../../logos/Group 1329.png'
import { Link,useHistory,useParams } from 'react-router-dom';
import './Register.css'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import FakeData from '../../FakeData/FakeData'



const Register = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    let {id} = useParams();
    console.log(id);
    const dataText = FakeData.find(data=>data.id ==id)
    
    const [homeData,setHomeData]= useState(dataText)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/valunteer/'+id)
    //     .then(res=>res.json())
    //     .then(data=>setHomeData(data))
    // },[id])

    let history = useHistory();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      history.push("/event")
        const newData ={...loggedInUser, data}

        fetch('http://localhost:5000/addRegister',{
            method:'POST',
            headers:{ 
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(data=>{
           
          if (data) {
           
            alert('your register place successfully')
          }
        })
    }

    
    // let history = useHistory();
    
    // const handleSubmit=(e,data)=>{
    //     // history.push("/event")
    //     const newData ={...loggedInUser, register:data}

    //     fetch('http://localhost:5000/addRegister',{
    //         method:'POST',
    //         headers:{ 
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify(newData)
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
           
    //       if (data) {
           
    //         alert('your register place successfully')
    //       }
    //     })


    //     e.preventDefault()
    // }



    return (
        <div className="text-center">
        <Link to="home" > <img src={logo} alt=""/> </Link>
          <div className="py-4">
              <div className="box-text m-auto">
              <h3>Register as a volunteer</h3>
              <form className="ship-from" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" id="input" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" /><br/><br/>
        {errors.name && <span className="error"> Name is required</span>} 
        <input name="email" id="input" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" /><br/><br/>
        {errors.email && <span className="error">  Email is required</span>}
        <input type="date" id="input" name="date" ref={register({ required: true })} placeholder="Date" /><br/><br/>
        {errors.date && <span className="error"> Date is required</span>}
        <input  name="description" id="input" ref={register({ required: true })} placeholder="Description" /><br/><br/>
        {errors.description && <span className="error"> Description is required</span>}
        <input  name="Organize"  id="input" defaultValue={homeData.title} ref={register({ required: true })} placeholder="Organize at the library" /><br/><br/>
        {errors.Organize && <span className="error"> Organize is required</span>}
        <input className="registerBtn" type="submit" />
      </form>
              </div>
              </div>
        </div>
    );
};

export default Register;





// <form className="py-3" onSubmit={handleSubmit}>
// <input type="text" defaultValue={loggedInUser.name} placeholder="Full Name"id="input" /><br/><br/>
// <input type="email" defaultValue={loggedInUser.email} name="" id="input" placeholder="Username or email"/><br/><br/>
// <input type="date" name="" id="input" placeholder="Date"/><br/><br/>
// <input type="text" placeholder="Description"id="input" /><br/><br/>
// <input type="text" placeholder="Organize at the library"id="input" defaultValue={homeData.title} /><br/><br/>
// <input className="registerBtn " type="submit" defaultValue="Registration"/><br/><br/>

// </form>