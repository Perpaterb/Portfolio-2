import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 20px;
text-align: center;
`

const page1post1 = () => {
    return (
        <Main>
            <h1>Other coding stuff</h1>
            <br/>
            <h1>1. First JS page. 1.5 day Hackathon by myself. Comparison site for 2 football payers.</h1>
            <p>Pulling data from sports-reference.com and rearranging it to make it look good.</p>
            <a href="https://github.com/Perpaterb/HaalandVsMbappe"  target="_blank" rel="noreferrer" >Github</a>
            <br/>
            <h1>2. First React app.  Reacting in React.</h1>
            <p>Just a simple click training game</p>
            <a href="https://reacting-in-react.herokuapp.com/"  target="_blank" rel="noreferrer" >Reacting in React</a>
            <a href="https://github.com/Perpaterb/Reacting-in-React"  target="_blank" rel="noreferrer" >Github</a>
        </Main>
    )
}

export default page1post1;