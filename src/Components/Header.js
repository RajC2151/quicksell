import React from 'react';
import styled from 'styled-components';
export default function Header() {
    return (
      <>
        <Nav>
            <Button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </button>
                    <ul className="dropdown-menu">
                        <Container1>
                          <label>
                              Grouping:
                          </label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Status</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        </Container1>
                        <Container2>
                          <label>
                              Odering:
                          </label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>priority</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
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
    display:flex;
    align-items:center;
    height:70px;
    background-color:white;
    border:2px solid black;
    
`
const Button = styled.div`
    width:200px;
`
const Container1=styled.div`
    display:flex;
    width:250px;
    label{
      margin:0px 10px;
    }
    padding:0px 10px;
    margin-bottom:7px;
`
const Container2 =styled(Container1)`

`

