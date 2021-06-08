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
            <h1>Portfolio Project Coder Academy Flex Track</h1>

            <h3>Nov 12, 2020 </h3>

            <p>Brief</p>

            <p>Create a portfolio website which presents you as a dev and IT professional. The purpose is to provide an online portfolio that provides information about you, your skills, interests, professional knowledge and a showcase of your work.</p>

            <p>This was pretty much my first ever website</p>
            <p>First ever using HTML CSS and a bit of JavaScript on the into page</p>
            <p>This was a showcase of my creative side more then anything else. I just really didn't want to have a site that looked like all the others</p>

            <h3>Portfolio 1.0</h3>
            <a href="https://ecstatic-goodall-6aac20.netlify.app/" target="_blank" rel="noreferrer"> https://ecstatic-goodall-6aac20.netlify.app/</a>
        </Main>
    )
}

export default page1post1;