
const App = ()=> {
    function btnclicked() {
        console.log("Button Clicked")
    }
    return <div>
        <button onClick={btnclicked}
                className="active:scale-95 m-5 bg-emerald-700 text-white px-3 py-2 rounded">
        Click to Download</button>
    </div>
}

export default App;