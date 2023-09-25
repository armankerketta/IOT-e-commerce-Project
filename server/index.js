const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const mydb=require("mysql")

const connect=express()

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))

let dbconnection=mydb.createConnection(
{
    host:"localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "ecommdb"
})

dbconnection.connect(function(error)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("database is connected")
    }
})

connect.post('/Register',(request,response)=>
{
    let {fname,lname,phone,email,roll,city,state,password}=request.body
    let sql='insert into registerdb(fname,lname,phone,email,roll,city,state,username,password) values(?,?,?,?,?,?,?,?,?)'

    dbconnection.query(sql,[fname,lname,phone,email,roll,city,state,email,password],(error,result)=>
    {
        if(error)
        {
            response.send({"status":"error"})

            console.log(error)
        }
        else
        {
            response.send({"status":"success"})
        }
    })
})

connect.post('/Login',(request,response)=>
{
    let {username,password}=request.body
    let sql='select * from registerdb where username=?'

    dbconnection.query(sql,[username],(error,result)=>
    {
        if(error)       
        {
            response.send({"status":"empty set"})
        }
        else if(result.length>0)
        {
            let dbusername=result[0].username
            let dbpassword=result[0].password
            let id=result[0].id         
            let roll=result[0].roll

            if((dbusername===username)&&(dbpassword===password))
            {
                response.send({"status":"success","id":id,"roll":roll})
            }
            else
            {
                response.send({"status":"invalid_user"})
            }
        }
        else
        {
            response.send({"status":"error"})
            
        }
    })
})


connect.get('/Clientdashboard',(request,response)=>
{
	let sql='select * from registerdb'

	dbconnection.query(sql,(error,result)=>
    {
        if(error)
        {
            response.send(error)
        }
        else
        {
            response.send(result)
        }

    })

})


connect.get('/Home',(request,response)=>
{
	let {pid}=request.body
	let sql='select * from products'

	dbconnection.query(sql,[pid],(error,result)=>
    {
        if(error)
        {
            response.send(error)
        }
        else
        {
            response.send(result)
        }

    })

})

connect.get('/Getsingle/:pid',(request,response)=>
{
    let {pid}=request.params
    let sql='select * from products where pid=?'

    dbconnection.query(sql,[pid],(error,result)=>
    {
        if(error)
        {
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})


connect.get('/Admindashboard',(request,response)=>
{
    let sql='select * from registerdb'

    dbconnection.query(sql,(error,result)=>
    {
        if(error)
        {
            response.send(error)
        }
        else
        {
            response.send(result)
        }
    })
})

connect.post('/Removeuser/:id',(request,response)=>
{
    let {id}=request.params
    let sql='delete from registerdb where id=?'
    dbconnection.query(sql,[id],(error,result)=>
    {
        if(error)
        {
            response.send({"status":"error"})
        }
        else
        {
            response.send({"status":"success"})
        }
    })
})


connect.put('/Update/:pid',(request,response)=>
{
    let {pid}=request.params
    let {modelnumber,price}=request.body
    let sql='update products set modelnumber=?, price=? where pid=?'
    dbconnection.query(sql,[modelnumber,price,pid],(error,result)=>
    {
        if(error)
        {
            response.send({"status":"error"})
        }
        else
        {
            response.send({"status":"success"})
        }
    })
})


connect.listen(3021,()=>
{
    console.log(("your server is running in port 3021"))
})