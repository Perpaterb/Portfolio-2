import React, { Component} from 'react';
import Pages9 from './Pages9';
import allPages from './content/allPages'

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
    return locations.reverse()
}


function positionsArrayFunction(numberOfCards) {
    const array = []
    for (let i = 0; i < numberOfCards; i++) {
        array.push (i)
    }
    return array.reverse()
}


class PageParent extends Component {
    radius = 220
    numberOfCards = allPages[this.props.pageToOpen-1].length
    locations = setupLocations(this.numberOfCards, this.radius)
    positionsDefault = positionsArrayFunction(this.numberOfCards)
    
    locationUpdaterFunction = (newRadiusFromChild) => {
        this.radius = newRadiusFromChild *3
        this.locations = setupLocations(this.numberOfCards, this.radius)
        return this.locations
    }

    render() {
        return (
            <Pages9
            page={this.props.pageToOpen}
            locations={this.locations}        
            radius={this.radius} 
            locationUpdater={this.locationUpdaterFunction} 
            positionsDefault={this.positionsDefault}
            />
        );
    }
}

export default PageParent;