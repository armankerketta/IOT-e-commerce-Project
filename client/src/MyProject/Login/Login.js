import React from "react";
import axios from "axios";

export function Login()
{
    function handlelogin(event)
    {
        event.preventDefault()
        {
            var username=document.getElementById("username").value;
            var password=document.getElementById("password").value;
        }
        var key={
            username:username,
            password:password
        }

        if(username=='')
        {
            alert("please enter username")
        }
        else if(password=='')
        {
            alert("please enter password")
        }
        else
        {
            axios.post("http://localhost:3021/Login", key)    
            .then((res)=>
            {
                if(res.data.status==="empty_set")
                {
                    alert("please check")
                }
                else if(res.data.status==="success")
                {
                    var id=res.data.id
                    var roll=res.data.roll

                    if(roll==="admin")
                    {
                        alert("To Admindashboard")
                        window.location.href=`/Admindashboard/${id}`
                    }
                    else if(roll==="client")
                    {
                        alert("To Clientndashboard")
                        window.location.href=`/Clientdashboard/${id}`
                    }
                }
                else if(res.data.status==="invalid_user")
                {
                    alert("Invalid user")
                }
                else if(res.data.status==="error")
                {
                    alert("all the data are invalid")
                }
                else{
                    alert("please enter all details")
                }
            }
            )}        
    }
    return(
        <>
        <section className="bg-warning vh-100 vw-100">
            <div className="container d-flex justify-content-center">
        <form onSubmit={handlelogin} className=" conatniner-fluid text-center p-5  ">
            <table className="text-center">
                <tr className="" >
                    <thead>
                        <td><label>Login</label></td>
                    </thead>
                </tr>
                <tr>
                    <td><label>Username</label></td>
                    <td><input type="text" id="username"></input></td>
                </tr>
                <tr>
                    <td><label>Password</label></td>
                    <td><input type="password" id="password"></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit">Submit</button></td>
                </tr>
            </table>
        </form>
        </div>
        </section>
        </>
    );
}