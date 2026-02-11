import Navbar from "./Navbar";

const App = () => {
  return <div >
    <Navbar title = "Prakash" links = {['About','Description','Designation','Contact']} color = "blue"/>
    <Navbar title = "Ravi" links = {['About','Description','Designation','Contact']} color = "orange"/>
    <Navbar title = "Shankar" links = {['About','Description','Designation','Contact']} color = "purple"/>
  </div>
}

export default App;