import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { BsThreeDots, BsPlus } from 'react-icons/bs';
import { gbl } from '../App' 
import { FcBusinessman } from "react-icons/fc";
const API_URL = 'https://apimocha.com/quicksell/data';



const StatusSection = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StatusColumn = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ColumnHeading = styled.h2`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: #6e7074;
`;

// Example of a Context API for prior value
const PriorContext = React.createContext();

function App() {
  const [groupedByUser, setGroupedByUser] = useState({});
  const gblInstance2 = useContext(gbl); // You need to provide the PriorContext value using a Context Provider

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const groupedByUser = {};

        data.tickets.forEach(ticket => {
          const user = data.users.find(user => user.id === ticket.userId);
          if (user) {
            if (!groupedByUser[user.name]) {
              groupedByUser[user.name] = [];
            }
            groupedByUser[user.name].push(ticket);
          }
        });

        // Sort the tickets based on context
        for (const userName in groupedByUser) {
          groupedByUser[userName].sort((a, b) => {
            if (gblInstance2.prio) {
              // Sort in descending order of priority
              return b.priority - a.priority;
            } else {
              // Sort in ascending order of titles
              return a.title.localeCompare(b.title);
            }
          });
        }

        setGroupedByUser(groupedByUser);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [gblInstance2.prio]);

  return (
    <div>
      <StatusSection>
        {Object.keys(groupedByUser).map(userName => (
          <StatusColumn key={userName}>
            <ColumnHeading>
              <div>
                <FcBusinessman/> {userName} {groupedByUser[userName].length}
              </div>
              <div>
                <BsPlus /> <BsThreeDots />
              </div>
            </ColumnHeading>
            {groupedByUser[userName].map(ticket => (
              <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
            ))}
          </StatusColumn>
        ))}
      </StatusSection>
    </div>
  );
}

export default App;
