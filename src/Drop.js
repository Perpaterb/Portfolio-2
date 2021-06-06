import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import useWindowDimensions from './windowDimensions';
import { useSpring , animated} from 'react-spring'

const Child = styled.div`
width: 50px;
height: 50px;
background: purple;`

const Drop = (props) => {
    const [state, setState] = useState({
        width: props.childWidth,
        height: props.childHeight,
        x: 0,
    });

    const { width , height} = useWindowDimensions()

    const { move } = useSpring({
        from: { move: 0 },
        onRest: () => startAndRestart()
    });




    const startAndRestart = () => {
        move.start({
            from: 0,
            to: (props.childHeight * -1) + height +400,
            config: { duration: (Math.random() * (40000 - 20000) + 20000) }
        });
        setState(state => ({
        ...state,
            width: props.childWidth,
            height: props.childHeight,
            x: 0,
        }))
    }

    const handleOnClickEvent = (index) => {

        props.passingUpClickedFunction(index)
        move.start({
            width: props.childWidth + width,
            config: { 
                mass: 1,
                tension: 300, 
                friction: 120,
            },
        });
    }

    const index = props.page

    useEffect(() => {
        startAndRestart()
   
    },[]);


    return (
        <animated.div
            style={{
                opacity: state.opacity,
                position:'absolute', 
                transform: move.to((arg) => { 
                             return `translate(${state.width}px , ${state.height + arg}px)`}),
            }}
            onClickCapture = {() => handleOnClickEvent(index)}
            >
            <Child>
            <h1>{index}</h1>
            </Child>
        </animated.div>
    );
};


export default Drop;