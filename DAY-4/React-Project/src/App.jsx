import Btn from "./Button";
import Card from "./Card";
const App = () => {
  return <div className="p-3 h-screen bg-black">
    <Card user = 'Prakash' age = '22'/>
    <Card user = 'Shiv' age = '23'/>
    <Card user = 'Hanma' age = '25'/>
    <Btn label="Buy Now" />
  </div>
}

export default App;