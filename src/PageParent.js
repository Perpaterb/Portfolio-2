import React, { Component} from 'react';
import Pages8 from './Pages8';

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

function setupLocations(numberOfCard, radius) {
    const locations = []
    for (let i = 0; i < numberOfCard; i++) {
        locations.push (get_coords((Math.PI / (numberOfCard/2)) * i, radius))
    }

    return locations
}

function setupPageOrder(numberOfCard) {
    const pageOrder = []
    for (let i = 0; i < numberOfCard; i++) {
        if (i === 0 ) {
            pageOrder.push (1)
        } else {
            pageOrder.push (0)
        }
    }
    return pageOrder
}

function positionsArrayFunction(numberOfCards) {
    const array = []
    for (let i = 0; i < numberOfCards; i++) {
        array.push (i)
    }
    return array
}


class PageParent extends Component {
    radius = 220
    numberOfCards = 10
    locations = setupLocations(this.numberOfCards, this.radius)
    pageOrder = setupPageOrder(this.numberOfCards)
    positionsDefault = positionsArrayFunction(this.numberOfCards)
    
    locationUpdaterFunction = (newRadiusFromChild) => {
        this.radius = newRadiusFromChild
        this.locations = setupLocations(this.numberOfCards, this.radius)
        return this.locations
    }

    pageOrderUpdaterFunction = (page) => {
        const newPageOrder = []
        for (let i = 0; i < this.numberOfCards; i++) {
            if (i === page ) {
                newPageOrder.push (1)
            } else {
                newPageOrder.push (0)
            }
        }
        this.pageOrder = newPageOrder
        return this.pageOrder
    }

    render() {
        return (
            <Pages8 
            locations={this.locations} 
            pageOrder={this.pageOrder} 
            radius={this.radius} 
            locationUpdater={this.locationUpdaterFunction} 
            pageOrderUpdater={this.pageOrderUpdaterFunction}
            positionsDefault={this.positionsDefault}
            />
        );
    }
}

export default PageParent;