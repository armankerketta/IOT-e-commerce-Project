import React, { useState, useEffect, } from "react";
// import { useParams } from "react-router-dom";

export function Clientdashboard() {
    // var {id}=useParams
    const [fvalue, setFvalue] = useState([])
    useEffect(() => {
        fetch("http://localhost:3021/Clientdashboard")
            .then(res => res.json())
            .then(data => setFvalue(data))
    })

    return (
        <>
            <section className="vh-100 vw-100 text-center">
                <div className="container">
                    <h1>Client Dashboard</h1>
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
                        {
                            fvalue.map((value, index) => (

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
                                </tr>

                            ))}
                    </table>
                </div>
            </section>
        </>
    );

}