import React from "react";
import styled from 'styled-components';
export default function Card(props){
    console.log("Home");
    console.log(props);
    return(
        <Container>
            <First>
            <span>
                Cam 1
            </span>
            <img src="https://media.licdn.com/dms/image/D4D35AQHssxSJWj1qbQ/profile-framedphoto-shrink_400_400/0/1681098636893?e=1692532800&v=beta&t=wJGTK3zGBLhWIRcOJAl7Poucq1S_k0zsNnzAakeMfiY">
            </img>
            </First>
            <Second>
                <p>
                    Add Multi-Language Support
                </p>
            </Second>
            <Third>
            <span>
                ...
            </span>
            <span>
                Feauture
            </span>
            </Third>
        </Container>
    );
}
const Container=styled.div`
    width:500px;
    border:2px solid green;
`
const First=styled.div`
        display:flex;
        justify-content:space-between;
        img{
            height:30px;
            width:30px;
            border-radius:50%;
        }

`
const Second=styled.div`
        p{
            font-weight: bold;
        }

`
const Third=styled.div`

`