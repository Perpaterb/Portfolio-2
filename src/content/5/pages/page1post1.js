import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 25px;
text-align: center;
`

const page1post1 = () => {
    return (
        <Main>
            <h1> Mac G5 PC build: part 5 </h1>
            <p>6 Mar 2020 I Regret Nothing</p>
            <br/>
            <p>Despite what you might think I regret nothing.</p>
            <p>I especially don't regret not having any access to behind the "Mounting Plate" once it's in and many of the parts can't be put in until the mounting plate is screwed down.</p>
            <br/>
            <p>I also don't regret using RGB fittings that need to be individually wired up.</p>
            <br/>
            <p>Wish me luck I have no idea if this will work</p>
        </Main>
    )
}

export default page1post1;