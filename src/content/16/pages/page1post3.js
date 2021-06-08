import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 20px;
text-align: center;
`

const page1post3 = () => {
    return (
        <Main>
            <h1>Problem</h1>
            <br/>
            <p>I needed to scrape ASX data for this APP to work</p>
            <p>Hosting the app on AWS of Heroku was not letting me scrape the data I needed</p>
            <br/>
            <h1>Solution</h1>
            <p>I setup a web server in my house</p>
            <br/>
            <p>Net forwarding, Ubuntu web server setup, IPS' blocking ports, Deployment and Remote server management. where all completely new to me.</p>
            <p>If was a lot of fun and very rewarding</p>
        </Main>
    )
}

export default page1post3;