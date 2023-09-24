import React,{useState,useEffect,} from "react";
import { Link } from "react-router-dom";


export function Home()
{
    const[fvalue,setFvalue]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3021/Home")
        .then(res=>res.json())
        .then(data=>setFvalue(data))
    })

    return(
        <>
        <link rel="stylesheet" type="text/css" href="/Home.css"></link>
        <h1>View Data</h1>

        
        <div className="row row-cols-2 m-2">
        {
            fvalue.map((value,index)=>(
                <>
            <div className="col-md-2 col-lg-3">   
                <div class="card h-100">
                    <img src={value.imagelink}  class="card-img-top h-100" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{value.pname}</h5>
                        <p>{value.pdesc}</p>
                        <h6>{value.pprice}</h6>
                        <a href={`/Getsingle/${value.pid}`} class="btn btn-primary">View</a>
                    </div>
                </div>
            </div>

                </>
            ))
        }
        </div>
        </>
    );
}