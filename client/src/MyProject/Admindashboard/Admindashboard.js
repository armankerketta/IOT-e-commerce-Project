import axios from "axios";
import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";


export function Admindashboard()
{
    const[fvalue,setFvalue]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3021/Admindashboard")
        .then(res=>res.json())
        .then(data=>setFvalue(data))
    })
   
    const delt=(id)=>
    {
        axios.post("http://localhost:3021/Removeuser/"+id)
        .then((res)=>
        {
            if(res.data.status==="error")
            {
                alert("data are not deleted")
                window.location.reload()
            }
            else if(res.data.status==="success")
            {
                alert("data are deleted")
                window.location.reload()
            }
        })
    }
    return(
        <>
        <section className="vh-100 vw-100 text-center">
            <div className="container">
        <h1>Admin Dashboard</h1>
        {
            fvalue.map((value,index)=>(
                <>
        <table className="table table-dark table-striped-columns text-danger">
            <tr>
                <th>id</th>
                <th>Fname</th>
                <th>Lname</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Roll</th>
                <th>City</th>
                <th>State</th>
                <th>Username</th>
                <th>Password</th>
            
            </tr>
            <tr>
                <td>{value.id}</td>
                <td>{value.fname}</td>
                <td>{value.lname}</td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
                <td>{value.roll}</td>
                <td>{value.city}</td>
                <td>{value.state}</td>
                <td>{value.username}</td>
                <td>{value.password}</td>
                <td><Link to='/Adduser/'><button>ADD</button></Link></td>
                <td><button onClick={()=>{delt(value.id)}}>REMOVE</button></td>
            </tr>
        </table>
        </>
            ))}
            </div>
        </section>
        </>
    );
}