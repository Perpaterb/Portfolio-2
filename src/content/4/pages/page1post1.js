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
            <h1> Mac G5 PC build: part 4 </h1>
            <br/>
            <p>3 Mar 2020 Solder update#</p>
            <br/>
            <p>2x USB, 2x Audio and 1x Network on the back IO.</p>
            <br/>
            <p>Everything else doesn't work on the back IO.</p>
        </Main>
    )
}

export default page1post1;