"use client"
import { useState } from "react";


export default function Home() {
  
const [todos,SetTodos] = useState([{task:"Pray Fajr",id:0},
  {task:"Read quran",id:1}

])


  const [inputval, Setinputval] = useState("")
  const [inputid, Setinputid] = useState(0)



  const additem= () =>{
      let obj:any = todos.find(item => item.id == inputid )

      if(obj){
        let newArray = todos.filter(item => item.id !== obj.id)
        SetTodos([...newArray,{task:inputval,id:inputid }])
        Setinputval("")
        Setinputid(0)
        return
      }


    SetTodos([...todos,{task:inputval,id:inputid}])
    Setinputval("")
    Setinputid(0)

  }

// 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
const delitem = (id : any)=>{
  let newArray = todos.filter(item => item.id !== id)    
        SetTodos([...newArray])

}



  const editItem = (id:any) => {
    let obj:any = todos.find(item => item.id == id )
   
    Setinputval(obj.task)
    Setinputid(obj.id)
  } 
  
  return (


  <div className="max-w-4xl mx-auto p-5">
      <h1 className="font-extrabold text-5xl text-center ">To-do App</h1>
       {/*Adding input fields and button  */}


    <div className="flex justify-between gap-4 mt-10 ">
      <input   onChange={(e:any)=>{Setinputval(e.target.value)}} value={inputval}          className="border-b-2 border-slate-500  focus:outline-none w-[60%]  " placeholder="Write Task Name" type="text" />

      <input   onChange={(e:any)=>{Setinputid(e.target.value)}}  value={inputid}                                                                      className="border-b-2 border-slate-500  focus:outline-none w-[20%]  " placeholder="Write Task ID" type="number" />
      <button onClick={additem} className="w-[20%] bg-slate-500 rounded-md p-2 hover:bg-slate-400 text-white ">Add Task</button>
    </div>
    <br />

    {/* designing grid */}



    <div className="grid grid-cols-2 gap-5 mt-4">
{
  todos.map((item:any,i:any)=>{
return(
<div className="shadow p-4  " key={i}>
     <div className="flex justify-between" > 
         <span className="shadow-md rounded-md   h-8 w-8 text-center pt-1"> {i+1}</span>
         <span className="shadow-lg   rounded-md h-8 w-55 cursor-pointer pl-2 pr-2 font-semibold  pt-1 bg-sky-300 hover:text-slate-100    hover:bg-blue-400 transition-colors duration-300    " onClick={()=>delitem(item.id)}>Done</span>
     </div>

    <div className="mt-4 text-slate-600 text-lg font-semibold">{item.task}</div>

      <div>
        <h2 onClick={()=>editItem(item.id)} className="text-right cursor-pointer hover:text-slate-700">edit</h2>
      </div>
      <h2 className="text-green-700 ">id: {item.id}</h2>
  </div>
  
 

)
  })
}

  
    </div>
  </div>

  );
}
