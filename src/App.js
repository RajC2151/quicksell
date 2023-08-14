import React from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import { useState, createContext } from 'react';
import Priority from './Components/Priority';
import User from './Components/User';
import Status from './Components/Status';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const gbl=createContext();


function App() {
  const [prio,setPrio]=useState(true);
  // const [data, setData] = useState([]);
  // const fetchData=async()=>{
  //   try{
  //     const res = await fetch("https://apimocha.com/quicksell/data");
  //       const responseData = await res.json();
  //       setData(responseData);
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);


  // const API_URL = 'https://apimocha.com/quicksell/data';

  // fetch(API_URL)
  //   .then(response => response.json())
  //   .then(data => {
  //     const groupedByPriority = {
  //       4: [],
  //       3: [],
  //       2: [],
  //       1: [],
  //       0: []
  //     };

  //     data.tickets.forEach(ticket => {
  //       groupedByPriority[ticket.priority].push(ticket);
  //     });

  //     const priority4 = groupedByPriority[4];
  //     const priority3 = groupedByPriority[3];
  //     const priority2 = groupedByPriority[2];
  //     const priority1 = groupedByPriority[1];
  //     const noPriority = groupedByPriority[0];

  //     console.log('Priority 4:', priority4);
  //     console.log('Priority 3:', priority3);
  //     console.log('Priority 2:', priority2);
  //     console.log('Priority 1:', priority1);
  //     console.log('No Priority:', noPriority);
  //   })
  //   .catch(error => console.error('Error fetching data:', error));







  






  // const API_URL = 'https://apimocha.com/quicksell/data';

  // fetch(API_URL)
  //   .then(response => response.json())
  //   .then(data => {
  //     const groupedByUser = {};

  //     data.tickets.forEach(ticket => {
  //       const user = data.users.find(user => user.id === ticket.userId);
  //       if (user) {
  //         if (!groupedByUser[user.name]) {
  //           groupedByUser[user.name] = [];
  //         }
  //         groupedByUser[user.name].push(ticket);
  //       }
  //     });

  //     console.log('Grouped by User:', groupedByUser);
  //   })
  //   .catch(error => console.error('Error fetching data:', error));






  return (


        <gbl.Provider value={{prio,setPrio}}>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Status />} />
          <Route path="/priority" element={<Priority />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
      </gbl.Provider>


  );
}

export default App;
export {gbl};
