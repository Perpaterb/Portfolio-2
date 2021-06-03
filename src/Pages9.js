import React, { useRef, useEffect, useState} from 'react'
import { useSprings, animated} from 'react-spring'
import { useDrag, useWheel} from 'react-use-gesture'
import imgs from './data'
import styles from './styles.module.css'

function Pages9({locations, radius, locationUpdater, positionsDefault}) {
    const [state, setState] = useState({
        scale: 1,
        radius: radius,
        defaultRadius: radius,
        mouseOfset: [0 ,0],
        locations: locations,
        currentActive: 0,
        positionsArray: positionsDefault,
    });

    useEffect(() => {
        const preventDefault = function (e) { return e.preventDefault(); }
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)

        return () => {
            document.removeEventListener('gesturestart', preventDefault)
            document.removeEventListener('gesturechange', preventDefault)
        }

    })

    const domTarget = useRef(null)
    

    const [props, api] = useSprings(state.locations.length, i => ({
        x: state.locations[state.positionsArray.indexOf(i)].x, 
        y: state.locations[state.positionsArray.indexOf(i)].y, 
        scale: i === state.currentActive ? state.scale : (state.scale*0.3),
        config: { 
            mass: state.currentActive === i ? 1 : (Math.random() * (10 - 1) + 1),
            tension: state.currentActive === i ? 1200 : (Math.random() * (400 - 150) + 150), 
            friction: state.currentActive === i ? 50 : (Math.random() * (200 - 120) + 120) 
            },
        }))
    

    const dragBind = useDrag(({ args: [originalIndex], offset: [x, y] }) => {
        if (originalIndex === state.currentActive) {
            api.start(i => ({
                x: state.locations[state.positionsArray.indexOf(i)].x + x,
                y: state.locations[state.positionsArray.indexOf(i)].y + y,

            }))
            setState(state => ({
                    ...state,
                    mouseOfset: [x, y],
            }));
        }
    })

    const wheelBind = useWheel(({ args: [originalIndex], delta: [, y] }) => {
        if (originalIndex === state.currentActive) {
            const newScale = state.scale + (y * -0.003)
            if (newScale > .5) {
                api.start(i => ({scale: i === state.currentActive ? state.scale : (state.scale*0.3)}))
                const newLocations = locationUpdater(state.defaultRadius * newScale)
                setState(state => ({
                    ...state,
                    scale: newScale,
                    radius: state.defaultRadius * newScale,
                    locations: newLocations,
                }));
                api.start(i => ({
                    x: state.locations[state.positionsArray.indexOf(i)].x + state.mouseOfset[0],
                    y: state.locations[state.positionsArray.indexOf(i)].y + state.mouseOfset[1],
                }))
            }
        }
    })

    const handleOnClickEvent = (page) => {
        if (state.currentActive !== page) {
            api.stop()
            
            let positionsArray = []
            positionsArray.push(page)
            for (let i = 0; i < state.locations.length; i++) {
                if (i !== page){
                    positionsArray.push(i)
                } 
            }
            positionsArray = positionsArray.reverse()

            setState(state => ({
                ...state,
                currentActive: page,
                positionsArray: positionsArray,
            }));

            api.start(i => ({
                x: state.locations[positionsArray.indexOf(i)].x + state.mouseOfset[0],
                y : state.locations[positionsArray.indexOf(i)].y + state.mouseOfset[1],
                scale: i === page ? state.scale : (state.scale*0.3),
                config: { 
                    mass: page === i ? 1 : (Math.random() * (10 - 1) + 1),
                    tension: page === i ? 1200 : (Math.random() * (600 - 150) + 150), 
                    friction: page === i ? 50 : (Math.random() * (200 - 120) + 120) 
                },
            }))
        }
    }

    return state.positionsArray.map((i) => (
        <animated.div
        {...dragBind(i)}
        {...wheelBind(i)}
        onClickCapture = {() => handleOnClickEvent(i)}
        key={i}
        ref={domTarget} 
        className={styles.card}
        style={{
            zindex: 400,
            x: props[i].x,
            y: props[i].y,
            scale: props[i].scale,
            position: 'absolute',
            
        }}>
            <animated.div>
                <div key={i} style={{ backgroundImage: `url(${imgs[i]})` }}> </div>
            </animated.div>
        </animated.div>
    ))   
}
export default Pages9;
