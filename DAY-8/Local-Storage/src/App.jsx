import { useState } from "react"
import Card from "./components/card";

const App = ()=>{
  const[userName,setuserName] = useState("");
  const[imgURL,setimgURL] = useState("");
  const[desigNation, setdesigNation] = useState("");
  const[desc,setdesc] = useState("");

const localData = JSON.parse(localStorage.getItem('all-users')) || [];

console.log(localData);

  const[allUsers,setallUsers] = useState(localData);

  function deleteUser(idx) {
    const copyUsers = [...allUsers];
    copyUsers.splice(idx,1);
    localStorage.setItem("all-users",JSON.stringify(copyUsers));
    setallUsers(copyUsers);
  }

  

  function submitHandler(e) {
    e.preventDefault();
    const oldUser = [...allUsers];
    const newUser = {userName,desc,imgURL,desigNation};
    oldUser.push(newUser);
    setallUsers(oldUser);
    localStorage.setItem("all-users",JSON.stringify(oldUser));

    setuserName("");
    setdesc("");
    setimgURL("");
    setdesigNation("");
    console.log("Form Submitted");
  }


  return <div  className="w-screen h-screen bg-black text-white">
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}
        className="flex flex-wrap gap-5  p-2 justify-around items-center">

        <input 
        onChange={(e)=>{
          setuserName(e.target.value);
        }}
        className="w-[45%] border rounded border-amber-50 focus:outline-none p-1"
        type="text" placeholder="Enter your name" value={userName} />


        <input 
        onChange={(e)=>{
          setdesc(e.target.value);
        }}
        className="w-[45%] focus:outline-none border rounded border-amber-50 p-1"
        type="text" placeholder="Description" value={desc}/>


        <input 
        onChange={(e)=>{
          setimgURL(e.target.value);
        }}
        className="w-[45%] focus:outline-none border rounded border-amber-50 p-1"
        type="text" placeholder="Profile pic URL" value={imgURL} />


        <input 
        onChange={(e)=>{
          setdesigNation(e.target.value);
        }}
        className="w-[45%] focus:outline-none border border-amber-50 rounded p-1"
        type="text" placeholder="Designation" value={desigNation}/>

        <button
          className="bg-emerald-500 px-4 py-2 rounded text-white font-semibold cursor:pointer active:scale-95 "
        >Create User</button>

      </form>

    {
      <div className="flex gap-5">
        {
          allUsers.map((elem,idx)=>{
            return <Card idx={idx} elem={elem} deleteUser={deleteUser}/>
          })
        }
      </div>
    }


  </div>

}

export default App;