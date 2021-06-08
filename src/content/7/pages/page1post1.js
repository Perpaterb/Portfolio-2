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
            <h1> Mac G5 PC build: part 7</h1>
            <p>15 may 2020 Update 6#</p>
            <br/>
            <p>I have had to leave the original bref a little.</p>

            <p>The USB ports on the back and front will now be blue USB3 ports. Changed from the original grey of the USB 2</p>

            <p>I will see if I can do something to make them look more grey but I don't like my chances.</p>

            <p>I just needed to do this to make it usable.</p>
            <p>Before 2x USB3.1 and 7x USB2</p>
            <p>Now 5x USB3.1 4x USB2</p>

            <p>I was hoping that this would not happen but the PSU was heating up because it was a bit starved of air.</p>

            <p>I have cut 2 big 92mm holes in the bottom of the case to let the air in. They have the same grill as the back of the computer and should not really be visible.</p>

            <p>I think it looks good but it is not the original bref of “No external changes apart from what is in the PCI Case slots”</p>
        </Main>
    )
}

export default page1post1;