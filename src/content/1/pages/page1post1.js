import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 18px;
text-align: center;

`

const page1post1 = () => {
    return (
        <Main>
            <h1> Mac G5 PC build: post 1</h1>
            <p>18 Nov 2019 Sleeper 2003 Apple Power Mac G5 case</p>
            <br/>
            <h3>Requirements.</h3>
            <p>1. No external changes apart from what is in the PCI Case slots.</p>
            <p>2. Only the water components light up. RGB fittings, RGB pump and RGB reservoir.</p>
            <p>3. Black coloured parts wherever possible.</p>
            <p>4. The plan is to CNC a reservoir that fits perfectly in the smaller top hole when the case is open.</p>

            <p>There are 4 screw holes on the bottom of the case and 17 mounted "nuts" on the back of the case wall. Everything will need to be mounted from these points with the possible exception of the 2 92mm back fans.</p>

            <p>First time on bit-tech after finding you tube channel while researching distribution plates</p>
            <p>First time case mod apart from hydro dipping a Corsair 380T</p>
            <p>First time custom water cooling</p>
            <p>First time hardlining (If that's the word)</p>
            <p>First time CNCing anything</p>
            <p>First time.... many many things.</p>
            <br/>
            <h3>My concerns at this point are.</h3>
            <p>Getting the PSU connected up with the case power socket.</p>
            <p>Getting all the back IO working. Network,USB and Audio.</p>
            <p>Getting all the front IO working. Power button, USB and Audio.</p>
            <p>CNCing the reservoir.</p>
            <p>Custom O-Ring for the reservoir. Preferable silicone I guess... I don't know.</p>
            <p>Air flow in general. Mostly having the PSU internal.</p>
            <p>Water destroying all my parts.</p>
            <p>..... I am sure it will be fine.</p>
        </Main>
    )
}

export default page1post1;