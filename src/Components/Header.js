import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { gbl } from '../App';


export default function Header() {
    const [selectedOption, setSelectedOption] = useState('status');
    const [selectedPrio, setSelectedPrio] = useState(true);

    const navigate = useNavigate();
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        navigate(`/
${selectedValue}`);
    };
    const gblInstance1 = useContext(gbl);
    const onTitleChange = () => {
        gblInstance1.setPrio(!gblInstance1.prio);
    }


    return (
        <>
            <Nav>
                <Button>
                    <div className="dropdown">
                        <button
                            className="btn  dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', marginLeft: "10px" }}
                        >
                            Display
                        </button>
                        <ul className="dropdown-menu">
                            <Container1>
                                <label>Grouping:</label>
                                <select
                                    className="form-select"
                                    id="pr"
                                    aria-label="Default select example"
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                >
                                    <option value="">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </Container1>
                            <Container2>
                                <label>Ordering:</label>
                                <select id="prio" className="form-select" aria-label="Default select example"
                                    value={gblInstance1.prio}
                                    onChange={onTitleChange}
                                >
                                    <option selected value="true">priority</option>
                                    <option value="false">title</option>
                                </select>
                            </Container2>
                        </ul>
                    </div>
                </Button>
            </Nav>
        </>
    );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: white;
  border: 2px solid grey ;
    // boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)'
`;

const Button = styled.div`
  width: 200px;
`;

const Container1 = styled.div`
  display: flex;
  width: 250px;
  label {
    margin: 0px 10px;
  }
  padding: 0px 10px;
  margin-bottom: 7px;
`;

const Container2 = styled(Container1)``;
