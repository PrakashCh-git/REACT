import { useState } from "react";

const App = () => {

  const [marks,setMarks] = useState([33,27,67,90,13,87]);

  function giveGrace() {

    marks = marks.map((elem,idx)=>{
      return elem + 5;
    })

    setMarks(marks);
  }

  return <div className="m-3 flex gap-7 flex-col">

    {marks.map(function (elem,idx){
      return <h1>Marks of Student {idx+1} is {elem}, {(elem<33)?'FAIL':'PASS'}</h1>
    })}

    <button onClick={giveGrace}
      className="w-fit px-3 py-1 rounded bg-emerald-400 text-2xl">
      Give Grace Marks    
    </button>
  </div>
}
export default App;