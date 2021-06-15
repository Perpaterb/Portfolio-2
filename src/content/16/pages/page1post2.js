import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 20px;
text-align: center;
`

const page1post2 = () => {
    return (
        <Main>
            <h1>ASX Trading Game</h1>
            <br/>
            <p>Welcome to the ASX trading game where you are competing only against others playing this game.</p>
            <p>A new player gets given a choice between 4 random asx 200 companies to get $10,000 worth of stock in and $10,000 cash.</p>
            <p>A player can only buy stocks using their cash from other players. The price of the stock is set by the owner at a % above or below the current market value.</p>
            <p>All stocks must have a price where they can be sold. This range is always within %5 of the market price.. So even if you want to keep your stock another player can always buy it from you for 5% above the market.</p>
            <p>Cash doesn't move and will be half of the value on the site as everyone starts with 10k stocks and 10k cash.</p>
            <p>Users are ranked by their current market value.</p>
        </Main>
    )
}

export default page1post2;