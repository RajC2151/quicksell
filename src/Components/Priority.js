import styled from 'styled-components';
import Card from './Card';
import React, { useEffect, useState } from 'react';
import { BsThreeDots, BsPlus } from "react-icons/bs";

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

export default function Priority() {
  const [groupedByPriorityData, setGroupedByPriorityData] = useState({
    4: [],
    3: [],
    2: [],
    1: [],
    0: []
  });

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const groupedByPriority = {
          4: [],
          3: [],
          2: [],
          1: [],
          0: []
        };

        data.tickets.forEach(ticket => {
          groupedByPriority[ticket.priority].push(ticket);
        });

        setGroupedByPriorityData(groupedByPriority);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <StatusSection>
        <StatusColumn>
          <ColumnHeading>
            <div>
              No priority {groupedByPriorityData[0].length}
            </div>
            <div>
              <BsPlus /> <BsThreeDots />
            </div>
          </ColumnHeading>
          {groupedByPriorityData[0].map(ticket => (
            <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
          ))}
        </StatusColumn>
        <StatusColumn>
          <ColumnHeading>
            <div>
              Urgent {groupedByPriorityData[1].length}
            </div>
            <div>
              <BsPlus /> <BsThreeDots />
            </div>
          </ColumnHeading>
          {groupedByPriorityData[1].map(ticket => (
            <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
          ))}
        </StatusColumn>
        <StatusColumn>
          <ColumnHeading>
            <div>
              High {groupedByPriorityData[2].length}
            </div>
            <div>
              <BsPlus /> <BsThreeDots />
            </div>
          </ColumnHeading>
          {groupedByPriorityData[2].map(ticket => (
            <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
          ))}
        </StatusColumn>
        <StatusColumn>
          <ColumnHeading>
            <div>
              Medium {groupedByPriorityData[3].length}
            </div>
            <div>
              <BsPlus /> <BsThreeDots />
            </div>
          </ColumnHeading>
          {groupedByPriorityData[3].map(ticket => (
            <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
          ))}
        </StatusColumn>
        <StatusColumn>
          <ColumnHeading>
            <div>
              Low {groupedByPriorityData[4].length}
            </div>
            <div>
              <BsPlus /> <BsThreeDots />
            </div>
          </ColumnHeading>
          {groupedByPriorityData[4].map(ticket => (
            <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
          ))}
        </StatusColumn>
      </StatusSection>
    </div>
  );
}
