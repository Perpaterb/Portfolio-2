import React, { useEffect, useState } from "react";
import useWindowDimensions from './windowDimensions';
import {Drops, DropSpeed} from "./droppings";
import { useSpring ,useSprings, animated} from 'react-spring'
import Drop from './Drop';

const SetupWidths = (numberOfPageGroups) => {
    const { height, width } = useWindowDimensions()
    const widths = []
    for (let i = 0; i < numberOfPageGroups * 4; i++) {
        if (i < numberOfPageGroups * 3) {
            widths.push(Math.round(Math.random() * ((width - (width/10)-100) - width/10) + width/10))
        } else {
            widths.push(widths[i - numberOfPageGroups * 3])
        }
    }  
    return widths
}
    
const SetupHeights = (numberOfPageGroups) => {
    const { height, width } = useWindowDimensions()
    const gap = height/numberOfPageGroups
    const heights = []
    for (let i = 0; i < numberOfPageGroups * 4; i++) {
        if (i < numberOfPageGroups * 3) {
            heights.push(i * Math.round(Math.random() * ((gap + 10) - gap - 10) + gap - 10)-height * 3)
        } else {
            heights.push(heights[i-numberOfPageGroups * 3] + height*3)
        }
    }
    return heights
}

const DroppingDiv = () => {
    const [state, setState] = useState({
        numberOfPageGroups: 10,
        widths: SetupWidths(10),
        heights: SetupHeights(10),
    });

    const { height, width } = useWindowDimensions()

    // const [props, api] = useSprings(state.heights.length, i => ({
    //     from: state.heights[i],
    //     to: 5,
    //     onRest: () => setState([]),
    // }))

    // useEffect(() => {
    //     console.log("start")
    //     api.start(i => ({
    //         to: 1600,
    //         config: { duration: 20000 }
    //     }))
    // });

    // const [props, api] = useSpring(() => ({
    //     from: state.heights[0],
    //     to: 5,
    //     config: { duration: 20000 }
    //     //onRest: () => setState([]),
    // }))

    // useEffect(() => {
    //     console.log("start")
    //     api.start({
    //         to: 1600,
    //         config: { duration: 20000 }
    //     })
    // });

    // const { prop } = useSpring({
    //     from: { prop: 0 },
    //     onRest: () => setState(state => ({
    //         numberOfPageGroups: 10,
    //         widths: state.widths,
    //         heights: state.heights,
    //     }))
    // });

    // useEffect(() => {
    //     console.log("render")
    //     prop.start({
    //     from: 0,
    //     to: height,
    //     config: { duration: 12000 }
    //     });
    // });

    // const { translate } = useSprings(state.heights.length, i => ({
    //     from: { translate: state.heights[i] },
    //     onRest: () => setState([]),
    // }))

    // useEffect(() => {
    //     console.log("start")
    //     translate.start(i => ({         
    //         to: 1600,
    //         config: { duration: 20000 }
    //     }))
    // });

    const handleOnClickEvent = (page) => {
        console.log(page)
    }

    return state.heights.map((a,i) => (
            <Drop 
            key={i}
            page={i}
            childWidth={state.widths[i]}
            childHeight={state.heights[i]}
            style={{
                transform: `translate(${state.widths[i]}px, ${state.heights[i]}px)`,
                position: 'absolute',
            }}
            />
    ))
}

export default DroppingDiv;




// const other = (dropNumber) => {

//     const words = dropNumber.dropNumber

//     const { height, width } = useWindowDimensions();
//     const [customDuration] = useState(20000);

//     const { translate } = useSpring({
//         from: { translate: -100 }
//     });

//     useEffect(() => {
//         translate.start({
//         to: height,
//         config: { duration: customDuration }
//         });       
//     });

//     const x = Math.round(Math.random() * ((width - (width/10)-100) - width/10) + width/10)

//     setPosition(prevPosition => {
//       const newPosition = prevPosition - SCROLL_SPEED;

//       return newPosition < -200 ? CANVAS_WIDTH : newPosition;
//     })



//     return (
//         <animated.div
//             style={{
//             position: 'absolute',
//             transform: translate.to((y) => {
//                 return `translateY(${y}px) translateX(${x}px)`;
//                 })
//             }}
//         >
//             <Child>
//             <h3>{words}</h3>
//             </Child>
//         </animated.div>
//     );
// }

// export default DroppingDiv;


