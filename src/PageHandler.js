import React, {} from 'react'
import PageParent from './PageParent';
import useWindowDimensions from './windowDimensions';

const PageHandler = (props) => {

    const { width, height} = useWindowDimensions()

    console.log("PageHandler getting page ", props.pageToOpen)

    return (
        <div
            style={{
                position:'absolute', 
                transform: `translate(${width/2 -100}px , ${height *2}px)`,
                }}>
            <PageParent
            pageToOpen={props.pageToOpen}
            />
        </div>
    ); 

}

export default PageHandler;