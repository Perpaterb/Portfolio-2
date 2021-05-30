import React from 'react';
import styled from 'styled-components';

const Child = styled.div`
width: 50px;
height: 50px;
background: purple;`


function Pages5() {
  return (
    <Child
        style={{
            left: 100,
            top: 100,
        }}
    />
  )
}


export default Pages5;