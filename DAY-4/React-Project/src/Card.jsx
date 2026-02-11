const Card = (prop) => {
    return <div  className="bg-white border-2 border-red-500 m-2 rounded px-5 py-3 w-fit">
        {prop.user},{prop.age}
    </div>
}

export default Card;