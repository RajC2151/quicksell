import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
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
display:flex;
justify-content:space-between;
  font-size: 0.9rem;
  margin-bottom: 10px;
  color:#6e7074;
`;
function App() {
    const [groupedData, setGroupedData] = useState({
        Backlog: [],
        Todo: [],
        'In progress': [],
        Cancelled: [],
        Done: [],
    });

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                const groupedByStatus = {
                    Backlog: [],
                    Todo: [],
                    'In progress': [],
                    Cancelled: [],
                    Done: [],
                };

                data.tickets.forEach(ticket => {
                    groupedByStatus[ticket.status].push(ticket);
                });

                setGroupedData(groupedByStatus);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <StatusSection>
                <StatusColumn>
                    <ColumnHeading>
                        <div>
                            Backlog {groupedData.Backlog.length}

                        </div>
                        <div>
                            <BsPlus /> <BsThreeDots />
                        </div>
                    </ColumnHeading>
                    {groupedData.Backlog.map(ticket => (
                        <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
                    ))}
                </StatusColumn>
                <StatusColumn>
                    <ColumnHeading>
                        <div>
                            To do {groupedData.Todo.length}

                        </div>
                        <div>
                            <BsPlus /> <BsThreeDots />
                        </div>
                    </ColumnHeading>
                    {groupedData.Todo.map(ticket => (
                        <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
                    ))}
                </StatusColumn>
                <StatusColumn>
                    <ColumnHeading>
                        <div>
                            In progress {groupedData['In progress'].length}

                        </div>
                        <div>
                            <BsPlus /> <BsThreeDots />
                        </div>
                    </ColumnHeading>
                    {groupedData['In progress'].map(ticket => (
                        <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
                    ))}
                </StatusColumn>
                <StatusColumn>
                    <ColumnHeading>
                        <div>
                            Done {groupedData.Done.length}

                        </div>
                        <div>
                            <BsPlus /> <BsThreeDots />
                        </div>
                    </ColumnHeading>
                    {groupedData.Done.map(ticket => (
                        <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
                    ))}
                </StatusColumn>
                <StatusColumn>
                    <ColumnHeading>
                        <div>
                            Cancelled {groupedData.Cancelled.length}

                        </div>
                        <div>
                            <BsPlus /> <BsThreeDots />
                        </div>
                    </ColumnHeading>
                    {groupedData.Cancelled.map(ticket => (
                        <Card title={ticket.title} id={ticket.id} tag={ticket.tag} />
                    ))}
                </StatusColumn>
            </StatusSection>
        </div>
    );
}

export default App;
