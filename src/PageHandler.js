import React, { useState } from "react";
import PageParent from './PageParent';
import useWindowDimensions from './windowDimensions';
import closePNG from './img/close-200.png'

const PageHandler = (props) => {
    const [state, setState] = useState({
        pages: [],
        canClose: true,
    });

    if (props.pageToOpen !== -1) {

        if (state.pages.indexOf(props.pageToOpen) === -1) {
            const array = state.pages
            array.push(props.pageToOpen)
            
            setState(state => ({
            ...state,
                pages: array,
            }))
        }
        props.pagedOpened()
    }

    const { width, height} = useWindowDimensions()

    const pleaseCloseAPage = () => {
        setState(state => ({
        ...state,
            pages: [],
        }))
    }

    return state.pages.map ((page,index) => (
        <div>
            <div
                key={"pageParent_div_div_" +page}
                style={{
                    position:'absolute', 
                    transform: `translate(${width/2 -500}px , ${height *2}px)`,
                    }}>
                <PageParent
                    key={"pageParent_" +page}
                    pageToOpen={state.pages[index]}
                />
            </div>
            <div>
                {(() => {
                    if (index === 0) {
                        return (
                            <img key={"close_" +page} style={{ height:30,}} src={closePNG} alt={"close_" +page } onClickCapture = {() => pleaseCloseAPage()} />
                        )
                    }
                })()}
            </div>
        </div>
    )); 

}

export default PageHandler;