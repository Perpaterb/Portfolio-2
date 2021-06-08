import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 14px;
text-align: center;
`

const page1post1 = () => {
    return (
        <Main>
            <h1>Terminal Application Project Coder Academy Flex Track</h1>
            <h3>Dec 19, 2020 </h3>
            <br/>
            <p>Brief</p>
            <br/>
            <p>You are to design, implement and test a terminal application and throughout the process demonstrate that you are able to use a range of developer tools.</p>
            <br/>
            <p>The mandatory requirements/constraints for your application are:</p>
            <p>1. accept user input in the form of a file or text input</p>
            <p>2. produce printed output or interact with the file system</p>
            <br/>
            <h3>Minesweeper in ruby</h3>
            <a href="https://github.com/Perpaterb/minesweeper"  target="_blank" rel="noreferrer" >https://github.com/Perpaterb/minesweeper</a>
        </Main>
    )
}

export default page1post1;