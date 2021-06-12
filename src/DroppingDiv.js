import React, {} from "react";
import useWindowDimensions from './windowDimensions';
import Drop from './Drop';
import properties from './props';

const SetupWidths = (numberOfPageGroups) => {
    const { width } = useWindowDimensions()
    const widths = []
    for (let i = 0; i < numberOfPageGroups * 2; i++) {
            widths.push(Math.round(Math.random() * ((width - (width/10)-100) - width/10) + width/10))
    }  
    return widths
}
    
const SetupHeights = (numberOfPageGroups) => {
    const { height } = useWindowDimensions()
    const gap = height/numberOfPageGroups
    const heights = []
    for (let i = 0; i < numberOfPageGroups * 2; i++) {
            heights.push(i * Math.round(Math.random() * ((gap + 10) - gap - 10) + gap - 10)- height *2 + properties.startpos)
    }

    return heights
}

const makePageNumebrs = (numberOfPageGroups) => {
    const pageNumbers = []
    let rounds = 0 
    for (let i = 1; i < numberOfPageGroups * 2 + 1; i++) {
        if (i > (numberOfPageGroups * (rounds + 1))) {
            rounds = rounds + 1
        }
        pageNumbers.push(i - (numberOfPageGroups * rounds))
    }
    return pageNumbers
}



const DroppingDiv = (props) => {

    const DropClickedFunction = (index) => {
        props.passingUpClickedFunction(index)
    }

    const numberOfPageGroups = properties.numberOfPages
    const numberOfDrops = properties.dropDensity

    const widths = SetupWidths(numberOfPageGroups)
    const heights = SetupHeights(numberOfPageGroups)
    const pageNumbers = makePageNumebrs(numberOfPageGroups)

    return heights.map((a,i) => (
        <Drop 
            key={"drop_"+i}
            pageNumbers={pageNumbers[i]}
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

