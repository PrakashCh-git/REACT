


const Card = (props) => {
   return(
   <div  className="h-[70vh] w-86 rounded-2xl flex flex-col items-center px-2 bg-white text-black py-5">
            <img className="h-40 w-40 rounded-full object-cover" src={props.elem.imgURL} alt="" />
            <h1 className="text-6xl mb-2 font-semibold">{props.elem.userName}</h1>
            <h2 className="text-3xl text-blue-500 mb-8">{props.elem.desigNation}</h2>
            <p className="text-center leading-tight">{props.elem.desc }</p>
            <button
            onClick={()=>{
                props.deleteUser(props.idx);
            }}
             className="px-4 py-2 bg-rose-500 rounded cursor-pointer active:scale-95 mt-4">Remove</button>
    </div>)
}

export default Card;