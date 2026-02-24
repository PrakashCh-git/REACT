import React, { useState } from "react";
import axios from "axios";

const App = () => {

  const [allData,setallData] = useState([]);

  const getData = async() => {
    const res = await axios.get("https://dummyjson.com/users");
    setallData(res.data.users);
    
  }



  return <div>
    <button 
    onClick={getData} 
    className="px-4 py-2 rounded bg-emerald-400 m-2">
      Get Data
    </button>

    <div className="flex flex-wrap bg-amber-300 justify-around">
      {
        allData.map((elem,idx)=>{
          return (
            <div className=" bg-white text-black p-4 rounded w-80 flex flex-col text-center m-3">
              <img src={elem.image} className="w-20 h-20 rounded-full mx-auto"/>
              <h1>{elem.firstName} {elem.lastName}</h1>
              <p>{elem.email}</p>
              <p>{elem.company.title}</p>
            </div>
          )
        })
      }
    </div>



  </div>
}

export default App;



