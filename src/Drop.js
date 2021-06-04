import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import useWindowDimensions from './windowDimensions';
//import {Drops, DropSpeed} from "./droppings";
import { useSpring , animated} from 'react-spring'

const Child = styled.div`
width: 50px;
height: 50px;
background: purple;`


const Drop = (props) => {
    const [state, setState] = useState({
        width: props.childWidth,
        height: props.childHeight,
    });

    const { height, width } = useWindowDimensions()

    const { move } = useSpring({
        from: { move: 0 },
        onRest: () => 
        setState(state => ({
            ...state,
            width: props.childWidth,
            height: props.childHeight,
        }))
    });

    useEffect(() => {

        move.start({
            from: 0,
            to: height*3,
            config: { duration: 10000 }
        });
    });
 
    const handleOnClickEvent = (page) => {
        console.log (page)
    }


    const index = props.page

    return (
        <animated.div
            onClickCapture = {() => handleOnClickEvent(index)}
            style={{
                position:'absolute', 
                transform: move.to((arg) => {return `translate(${state.width}px , ${state.height + arg}px)`}),
            }}
            >
            <Child>
             <h1>{index}</h1>
            </Child>
        </animated.div>
    );
};

export default Drop;