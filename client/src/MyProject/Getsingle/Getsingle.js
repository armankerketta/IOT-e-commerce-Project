import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

export function Getsingle()
{
    var {pid} = useParams()
    const [pname,setPname]=useState('')
    const [pdesc,setPdesc]=useState('')
    const [price,setPrice]=useState('')
    const [modelnumber,setModelnumber]=useState('')
    const [image,setImage]=useState('')

    useEffect(()=>
    {
        fetch("http://localhost:3021/Getsingle/"+pid)
        .then(res=>res.json())
        .then((data)=>{
            setPname(data[0].pname)
            setPdesc(data[0].pdesc)
            setPrice(data[0].price)
            setModelnumber(data[0].modelnumber)
            setImage(data[0].imagelink)
        })
    })
    return(
        <>
        <div>
        <h1>Arduino</h1>
            <div class="card container h-100 v-100">
                <img src={image} class="card-img-top" alt="product"/>
                <div class="card-body">
                <h1>Product:{pname}</h1><br/>
                <h2>ModelID:{modelnumber}</h2>
                <h3>Desccipt{pdesc}</h3><br/>
                <h1>Rs:{price}</h1>
                {/* <img src={image} alt="product"/> */}
                <button>update</button>
                </div>
            </div>
        </div>
        </>
    );
}