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
            <h1>Portfolio 2 (this website)</h1>
            <h3>So much new, So much front end, So much hitting my head against a wall and so so so much reward </h3>
            <a href="https://github.com/Perpaterb/Portfolio-2"  target="_blank" rel="noreferrer" >Github</a>
            <br/>
            <h3>finished the 8th of June 2021</h3>
            <p>In a nutshell the concept was a springy gallery.</p>
            <p>Click on a bubble and explore the gallery inside</p> <br/>
            <p>Things that still need work:</p>
            <p>1. Mobile vew.</p>
            <p>2. Gallery can't have images or pages with different aspects ratios.</p>
            <p>3. As an individual part the smaller pages in the gallery move much more freely.</p> 
        </Main>
    )
}

export default page1post1;