import React, {useEffect, useRef, useState}  from 'react';
import {useGesture} from "react-use-gesture";
import { useTrail, animated } from 'react-spring'
import ReactDOM from 'react-dom'
import styled from 'styled-components';


const Child = styled.div`
width: 90px;
height: 100px;
background: green;
position: 'absolute';`

const Main = styled.div`
width: 300px;
height: 400px;
background: red;
position: 'absolute';`

function get_coords(radian_interval, radius) {
    if (radian_interval === 0) {
        return {        
            y: 0,
            x: 0,
        }
    } else {
        radius = Math.random() * ((radius + 10) - (radius - 10)) + (radius - 20)
        if (Math.cos(radian_interval) * radius >= 0) {
            if (Math.sin(radian_interval) * radius >= 0) {
                return {        
                    y: Math.cos(radian_interval) * radius *-1 *1.4, 
                    x: radius,
                }
            } else {
                return {        
                    y: Math.cos(radian_interval) * radius *-1 *1.4,
                    x: radius *-1,
                }
            }
        } else {
            return {        
                y: Math.cos(radian_interval) * radius *-1,
                x: Math.sin(radian_interval) * radius,
            }
        }
    }
}

function Pages3() {
    const [state, setState] = useState({
        scale: 1,
        radius: 220,
        defaultRadius: 220,
        cards: [],
        homePos: [],
        theta: 0.0,
        numberOfCard: 13,
        temp_theta: 0.0,
        anim_id: null,
        wheelWidth: 180,
        wheelHeight: 250,
    });

    //const domTarget = React.useRef(null)
    const child = useRef();

    const trans = (x, y) => `translate3d(${x}px,${y}px,0)`
    const [trail, set] = useTrail(state.numberOfCard, () => ({ xy: [0, 0], config: (i) => ({ tension: (Math.floor(Math.random() * (1200 - 600) + 400)), friction: (Math.floor(Math.random() * (130 - 40) + 40)) }) }))

    const [drag, setDrag] = React.useState(false)
    
    useEffect(() => {
        let center_of_wheel = {
            x: (state.wheelWidth / 2),
            y: (state.wheelHeight / 2),
        }
        
        let temp_cards = [];
        let tempCardsCoord = [];

        for (let i = 0; i < state.numberOfCard; i++) {
            temp_cards.push(
                {radian_interval: (Math.PI / (state.numberOfCard/2)) * i, center: center_of_wheel, key: "card_" + (i+1)}
            );
        }

        for (let i = 0; i < temp_cards.length; i++) {
            tempCardsCoord.push (get_coords(temp_cards[i].radian_interval, state.radius))
        }

        setState(state => ({
            ...state,
            cards: temp_cards,
            homePos: tempCardsCoord,
            
        }));
    }, [state.radius])
    
    useGesture(
    {
        
        onDragStart: () => setDrag(true),
        onDrag: ({ offset: [x, y] }) => set({ xy: [x, y] }),
        onDragEnd: () => setDrag(false),
        onPinch: ({ offset: [d]}) => { 
            setState(state => ({
            ...state,
            scale: 1 + d / 50
        }));
    },
    },
    { domTarget: child, eventOptions: { passive: false } }
    )

    const onScroll = (e) => {
        const newScale = state.scale + (e.deltaY * -0.003);        
        if (newScale > .5) {
            setState(state => ({
                ...state,
                scale: newScale,
                radius: state.defaultRadius * newScale 
            }));
        }
    }
    

    if (state.cards.length < 1 ) {
        console.log('Not up to date')
        return trail.map((props, i) => (
            <animated.div 
                ref={child} 
                onWheelCapture={onScroll} 
                style={{
                    position: 'absolute',
                    transform: props.xy.to(trans), 
                    scale: state.scale,
                    }} 
                >
                <Child/>
    
            </animated.div>
        ))

    } else {
        return trail.map((props, i) => (
            <animated.div 
                ref={child} 
                onWheelCapture={onScroll}
                style={{
                    left: state.wheelWidth / 2 - state.homePos[i].x,
                    top: state.wheelHeight / 2 - state.homePos[i].y,
                    position: 'absolute',
                    transform: props.xy.to(trans), 
                    scale: state.scale,
                    zIndex: 100 - i,
                    }} 
                >
                    {i === 0 &&
                        <Main/>}
                    {i != 0 &&
                        <Child style={{transform: 'translate(110%, 30%)'}}/>}

            </animated.div>
    ))
    }

}


ReactDOM.render(<Pages3 />, document.getElementById('root'))

export default Pages3;