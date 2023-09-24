import React,{useState, useEffect} from "react";
import axios from "axios";

export  function Register()
{
    function handleregister(event)
    {
        event.preventDefault()
        
        var fname=document.getElementById("fname").value;
        var lname=document.getElementById("lname").value;
        var phone=document.getElementById("phone").value;
        var email=document.getElementById("email").value;
        var roll=document.getElementById("roll").value;
        var city=document.getElementById("city").value;
        var state=document.getElementById("state").value;
        var username=document.getElementById("username").value; 
        var password=document.getElementById("password").value;

        var key={
            fname:fname,
            lname:lname,
            phone:phone,
            email:email,
            roll:roll,
            city:city,
            state:state,
            username:username,
            password:password
        }

        if(fname=='')
        {
            alert("Enter the firstname")
        }
        else if(lname=='')
        {
            alert("Enter the lastname")
        }
        else if(phone=='')
        {
            alert("Enter the phone number")
        }
        else if(email=='')
        {
            alert("Enter the email")
        }
        else if(roll=='')
        {
            alert("Enter the roll")
        }
        else if(city=='')
        {
            alert("Enter the city")
        }
        else if(state=='')
        {
            alert("Enter the state")
        }
        else if(username=='')
        {
            alert("Enter the username")
        }
        else if(password=='')
        {
            alert("enter the password")
        }
        else 
        {
        axios.post("http://localhost:3021/Register/", key)
            .then((res) => {
                if (res.data.status === "error") 
                {
                    alert("data are not inserted")
                    window.location.reload()
                }
                else if (res.data.status === "success")
                {
                    alert("data are inserted")
                    window.location.href='/Login/'   
                }
            })
        
        }
    }
    
    return(
        <>
        <section className="bg-success vh-100 vw-100 ">
            <div className="container d-flex justify-content-center p-5">
        <form onSubmit={handleregister} className="ps-5">
            <table>
                <tr>
                <td><h1>Register</h1></td>
                </tr>
                <tr>
                <td><label>fname</label></td>
                <td><input type="text" id="fname"></input></td>
                </tr>
                <tr>
                <td><label>Lname</label></td>
                <td><input type="text" id="lname"></input></td>
                </tr>
                <tr>
                <td><label>Phone</label></td>
                    <td><input type="number" id="phone"></input></td>
                </tr>
                <tr>
                <td><label>Email</label></td>
                    <td><input type="email" id="email"></input></td>
                </tr>
                <tr>
                <td><label>Roll</label></td>
                <td><select id="roll">
                    <option>Select user</option>
                    <option value="admin">OWNER</option>
                    <option value="client">CLIENT</option>
                    </select></td>
                </tr>
                <tr>
                    <td><label>City</label></td>
                    <td><input type="text" id="city"></input></td>
                </tr>
                <tr>
                    <td><label>State</label></td>
                    <td><select id="state">
                    <option value="tn">TN</option>
                    <option value="od">ODISHA</option>
                    </select></td>
                </tr>
                <tr>
                    <td><label>Username</label></td>
                    <tb><input type="text" id="username"></input></tb>
                </tr>
                <tr>
                    <td><label>Password</label></td>
                    <td><input type="password" id="password"></input></td>
                </tr>
                <tr>
                    <td><button type="submit"  className="mt-3 rounded">Register</button> </td>
                    {/* <td></td> */}
                    {/* <td><button type="submit">login</button></td> */}
                </tr>
            </table>
        </form>
        </div>
        </section>
        </>
    );
}

