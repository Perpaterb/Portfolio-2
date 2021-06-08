import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 15px;
text-align: center;
`

const page1post1 = () => {
    return (
        <Main>
            <h1>Two Sided Marketplace Project Coder Academy Flex Track</h1>
            <p>Mar 20, 2021 </p>
            <br/>
            <p>Brief</p>
            <p>You are to design, build, deploy and present a Ruby on Rails web application (app).</p>
            <p>You must build a two sided marketplace. This app will cater to two markets that your app brings together.</p>
            <h3>Requirement</h3>
            <p>Create your app using Ruby on Rails.</p>
            <p>Use Postgresql database in development and production.</p>
            <p>Your app will have authentication (eg. Devise).</p>
            <p>Your app will have authorisation (i.e. users have restrictions on what they can see and edit).</p>
            <p>Your app will have some type of file (eg. images) uploading capability.</p>
            <p>Your app is to be deployed to Heroku (recommended) or AWS.</p>
            <br/>
            <h3>Note1: front end was not marked on the Assignment. It is not pretty</h3>
            <h3>Note2: The leaderboard logic is not working. It gets all players net worth once a day (first time takes a long time) but doesn't put them in order. </h3>
            <br/>
            <h3>Two Sided Marketplace Project in Ruby on Rails</h3>
            <a href="http://http://159.196.105.126/"  target="_blank" rel="noreferrer" >ASX Trading Game</a>
        </Main>
    )
}

export default page1post1;