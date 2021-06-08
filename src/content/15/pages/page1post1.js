import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 30px;
text-align: center;
`

const page1post1 = () => {
    return (
        <Main>
            <h1> 3D printed remote controlled crane </h1>
            <br/>
            <p>This is a fully remote toy crane i made for my son's 2nd birthday</p>
            <br/>
            <p>To say it would be a bit over the top was an understatement</p>
        </Main>
    )
}

export default page1post1;