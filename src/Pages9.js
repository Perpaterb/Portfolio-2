import React, { useRef, useEffect, useState} from 'react'
import { useSprings, animated} from 'react-spring'
import { useDrag, useWheel} from 'react-use-gesture'
import imgs from './data'
import styles from './styles.module.css'
import useWindowDimensions from './windowDimensions';

function Pages9({locations, radius, locationUpdater, positionsDefault, nextPage}) {
    const [state, setState] = useState({
        scale: 1,
        radius: radius,
        defaultRadius: radius,
        mouseOfset: [0 ,0],
        locations: locations,
        currentActive: 0,
        positionsArray: positionsDefault,
        pageToOpen: nextPage,
        pageShowing: false,
        springEnd: false,
    });

    //Spring setup
    const [props, api] = useSprings(state.locations.length, i => ({
        x: 0, 
        y: 0, 
        scale: 0.1,
        config: { 
            mass: state.currentActive === i ? 1 : (Math.random() * (5 - 3) + 1),
            tension: state.currentActive === i ? 800 : (Math.random() * (400 - 150) + 150), 
            friction: state.currentActive === i ? 50 : (Math.random() * (200 - 120) + 120) 
            },
        onRest () { setState(state => ({ ...state, springEnd: true,}));},
    }))

    //console.log("state.springEnd",state.springEnd)
    //console.log("state.pageShowing",state.pageShowing)


    ///gets page height 
    const { height } = useWindowDimensions()

     // move page up and set state pageToOpen and pageShowing
    const pageUp = () => {
        api.start(i => ({
            x: state.locations[state.positionsArray.indexOf(i)].x + state.mouseOfset[0],
            y : state.locations[state.positionsArray.indexOf(i)].y + state.mouseOfset[1] - (height + height/1.5 ),
            scale: i === state.currentActive ? state.scale : (state.scale*0.3),
            config: { 
                mass: state.currentActive === i ? 3 : (Math.random() * (5 - 3) + 1),
                tension: state.currentActive === i ? 400 : (Math.random() * (400 - 150) + 150), 
                friction: state.currentActive === i ? 120 : (Math.random() * (200 - 120) + 120) 
            },
        }))
        setState(state => ({
            ...state,
            pageToOpen: nextPage,
            pageShowing: true,
        }));
    }

    // Move page Down
    const pageDown = () => {
        api.start(i => ({
            x: 1,
            y: 1,
            scale: 0.1,
            config: { 
                mass: 1,
                tension: 400, 
                friction: 100, 
            }
        }))
        setState(state => ({
            ...state,
            pageShowing: false,
            pageToOpen: nextPage,
        }));
    }

    // if no page is up and a drop is clicked
    if (nextPage !== state.pageToOpen && state.pageShowing === false ){
         pageUp(nextPage)
    }

    //if a page is up and a different drop is clicked
    if (nextPage !== state.pageToOpen && state.pageShowing === true ){     
        console.log("pull page down")
        pageDown()
    }
    
    // When any spring is finished
    if (state.pageShowing === false ){

        // If new page needs to come up
            if (state.springEnd === true ) {
            pageUp(state.pageShowing)

            setState(state => ({
                ...state,
                springEnd: false,
                pageToOpen: nextPage,
            }));
        }
    }



    const domTarget = useRef(null)

    const dragBind = useDrag(({ args: [originalIndex], offset: [x, y] }) => {
        if (originalIndex === state.currentActive) {
            api.start(i => ({
                x: state.locations[state.positionsArray.indexOf(i)].x + x,
                y: state.locations[state.positionsArray.indexOf(i)].y + y  - (height + height/1.5 ),
                config: { 
                    mass: state.currentActive === i ? 1 : (Math.random() * (5 - 3) + 1),
                    tension: state.currentActive === i ? 800 : (Math.random() * (400 - 150) + 150), 
                    friction: state.currentActive === i ? 50 : (Math.random() * (200 - 120) + 120) 
                },
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
                const newLocations = locationUpdater(state.defaultRadius * newScale)
                setState(state => ({
                    ...state,
                    scale: newScale,
                    radius: state.defaultRadius * newScale,
                    locations: newLocations,
                }));
                api.start(i => ({
                    x: state.locations[state.positionsArray.indexOf(i)].x + state.mouseOfset[0],
                    y: state.locations[state.positionsArray.indexOf(i)].y + state.mouseOfset[1] - (height + height/1.5 ),
                    scale: i === state.currentActive ? state.scale : (state.scale*0.3),
                    config: { 
                        mass: state.currentActive === i ? 1 : (Math.random() * (5 - 3) + 1),
                        tension: state.currentActive === i ? 800 : (Math.random() * (400 - 150) + 150), 
                        friction: state.currentActive === i ? 50 : (Math.random() * (200 - 120) + 120) 
                        },
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

            api.start(i => ({
                x: state.locations[positionsArray.indexOf(i)].x + state.mouseOfset[0],
                y : state.locations[positionsArray.indexOf(i)].y + state.mouseOfset[1] - (height + height/1.5 ),
                scale: i === page ? state.scale : (state.scale*0.3),
                config: { 
                    mass: page === i ? 1 : (Math.random() * (5 - 3) + 1),
                    tension: page === i ? 800 : (Math.random() * (400 - 150) + 150), 
                    friction: page === i ? 50 : (Math.random() * (200 - 120) + 120) 
                },
            }))
            
            setState(state => ({
                ...state,
                currentActive: page,
                positionsArray: positionsArray,
            }));
        }
    }

    useEffect(() => {
        const preventDefault = function (e) { return e.preventDefault(); }
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)

        return () => {
            document.removeEventListener('gesturestart', preventDefault)
            document.removeEventListener('gesturechange', preventDefault)
        }

    }, [])


    useEffect(() => {
            setState(state => ({
                ...state,
                pageToOpen: nextPage,
            }));
    }, [nextPage])




    return state.positionsArray.map((i) => (
        <animated.div
        {...dragBind(i)}
        {...wheelBind(i)}
        onClickCapture = {() => handleOnClickEvent(i)}
        key={i}
        ref={domTarget} 
        className={styles.card}
        style={{
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
