import React ,{useState, useEffect} from 'react'
import Header from './Header'
import './Header.css'
import {useHistory} from 'react-router-dom'


function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState('')
    const history= useHistory()

    useEffect(()=>{
        if (localStorage.getItem('user-info'))
        {
            history.push('/add')
        }
    },[])

    ///this is api yeah its from here above should not be neglected to *****
    
    async function login(){

        console.warn(email,password);
        let item={email,password};
        let result = await fetch('http://localhost:8000/api/login',{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)

        })
        result = await result.json()
        localStorage.setItem('user-info',JSON.stringify(result))
        history.push('/add')
    }

    return (
        <div >
            <Header />
            <h1>
                Login Page
                <div className="col-sm-6 offset-sm-3">
                 <input className="form-control" type="text" placeholder="email" 
                 onChange={(e)=>setEmail(e.target.value)} />
                 <br />
                 <input className="form-control" type="password" placeholder="password"
                 onChange={(e)=>setPassword(e.target.value)} />
                 <br />
                 <button onClick={login} className="btn btn-primary">Login </button>

                </div>
            </h1>
        </div>
    )
}
export default Login