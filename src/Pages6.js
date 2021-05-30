import React, {useState}  from 'react';
import {useGesture} from "react-use-gesture";
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring'
import ReactDOM from 'react-dom'

const Child = styled.div`
width: 50px;
height: 50px;
background: purple;`


function Pages2() {
  const [state, setState] = useState({
    scale: 1,
  });

  const domTarget = React.useRef(null)

  const trans = (x, y) => `translate3d(${x}px,${y}px,0) scale(${state.scale})`
  const [trail, set] = useTrail(5, () => ({ xy: [0, 0], config: (i) => ({ tension: (Math.floor(Math.random() * (1200 - 600) + 400)), friction: (Math.floor(Math.random() * (130 - 40) + 40)) }) }))

  const [drag, setDrag] = React.useState(false)

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
    { domTarget, eventOptions: { passive: false } }
  )

  return trail.map((props, i) => (
    <animated.div
      key={i}
      ref={i === 0 ? domTarget : null}
      className={`${drag ? 'dragging' : ''}`}
      cursor={`${drag ? '-webkit-grabbing' : '-webkit-grab'}`}
      style={{ transform: props.xy.to(trans), zIndex: 50-i, position: 'absolute',}}
    >
      <Child/>
    </animated.div>
  ))}

ReactDOM.render(<Pages2 />, document.getElementById('root'))

export default Pages2;
