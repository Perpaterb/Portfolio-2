import React, {useRef, useMemo, useState} from "react";
import {useGesture} from "react-use-gesture";

const POSITION = {x: 0,y: 0};

const Gesture = ({children}) => {
    const [state, setState] = useState({
        isDragging: false,
        translation: POSITION,
        scale: 1,
    });

    const child = useRef();

    const onScroll = (e) => {
        const newScale = state.scale + (e.deltaY * -0.003);        
        if (newScale > .5) {
            setState(state => ({
                ...state,
                scale: newScale,
            }));
        }
    }

    useGesture({
        onDrag: ({ offset: [clientX, clientY]}) => {
            const translation = {
                x: clientX, 
                y: clientY,
            };
            setState(state => ({
                ...state,
                isDragging: true,
                translation
            })); 
        },
        onDragEnd: () => {
            setState(state => ({
                ...state,
                isDragging: false,
            }));   
        },

        onPinch: ({ offset: [d]}) => {
            setState(state => ({
                ...state,
                scale: 1 + d / 50
            })); 
        },

    },
    {
        domTarget: child,
        eventOptions: { passive: false},
    });


    const styles = useMemo(() => ({
        cursor: state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
        transform: `translate(${state.translation.x}px, ${state.translation.y}px) scale(${state.scale})`,
        zIndex: state.isDragging ? 2 : 1,
        position: state.isDragging ? 'absolute' : 'relative',

    }), [state.isDragging, state.translation, state.scale]);


    return(
      <div ref={child} style={styles} onWheelCapture={onScroll}>  
        {children}
      </div>
    );
};

export default Gesture;