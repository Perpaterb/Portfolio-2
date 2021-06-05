import React, { useState } from "react";
import PageParent from './PageParent';
import useWindowDimensions from './windowDimensions';
import closePNG from './img/close-200.png'

function arrayRemove(arr, value) { 

    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

const PageHandler = (props) => {
    const [state, setState] = useState({
        pages: [],
        newPage: -1,
        canClose: true,
    });

    if (props.pageToOpen !== state.newPage && state.pages.indexOf(props.pageToOpen) === -1) {
        const array = state.pages
        array.push(props.pageToOpen)
        
        setState(state => ({
        ...state,
            pages: array,
            newPage: props.pageToOpen
        }))
        console.log("pages",array)
    }

    const { width, height} = useWindowDimensions()

    const pleaseCloseAPage = (page) => {
        setState(state => ({
        ...state,
            pages: [],
        }))
    }

    return state.pages.map ((page,index) => (
        <div>
            <div
                key={"over_page",page}
                style={{
                    position:'absolute', 
                    transform: `translate(${width/2 -100}px , ${height *2}px)`,
                    }}>
                <PageParent
                pageToOpen={state.pages[index]}
                />
            </div>
            <div>
                {(() => {
                    console.log(index)
                    if (index === 0) {
                        return (
                            <div>
                                <img style={{ height:30,}} src={closePNG} onClickCapture = {() => pleaseCloseAPage(index)} />
                            </div>
                        )
                    }
                })()}
            </div>
        </div>
    )); 

}

export default PageHandler;