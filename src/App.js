import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import { useState,useEffect } from 'react';


function App() {
  const [data, setData] = useState([]);
  const fetchData=async()=>{
    try{
      const res = await fetch("https://apimocha.com/quicksell/data");
        const responseData = await res.json();
        setData(responseData);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
    <Header/>
    <Card d={data}/>
    </div>
  );
}

export default App;
