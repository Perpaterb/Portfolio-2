import React, { Component} from 'react';
import DroppingDiv from './DroppingDiv';
import useWindowDimensions from './windowDimensions';

function setupWidths(width, numberOfPageGroups) {
    const widths = []
    for (let i = 0; i < numberOfPageGroups; i++) {
        widths.push(Math.round(Math.random() * ((width - (width/10)-100) - width/10) + width/10))
    }
        console.log("widths",widths)   
    return widths
}
    
function setupHeights(gap, numberOfPageGroups) {
    const heights = []
    for (let i = 0; i < numberOfPageGroups; i++) {
        heights.push(i * Math.round(Math.random() * ((gap - 50) - gap + 50) + gap + 50))
    }
        console.log("heights",heights)
    return heights
}

function setupWindowsD() {
    const { height, width } = useWindowDimensions();
    return [height , width]
}

class DroppingParent extends Component {

    width = setupWindowsD()

    numberOfPageGroups = 10 
    gap = height/numberOfPageGroups

    widths = setupWidths(this.width, this.numberOfPageGroups)

    heights = setupHeights(this.gap, this.numberOfPageGroups)

    render() {
        return (
            <DroppingDiv 
            widths={this.widths}        
            heights={this.heights} 
            />
        );
    }
}

export default DroppingParent;