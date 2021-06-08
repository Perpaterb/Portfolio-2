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
            <h1> Mac G5 PC build: post 2</h1>
            <p> 20 Nov 2019 Update:</p>
            <br/>
            <p>All parts purchased and acquired.</p>
            <p>Work started on making new back plate.</p>
            <p>MB put together.</p>
            <p>Designs made for printed mounts. Pump,radiator and MB.</p>
            <br/>
            <p>Sorry for bad photos DSLR is in the shop it will get better.</p>
        </Main>
    )
}

export default page1post1;