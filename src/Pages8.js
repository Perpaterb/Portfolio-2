import React, { useRef, useEffect, useState} from 'react'
import { useSprings, animated} from 'react-spring'
import { useDrag, useWheel} from 'react-use-gesture'
import imgs from './data'
import styles from './styles.module.css'

function Pages8({locations, pageOrder, radius, locationUpdater, pageOrderUpdater, positionsDefault}) {
    const [state, setState] = useState({
        scale: 1,
        radius: radius,
        defaultRadius: radius,
        mouseOfset: [0 ,0],
        locations: locations,
        pageOrder: pageOrder,
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



    }, [])

    const domTarget = useRef(null)

    const [props, api] = useSprings(state.locations.length, i => ({
        x: state.locations[i].x, 
        y: state.locations[i].y, 
        scale: state.pageOrder[i] === 1 ? state.scale : (state.scale*0.3),
        config: { 
            mass: state.pageOrder[i] === 1 ? 1 : (Math.random() * (10 - 1) + 1),
            tension: state.pageOrder[i] === 1 ? 1200 : (Math.random() * (600 - 150) + 150), 
            friction: state.pageOrder[i] === 1 ? 50 : (Math.random() * (200 - 120) + 120) 
            },
        }))
    
    const dragBind = useDrag(({ args: [originalIndex], offset: [x, y] }) => {
        if (originalIndex === state.currentActive) {
            api.start(i => ({
                x: state.locations[state.positionsArray.findIndex(p => p === i)].x + x,
                y : state.locations[state.positionsArray.findIndex(p => p === i)].y + y
            }))
            setState(state => ({
                    ...state,
                    mouseOfset: [x, y],
            }));
            console.log("Drag")
        }
    })

    const wheelBind = useWheel(({ args: [originalIndex], delta: [, y] }) => {
        if (originalIndex === state.currentActive) {
            const newScale = state.scale + (y * -0.003)
            if (newScale > .5) {
                api.start(i => ({scale: state.pageOrder[i] === 1 ? newScale : (newScale/3)}))
                const newLocations = locationUpdater(state.defaultRadius * newScale)
                setState(state => ({
                    ...state,
                    scale: newScale,
                    radius: state.defaultRadius * newScale,
                    locations: newLocations,
                }));
                api.start(i => ({
                    x: state.locations[state.positionsArray.findIndex(p => p === i)].x + state.mouseOfset[0],
                    y : state.locations[state.positionsArray.findIndex(p => p === i)].y + state.mouseOfset[1]
                }))
            }
        }
    })

    const handleOnClickEvent = (page) => {
        if (state.pageOrder[page] !== 1) {
            console.log("clicked  ", page)
            const newPageOrder = pageOrderUpdater(page)
            api.start(i => ({scale: newPageOrder[i] === 1 ? state.scale : (state.scale/3)}))
            const positionsArray = []
            positionsArray.push(page)
            for (let i = 0; i < newPageOrder.length; i++) {
                if (i !== page){
                    positionsArray.push(i)
                } 
            }
            
            setState(state => ({
                ...state,
                pageOrder: newPageOrder,
                currentActive: page,
                positionsArray: positionsArray,
            }));
            
            api.start(i => ({
                x: state.locations[positionsArray.findIndex(p => p === i)].x + state.mouseOfset[0],
                y : state.locations[positionsArray.findIndex(p => p === i)].y + state.mouseOfset[1],
            }))
        }
    }

    return props.map(({x, y, scale}, i) => (
        <animated.div
        {...dragBind(i)}
        {...wheelBind(i)}
        onClickCapture = {() => handleOnClickEvent(i)}
        key={i}
        ref={domTarget} 
        className={styles.card}
        style={{
            zindex: 400,
            x,
            y,
            scale,
            position: 'absolute',
            
        }}>
            <animated.div>
                <div key={i} style={{ backgroundImage: `url(${imgs[i]})` }} />
            </animated.div>
        </animated.div>
    ))   
}
export default Pages8;
