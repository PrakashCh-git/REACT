import { useState } from "react";

const App = ()=> {
    const[title,setTitle] = useState('');
    const[allUsers, setallUsers] = useState([]);

    function SubmitHandler(e) {
        e.preventDefault();
        const newUsers = [...allUsers];
        newUsers.push(title);
        setallUsers(newUsers);
        console.log(newUsers); 
        
        setTitle('');
        console.log("Form Submitted");
    }
    
    return <div>
        <form onSubmit={(e)=>{
            SubmitHandler(e)
        }}>
            <input type="text" placeholder="Enter your name" value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }} />
            <button>Submit</button>
        </form>


        {
            allUsers.map((elem,idx)=>{
                return <h1 key={idx}>{elem}</h1>
            })
        }
    </div>
}

export default App;