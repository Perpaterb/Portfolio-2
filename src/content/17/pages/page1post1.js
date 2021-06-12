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
            
            {/* <h1>1. First JS page. 1.5 day Hackathon by myself. Comparison site for 2 football payers.</h1>
            <p>Pulling data from sports-reference.com and rearranging it to make it look good.</p>
            <a href="https://github.com/Perpaterb/HaalandVsMbappe"  target="_blank" rel="noreferrer" >Github</a>
            <br/> */}
            <h1>1. First React app.  Reacting in React.</h1>
            <p>Just a simple click training game</p>
            <a href="https://reacting-in-react.herokuapp.com/"  target="_blank" rel="noreferrer" >Reacting in React</a><br/>
            <a href="https://github.com/Perpaterb/Reacting-in-React"  target="_blank" rel="noreferrer" >Github</a>
            <br/>
            <h1>2. 10th-11th 06 2021. Hackathon with 2 classmates.</h1>
            <p>A logic gate puzzle</p>
            <p>This one was a lot of work for 1.5 days.</p> 
            <p>I came up with the idea, Was the project manager and ended up doing 90% of the logic</p>
            <p>For me it was a big lesson in project management and starting with everyone completely understanding the goal. With only 1.5 days with a really abstract goal that was really hard. </p>
            <p>We completed the app and "definitely won" the Hackathon.</p> 
            <a href="https://bad-react-puzzle.herokuapp.com/"  target="_blank" rel="noreferrer" >Logic Gate Puzzle </a> <br/>
            <a href="https://github.com/Perpaterb/React-Puzzle"  target="_blank" rel="noreferrer" >Github</a>
        </Main>
    )
}

export default page1post1;