import React, { useState } from "react";
import DroppingDiv from './DroppingDiv';
import PageHandler from './PageHandler';

const DivHandler = () => {
    const [state, setState] = useState({
        pageToOpen: -1,
    });

    const DropClickedFunction = (index) => {
        setState(state => ({
            ...state,
            pageToOpen: index,
        }));
    }

    const PagedOpened = () => {
        setState(state => ({
            ...state,
            pageToOpen: -1,
        }));
    }

    return (
        <div>
            <DroppingDiv 
                key={"DroppingDiv"}
                passingUpClickedFunction={DropClickedFunction}
                />
            <PageHandler
                key={"PageHandler"}
                pageToOpen={state.pageToOpen}
                pagedOpened={PagedOpened}
                />
        </div>
    )
}

export default DivHandler