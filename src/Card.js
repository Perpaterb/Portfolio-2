import React from 'react';
import Pages from './Pages';
import Pages2 from './Pages2';

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
                    y: Math.cos(radian_interval) * radius *-1 *1.4, 
                    x: radius,
                }
            } else {
                return {        
                    y: Math.cos(radian_interval) * radius *-1 *1.4,
                    x: radius *-1,
                }
            }
        } else {
            return {        
                y: Math.cos(radian_interval) * radius *-1,
                x: Math.sin(radian_interval) * radius,
            }
        }
    }


}

function Card(props) {
    let coord = get_coords(props.radian_interval, props.radius);
    return (
        <div style={{ ...styles.card, left: `${props.center.x - coord.x}px`, top: `${props.center.y - coord.y}px` }}>
    
        </div>
    )
}

const styles = {
    card: {
        margin: '0',
        padding: '0',
        width: '50px',
        height: '50px',
        position: 'absolute',
        transform: 'translate(-50%, -150%)',
        backgroundColor: 'green',
    }
}

export default Card;