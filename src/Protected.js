import React ,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'
import './Header.css'


function Protected(props) {
   
    let Cmp = props.Cmp
    const history= useHistory();

    useEffect(()=>{
        if (!localStorage.getItem('user-info'))
        {
            history.push('/register')
        }
    },[])
    useEffect(()=>{
        if (!localStorage.getItem('user-info'))
        {
            history.push('/login')
        }
    },[])

    return (
        <div >
           <Cmp />
        </div>
    )
}
export default Protected