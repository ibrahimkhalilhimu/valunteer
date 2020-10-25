import React, { useContext } from 'react';
import logo from '../../logos/Group 1329.png'
import google from '../../logos/Group 571.png'
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser,setLoggedInUser]= useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogle =()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {

            var {displayName,email} = result.user;
            const signInUser = {name:displayName,email}
            setLoggedInUser(signInUser)
            history.replace(from);
            
          })
          .catch(function(error) {
          
            var errorCode = error.code;
            var errorMessage = error.message;
           
            var email = error.email;
           
            console.log(errorMessage,errorCode,email);
          });
    } 

    return (
        <div className="text-center">
          <Link to="home" > <img src={logo} alt=""/> </Link>
            <div className="box">
                <div className="boxText m-auto">
                <h3>LogIn With</h3>
                <div className="py-4">
                <button onClick={handleGoogle}>
                    
                     Continue with Google
                  
                     </button><br/><br/>
                <h6>Dont't have an account?<Link to="">create new account</Link></h6>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Login;