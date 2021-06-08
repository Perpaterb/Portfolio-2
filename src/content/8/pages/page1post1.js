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
            <h1> Mac G5 PC build: part 8 </h1>
            <p>15 may 2020 Update 7#</p>
            <br/>
            <p>I have completely changed the way the mounting plate works. Now it’s glued onto the inner case and the outer case is screwed on last.</p>
            
            <p>It's hard to explain. I hope the pictures help.</p>
            
            <p>Basically now I can see the cables on the back of the mounting plate and there are no visible screws holding it in place.</p>
            
            <p>I am however losing a little rigidity over all as the inner case can only be screwed onto the outer case on one side</p>
        </Main>
    )
}

export default page1post1;