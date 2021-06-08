import React, { useEffect, useState } from "react";
import useWindowDimensions from './windowDimensions';
import { useSpring , animated} from 'react-spring';
import thumbnails from './thumbnails';

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
            config: { duration: (Math.random() * (80000 - 40000) + 40000) }
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

    const index = props.pageNumbers

    useEffect(() => {
        startAndRestart()
   
    },[]);

    const imgStyle = {
        width: '80px', 
        height: '80px',
        borderRadius: '50%',
        //boxShadow: "0px 10px 20px #00000060",
    }
    


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
            <img src={thumbnails[props.pageNumbers-1]} style={imgStyle} alt={"name"} />
        </animated.div>
    );
};


export default Drop;