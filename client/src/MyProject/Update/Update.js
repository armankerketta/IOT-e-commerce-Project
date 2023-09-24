import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Update()
{
    const {pid}=useParams()
    const [modelnumber,setModelnumber]=useState('')
    const [price,setPrice]=useState('')

    useEffect(()=>
    {
        fetch("http://localhost:3021/Getsingle"+pid)
        .then(res=>res.json())
        .then((data)=>{
            setModelnumber(data[0],modelnumber)
            setPrice(data[0].price)
            
        })
  
    },[])

    //update function

    function handleupdate(event)
    {
        event.preventDefalut()
        var modelnumber=document.getElementById("modelnumber").value;
        var cost=document.getElementById("price").value;

        var key={
            modelnumber:modelnumber,
            price:price
        }


        if(modelnumber == '')
        {
            alert("Enter to change model no")
        }
        else if(price=='')
        {
            alert("Enter the price")
        }
        else{
            axios.post("http://localhvsost:3021/Update" + pid, key)
            .then((res)=>
            {
                if(res.data.status=="error")
                {
                    alert("data are not updated")
                    window.location.reload()
                }
                else if(res.data.status==="success")
                {
                    alert("data are insereted")
                    window.location.href ='/Getsingle/:id'
                }
            })
        }
    }

    return(
        <>
        <h1>Update</h1>
        <div>
            <form onSubmit={handleupdate} className="">
                <table>
                    <tr>
                        <td><label>Model No</label></td>
                        <td><input type="text" id="modelnumber" onChange={(a)=> setModelnumber(a.target.value)} value={modelnumber}></input></td>
                    </tr>
                    <tr><label>Price</label></tr>
                    <td><input type="text" id="price" onChange={(a)=> setPrice(a.target.value)} value={price}></input></td>
                </table>
            </form>
        </div>
        </>
    );
}