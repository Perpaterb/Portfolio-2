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
            <h1>Connect 4 with minimax algorithm AI</h1>
            <h3>28 Dec 2020</h3>
            <br/>
            <p>I finished the Minesweeper app with loads of time to spare so I decided to test take things up a notch with some AI</p>

            <p>Overall it works but can only go 4 levels into the minimax algorithm and it is not super smart. Going 5 levels down takes a long time to make a move.</p>
            <h3>Connect 4 in ruby with AI</h3>
            <a href="https://github.com/Perpaterb/connect_4_ai"  target="_blank" rel="noreferrer">https://github.com/Perpaterb/connect_4_ai</a>
        </Main>
    )
}

export default page1post1;