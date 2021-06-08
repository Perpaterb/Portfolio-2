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
            <h1> Mac G5 PC build: post 3</h1>
       
            <p>3 Mar 2020 </p>
            <br/>
            <p>Camera back from the shop.</p>
            <p>Soldering Done:</p>
            <p>Front and back IO wiring Done:</p>
            <p>Printing Done:</p>
            <br/>
            <p>Mounting plate prints abandoned it was not working.</p>
        </Main>
    )
}

export default page1post1;