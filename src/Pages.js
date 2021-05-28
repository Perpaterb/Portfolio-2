import React from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring'
import ReactDOM from 'react-dom'

const Child = styled.div`
width: 50px;
height: 50px;
background: green;`

function Pages({positionX, positionY, parentScale}) {
  const domTarget = React.useRef(null)

  const trans = (x, y) => `translate3d(${x}px,${y}px,0) scale(${parentScale})`
  const [trail, set] = useTrail(4, () => ({ xy: [0, 0], config: (i) => ({ tension: (Math.floor(Math.random() * (1000 - 400) + 400)), friction: (Math.floor(Math.random() * (130 - 60) + 60)) }) }))

  set({ xy: [positionX, positionY] })

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
      style={{ transform: props.xy.to(trans), zIndex: 50}}
    >
      <Child/>
    </animated.div>
  ))
}

ReactDOM.render(<Pages />, document.getElementById('root'))



export default Pages;

