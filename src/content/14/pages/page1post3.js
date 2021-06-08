import React from 'react';
import styled from 'styled-components';
import imgs from './imgs';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 50px;
text-align: center;
`

const page1post3 = () => {
    return (
        <Main>
            <br/>
            <img src={imgs[2]} alt="linkedin" style={{width: 150}}/>
            <br/>
            <h1>Linkedin</h1>
            <br/>
            <a href="http://linkedin.com/in/andrew-strange-bb23b1214" target="_blank" rel="noreferrer"> linkedin.com/in/andrew-strange-bb23b1214</a>
        </Main>
    )
}

export default page1post3;