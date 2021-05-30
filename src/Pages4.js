import React, { useRef, useEffect, useState} from 'react'
import { useSprings, animated } from 'react-spring'
import { useGesture, useDrag} from 'react-use-gesture'
import imgs from './data'
import styles from './styles.module.css'

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
                    y: Math.cos(radian_interval) * radius *1.4, 
                    x: radius *-1,
                }
            } else {
                return {        
                    y: Math.cos(radian_interval) * radius *1.4,
                    x: radius,
                }
            }
        } else {
            return {        
                y: Math.cos(radian_interval) * radius,
                x: Math.sin(radian_interval) * radius *-1,
            }
        }
    }
}


function Pages4() {
    const [state, setState] = useState({
        scale: 1,
        radius: 220,
        defaultRadius: 220,
        cards: [],
        homePos: [],
        theta: 0.0,
        numberOfCard: 7,
        temp_theta: 0.0,
        anim_id: null,
        wheelWidth: 180,
        wheelHeight: 250,
    });

    const createLocationArray = []
    for (let i = 0; i < state.numberOfCard; i++) {
        createLocationArray.push (get_coords((Math.PI / (state.numberOfCard/2)) * i, state.radius))
    }
    console.log(createLocationArray)
    
    //const [drag, setDrag] = React.useState(false)

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

        //api({homePosX : state.homePos[i].x, homePosY: state.homePos[i].y})

        const preventDefault = function (e) { return e.preventDefault(); }
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)

        return () => {
            document.removeEventListener('gesturestart', preventDefault)
            document.removeEventListener('gesturechange', preventDefault)
        }
    }, [state.radius, state.numberOfCard, state.wheelWidth, state.wheelHeight])


    const domTarget = useRef(null)

    const [props, api] = useSprings(state.numberOfCard, i => ({
        x: 0, 
        y: 0, 
        scaleP: state.scale,
        scaleC: (state.scale*0.3),
        zoom: 0,
        radius: 220,
        config: { 
            mass: i === 0 ? 1 : (Math.random() * (10 - 1) + 1),
            tension: i === 0 ? 1200 : (Math.random() * (600 - 150) + 150), 
            friction: i === 0 ? 50 : (Math.random() * (200 - 120) + 120) 
            },
        }))
    
    const bind = useDrag(({ active, offset: [x, y] }) => {
        api.start(i => ({x, y}))
 
    })

    useGesture(
        
        {
          //onDrag: ({ active, offset: [x, y] }) => api({ x, y}),
          onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
          onMove: ({ xy: [px, py], dragging }) => !dragging && api({}),
          onHover: ({ hovering }) => !hovering && api({}),
          onWheel: ({ event, delta: [, y] }) => {
            event.preventDefault()
            const scale = state.scale + (y * -0.003)
            if (scale > .5) {
            api({scaleP : scale, scaleC: (scale*0.3)})
            api({radius: state.defaultRadius * scale})
            setState(state => ({
                ...state,
                scale: scale,
                radius: state.defaultRadius * scale 
            }));
            }
          },
        },
        { domTarget, eventOptions: { passive: false } }
    )

    if (state.cards.length < 1 && state.homePos < 1) {
        console.log('Not up to date')
        return (         
        
            <div className={styles.container}>
                <animated.div
                ref={domTarget} 
                >
                </animated.div>
                <animated.div>
                    {imgs.map((img, i) => ( <div key={1} style={{ backgroundImage: `url(${img})` }} /> ))}
                </animated.div>
            </div>
        )

    } else {
        return props.map(({x, y, scaleP, scaleC, zoom, radius}, i) => (
            <div>
                {(() => {
                    if (i === 0) {
                        return(
                            <animated.div 
                            {...bind()}
                            ref={domTarget} 
                            className={styles.card}
                            style={{
                                zindex: 400,
                                x,
                                y,
                                left: state.homePos[i].x,
                                top: state.homePos[i].y,
                                scale: scaleP, //to([scaleP, zoom], function (s, z) { return s + z; }),
                                position: 'absolute',
                                
                            }}>
                                <animated.div>
                                    <div key={i} style={{ backgroundImage: `url(${imgs[i]})` }} />
                                </animated.div>
                            </animated.div>
                        )                  
                    } else {
                        return(
                            <animated.div
                            className={styles.card}
                            style={{
                                zindex: 30 - i,
                                x,
                                y,
                                left: state.homePos[i].x,
                                top: state.homePos[i].y,
                                scale: scaleC, //  to([scaleC, zoom], function (s, z) { return s + z; }),
                                position: 'absolute',
                                
                            }}>
                                <animated.div>
                                    <div key={i} style={{ backgroundImage: `url(${imgs[i]})` }} />
                                </animated.div>

                            </animated.div>
                        )
                    }
                })()}
            </div>
        ))
    } 
}
export default Pages4;
