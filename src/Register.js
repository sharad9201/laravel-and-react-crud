import React ,{useState, useEffect} from 'react'
import Header from './Header'
import './Header.css'


import {useHistory} from 'react-router-dom'

function Register() {
    useEffect(()=>{
        if (localStorage.getItem('user-info'))
        {
            history.push('/add')
        }
    },[])

    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const history= useHistory()

    async function signUp(){
        let item={name,password,email}

        let result = await fetch('http://localhost:8000/api/register',{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept" : 'application/json'

            }
        })

        result = await result.json()

        localStorage.setItem('user-info',JSON.stringify(result))
        history.push('/add')
        console.warn("result", result)
        // console.warn(name,email,password)
    }

    return(
        <div className="col-sm-6 offset-sm-3">
            <Header />
            <h1> register page</h1>
            {/* <label htmlFor="name">Name</label> */}
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className="form-control" placeholder="name" /><br />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" placeholder="email" /><br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="form-control" placeholder="password" /><br />
            <button onClick={signUp} className="btn btn-primary"> Sign Up</button>
        </div>
        
    )
}

export default Register