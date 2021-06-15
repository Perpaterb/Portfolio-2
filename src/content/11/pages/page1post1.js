import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 32px;
text-align: center;
`

const page1post1 = () => {
    return (
        <Main>
            <h1> 3D printer transparent-ish Stars lights </h1>
            <br/>
            <p>For Christmas 2020</p>
            <br/>
            <p>Nothing really hard just took a bit to get the print filament doing what I wanted.</p>
        </Main>
    )
}

export default page1post1;