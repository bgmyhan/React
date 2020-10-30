import React, {useState} from 'react';
import axios from 'axios'
import { Mongoose } from 'mongoose';


function Login() {
    const [ registerUsername, setRegisterUsername ] = useState( " " );
    const [ registerPassword, setRegisterPassword ] = useState( " " );
    const [ loginUsername, setloginUsername ] = useState( " " );
    const [ loginPassword, setloginPassword ] = useState( " " );

    const register = () => {
        axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: "http://localhost:8080/register"
        }).then((res) => console.log(res));
    };


    const login = () => {
        axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: "http://localhost:8080/login"
        }).then((res) => console.log(res));
    };
    const getUser = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8080/user"
        }).then((res) => console.log(res));
    };
    
    return (
        <div className="PageWrapper">

            <div>
                <h1>Register</h1>
                <input placeholder="username" onChange={event => setRegisterUsername(event.target.value) }  />
                <input placeholder="password" onChange={event => setRegisterPassword(event.target.value) }/>
                <button onClick = { register } >Submit</button>
            </div>

            <div>
                <h1>login</h1>
                <input placeholder="username" onChange={event => setloginUsername(event.target.value) } />
                <input placeholder="password" onChange={event => setloginPassword(event.target.value) }/>
                <button onClick = { login } >Submit</button>
            </div>
            

            <div>
                <h1>Get User</h1>
                <button onClick = { getUser } >Submit</button>
            </div>
            
            
        </div>
    )
} 

export default Login;