import React, {} from "react";
import useWindowDimensions from './windowDimensions';
import Drop from './Drop';

const SetupWidths = (numberOfPageGroups) => {
    const { width } = useWindowDimensions()
    const widths = []
    for (let i = 0; i < numberOfPageGroups * 4 + 1; i++) {
        //if (i < numberOfPageGroups * 3) {
            widths.push(Math.round(Math.random() * ((width - (width/10)-100) - width/10) + width/10))
        //} else {
           //widths.push(widths[i - numberOfPageGroups * 3])
        //}
    }  
    return widths
}
    
const SetupHeights = (numberOfPageGroups) => {
    const { height } = useWindowDimensions()
    const gap = height/numberOfPageGroups
    const heights = []
    for (let i = 0; i < numberOfPageGroups * 4 + 1; i++) {
        //if (i < numberOfPageGroups * 3) {
            heights.push(i * Math.round(Math.random() * ((gap + 10) - gap - 10) + gap - 10)- height *4 + 300)
        //} else {
        //    heights.push(heights[i-numberOfPageGroups * 3] + height*3)
        //}
    }
    return heights
}


const DroppingDiv = (props) => {

    const DropClickedFunction = (index) => {
        console.log("Dropping div drop click",index)
        props.passingUpClickedFunction(index)
    }

    const numberOfPageGroups = 10
    const widths = SetupWidths(numberOfPageGroups)
    const heights = SetupHeights(numberOfPageGroups)

    return heights.map((a,i) => (
        <Drop 
            key={"drop_" +i}
            page={i}
            passingUpClickedFunction={DropClickedFunction}
            childWidth={widths[i]}
            childHeight={heights[i]}
            style={{
                transform: `translate(${widths[i]}px, ${heights[i]}px)`,
                position: 'absolute',
            }}
        />
    ))
}

export default DroppingDiv;

