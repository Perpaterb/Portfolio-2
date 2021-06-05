import React, { useState } from "react";
import DroppingDiv from './DroppingDiv';
import PageHandler from './PageHandler';

const DivHandler = () => {
    const [state, setState] = useState({
        pageToOpen: -1,
    });

    const DropClickedFunction = (index) => {
        console.log("DivHandler",index)
        setState(state => ({
            pageToOpen: index,
        }));
    }

    return (
        <div>
            <DroppingDiv
                passingUpClickedFunction={DropClickedFunction}
                />

            <PageHandler
                pageToOpen={state.pageToOpen}
                />
        </div>
    )
}

export default DivHandler