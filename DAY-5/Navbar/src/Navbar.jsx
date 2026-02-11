
const Navbar = (props) => {
    return <div style={{backgroundColor: props.color}}
                className="flex items-center justify-between px-5 py-5 m-1"
    >
        <h1 className="text-white">{props.title}</h1>
        <div className="text-white flex gap-10">
            {props.links.map(function(elem,idx){
                return <h4 key={idx}>{elem}</h4>
            })}
        </div>
    </div>
}

export default Navbar;



